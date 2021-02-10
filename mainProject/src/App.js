import './App.css';
import React from 'react';
import Comments from './components/Comment/Comments';
import store from './store/comments';
import Header from './components/Header/Header';
import NewComment from './components/Comment/NewComment';
import Reviews from './components/Reviews/Reviews';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Reviews />
      <Comments comments={store} />
    </div>
  );
}
export default App;