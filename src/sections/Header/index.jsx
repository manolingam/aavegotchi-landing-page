import React from 'react';

import './styles.scss';

import header_logo from '../../assets/logos/header_logo.svg';

const Index = () => {
  return (
    <header>
      <div id='header-pixel-divider'></div>
      <img src={header_logo} alt='logo' id='header_logo' />
      <div>
        <span>
          [<p>wiki</p>]
        </span>
        <span>
          [<p>blog</p>]
        </span>
        <span>
          [<p>governance</p>]
        </span>
      </div>
      <button>play</button>
    </header>
  );
};

export default Index;
