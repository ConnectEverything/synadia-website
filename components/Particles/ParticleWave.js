import React from 'react';
import Particles from 'react-particles-js';
import settings from './settings.json';

export default class ParticleWave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vpWidth: null
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
  }

  updateWindowDimensions() {
    this.setState({ vpWidth: window.innerWidth });
  }

  render() {
    const mobileStyles = {
      position: 'absolute',
      left: '0',
      top: '90px',
      animation: 'none'
    };

    const desktopStyles = {
      position: 'absolute',
      left: '0',
      top: '0',
      willChange: 'transform',
      animation: this.props.static ? 'none' : 'wave 10s infinite alternate'
    };

    return (
      <Particles
        params={settings}
        style={this.state.vpWidth > 1024 ? desktopStyles : mobileStyles}
      />
    );
  }
}
