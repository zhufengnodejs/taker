import React from 'React';
import {Route,IndexRoute} from 'react-router';
import {App,Home,About,Profile} from '../containers';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="profile/:username" component={Profile}/>
    </Route>
)
