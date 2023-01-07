import React from 'react';
import './App.scss';
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import BodyComponent from '../BodyComponent';
import BlogComponent from '../BlogComponent';
import FooterComponent from '../FooterCompoent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div id="page" className="hfeed site">
          <HeaderComponent/>
          <div id="main" className="site-main">
            <div id="primary" className="content-area">
              <div id="content" className="site-content" role="main">
                <Route path="/" exact component={BodyComponent} />
                <Route path="/blog/:blogId" exact component={BlogComponent} />
              </div>
            </div>
          </div>
          {/* <BodyComponent /> */}
          <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
