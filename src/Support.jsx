import React, { useEffect } from 'react';

export default function Support() {

    useEffect(() => {
        if (document.getElementById("footer")) document.getElementById("footer").remove();
    }, []);

    const WBStyle = {
        height: "93vh",
        width: "100%",
        border: "none"
    };

    return (
        <>
            <iframe id="wb-embed" title="discord" src="https://e.widgetbot.io/channels/480939855476686849/755650364136620032" style={WBStyle}></iframe>
        </>
    )
}