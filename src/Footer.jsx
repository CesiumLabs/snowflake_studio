import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container>
            <div className="footer copyright-box" id="footer">
                <h3 className="text-center mb-5 mt-5" style={{ fontWeight: "bold" }}><span role="img" aria-label="copyright">©️</span> Snowflake Studio ❄ - 2020</h3>
            </div>
        </Container>
    )
}
