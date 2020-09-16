import React from 'react'

export default function RedirectURI({ url }) {
    return (
        <>
            <h1 className="text-center mt-5">Redirecting...</h1>
            <p className="mt-2 text-center"><a href={url} style={{ textDecoration: "none", color: "#7289DA" }}>Click here</a> if automatic redirect failed.</p>
            { window.location.href = url };
        </>
    )
}
