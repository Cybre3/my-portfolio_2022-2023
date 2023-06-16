import React, { useState } from 'react';
import $ from 'jquery';

function HomeScreen(props) {
  const [fadeClass, setFadeClass] = useState('in');

  $(document).on('click', '#home-screen', () => {
    setTimeout(() => {
      window.location = '/main-menu';
    }, 3000);
    setFadeClass('out');
  });

  return (
    <div id="home-screen" className={`fade-${fadeClass} relative h-screen w-screen bg-black`}>
      <div className="mx-auto flex h-screen w-fit items-center text-6xl font-bold uppercase">
        <h1 className="text-red-500 shadow-lg shadow-red-500">Starrika</h1>
        <span className="w-fit scale-y-150 font-six-caps text-9xl font-medium tracking-tight text-stone-400 sepia">
          fsd
        </span>
        <h1 className="text-red-500 shadow-lg shadow-red-500">McCloud</h1>
      </div>
      <span className="absolute inset-x-0 bottom-32 mx-auto w-fit animate-pulse text-lg text-white">
        * Click to continue *
      </span>
    </div>
  );
}

export default HomeScreen;
