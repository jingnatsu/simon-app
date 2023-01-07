import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hook'
import { fetchArticles } from '../../store/ArticleSlice'
import Moment from 'react-moment';
import './index.scss'


function ArticlesComponent() {
  const articles = useAppSelector(state => state.articleSlice.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles(0));
  }, [])

  function renderContent() {
    return articles.map((article: any) => {
      return (
        <article className="hentry post">
          <header className="entry-header">
            <h1 className="entry-title"><a href="blog-single.html">{article.tittle}</a></h1>
            <div className="entry-meta">
              <span className="entry-date">
                <time className="entry-date" ><Moment format="YYYY-MM-DD HH:mm">{article.created_date}</Moment></time>
              </span>
              <span className="comment-link">
                <a href="blog-single.html#comments">7 Comments</a>
              </span>
              <span className="read-time"><span className="eta"></span> read</span>
              <span className="cat-links">
                <a href="#" title="View all posts in Travel" rel="category tag">{article.category}</a>
              </span>
            </div>
          </header>

          <div className="featured-image">
            <a href="blog-single.html">
              <img className="image-poster" src={process.env.PUBLIC_URL + article.urlImg} alt="blog-image" />
            </a>
          </div>
          <div className="entry-content">
            { <div dangerouslySetInnerHTML={{ __html: article.shortDesc }} />}
            <p>
              <span className="more">
                <Link to={`/blog/${article.id}`}><span></span><div className="more-link">Continue reading <span className="meta-nav">→</span></div></Link>
              </span>
            </p>
          </div>
        </article>
      )
    })
  }

  return (
    <React.Fragment>
      <div className="layout-fixed">
        <div className="blog-regular">
          {renderContent()}
          <nav className="navigation" role="navigation">
            <div className="nav-previous"><a href="#"><span className="meta-nav">←</span> Older posts</a></div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ArticlesComponent;