import React from 'react';

import './styles.scss';

import gotchigang_image from '../../assets/images/gotchigang_image.svg';
import rainbow_text_image from '../../assets/images/rainbow_text_image.svg';
import powered_by_aave_image from '../../assets/images/powered_by_aave_image.svg';

const Index = () => {
  return (
    <section id='one'>
      <div className='section-pixel-divider'></div>

      <img src={gotchigang_image} alt='gotchigang' id='gotchigang-image' />

      <div className='right-container'>
        <div className='slogan-container'>
          <p>Make nifty friends,</p>
          <p>earn crypto loot!</p>
        </div>
        <p id='explainer-text'>
          Aavegotchi is a DeFi-enabled crypto collectibles game that allows
          players to create and stake NFT avatars (called <span>Gotchi</span>)
          with interest-generating tokens.
        </p>
        <div className='right-bottom-container'>
          <img
            src={rainbow_text_image}
            alt='rainbow text'
            id='rainbow-text-image'
          />
          <button>play</button>
        </div>
        <img
          src={powered_by_aave_image}
          alt='powered by aave'
          id='powered-by-aave-image'
        />
      </div>
    </section>
  );
};

export default Index;
