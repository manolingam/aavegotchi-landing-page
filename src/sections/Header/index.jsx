import React from 'react';

import './styles.scss';

import header_logo from '../../assets/logos/header_logo.svg';

const nav_items = ['wiki', 'blog', 'governance'];

const Index = () => {
  return (
    <header>
      <div className='inner-container'>
        <div id='header-pixel-divider'></div>
        <img src={header_logo} alt='logo' id='header_logo' />
        <div>
          {nav_items.map((item, index) => {
            return (
              <span key={index}>
                [<p>{item}</p>]
              </span>
            );
          })}
        </div>
        <button>play</button>
      </div>
    </header>
  );
};

export default Index;
