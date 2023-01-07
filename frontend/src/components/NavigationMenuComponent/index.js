import React from 'react';
import './index.scss'
import SearchComponent from '../SearchComponent'
import SocialNetworkComponent from '../SocialNetworkComponent';

function NavigationMenuComponent() {
    
    return (
        <nav id="NavigationMenuComponent" className="site-navigation primary-navigation" role="navigation">                    
                    <a className="menu-toggle"><span className="lines"></span></a>
                    <div className="nav-menu">
                        <ul>
                            <li><a href="index.html">Home</a>
                                <ul>
                                    <li><a href="home-alt.html">Home Alternate</a></li>
                                    <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                	<li><a href="blog-simple.html">Blog Simple</a></li>
                                    <li><a href="blog-regular-with-sidebar.html">Blog Regular Sidebar</a></li>
                                    <li><a href="blog-masonry-with-sidebar.html">Blog Masonry Sidebar</a></li>
                                </ul>
                            </li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="books.html">Books</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="about.html">About Me</a>
                                <ul>
                                    <li><a href="resume.html">Resume</a></li>
                                    <li><a href="typo.html">Typography</a></li>
                                    <li><a href="shortcodes.html">Shortcodes</a></li>
                                    <li><a href="archives.html">Archives</a></li>
                                    <li><a href="404.html">404</a></li>
                                    <li><a href="grid.html">Grid</a></li>
                                    <li><a href="form-elements.html">Forms</a>
                                        <ul>
                                            <li><a href="grid.html">Grid</a></li>
                                    		<li><a href="form-elements.html">Forms</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    
                   <SearchComponent/>
                                        
                   
                    <SocialNetworkComponent/>
        </nav>
    )
}

export default NavigationMenuComponent;