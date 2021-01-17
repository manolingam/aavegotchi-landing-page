import React from 'react';

import overlay_one from '../assets/pixel_overlay_one.svg';
import gotchigang from '../assets/gotchigang.svg';

const One = () => {
  return (
    <section id='one'>
      <img
        className='section-pixel-divider'
        src={overlay_one}
        alt='pixel group'
      />
      <div className='sub-container-one'>
        <img src={gotchigang} alt='gotchigang' id='gotchigang' />
      </div>
      <div className='sub-container-two'>
        <div className='title-tag'>
          <p>Make nifty friends,</p>
          <p>earn crypto loot!</p>
        </div>
        <p id='explainer'>
          Aavegotchi is a DeFi-enabled crypto collectibles game that allows
          players to create and stake NFT avatars (called Gotchi) with
          interest-generating tokens.
        </p>
        <button>play</button>
      </div>
    </section>
  );
};

export default One;
