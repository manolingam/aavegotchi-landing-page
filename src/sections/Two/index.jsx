import React from 'react';

import './styles.scss';

import pixel_overlay_two from '../../assets/overlays/pixel_overlay_two.svg';
import ghst_token_logo from '../../assets/logos/ghst_token_logo.svg';
import portal_closed_image from '../../assets/images/portal_closed_image.svg';
import portal_opened_image from '../../assets/images/portal_open_image.svg';
import gotchi_image from '../../assets/images/gotchi_image.svg';

const Index = () => {
  return (
    <section id='two'>
      <img
        className='section-pixel-divider'
        src={pixel_overlay_two}
        alt='pixel group'
      />
      <div className='subcontainer'>
        <div>
          <p className='press-start-text'>The Portal</p>
          <p>
            How do you bring your Gotchi from the Nether realm to your screen?
            Through a Portal, of course!
          </p>
        </div>
        <div className='list'>
          <img src={ghst_token_logo} alt='ghost token' />
          <p>First you'll need some GHST approximately 100</p>
        </div>
        <div className='list'>
          <img src={portal_closed_image} alt='portal closed' />
          <p>
            Then head to the Aavegotchi dApp and use your GHST to buy a Portal.
            Initially 10,000 portals will be released (read more).
          </p>
        </div>
        <div className='list'>
          <img src={portal_opened_image} alt='portal opened' />
          <p>Open your Portal with the Portal Summoning Ritual</p>
        </div>
        <div className='list'>
          <img src={gotchi_image} alt='gotchi' />
          <p>Stake aTokens to claim your Gotchi.</p>
        </div>
        <div className='overlap-container'>
          <p className='press-start-text'>How to play</p>
          <p>
            Claim your Gotchi by summoning a portal and staking Spirit Force
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
