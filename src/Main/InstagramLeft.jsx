import React from 'react';

const InstagramLeft = () => {
  return (
    <>
    <div className='instgramLeft_Name'>Instagram</div>
    <div className='instagramLeft_Links'>
        <li>
            <span className="material-symbols-outlined e88a">home</span> 
            <span>Home</span>
        </li>
        <li>            
          <span className="material-symbols-outlined">search</span> 
          <span>Search</span>
        </li>
        <li>
          <span className="material-symbols-outlined">Explore</span> 
          <span>Explore</span>
        </li>
        <li>
          <span className="material-symbols-outlined">slow_motion_video</span>
          <span>Reels</span>
        </li>
        <li>
            <span className="material-symbols-outlined ">chat</span> 
            <span>Messages</span>
        </li>
        <li>
          <span className="material-symbols-outlined">favorite</span> 
          <span>Notifications</span>
        </li>
        <li>
          <span className="material-symbols-outlined">Add_circle</span> 
          <span>Create</span>
        </li>
        <li>
          <span className="material-symbols-outlined">Account_circle</span> 
          <span>Profile</span>
        </li>
        </div>
        <div className='instagramLeft_More'>
          <li>
            <span class="material-symbols-outlined">storm</span>
            <span>Thread</span>
          </li>
          <li>
            <span className="material-symbols-outlined ">menu</span> 
            <span>Menu</span>
          </li>
          
        </div>
    </>
  );
};

export default InstagramLeft;