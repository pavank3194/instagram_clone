import './App.css';


function App() {
  return (
    <div className="instagramClone">
      <div className='instagramLeft'>
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
            <span className="material-symbols-outlined ">menu</span> 
            <span>Menu</span>
          </li>
        </div>
        <footer>knx</footer>
      </div> 
      <div className='instagramLine'>
        {/* Nothing to Write here */}
      </div>
      <div className='instagramBody'>
        Body
      </div>
      <div className='instagramRight'>
        Suggestions
      </div>
    </div>
  );
}

export default App;
