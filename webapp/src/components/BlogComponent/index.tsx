import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hook'
import { fetchArticles } from '../../store/ArticleSlice'
import isEmpty from 'lodash/isEmpty'
import './index.scss'
import FullArticleComponent from './FullArticleComponent';
import {isNaN} from "lodash";

function BlogComponent() {

  const style = {
    display: 'none'
  }

  const { articleId } = useParams<Record<string, string | undefined>>();
  const dispatch = useAppDispatch();
  const article = useAppSelector(state => state.articleSlice.article);
  
  useEffect(() => {
    if(articleId && !isNaN(articleId)) {
      dispatch(fetchArticles(Number(articleId)));
    }
  }, [articleId])

  return (
    
    <div className="layout-fixed">
      { !isEmpty(article) && <FullArticleComponent data= {article}/> }
      <div id="comments" className="comments-area">
        <h3 className="section-title">5 Comments</h3>
        <ol className="commentlist">
          <li className="comment even thread-even depth-1">
            <article className="comment">
              <header className="comment-meta comment-author vcard">
                <img alt="" src="images/site/testo-01.jpg" className="avatar" height="75" width="75" />
                <cite className="fn"><a href="#" rel="external nofollow" className="url">Phillip Austin</a></cite>
                <span className="comment-date">October 17, 2013 at 2:16 PM</span>
              </header>
              <section className="comment-content comment">
                <p>Hi, this is a very useful article. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </section>
              <div className="reply">
                <a className="comment-reply-link" href="#">Reply <span>↓</span></a>
              </div>
            </article>

            <ol className="children">
              <li className="comment odd alt depth-2 bypostauthor">
                <article className="comment">
                  <header className="comment-meta comment-author vcard">
                    <img alt="" src="images/site/author-1.jpg" className="avatar photo" height="75" width="75" />
                    <cite className="fn"><a href="#" rel="external nofollow" className="url">Johnny Doe</a></cite>
                    <span className="comment-date">October 17, 2013 at 2:16 PM</span>
                  </header>
                  <section className="comment-content comment">
                    <p>Thanks Phillip, glad you liked it. Nice to see you around.</p>
                  </section>
                  <div className="reply">
                    <a className="comment-reply-link" href="#">Reply <span>↓</span></a>
                  </div>
                </article>

                <ol className="children">
                  <li className="comment even depth-3">
                    <article className="comment">
                      <header className="comment-meta comment-author vcard">
                        <img alt="" src="images/site/testo-02.jpg" className="avatar photo" height="75" width="75" />
                        <cite className="fn"><a href="#" rel="external nofollow" className="url">Gary Morgan</a></cite>
                        <span className="comment-date">October 17, 2013 at 2:16 PM</span>
                      </header>
                      <section className="comment-content comment">
                        <p>Hey guys, c'mon this is old stuff!</p>
                      </section>
                      <div className="reply">
                        <a className="comment-reply-link" href="#">Reply <span>↓</span></a>
                      </div>
                    </article>

                  </li>
                </ol>

              </li>
            </ol>

          </li>

          <li className="comment odd alt thread-odd thread-alt depth-1">
            <article id="comment-5" className="comment">
              <header className="comment-meta comment-author vcard">
                <img alt="" src="images/site/testo-02.jpg" className="avatar avatar-44 photo" height="75" width="75" />
                <cite className="fn"><a href="#" rel="external nofollow" className="url">Gary Morgan</a></cite>
                <span className="comment-date">October 17, 2013 at 2:16 PM</span>
              </header>
              <section className="comment-content comment">
                <p>Hi, this is cool but i know something cooler than this, new iPad!</p>
              </section>
              <div className="reply">
                <a className="comment-reply-link" href="#">Reply <span>↓</span></a>
              </div>
            </article>
          </li>
        </ol>
        <div id="respond">
          <h3 id="reply-title">LEAVE A COMMENT <small><a rel="nofollow" id="cancel-comment-reply-link" href="#" style={style}>Cancel reply</a></small></h3>
          <form action="#" method="post" id="commentform">
            <p className="comment-notes">Your email address will not be published. Required fields are marked <span className="required">*</span></p>
            <p className="comment-form-comment">
              <label htmlFor="comment">Comment</label>
              <textarea id="comment" name="comment" aria-required="true"></textarea>
            </p>
            <p className="comment-form-author">
              <label htmlFor="author">Name <span className="required">*</span></label>
              <input id="author" name="author" type="text" maxLength={30} aria-required="true" />
            </p>
            <p className="comment-form-email">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input id="email" name="email" type="text" maxLength={30} aria-required="true" />
            </p>
            <p className="comment-form-url">
              <label htmlFor="url">Website</label>
              <input id="url" name="url" type="text" maxLength={30} />
            </p>
            <p className="form-allowed-tags">You may use these <abbr title="HyperText Markup Language">HTML</abbr> tags and attributes: <code>&lt;a href="" title=""&gt; &lt;abbr title=""&gt; &lt;acronym title=""&gt; &lt;b&gt; &lt;blockquote cite=""&gt; &lt;cite&gt; &lt;code&gt; &lt;del datetime=""&gt; &lt;em&gt; &lt;i&gt; &lt;q cite=""&gt; &lt;strike&gt; &lt;strong&gt; </code></p>
            <p className="form-submit">
              <input type="submit" name="submit" id="submit" className="button primary" value="Post Comment" />
              <input type="hidden" name="comment_post_ID" value="16" id="comment_post_ID" />
              <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BlogComponent;