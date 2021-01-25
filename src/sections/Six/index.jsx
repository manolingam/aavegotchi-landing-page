import React from 'react';

import './styles.scss';

import gotchi_image from '../../assets/images/gotchi_image.svg';

const card_items = [
  {
    h3_text: 'Interact with other Gotchis',
    p_text: 'Sat hello! Visit friends and make new ones.'
  },
  {
    h3_text: 'Play games',
    p_text: 'Enter your Gotchi into competition! Rack up wins to level up.'
  },
  {
    h3_text: 'Vote in the DAO',
    p_text:
      'Head into the metaverse governance building to cast your vote for the future of Aavagotchi.'
  },
  {
    h3_text: 'Buy land',
    p_text:
      "Metaverse 'REALM parcels' will be purchasable in the Aavagotchi store."
  },
  {
    h3_text: 'Find a caretaker',
    p_text:
      "Choose a special someone to take care of your Gotchi while you're away."
  },
  {
    h3_text: 'Read the wiki',
    p_text:
      'Expand your knowledge of all things Aavegotchi and become a master player.'
  }
];

const Index = () => {
  return (
    <section id='six'>
      <div className='section-pixel-divider'></div>
      <div className='core-container'>
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
          This is the Aavegotchi realm where Gotchis live, work, and play. The
          realm is in progress, but here are a few things you'll be able to do
          in the future
        </p>
        <div className='card-container'>
          {card_items.map((item, index) => {
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
    </section>
  );
};

export default Index;
