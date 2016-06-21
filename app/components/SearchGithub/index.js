import React from 'react';
import { browserHistory } from 'react-router';
export default class SearchGithub extends React.Component{
    static PropTypes:{
        history:PropTypes.object.isRequired
    }

    handleSubmit(event){
      event.preventDefault();
      var username = this.refs.username.value;
      console.log('username',username);
      this.refs.username.value = '';
      var path = `/profile/${username}`;
      browserHistory.push(path);
    }

    render(){
        return (
            <div className="row">
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="col-xs-6">
                        <input type="text" className="form-control" ref='username'/>
                    </div>
                    <div className="col-xs-6">
                        <button className="btn btn-primary">搜索</button>
                    </div>
                </form>
            </div>
        )
    }
}