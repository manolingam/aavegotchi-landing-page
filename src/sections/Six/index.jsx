import React from 'react';

import './styles.scss';

import pixel_overlay_six from '../../assets/overlays/pixel_overlay_six.svg';
import gotchi_image from '../../assets/images/gotchi_image.svg';

const Index = () => {
  return (
    <section id='six'>
      <img
        className='section-pixel-divider'
        src={pixel_overlay_six}
        alt='pixel group'
      />
      <div className='core-container'>
        <div className='top-container'>
          <img src={gotchi_image} alt='gotchi' width='100px' />
          <div>
            <h2>Welcome to the Metaverse</h2>
            <p>Check out what's coming out this quarter</p>
          </div>
          <img src={gotchi_image} alt='gotchi' width='100px' />
        </div>
        <p id='description'>
          This is the Aavegotchi realm where Gotchis live, work, and play. The
          realm is in progress, but here are a few things you'll be able to do
          in the future
        </p>
        <div className='card-container'>
          <div>
            <span></span>
            <h3>Interact with other Gotchis</h3>
            <p>Sat hello! Visit friends and make new ones.</p>
          </div>
          <div>
            <span></span>
            <h3>Play games</h3>
            <p>Enter your Gotchi into competition! Rack up wins to level up.</p>
          </div>
          <div>
            <span></span>
            <h3>Vote in the DAO</h3>
            <p>
              Head into the metaverse governance building to cast your vote for
              the future of Aavagotchi.
            </p>
          </div>
          <div>
            <span></span>
            <h3>Buy land</h3>
            <p>
              Metaverse "REALM parcels" will be purchasable in the Aavagotchi
              store.{' '}
            </p>
          </div>
          <div>
            <span></span>
            <h3>Find a caretaker</h3>
            <p>
              Choose a special someone to take care of your Gotchi while you're
              away.
            </p>
          </div>
          <div>
            <span></span>
            <h3>Read the wiki</h3>
            <p>
              Expand your knowledge of all things Aavegotchi and become a master
              player.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
