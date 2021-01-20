import React from 'react';

import './styles.scss';

const Index = () => {
  return (
    <section id='seven'>
      <div id='top-container'>
        <div id='sub-overlay'></div>
        <h3>Sign up to be notified when new features are released!</h3>
        <div>
          <input placeholder='user@email.com'></input>
          <button>Remind me</button>
        </div>
      </div>
      <div id='bottom-container'></div>
    </section>
  );
};

export default Index;
