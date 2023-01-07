import React from 'react';
import './index.scss'

function FooterComponent() {
  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
            <div className="layout-medium">
                <div className="footer-social">
                    <ul className="social">
                        <li><a className="facebook" href="#"></a></li>
                        <li><a className="twitter" href="#"></a></li>
                        <li><a className="google-plus" href="#"></a></li>
                        <li><a className="dribbble" href="#"></a></li>
                        <li><a className="instagram" href="#"></a></li>
                        <li><a className="vine" href="#"></a></li>
                    </ul>
                </div>
            	
                <div className="footer-sidebar widget-area" role="complementary">
                    <aside className="widget widget_text">
                      <h3 className="widget-title">About Me</h3>
                      <div className="textwidget">
                        <img src="images/site/about-small.jpg" alt="avatar"/> <p>Hello. I am a freelance writer. I live in a small town somewhere in the world.</p>
                      </div>
                    </aside>
               
                    <aside className="widget widget_tag_cloud">
                      <h3 className="widget-title">Tags</h3>
                      <div className="tagcloud"> <a href="#" title="1 topic" >adaptive</a> <a href="#" title="2 topics">design</a> <a href="#" title="1 topic" >html</a> <a href="#" title="2 topics" >responsive</a> <a href="#" title="2 topics" >think</a> <a href="#" title="1 topic" >web design</a> <a href="#" title="1 topic" >css</a> <a href="#" title="2 topics" >animations</a> <a href="#" title="1 topic" >layout</a> <a href="#" title="2 topics" >mobile</a> <a href="#" title="2 topics" >think</a> <a href="#" title="1 topic" >typography</a> </div>
                    </aside> 
                   
                    <aside className="widget widget_categories">
                      <h3 className="widget-title">Categories</h3>
                      <ul>
                        <li className="cat-item"><a href="#" title="View all posts filed under Nature">Nature</a></li>
                        <li className="cat-item"><a href="#" title="View all posts filed under Life">Life</a></li>
                        <li className="cat-item"><a href="#" title="View all posts filed under Adventure">Adventure</a></li>
                        <li className="cat-item"><a href="#" title="View all posts filed under Freebies">Travel</a></li>
                        <li className="cat-item"><a href="#" title="View all posts filed under Sport">Sport</a></li>
                      </ul>
                    </aside>
                    <aside className="widget widget_recent_entries">		
                        <h3 className="widget-title">Recent Posts</h3>		
                        <ul>
                            <li><a href="#">Runaway A Road Adventure</a></li>
                            <li><a href="#">All In Our Head</a></li>
                            <li><a href="#">Smaller Plate</a></li>
                            <li><a href="#">Alice On The Roof</a></li>
                            <li><a href="#">Becoming A DragonFly</a></li>
                        </ul>
                    </aside> 
                </div>
            </div>
            <div className="site-info">
            	<div className="layout-medium">
            		<p>crafted with <i className="pw-icon-heart"></i> <em>by</em> Simon</p>
                </div>
            </div>
		</footer>
  )
}

export default FooterComponent;