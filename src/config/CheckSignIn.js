import React from "react";
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Axios from "axios";
import SignIn from "../sign-in/SignIn";

class CheckSignIn extends React.Component {

    render() {
        let isUnLoginIn = true;
        Axios.get("http://localhost:8080/first/LogInStatus").then((res) => {
            if (res.data['msg'] === 'success') {
                isUnLoginIn = false;
            }
        });
        return (

            // <Router history={createBrowserHistory()}>
            //     <Switch>
            //         <Route path="/" component={CheckSignIn}/>
            //         <Route path='/dashboard' component={Dashboard}/>
            //         {/*<Route path="/View/abc" component={MyDocument} />*/}
            //         {/*<Route path="/View/myPicture" component={MyPicture} />*/}
            //     </Switch>
            // </Router>
            <div>
                {isUnLoginIn && <SignIn/>}
            </div>
        );
    }
}

export default CheckSignIn;