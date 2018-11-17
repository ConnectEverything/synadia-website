import React from 'react';
import Particles from 'react-particles-js';

export default class ParticleWave extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vpWidth: null
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.setState({ vpWidth: window.innerWidth });

    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
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
                value: 1,
                random: false
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
                distance: 130,
                color: '#199bfc',
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
                },
                resize: true
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
          className="desktop--only"
        />
        <Particles
          params={{
            particles: {
              number: {
                value: 35,
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
                  speed: 15,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 100,
                color: '#199bfc',
                opacity: 0.45,
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
                },
                resize: true
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
          className="mobile--only"
        />

        <style jsx global>{`
          .particles__wrapper {
            position: absolute;
            bottom: 0;
            width: 100vw;
            height: 40vw;
            max-height: 15rem;
            overflow: hidden;
            z-index: 1;
            transform: translateY(50%);
          }

          .particles__wrapper > div {
            width: 120vw;
            height: 40vw;
            max-height: 15rem;
            opacity: 0.6;
            transform: translateX(-10%);
          }

          @media (min-width: 1024px) {
            .particles__wrapper {
              transform: translateY(50%);
            }

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
