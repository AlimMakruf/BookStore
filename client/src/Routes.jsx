import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import CreateEvent from './pages/CreateEvent';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import MainMenu from './pages/MainMenu';
import Register from './pages/Register';

function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/mainmenu" component={MainMenu} />
                <Route exact path="/register" component={Register}/>
                <Route exact path="/event" component={CreateEvent}/>
            </Switch>
        </React.Fragment>
    )
}

export default Routes
