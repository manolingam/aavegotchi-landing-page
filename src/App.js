import Header from './components/Header';

import './App.scss';

import overlay_one from './assets/pixel_overlay_one.svg';
import overlay_two from './assets/pixel_overlay_two.svg';
import overlay_three from './assets/pixel_overlay_three.svg';
import overlay_six from './assets/pixel_overlay_six.svg';
import overlay_seven from './assets/pixel_overlay_seven.svg';

import sub_overlay_one from './assets/sub_overlay_one.svg';
import sub_overlay_two from './assets/sub_overlay_two.svg';
import sub_overlay_three from './assets/sub_overlay_three.svg';

import gotchigang from './assets/gotchigang.svg';

function App() {
  return (
    <div className='app'>
      <Header />
      <section id='one'>
        <img src={overlay_one} alt='overlay pixel' />
        <div className='sub-container-one'>
          <img src={gotchigang} alt='gotchigang' id='gotchigang' />
        </div>
        <div className='sub-container-two'>
          <div className='title-tag'>
            <p>Make nifty friends,</p>
            <p>earn crypto loot!</p>
          </div>
          <p id='explainer'>
            Aavegotchi is a DeFi-enabled crypto collectibles game that allows
            players to create and stake NFT avatars (called Gotchi) with
            interest-generating tokens.
          </p>
          <button>play</button>
        </div>
      </section>
      <section id='two'>
        <img id='sub-overlay-one' src={sub_overlay_one} alt='overlay pixel' />
        <img id='sub-overlay-two' src={sub_overlay_two} alt='overlay pixel' />
        <img
          id='sub-overlay-three'
          src={sub_overlay_three}
          alt='overlay pixel'
        />
        <img src={overlay_two} alt='overlay pixel' />
      </section>
      <section id='three'>
        <img src={overlay_three} alt='overlay pixel' />
      </section>
      <section id='four'>
        {/* <img id='overlay' src={overlay_four} alt='overlay pixel' /> */}
        <div id='secondary-bg'></div>
      </section>
      <section id='five'>
        <div id='secondary-bg'></div>
      </section>
      <section id='six'>
        <img src={overlay_six} alt='overlay pixel' />
      </section>
      <section id='seven'>
        <div id='top'>
          <img id='sub-overlay' src={overlay_seven} alt='overlay pixel' />
        </div>
        <div id='bottom'></div>
      </section>
    </div>
  );
}

export default App;
