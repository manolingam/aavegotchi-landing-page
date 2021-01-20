import React from 'react';

import './styles.scss';

import ghst_token_logo from '../../assets/logos/ghst_token_logo.svg';
import portal_closed_image from '../../assets/images/portal_closed_image.svg';
import portal_opened_image from '../../assets/images/portal_open_image.svg';
import gotchi_image from '../../assets/images/gotchi_image.svg';

const list_items = [
  {
    image: ghst_token_logo,
    image_alt: 'ghost token',
    text: "First you'll need some GHST approximately 100"
  },
  {
    image: portal_closed_image,
    image_alt: 'portal closed',
    text:
      'Then head to the Aavegotchi dApp and use your GHST to buy a Portal. ,Initially 10,000 portals will be released (read more).'
  },
  {
    image: portal_opened_image,
    image_alt: 'portal opened',
    text: 'Open your Portal with the Portal Summoning Ritual'
  },
  {
    image: gotchi_image,
    image_alt: 'gotchi image',
    text: 'Stake aTokens to claim your Gotchi.'
  }
];

const Index = () => {
  return (
    <section id='two'>
      <div className='section-pixel-divider'></div>

      <div className='sub-container'>
        <div>
          <h3>The Portal</h3>
          <p style={{ marginTop: '.3rem' }}>
            How do you bring your Gotchi from the Nether realm to your screen?
            Through a Portal, of course!
          </p>
        </div>

        {list_items.map((item, index) => {
          return (
            <div className='list' key={index}>
              <img src={item.image} alt={item.image_alt} />
              <p>{item.text}</p>
            </div>
          );
        })}

        <div className='overlap-container'>
          <h3>How to play</h3>
          <p>
            Claim your Gotchi by summoning a portal and staking Spirit Force
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
