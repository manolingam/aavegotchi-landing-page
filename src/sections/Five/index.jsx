import React from 'react';

import './styles.scss';

import aavegotchi_dao_logo from '../../assets/logos/aavegotchi_dao_logo.svg';
import beach_snap_image from '../../assets/images/beach_snap_image.svg';
import violet_arrow_image from '../../assets/images/violet_arrow_image.png';

const Index = () => {
  return (
    <section id='five'>
      <div id='secondary-bg'></div>
      <div className='core-container'>
        <img src={aavegotchi_dao_logo} width='200px' alt='aavegothci dao' />
        <p id='description-text'>
          Governance for Aavegotchi will gradually become more decentralized
          through the Avagotchi DAO. This will be accomplished in three phases.
        </p>
        <div className='card-container card-container-one'>
          <img src={beach_snap_image} width='100px' alt='beach icon' />
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
          <img
            src={violet_arrow_image}
            alt='violet arrow'
            id='violet-arrow-image'
          />
          <h1 style={{ backgroundColor: '#FFD6E4', color: '#FF00D6' }}>Live</h1>
        </div>
        <div className='card-container card-container-two'>
          <img src={beach_snap_image} width='100px' alt='beach icon' />
          <div>
            <span>Phase 2</span>
            <h2>Metamorphosis</h2>
            <p>
              GHST token holders are charged with managing simple game
              mechanics, such as portal supply, adding new collateral and
              wearables, and voting to migrate to Phase 3.
            </p>
          </div>
          <img
            src={violet_arrow_image}
            alt='violet arrow'
            id='violet-arrow-image'
          />
          <h1 style={{ backgroundColor: '#ECCDFF', color: '#9F3DDB' }}>Q2</h1>
        </div>
        <div className='card-container button-container'>
          <img src={beach_snap_image} width='100px' alt='beach icon' />
          <div>
            <span>Phase 3</span>
            <h2>Oasis</h2>
            <p>
              All decisions related to Aavegotchi game mechanics, REALM
              mechanics, ecosystem spending, and even smart contract upgrades
              will be voted on by the CHST token holders.
            </p>
          </div>
          <h1 style={{ backgroundColor: '#ECCDFF', color: '#9F3DDB' }}>Q4</h1>
          <button>join DAO</button>
        </div>
      </div>
    </section>
  );
};

export default Index;
