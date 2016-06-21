import React from 'react';
import {UserProfile,UserRepos,Notes} from '../../components';
import Wilddog from 'wilddog';
import WildReactMixin from 'wildreact';
import { mixin } from 'core-decorators';
import getGithubInfo from '../../helper';
@mixin(WildReactMixin)
export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes:[],
            bio:{
                name:''
            },
            repos:[]
        }

    }
    handleClick(msg){
      this.setState({notes:this.state.notes.concat(msg)});
    }
    componentDidMount(){
        var ref = new Wilddog("https://taker.wilddogio.com/notes");
        this.bindAsArray(ref, "notes");
        getGithubInfo( this.props.params.username )
            .then( ( data ) => {
                // 测试一下传入用户名后返回的数据
                console.log( data );
                // 更新state数据
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            });
    }

    componentWillUnMount(){
        this.unbind('notes');
    }

    render(){
        return (
            <div className="row">
                <div className="col-xs-4">
                    UserProfile路由参数是 {this.props.params.username}
                    <UserProfile
                     username={this.props.params.username}
                     bio={this.state.bio}
                    ></UserProfile>
                </div>
                <div className="col-xs-4">
                    <UserRepos repos={this.state.repos}></UserRepos>
                </div>
                <div className="col-xs-4">
                    <Notes handleClick={this.handleClick.bind(this)} username={this.props.params.username} notes={this.state.notes}></Notes>
                </div>
            </div>
        )
    }
}