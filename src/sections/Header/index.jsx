import React from 'react';

import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import './styles.scss';

import header_logo from '../../assets/logos/header_logo.svg';
import ham_lines_icon from '../../assets/icons/ham_lines_icon.svg';

const nav_items = ['wiki', 'blog', 'governance'];

const Index = () => {
  return (
    <header>
      <div id='header-pixel-divider'></div>
      <div className='grid-container'>
        <div></div>
        <div className='core-container'>
          <img src={header_logo} alt='logo' id='header_logo' />
          <div className='links-container'>
            {nav_items.map((item, index) => {
              return (
                <span key={index}>
                  [<p>{item}</p>]
                </span>
              );
            })}
          </div>
          <div className='button-container'>
            <button id='play-button'>play</button>
            <Menu>
              <MenuButton aria-label='Options' size='xs' variant='outline'>
                <img src={ham_lines_icon} alt='ham-lines' id='ham-lines' />
              </MenuButton>
              <MenuList>
                {nav_items.map((item, index) => {
                  return <MenuItem key={index}>{item}</MenuItem>;
                })}
              </MenuList>
            </Menu>
          </div>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Index;
