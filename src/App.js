import Header from './components/Header';
import One from './sections/One';
import Two from './sections/Two';
import Three from './sections/Three';

import './App.scss';

import overlay_six from './assets/pixel_overlay_six.svg';
import overlay_seven from './assets/pixel_overlay_seven.svg';

function App() {
  return (
    <div className='app'>
      <Header />
      <One />
      <Two />
      <Three />
      <section id='four'>
        {/* <img id='overlay' src={overlay_four} alt='overlay pixel' /> */}
        <div id='secondary-bg'></div>
      </section>
      <section id='five'>
        <div id='secondary-bg'></div>
      </section>
      <section id='six'>
        <img
          className='section-pixel-divider'
          src={overlay_six}
          alt='pixel group'
        />
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
