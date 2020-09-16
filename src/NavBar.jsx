import React from 'react';
import { 
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
        <Navbar bg="transparent" className="alpha-dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home" className="ml-5">
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top circle"
                        alt="logo"
                    />
                </Navbar.Brand>
                Snowflake
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-7">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/support">Support</Link></Nav.Link>
                    <Nav.Link href="https://github.com/Snowflake107" target="_blank">GitHub</Nav.Link>
                    <Nav.Link href="https://discord.gg/2SUybzb" target="_blank">Discord</Nav.Link>
                    <Nav.Link href="https://www.youtube.com/channel/UCvklmpoAZntoOpr7EyTierA" target="_blank">YouTube</Nav.Link>
                    <Nav.Link href="https://bluefoxhost.com" target="_blank">BlueFox Host</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown" className="slide">
                        <NavDropdown.Item href="https://npmjs.com/package/canvacord" target="_blank">Canvacord</NavDropdown.Item>
                        <NavDropdown.Item href="https://npmjs.com/package/discord-ytdl-core" target="_blank">Discord YTDL Core</NavDropdown.Item>
                        <NavDropdown.Item href="https://npmjs.com/package/quickmongo" target="_blank">QuickMongo</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
