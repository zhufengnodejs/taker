import React from 'react';
import { SearchGithub } from '../../components';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default" role="navigation">
            <div className="col-xs-7 col-xs-offset-2" style={{margin:15}}>
                <SearchGithub/>
            </div>
        </nav>
        <div className="container">
            {this.props.children}
        </div>
      </div>
    );
  }
}
