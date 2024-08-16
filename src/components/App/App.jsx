import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import ThankYou from '../ThankYou/ThankYou.jsx';
import Review from '../Review/Review.jsx';
import Comments from '../Comments/Comments.jsx';


function App() {

  return (
    <div className='flex flex-col items-center w-full'>
      <header className='flex flex-col w-full items-center bg-blue-800 text-blue-50 p-2 mb-4'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/feeling">
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/thanks">
          <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;
