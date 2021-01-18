import React from 'react';

import gotchi from '../assets/gotchi.svg';
import dai_icon from '../assets/dai_icon.svg';
import usdc_icon from '../assets/usdc_icon.svg';
import dice_icon from '../assets/dice.svg';

const Four = () => {
  return (
    <section id='four'>
      {/* <img id='overlay' src={overlay_four} alt='overlay pixel' /> */}
      <div id='core-container'>
        <h1>Anatomy of a Gotchi</h1>
        <p>
          Boo! Gotchis are pixelated, collectible ghosts living on the Ethereum
          blockchain. They possess inherent traits that influence their rarity,
          game performance, and wearables they can equip. Claim a Gotchi and
          give it a unique name. Then interact with others, play games, earn
          crypto, and level up!
        </p>
        <div id='container-one'>
          <div id='sub-container-one'>
            <p className='mb3'>Preview</p>
            <div className='pixel-border-container'>
              <img src={gotchi} alt='gotchi' />
              <p>Type a name</p>
              <div>
                <p>Spirit Force:</p>
                <span>aDai</span>
              </div>
              <div>
                <p>Aave APY:</p>
                <span>5.56%</span>
              </div>
              <div>
                <p>Rarity Score:</p>
                <span>85</span>
              </div>
            </div>
          </div>
          <div id='sub-container-two'>
            <div>
              <p className='mb3'>Choose an aToken</p>
              <div className='pixel-border-container'>
                <span>
                  <img src={dai_icon} alt='icon' />
                  <p>DAI</p>
                </span>
                <span>
                  <img src={usdc_icon} alt='icon' />
                  <p>USDT</p>
                </span>
                <span>
                  <img src={usdc_icon} alt='icon' />
                  <p>USDC</p>
                </span>
                <span>
                  <img src={dai_icon} alt='icon' />
                  <p>SUSD</p>
                </span>
              </div>
            </div>
            <div>
              <p className='mb3'>Choose eyes</p>
              <div className='pixel-border-container placeholder-container'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div>
              <p className='mb3'>Choose wearables</p>
              <div className='pixel-border-container placeholder-container'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <button>
              <img src={dice_icon} alt='dice' />
              <span>Randomize</span>
            </button>
          </div>
        </div>
      </div>
      <p id='info-text'>
        Note: when you open a portal, the Gotchi options are randomized via a
        Chainlink True Randomizer function. It is not possible to choose or
        predict which Gotchis you will get, but you will have at least 8 options
        to choose from. Wearables sold separately.
        <button>buy Portal</button>
      </p>
      <div id='secondary-bg'></div>
    </section>
  );
};

export default Four;
