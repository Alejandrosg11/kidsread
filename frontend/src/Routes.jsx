import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './components/main/main'
import Register from './components/register/register';
import Library from './components/library/library';
import Profile from './components/profile/profile';
import { isAuth } from './Service'

export const Routes = () => {
    
    return(
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/Register' component={Register}/>
            <Route path='/Library' component={Library}/>
            <Route path='/profile' component={Profile}/>
        </Switch>
    )
};