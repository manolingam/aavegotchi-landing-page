import React from 'react';

import './styles.scss';

import pixel_overlay_one from '../../assets/overlays/pixel_overlay_one.svg';
import gotchigang_image from '../../assets/images/gotchigang_image.svg';

const Index = () => {
  return (
    <section id='one'>
      <img
        className='section-pixel-divider'
        src={pixel_overlay_one}
        alt='pixel group'
      />
      <div className='sub-container-one'>
        <img src={gotchigang_image} alt='gotchigang' id='gotchigang' />
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

export default Index;
