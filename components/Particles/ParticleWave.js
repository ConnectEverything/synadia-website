import React from 'react';
import Particles from 'react-particles-js';

export default class ParticleWave extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vpWidth: null,
      styles: {
        height: '40vh',
        animation: 'none'
      }
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateWindowDimensions() {
    this.setState({ vpWidth: window.innerWidth });
  }

  render() {
    return (
      <div className="particles__wrapper">
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: false
                }
              },
              color: {
                value: '#25dbe2'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 8
                }
              },
              opacity: {
                value: 0.5,
                random: true
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: true,
                  speed: 30,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: this.state.vpWidth < 1024 ? 150 : 5,
                color: '#25dbe2',
                opacity: 0.5,
                width: 2
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'top',
                random: true,
                straight: true,
                out_mode: 'bounce',
                bounce: true
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'grab'
                }
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 0.6
                  }
                }
              }
            },
            retina_detect: true
          }}
          style={this.state.styles}
        />
        <style jsx global>{`
          .particles__wrapper {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 40vh;
            overflow: hidden;
          }
          .particles__wrapper > div {
            width: 200vw;
            height: 40vh;
            opacity: 0.6;
            transform: translateX(-10%);
          }

          @media (min-width: 768px) {
            .particles__wrapper > div {
              width: 100%;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    );
  }
}
