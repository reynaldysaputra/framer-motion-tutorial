import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootApplication from './YoutubeTutorial/01_netNinja/root';
import './MeTutorial/motion.css';
import Application_1 from './MeTutorial/01_Animation/app';

ReactDOM.render(
  <React.StrictMode>
      <Application_1 />
  </React.StrictMode>,
  document.getElementById('root')
);