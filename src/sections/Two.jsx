import React from 'react';

import overlay_two from '../assets/pixel_overlay_two.svg';
import ghst_token from '../assets/GHST_token.svg';
import portal_closed from '../assets/portal_closed.svg';
import portal_opened from '../assets/portal_open.svg';
import gotchi from '../assets/gotchi.svg';

const Two = () => {
  return (
    <section id='two'>
      <img
        className='section-pixel-divider'
        src={overlay_two}
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
          <img src={ghst_token} alt='ghost token' />
          <p>First you'll need some GHST approximately 100</p>
        </div>
        <div className='list'>
          <img src={portal_closed} alt='portal closed' />
          <p>
            Then head to the Aavegotchi dApp and use your GHST to buy a Portal.
            Initially 10,000 portals will be released (read more).
          </p>
        </div>
        <div className='list'>
          <img src={portal_opened} alt='portal opened' />
          <p>Open your Portal with the Portal Summoning Ritual</p>
        </div>
        <div className='list'>
          <img src={gotchi} alt='gotchi' />
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

export default Two;
