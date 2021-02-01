import React from 'react';

import './styles.scss';

import ghst_token_logo from '../../assets/logos/ghst_token_logo.svg';
import fire_icon from '../../assets/icons/fire_icon.svg';
import pink_arrow_image from '../../assets/images/pink_arrow_image.png';
import blue_arrow_image from '../../assets/images/blue_arrow_image.png';

const { SECTION_THREE_LIST_ITEMS, LINES } = require('../../utils/constants');

const Index = () => {
  return (
    <section id='three'>
      <div className='section-pixel-divider'></div>

      <div className='grid-container'>
        <div></div>
        <div className='core-container'>
          <div>
            <p id='section-title'>The GHST Token</p>
            {LINES.map((item, index) => {
              return (
                <p key={index} className='lines'>
                  {item}
                </p>
              );
            })}
          </div>

          <div id='sub-container'>
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

            {SECTION_THREE_LIST_ITEMS.map((item, index) => {
              return (
                <p key={index} className={`info-card-text ${item.class}`}>
                  {item.text}
                </p>
              );
            })}
          </div>

          <div className='optional-container'>
            <button>buy GHST</button>
            <button>earn GHST</button>
            <button>spend GHST</button>
            <button>stake GHST</button>
          </div>

          <div id='notify-container'>
            <img src={fire_icon} alt='fire icon' id='fire-icon' />
            <div className='container-text'>
              <p>Scortched Spectre! The 33% GHST Token Burn</p>
              <p>
                33% of all GHST earned through in-game sales will be
                automatically burned by the token contract. This will act as a
                deflationary counterbalance to the inflationary GHST-denominated
                gaming rewards.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Index;
