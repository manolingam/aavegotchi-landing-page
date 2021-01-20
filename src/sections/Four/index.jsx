import React from 'react';

import './styles.scss';

import gotchi_image from '../../assets/images/gotchi_image.svg';
import dai_icon from '../../assets/icons/dai_icon.svg';
import usdc_icon from '../../assets/icons/usdc_icon.svg';
import dice_icon from '../../assets/icons/dice_icon.svg';
import powered_by_chainlink_image from '../../assets/images/powered_by_chainlink_image.svg';

const Index = () => {
  return (
    <section id='four'>
      <div className='section-pixel-divider'></div>
      <div id='core-container'>
        <h1 className='mb4'>Anatomy of a Gotchi</h1>
        <p className='mb3'>
          Boo! Gotchis are pixelated, collectible ghosts living on the Ethereum
          blockchain. They possess inherent traits that influence their rarity,
          game performance, and wearables they can equip. Claim a Gotchi and
          give it a unique name. Then interact with others, play games, earn
          crypto, and level up!
        </p>
        <div id='sub-container'>
          <div id='sub-container-left'>
            <h3 className='mb3'>Preview</h3>
            <div className='pixel-border-container'>
              <img
                src={gotchi_image}
                width='120px'
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                alt='gotchi'
              />
              <p style={{ color: '#A0A0A0', textAlign: 'center' }}>
                Type a name
              </p>
              <div>
                <p>Spirit Force:</p>
                <span style={{ color: '#EFB846' }}>aDAI</span>
              </div>
              <div>
                <p>Aave APY:</p>
                <span style={{ color: '#BD00E0' }}>5.56%</span>
              </div>
              <div>
                <p>Rarity Score:</p>
                <span style={{ color: '#BD00E0' }}>85</span>
              </div>
            </div>
          </div>
          <div id='sub-container-right'>
            <div>
              <h3 className='mb3'>Choose an aToken</h3>
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
              <h3 className='mb3'>Choose eyes</h3>
              <div className='pixel-border-container placeholder-container'>
                {Array.from(Array(4), (e, i) => {
                  return <span key={i}></span>;
                })}
              </div>
            </div>
            <div>
              <h3 className='mb3'>Choose wearables</h3>
              <div className='pixel-border-container placeholder-container'>
                {Array.from(Array(4), (e, i) => {
                  return <span key={i}></span>;
                })}
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
      <img
        src={powered_by_chainlink_image}
        alt='powered_by_chainlink'
        id='powered_by_image'
      />
      <div id='secondary-bg'></div>
    </section>
  );
};

export default Index;
