import React, { useState, useEffect } from 'react'
import { Jumbotron, Button, CardDeck } from 'react-bootstrap';
import Logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cards from './Cards';

export default function Home() {
    useEffect(() => {
        fetchVideo();
        updateColor();
    }, []);
    
    const [video, setData] = useState([]);

    const fetchVideo = async () => {
        const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id=UCvklmpoAZntoOpr7EyTierA')}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const videoData = data.items[0];
                const id = videoData.link.substr(videoData.link.indexOf("=") + 1);
                const videoURL = `https://youtube.com/embed/${id}?controls=1&showinfo=0&rel=0`;
                setData(videoURL);
            })
            .catch(e => {
                setData("https://youtube.com/embed/-4FBypzghHM?controls=1&showinfo=0&rel=0");
            });
    }

    const updateColor = () => {
        setInterval(() => {
            const i = document.querySelectorAll("img[id='mainlogo']");
            const color = Math.floor(Math.random() * 0xFFFFFF + 1);
            i.forEach(q => q.style.boxShadow = `0px 0px 30px #${color.toString(16)}`);
        }, 5000);
    };

    return (
        <>
            <Jumbotron className="bg-transparent">
                <div className="center">
                    <img
                        src={Logo}
                        alt="logo"
                        height="200"
                        width="200"
                        className="img-fluid pointer circle rotate glowLogo"
                        draggable="false"
                        id="mainlogo"
                    />
                </div>
                <h1 className="text-center text-white mt-5 glowText title">Snowflake Studio ❄</h1>
                <p className="mt-2 text-center desc">Community of small developers.</p>
                <div className="mt-5 mb-5 center">
                    <>
                        <Button 
                            size="lg" 
                            className="rounded bg-transparent homebtn"
                            href="https://discord.gg/2SUybzb"
                            target="_blank"
                        ><FontAwesomeIcon icon={["fab", "discord"]}/> Discord</Button>
                        <Button 
                            size="lg" 
                            className="rounded bg-transparent homebtn"
                            href="https://github.com/Snowflake107"
                            target="_blank"
                        ><FontAwesomeIcon icon={["fab", "github"]} /> GitHub</Button>
                    </>
                </div>
            </Jumbotron>

            <Jumbotron className="bg-transparent sln">
                <h1 className="text-center text-white mt-5 mb-5 title">Projects</h1>
                <Jumbotron fluid="false" className="bg-transparent">
                    <CardDeck>
                        <Cards 
                            title="Canvacord" 
                            description="A powerful, simple & easy to use image manipulation module." 
                            button="View on NPMJS"
                            url="https://npmjs.com/package/canvacord"
                        />
                        <Cards
                            title="Discord YTDL Core"
                            description="Simple YTDL wrapper with custom ffmpeg args support."
                            button="View on NPMJS"
                            url="https://npmjs.com/package/discord-ytdl-core"
                        />
                        <Cards
                            title="QuickMongo"
                            description="Quick mongodb wrapper for beginners."
                            button="View on NPMJS"
                            url="https://npmjs.com/package/quickmongo"
                        />
                        <Cards
                            title="Soundcloud Scraper"
                            description="Fetch data from soundcloud for free."
                            button="View on NPMJS"
                            url="https://npmjs.com/package/soundcloud-scraper"
                        />
                    </CardDeck>
                </Jumbotron>
            </Jumbotron>

            <Jumbotron className="bg-transparent">
                <h1 className="text-center mb-5" style={{ fontWeight: "bold" }}>Join Our Discord Server</h1>
                <div class="container">
                    <div className="center">
                        <iframe
                            src="https://discordapp.com/widget?id=480939855476686849&theme=dark"
                            width="2200"
                            height="1000"
                            allowtransparency="true"
                            frameborder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                            title="Discord"
                        ></iframe>
                    </div>
                    <hr style={{ backgroundColor: "#FFFFFF" }} className="mt-5" />
                    <Jumbotron className="bg-transparent mt-5">
                        <h1 className="text-center mb-5" style={{ fontWeight: "bold" }}>Latest Video</h1>
                        <div className="center embed-responsive embed-responsive-16by9">
                            <iframe
                                title="youtube"
                                id="video"
                                allowfullscreen
                                src={video}
                                className="video"
                            >
                            </iframe>
                        </div>
                    </Jumbotron>
                </div>
            </Jumbotron>
        </>
    )
}
