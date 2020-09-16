import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ErrorPage({ message, code }) {
    return (
        <Jumbotron className="bg-transparent">
            <h1 className="errorTitle text-center text-white mt-5">{code || "404"}</h1>
            <p className="errorMessage text-center text-white">{message || "Page Not Found"}</p>
            <div className="center">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button variant="info" className="rounded bg-transparent homebtn btn-block" size="lg">Home</Button>
                </Link>
            </div>
        </Jumbotron>
    )
}
