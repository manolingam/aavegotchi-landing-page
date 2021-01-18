import React from 'react';

import aavegotchi_dao from '../assets/aavegotchi_dao.svg';
import beach_icon from '../assets/beach_snap.svg';

const Five = () => {
  return (
    <section id='five'>
      <div id='secondary-bg'></div>
      <div className='core-container'>
        <img src={aavegotchi_dao} width='200px' alt='aavegothci dao' />
        <p id='description'>
          Governance for Aavegotchi will gradually become more decentralized
          through the Avagotchi DAO. This will be accomplished in three phases.
        </p>
        <div className='card-container'>
          <img src={beach_icon} width='100px' alt='beach icon' />
          <div>
            <span>Phase 1</span>
            <h2>Genesis</h2>
            <p>
              The first iteration of AavegotchiDAO was launched in tandem with
              the GHST token distribution event. GHST token holders may vote to
              increase or decrease project development funds, and to migrate to
              Phase 2.
            </p>
          </div>
        </div>
        <div className='card-container'>
          <img src={beach_icon} width='100px' alt='beach icon' />
          <div>
            <span>Phase 2</span>
            <h2>Metamorphosis</h2>
            <p>
              GHST token holders are charged with managing simple game
              mechanics, such as portal supply, adding new collateral and
              wearables, and voting to migrate to Phase 3.
            </p>
          </div>
        </div>
        <div className='card-container button-container'>
          <img src={beach_icon} width='100px' alt='beach icon' />
          <div>
            <span>Phase 3</span>
            <h2>Oasis</h2>
            <p>
              All decisions related to Aavegotchi game mechanics, REALM
              mechanics, ecosystem spending, and even smart contract upgrades
              will be voted on by the CHST token holders.
            </p>
          </div>
          <button>join DAO</button>
        </div>
      </div>
    </section>
  );
};

export default Five;
