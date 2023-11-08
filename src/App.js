import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import InstagramLeft from './Main/InstagramLeft';
import InstagramBody from './Main/InstagramBody';
import InstagramRight from './Main/InstagramRight';


function App() {
  return (
    <div className="instagramClone">
      <div className='instagramLeft'>
        <InstagramLeft/>
      </div> 
      <div className='instagramLine'>
        {/* Nothing to Write here */}
      </div>
      <div className=''>
        <InstagramBody/>
      </div>
      <div className='instagramRight'>
        <InstagramRight/>
      </div>
    </div>
  );
}

export default App;
