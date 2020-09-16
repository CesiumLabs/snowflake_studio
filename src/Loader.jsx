import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loader() {
    return (
        <div className="loader">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}
