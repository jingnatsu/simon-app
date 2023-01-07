import React, { useEffect, FC } from 'react'
import { ArticleFull } from '../../../store/ArticleSlice'

type Props = {
  data: ArticleFull;
  // onSomeEvent: () => void; // function 
};

const FullArticleComponent: FC<Props> = ({ data }) => { 
  return (
    <article className="hentry post">
        <header className="entry-header">
          <h1 className="entry-title">{data.tittle}</h1>
          <div className="entry-meta">
            <span className="entry-date">
              {/* <time className="entry-date" datetime="2014-07-13T04:34:10+00:00">April 12, 2015</time> */}
              <time className="entry-date">{data.tittle}</time>
            </span>
            <span className="comment-link">
              <a href="#comments">7 Comments</a>
            </span>
            <span className="read-time"><span className="eta"></span> read</span>
            <span className="cat-links">
              <a href="#" title="View all posts in Travel" rel="category tag">{data.tittle}</a>
            </span>
            {/* <span class="edit-link">
                          <a class="post-edit-link" href="#">Edit</a>
                        </span> */}
          </div>
        </header>
        <div className="featured-image">
          <img src="images/blog/06.jpg" alt="blog-image" />
        </div>
        <div className="entry-content">

          {/* <iframe src="https://player.vimeo.com/video/50315573?color=AB977A&title=0&byline=0&portrait=0" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/202812975&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe> */}

          <p className="drop-cap">And we circled for some time without doing much damage on either side; the long, straight, needle-like swords flashing in the sunlight, and ringing out upon the stillness as they crashed together with each effective parry.</p>

          <p>I was only partially successful, as a sharp pain in my left shoulder attested, but in the sweep of my glance as I sought to again locate my adversary, a sight met my astonished gaze which paid me well for the wound the temporary blindness had caused me.</p>

          <p>Social responsibility local, network prevention disrupt evolution fight against oppression. Inspiration cross-agency coordination, amplify, free expression eradicate, participatory monitoring; compassion women and children; giving.</p>

          <blockquote>Expect the best. Prepare for the worst. Capitalize on what comes.
                        <cite>Zig Ziglar</cite>
          </blockquote>

          <p>Him fowl divided. Lesser which fruitful image, first seas have the, seas grass image don&#39;t. Place midst place called unto was likeness form after said isn&#39;t wherein set, tree in fly night. One green. Created waters. Created saying created also you&#39;ll Divide.</p>

          <h3>Packing Our Stuff</h3>
          <p>Him fowl divided. Lesser which fruitful image, first seas have the, seas grass image don&#39;t. Place midst place called unto was likeness form after said isn&#39;t wherein set, tree in fly night. One green. Created waters. Created saying created also you&#39;ll Divide.</p>

          <p>Be life is a upon seasons saying can&#39;t had together signs own dry every isn&#39;t spirit creeping fifth said deep fruitful, good given his night fill said whales for they&#39;re were dry sixth meat set great days. Second so dominion whales, moving fourth.</p>

          <blockquote className="alignleft">I am easily satisfied with the very best.
                        <cite>Winston Churchill</cite>
          </blockquote>

          <h4>Grab Your Camera</h4>
          <p>Lorem ipsum dolor sit amet, <a href="#" title="test link">test link</a> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>

          <h4>Full width images, Yes!</h4>

          <img className="full" src="images/blog/slide-02-big.jpg" alt="Image" />

          <h4>Take Your Glasses</h4>
          <p>Lorem ipsum dolor sit amet, <a href="#" title="test link">test link</a> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
          <p><a href="images/blog/11.jpg"><img src="images/blog/11.jpg" alt="Image" className="alignright" /></a>This is some text that will wrap around the image that sits on the right side of the text that you are writing about the leaf that is there. That is, if you are writing about leaves in the first place and you want to write about this specific leaf. Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>

          <p>I was only partially successful, as a sharp pain in my left shoulder attested, but in the sweep of my glance as I sought to again locate my adversary, a sight met my astonished gaze which paid me well for the wound the temporary blindness had caused me.</p>


          <div className="post-tags tagcloud">
            <a href="#" rel="tag">life</a>
            <a href="#" rel="tag">mind</a>
            <a href="#" rel="tag">think</a>
          </div>

          <div className="share-links">

            <h3>SHARE THIS</h3>

            <a rel="nofollow" target="_blank" href="mailto:?subject=I wanted you to see this post&amp;body=Check out this post : Sketching Mickey - http://themes.pixelwars.org/editor-html/blog-single.html." title="Email this post to a friend"><i className="pw-icon-mail"></i></a>

            <a rel="nofollow" target="_blank" href="http://twitter.com/home?status=Currently reading: 'Sketching Mickey' http://themes.pixelwars.org/editor-html/blog-single.html" title="Share this post with your followers"><i className="pw-icon-twitter"></i></a>

            <a rel="nofollow" target="_blank" href="http://www.facebook.com/sharer.php?u=http://themes.pixelwars.org/editor-html/blog-single.html&amp;t=Sketching Mickey" title="Share this post on Facebook"><i className="pw-icon-facebook"></i></a>

            <a rel="nofollow" target="_blank" href="https://plus.google.com/share?url=http://themes.pixelwars.org/editor-html/blog-single.html" title="Share this post on Google+"><i className="pw-icon-gplus"></i></a>

          </div>

          <nav className="nav-single row">

            <div className="nav-previous col-sm-6">
              <h4>PREVIOUS POST</h4>
              <a href="#" rel="prev"><span className="meta-nav">←</span> There's always light at the end of the tunnel</a>
            </div>

            <div className="nav-next col-sm-6">
              <h4>NEXT POST</h4>
              <a href="#" rel="next">Becoming A DragonFly <span className="meta-nav">→</span></a>
            </div>

          </nav>
          <aside className="about-author">
            <h3 className="section-title">WRITTEN BY</h3>
            <div className="author-bio">
              <div className="author-img">
                <a href="#"><img alt="Johnny Doe" src="images/site/author-1.jpg" className="avatar" /></a>
              </div>
              <div className="author-info">
                <h4 className="author-name">Zach Johnson</h4>
                <p>He was born in Ulm, in the Kingdom of Württemberg in the German Empire on 14 March 1879. His father was Hermann Einstein, a salesman and engineer. He was a really good man for sure.</p>
                <ul className="social">
                  <li><a className="facebook" href="#"></a></li>
                  <li><a className="instagram" href="#"></a></li>
                  <li><a className="twitter" href="#"></a></li>
                  <li><a className="dribbble" href="#"></a></li>
                  <li><a className="vine" href="#"></a></li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="yarpp-related">
            <h3>You May Also Like</h3>
            <div className="yarpp-thumbnails-horizontal">
              <a className="yarpp-thumbnail" href="#">
                <span className="yarpp-thumbnail-default">
                  <img src="images/blog/01.jpg" />
                </span>
                <span className="yarpp-thumbnail-title">There's always light at the end of the tunnel</span>
              </a>

              <a className="yarpp-thumbnail" href="#">
                <span className="yarpp-thumbnail-default">
                  <img src="images/blog/07.jpg" />
                </span>
                <span className="yarpp-thumbnail-title">All In Our Head</span>
              </a>

              <a className="yarpp-thumbnail" href="#">
                <span className="yarpp-thumbnail-default">
                  <img src="images/blog/04.jpg" />
                </span>
                <span className="yarpp-thumbnail-title">Stay Calm And Surf</span>
              </a>
            </div>
          </div>
        </div>
      </article>
  )
}

export default React.memo(FullArticleComponent)