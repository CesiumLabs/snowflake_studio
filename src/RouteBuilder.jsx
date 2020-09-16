import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './NavBar';
import ErrorPage from './ErrorPage';
import RedirectURI from './RedirectURI';
import Support from './Support';

const AUTH_URI = `https://discordapp.com/api/oauth2/authorize?client_id=648875676186968065&scope=identify&redirect_uri=${encodeURIComponent("http://localhost:3500/api/auth/callback")}`;

export default function RouteBuilder() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={() => <RedirectURI url={AUTH_URI}/>} />
                <Route path="/support" component={Support} />
                <Route path="/" component={ErrorPage} />
            </Switch>
        </>
    )
}
