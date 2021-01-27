import React from 'react';

import './styles.scss';

const Index = () => {
  return (
    <section id='seven'>
      <div id='top-container'>
        <div className='grid-container'>
          <div></div>
          <div className='core-container'>
            <div id='sub-overlay'></div>
            <h3>Sign up to be notified when new features are released!</h3>
            <div className='input-container'>
              <input placeholder='user@email.com'></input>
              <button>Remind me</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div id='bottom-container'></div>
    </section>
  );
};

export default Index;
