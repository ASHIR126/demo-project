import React from 'react'
import video from '../Video/vidoe.mp4'
const VideoPresentation = () => {
    return (
        <> <section id="video-container">
            <div className="video-overlay"></div>
            <div className="video-content">
                <div className="inner">
                    <span>Video Presentation</span>
                    <h2>Sed et risus ac sapien congue mattis.</h2>
                    <a href="http://youtube.com" ><i className="fa fa-play"></i></a>
                </div>
            </div>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
        </section>
        </>
    )
}

export default VideoPresentation