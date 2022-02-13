import React from 'react';
import '../../Header/MyNavbar.css'
import Video from '../../Image/watchmaking-bracelets_rolex-instagram-glidelock-h264.mp4'

const BackgroundDefault = () => {

    return (
        // <div >
        <video className='bgLogin' autoPlay loop>
            <source src={Video} type='video/mp4'/>
          </video>
        // </div>
    );
};

export default BackgroundDefault;