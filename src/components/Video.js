import React from 'react'
import VideoMp4 from '../video/concert.mp4'
import VideoOgg from '../video/concert.ogg'
import VideoWebm from '../video/concert.webm'

export const Video = () => {
    return (
        
            <div className="video">
                <div className="overlay">
                    <div className="container content-video">
                        <h2>Rock & EDM Festival</h2>
                        <p>July 2023, Montréal, Canada.</p>
                    </div>
                </div>

                <video autoPlay muted loop >
                    <source src={VideoMp4} type="video/mp4" />
                    <source src={VideoOgg} type="video/ogg" />
                    <source src={VideoWebm} type="video/webm" />
                </video>
            </div>
       
    )

}
