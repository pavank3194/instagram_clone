import React from 'react';

import "./body.css";
import image from './366610302_814118353761493_8573661974490652919_n.jpg';


const InstagramBody = () => {
  return (
    <>
      <div className='instagramBody'>
          <div className='InstagramBody_Story'>
          {[1,2,3,4,5,6,7,8,9,10,1,1,1,1].map(arr => 
          <div key={arr} className='accountSuggestions'>
            <div className="userStory">
              <img src={image} alt='Logo' />
            </div>
          </div>
          )}
          </div>
          <div className='InstagramBody_Post' style={{paddingBottom:'200px'}}>
          {[1,2,3].map(indx => (
          <>
            <div className='InstagramBody_Posts'>
              <div className="pst-header">
                <div className="logo">
                  <img src={image} alt="img" />
                </div>
                <span className='user-font'>pkrchintu</span>
                <span className="material-symbols-outlined">verified</span>
                <span> <b>.</b> 13m</span>
              </div>
              <div className="three-dots-container">
                <span className='user-font three-dots'><b>...</b></span>
              </div>
            </div>
            <div className="user-photo">
              <img src={image} alt="" />
            </div>
            <div className="l-c-s-save">
              <div className="l-c-s">
                <span className="material-symbols-outlined material-symbols-l-c-s">favorite</span>
                <span className="material-symbols-outlined material-symbols-l-c-s">comment</span>
                <span className="material-symbols-outlined material-symbols-l-c-s">send</span>
              </div>
              <div className="save">
                <span className="material-symbols-outlined material-symbols-save">save</span>
              </div>
            </div>
            <div className="like-count">
              <div className="liked-users">
                <span class="material-symbols-outlined accnt-circle">account_circle</span>
                <span class="material-symbols-outlined accnt-circle accnt-circle1">account_circle</span>
                <span class="material-symbols-outlined accnt-circle accnt-circle1">account_circle</span>
              </div>
              <div className="likes-count-text">
                <span>26,226 likes</span>
              </div>
            </div>
            <div className="comment-section" >
              <span className='user-font'>pkrchintu</span>
              <span className="material-symbols-outlined ">verified</span>
              <span>lorem ipsum dolor sit amet.....</span>
            </div>
          </>
          ))}
          </div>
          
      </div>
    </>
  );
};

export default InstagramBody;