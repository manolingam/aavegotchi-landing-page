import React from 'react';

import header_overlay from '../assets/pixel_overlay_header.svg';
import header_logo from '../assets/header_logo.svg';

const Header = () => {
  return (
    <header>
      <img src={header_overlay} alt='overlay pixel' id='header_overlay' />
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

export default Header;
