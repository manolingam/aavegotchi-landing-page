import React from 'react';

import './styles.scss';

import gotchi_image from '../../assets/images/gotchi_image.svg';

const { CARD_ITEMS } = require('../../utils/constants');

const Index = () => {
  return (
    <section id='six'>
      <div className='section-pixel-divider'></div>

      <div className='grid-container'>
        <div></div>
        <div className='core-container'>
          <div className='inner-core-container'>
            <div className='top-container'>
              <img src={gotchi_image} alt='gotchi' width='75px' />
              <div>
                <h2>Welcome to the Metaverse</h2>
                <p style={{ color: '#8c20ce' }}>
                  Check out what's coming out this quarter
                </p>
              </div>
              <img src={gotchi_image} alt='gotchi' width='75px' />
            </div>
            <p id='description-text'>
              This is the Aavegotchi realm where Gotchis live, work, and play.
              The realm is in progress, but here are a few things you'll be able
              to do in the future
            </p>
            <div className='card-container'>
              {CARD_ITEMS.map((item, index) => {
                return (
                  <div key={index}>
                    <span></span>
                    <h3>{item.h3_text}</h3>
                    <p>{item.p_text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Index;
