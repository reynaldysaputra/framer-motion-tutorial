import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootApplication from './YoutubeTutorial/01_netNinja/root';
import './MeTutorial/motion.css';
import Application_1 from './MeTutorial/01_Animation/01_app';
import DynamicVariant from './MeTutorial/01_Animation/02_dynamicVariant';
import AnimationControl from './MeTutorial/01_Animation/03_AnimationControl';
import Containers from './MeTutorial/01_Animation/container';
import Applications from './StudiKasus/01_scrollEffect(1)/app';

ReactDOM.render(
  <React.StrictMode>
      <Applications />
  </React.StrictMode>,
  document.getElementById('root')
);