import React from 'react';
import Icon from '@mdi/react'
import {mdiGoogle, mdiFacebook, mdiTwitter} from '@mdi/js'

import '../config/css/tray.css'

function SocialTray(props) {
    return (
        <div className="social-buttons">
            {/* Clickable Icons */}
            <div className="icon-button" onClick={()=>console.log('Google')}>
                <Icon className="m-1"
                path={mdiGoogle}
                size={2}
                color="black"
            />
            </div>

            <div className="icon-button" onClick={()=>console.log('Facebook')}>
                <Icon className="m-1"
                path={mdiFacebook}
                size={2}
                color="black"
            />
            </div>

            <div className="icon-button" onClick={()=>console.log('Twitter')}>
                <Icon className="m-1"
                path={mdiTwitter}
                size={2}
                color="black"
            />
            </div>
        </div>
    );
}

export default SocialTray;