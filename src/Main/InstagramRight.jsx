import React from 'react';

import './rightNav.css';
import Json from './Suggestions.json';

import image from './366610302_814118353761493_8573661974490652919_n.jpg';


const InstagramRight = () => {

function Suggestions(props) {
    const Content = props.Content;

    if (!Array.isArray(Content)) {
        return null; 
      }


      const contentElements=Content.map(s =>
        <div key={s.id} className='accountSuggestions'>
        <div>
          <img src={image} alt='Logo' />
        </div>
        <div className='rightNav_username'>
          <span id='rightNav_username'> {s.name} </span> <br/>
          <span className='rightNav_NameFRS'> {s.type}</span>
        </div>
        <div className='switchProfile'>Follow</div>
      </div>);
        return (
            <>
            {contentElements}
            </>
        );
}
 console.log(Suggestions(Json));

    return (
        <div className='rightNav'>
            <div className='accountSwitch'>
                <div><img src={image} alt='Logo' width={50}/> </div>
                <div className='rightNav_username'>
                    <span id='rightNav_username'> pkrchintu </span> <br/>
                    <span className='rightNav_NameFR'> Pavan Kalyan Bhukya</span>
                </div>
                <div className='switchProfile'>Switch</div>
            </div>
            <div className='rightNav_suggestions'>
                <div>
                    <span className='rightNav_SFU'>Suggested for you</span>
                </div>
                <div><span className='rightNav_SAll'>See All</span></div>
            </div>
            <div>
                <Suggestions Content={Json}/>
            </div> 
            <div className='rightNav_Extra'>
              <ul>
                <li className='about'>About .</li>
                <li>Help .</li>
                <li>Press .</li>
                <li>API .</li>
                <li>Jobs .</li>
                <li>Privacy .</li>
                <li>Terms .</li> <br/>
                <li>Locations .</li>
                <li>Language .</li>
                <li>Meta verified</li>
              </ul>
            </div>
            <div>
              <span className='copyRight'>© 2023 INSTAGRAM FROM META</span>
            </div>
        </div>
      );
};

export default InstagramRight;