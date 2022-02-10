import React from 'react'
// import {Route, Routes, Switch} from 'react-router-dom'
import {
    Route, Router, Switch
} from "react-router-dom";
import {createBrowserHistory} from "history";
import App from "../app/App";
import SignIn from "../sign-in/SignIn";
import Dashboard from "../dashboard/Dashboard";
// import MyPicture from '../components/myPicture'
// import MyDocument from '../components/myDocument.js'

export default class MyRoute extends React.Component {
    render() {
        return (
            //
            <Router history={createBrowserHistory()}>
                <Switch>
                        <Route exact path="/" component={SignIn}/>
                        <Route path='/dashboard' component={Dashboard}/>
                        {/*<Route path="/View/abc" component={MyDocument} />*/}
                        {/*<Route path="/View/myPicture" component={MyPicture} />*/}
                </Switch>
            </Router>
        )
    }
}
