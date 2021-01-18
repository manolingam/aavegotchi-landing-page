import React from 'react';

import overlay_seven from '../assets/pixel_overlay_seven.svg';

const Seven = () => {
  return (
    <section id='seven'>
      <div id='top'>
        <img id='sub-overlay' src={overlay_seven} alt='overlay pixel' />
        <h3>Sign up to be notified when new features are released!</h3>
        <div>
          <input placeholder='user@email.com'></input>
          <button></button>
        </div>
      </div>
      <div id='bottom'></div>
    </section>
  );
};

export default Seven;
