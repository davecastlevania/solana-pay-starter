import React from "react";
import HeadComponent from '../components/Head';

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> 👽 Alien Life Pirate Store 👽 </p>
          <p className="sub-text">The only alien pirate store on SolanaPay!</p>
        </header>

        <main>
          <img src="https://img.freepik.com/free-vector/cute-alien-flying-with-spaceship-ufo-cartoon-science-technology-icon-concept-isolated-flat-cartoon-style_138676-2203.jpg?t=st=1653161148~exp=1653161748~hmac=4e4b5d1fdb03b324f17805d2bb6f4aa234ccb63ccd035b46ceb306c62c5eb916&w=1380" alt="emoji" width="400px" />
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
