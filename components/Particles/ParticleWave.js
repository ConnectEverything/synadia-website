import React from 'react';
import Particles from 'react-particles-js';
import settings from './settings.json';

export default class ParticleWave extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Particles
        params={settings}
        style={{
          position: 'absolute',
          left: '0',
          top: '-130px',
          willChange: 'transform',
          animation: 'wave 10s infinite alternate'
        }}
      />
    );
  }
}
