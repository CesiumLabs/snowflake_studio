import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './NavBar';
import ErrorPage from './ErrorPage';
import Support from './Support';

export default function RouteBuilder() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/chat" component={Support} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    )
}
