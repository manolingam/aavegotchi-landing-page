import React from 'react';

import './styles.scss';

import pixel_overlay_seven from '../../assets/overlays/pixel_overlay_seven.svg';

const Index = () => {
  return (
    <section id='seven'>
      <div id='top-container'>
        <img id='sub-overlay' src={pixel_overlay_seven} alt='overlay pixel' />
        <h3>Sign up to be notified when new features are released!</h3>
        <div>
          <input placeholder='user@email.com'></input>
          <button></button>
        </div>
      </div>
      <div id='bottom-container'></div>
    </section>
  );
};

export default Index;
