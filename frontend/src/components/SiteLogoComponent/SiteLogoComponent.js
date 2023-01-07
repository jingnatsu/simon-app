import React from 'react';
import './index.scss'

function SiteLogoComponent() {
    return (
        <h1 className="site-title">
            <a href="index.html" rel="home">
              <img src={process.env.PUBLIC_URL + '/images/site/logo.png'} />
            </a>
        </h1>
    )
}

export default SiteLogoComponent;