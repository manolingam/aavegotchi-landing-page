import React from 'react';

import './styles.scss';

import pixel_overlay_three from '../../assets/overlays/pixel_overlay_three.svg';
import ghst_token_logo from '../../assets/logos/ghst_token_logo.svg';

const Index = () => {
  return (
    <section id='three'>
      <img
        className='section-pixel-divider'
        src={pixel_overlay_three}
        alt='pixel group'
      />
      <p id='section-title'>The GHST Token</p>
      <p className='section-subtitle'>
        GHST is the governance token of the Metaverse, and a requirement for
        gameplay.
      </p>
      <p className='section-subtitle'>
        Use GHST to: claim Gotchis; earn raffle tickets;
      </p>
      <p className='section-subtitle'>
        buy wearables, consumbales, and REALM parcels; vote.
      </p>
      <div id='core-container'>
        <div id='button-container'>
          <button id='buy-ghst-button'>buy GHST</button>
          <img id='ghst-token' src={ghst_token_logo} alt='ghost token' />
          <button id='spend-ghst-button'>spend GHST</button>
        </div>

        <p className='info-card'>
          Buy GHST directly from the Aavegotchi bonding curve, or from popular
          DEXs and exchanges.
        </p>
        <p className='info-card'>
          Earn GHST by gameplay, participating in the DAO, rarity farming, and
          more!
        </p>
        <p className='info-card'>
          Stake GHST to earn raffle tickets for a chance to win wearbales, and
          unlock parcel features in the Metaverse (soon).
        </p>
        <p className='info-card'>
          Spend GHST on gotchi Portals, wearables, consumables and, soon, on
          Metaverse parcels.
        </p>
      </div>
      <div id='notify-container'>
        <p>Scortched Spectre! The 33% GHST Token Burn</p>
        <p>
          33% of all GHST earned through in-game sales will be automatically
          burned by the token contract. This will act as a deflationary
          counterbalance to the inflationary GHST-denominated gaming rewards.
        </p>
      </div>
    </section>
  );
};

export default Index;
