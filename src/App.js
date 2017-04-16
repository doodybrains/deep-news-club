import React, { Component } from 'react';
require('./app.scss');

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="home-link">
        <a className="title-card">
          <p>d</p>
          <p>e</p>
          <p>e</p>
          <p>p</p>
          <br/>
          <p>n</p>
          <p>e</p>
          <p>w</p>
          <p>s</p>
          <br/>
          <p>c</p>
          <p>l</p>
          <p>u</p>
          <p>b</p>
        </a>
      </div>


        <div className="news-mod">
          <div className="title">
            <h3>debunking</h3>
            <a>PIZZAGATE</a>
          </div>

          <div className="mod-list">
            <div className="module-1">
              <p>First there was this thing that happened</p>
            </div>
            <div className="module-2">
              <p>It looked kind of like this</p>
              <img src="https://i.ytimg.com/vi/aEtm69mLK6w/mqdefault.jpg" />
            </div>
            <div className="module-3">
              <p>Then this happened</p>
            </div>

            <div className="module-3">
              <p>and so on</p>
            </div>

            <div className="module-3">
              <p>and so on and so on</p>
            </div>

            <div className="module-3">
              <p>and so on and so on and son on ands on</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
