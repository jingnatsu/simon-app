
import React from 'react';
import '../SocialNetworkComponent/index.scss'

const SocialNetworkComponent = (props) => {
    return (
        <div className="social-container">
            <ul className="social">
                <li><a className="facebook" href="#"></a></li>
                <li><a className="twitter" href="#"></a></li>
                <li><a className="vine" href="#"></a></li>
                <li><a className="dribbble" href="#"></a></li>
                <li><a className="instagram" href="#"></a></li>
            </ul>
        </div>
    )
}

export default React.memo(SocialNetworkComponent);