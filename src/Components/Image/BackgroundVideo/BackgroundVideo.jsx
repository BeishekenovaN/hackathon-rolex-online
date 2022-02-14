import React from 'react';
import '../../Header/MyNavbar.css'
import Video from '../../Image/homepage_cosmograph_daytona_m116503-0004_0001.mp4'

const BackgroundVideo = () => {
    return (
             <div className='bgNavbar'>
              <video className='bgVideo' autoPlay muted loop src={Video} type='video/mp4'></video>
            </div>
    );
};

export default BackgroundVideo;