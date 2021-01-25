import React from 'react';

import './styles.scss';

import ghst_token_logo from '../../assets/logos/ghst_token_logo.svg';
import fire_icon from '../../assets/icons/fire_icon.svg';
import pink_arrow_image from '../../assets/images/pink_arrow_image.png';
import blue_arrow_image from '../../assets/images/blue_arrow_image.png';

const list_items = [
  {
    class: 'info-card-text-top',
    text:
      'Buy GHST directly from the Aavegotchi bonding curve, or from popular DEXs and exchanges.'
  },
  {
    class: 'info-card-text-top',
    text:
      'Earn GHST by gameplay, participating in the DAO, rarity farming, and more!'
  },
  {
    class: 'info-card-text-bottom',
    text:
      'Stake GHST to earn raffle tickets for a chance to win wearbales, and unlock parcel features in the Metaverse (soon).'
  },
  {
    class: 'info-card-text-bottom',
    text:
      'Spend GHST on gotchi Portals, wearables, consumables and, soon, on Metaverse parcels.'
  }
];

const lines = [
  'GHST is the governance token of the Metaverse, and a requirement for gameplay.',
  'Use GHST to: claim Gotchis; earn raffle tickets;',
  'buy wearables, consumbales, and REALM parcels; vote.'
];

const Index = () => {
  return (
    <section id='three'>
      <div className='section-pixel-divider'></div>

      <div>
        <p id='section-title'>The GHST Token</p>
        {lines.map((item, index) => {
          return (
            <p key={index} className='lines'>
              {item}
            </p>
          );
        })}
      </div>

      <div id='core-container'>
        <div id='button-container'>
          <button id='buy-ghst-button'>buy GHST</button>
          <span id='arrow-container'>
            <img
              id='ghst-token-image'
              src={ghst_token_logo}
              alt='ghost token'
            />
            <img src={pink_arrow_image} alt='arrow' id='pink-arrow-right' />
            <img src={pink_arrow_image} alt='arrow' id='pink-arrow-left' />
            <img src={blue_arrow_image} alt='arrow' id='blue-arrow-right' />
            <img src={blue_arrow_image} alt='arrow' id='blue-arrow-left' />
          </span>
          <button id='spend-ghst-button'>spend GHST</button>
        </div>

        {list_items.map((item, index) => {
          return (
            <p key={index} className={`info-card-text ${item.class}`}>
              {item.text}
            </p>
          );
        })}
      </div>
      <div id='notify-container'>
        <img src={fire_icon} alt='fire icon' id='fire-icon' />
        <div className='container-text'>
          <p>Scortched Spectre! The 33% GHST Token Burn</p>
          <p>
            33% of all GHST earned through in-game sales will be automatically
            burned by the token contract. This will act as a deflationary
            counterbalance to the inflationary GHST-denominated gaming rewards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
