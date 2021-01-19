import React from 'react';

import './styles.scss';

import pixel_overlay_header from '../../assets/overlays/pixel_overlay_header.svg';
import header_logo from '../../assets/logos/header_logo.svg';

const Index = () => {
  return (
    <header>
      <img
        src={pixel_overlay_header}
        alt='pixel group'
        id='header-pixel-divider'
      />
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
