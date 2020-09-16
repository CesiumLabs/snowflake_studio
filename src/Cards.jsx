import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import Logo from './logo.png';

export default function Cards({ title, description, image, url, button }) {

    const CardImgCss = {
        zIndex: '1',
        width: '10em',
        height: '10em',
        objectFit: 'cover',
        borderRadius: '50%',
        marginTop: '-4em',
        justifyContent: "center",
        border: "0.4em solid #FFFFFF",
        transition: "11s"
    };

    return (
        <Card bg="dark" style={{ width: '21rem' }} >
            <div className="cardImages">
                <Image src={Logo} className="card-bg" draggable="false" />
                <Image src={image || Logo} id="card-image" draggable="false" style={CardImgCss} />
            </div>
            <Card.Body>
                <Card.Title className="cardTitle">{title || "Placeholder"}</Card.Title>
                <Card.Text>{description || "Placeholder Card"}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="outline-primary cardFooterButton btn-lg" style={{ width: "100%" }} href={url} target="_blank">{button||"Visit"}</Button>
            </Card.Footer>
        </Card>
    )
}
