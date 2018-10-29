import React from 'react';
import AOS from 'aos';
import Plx from 'react-plx';
import Header from '../components/Header';
import ParticleWave from '../components/Particles/ParticleWave';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: [
        {
          name: 'Derek Collison',
          position: 'Founder & CEO',
          bio:
            'Entrepreneur, Investor, and Technologist. Creator of @nats_io and @cloudfoundry',
          links: {
            twitter: 'derekcollison',
            linkedin: 'derekcollison',
            github: 'derekcollison'
          }
        },
        {
          name: 'Colin Sullivan',
          position: 'Product Management',
          bio: 'Product Manager',
          links: {
            twitter: 'ColinSullivan01',
            linkedin: 'colinsullivan',
            github: 'ColinSullivan1'
          }
        },
        {
          name: 'Ginger Collison',
          position: 'Community',
          bio: 'Developer Advocate & Community Manager',
          links: {
            twitter: 'crashgingerly',
            linkedin: 'ginger-collison',
            github: 'gcolliso'
          }
        },
        {
          name: 'Ivan Kozlovic',
          position: 'Engineering',
          bio: 'Software Engineer',
          links: {
            twitter: 'ivankozlovic',
            linkedin: 'ivankozlovic',
            github: 'kozlovic'
          }
        },
        {
          name: 'Waldemar Quevedo',
          position: 'Engineering',
          bio: 'Software Engineer',
          links: {
            twitter: 'wallyqs',
            linkedin: 'waldemarquevedo',
            github: 'wallyqs'
          }
        },
        {
          name: 'Alberto Ricart',
          position: 'Engineering',
          bio: 'Software Engineer',
          links: {
            twitter: 'albertoricart',
            linkedin: 'albertoricart',
            github: 'aricart'
          }
        },
        {
          name: 'Stephen Asbury',
          position: 'Engineering',
          bio: 'Software Engineer',
          links: {
            twitter: 'thesasbury',
            linkedin: 'stasbury',
            github: 'sasbury'
          }
        },
        {
          name: 'David Kemper',
          position: 'Engineering',
          bio: 'Software Engineer',
          links: {
            linkedin: 'david-kemper-531bb038',
            github: 'davidkemper'
          }
        }
      ]
    };
  }

  componentDidMount() {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out'
    });
  }

  render() {
    const foregroundParallax = [
      {
        start: 'self',
        startOffset: 0,
        duration: 1000,
        easing: 'easeInOut',
        properties: [
          {
            startValue: 100,
            endValue: -50,
            property: 'translateY'
          }
        ]
      }
    ];

    return (
      <main>
        <Header />
        <section className="first-fold">
          <ParticleWave />
          <h1>
            <div className="word">
              <div className="letter" data-aos="fade-up" data-aos-delay="0">
                C
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="50">
                o
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="100">
                n
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="150">
                n
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="200">
                e
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="250">
                c
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="300">
                t
              </div>
            </div>
            {` `}
            <div className="word">
              <div className="letter" data-aos="fade-up" data-aos-delay="350">
                E
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="400">
                v
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="450">
                e
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="500">
                r
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="550">
                y
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="600">
                t
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="650">
                h
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="700">
                i
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="750">
                n
              </div>
              <div className="letter" data-aos="fade-up" data-aos-delay="800">
                g
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="850" className="freckle">
              .
            </div>
          </h1>
        </section>
        <section id="about" className="about">
          <Plx className="foreground" parallaxData={foregroundParallax}>
            <h3>
              At Synadia, we believe there is an opportunity{' '}
              <br className="desktop--only" />
              to create the first decentralized,{' '}
              <br className="desktop--only" />
              <span className="highlight">
                secure global utility, powered by NATSio,{' '}
              </span>
              <br className="desktop--only" />
              to connect all digital systems, services and devices.
            </h3>
          </Plx>
          <Plx className="foreground" parallaxData={foregroundParallax}>
            <h3>
              This offering will be decentralized by design,{' '}
              <br className="desktop--only" />
              secure by default, globally available,{' '}
              <br className="desktop--only" />
              and easy to use and manage.
            </h3>
          </Plx>
        </section>
        <section id="team">
          <Plx className="foreground" parallaxData={foregroundParallax}>
            <h2>Meet the Team</h2>
            <h4>
              With 100+ years of combined experience in engineering and
              messaging, the good people of Synadia provide a wealth of
              knowledge aimed at challenging how the world connects.
            </h4>
          </Plx>
          <Team members={this.state.team} />
        </section>
        <Footer />
        <style jsx>{`
          .first-fold {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: calc(100vh - 200px);
            width: 100vw;
            margin: 100px auto 0 auto;
          }

          h1 .freckle {
            display: inline-block;
            position: relative;
          }

          h1 .freckle:after {
            position: absolute;
            right: 0;
            bottom: 0;
            height: 1.2rem;
            width: 1.2rem;
            border-radius: 100%;
            background: var(--horizontal-gradient);
            transform: translate(-15%, -65%);
          }

          .about {
            margin-bottom: 12rem;
          }

          .word {
            display: inline-block;
          }

          .letter {
            display: inline-block;
          }

          .highlight {
            color: var(--color-secondary);
          }

          @media (min-width: 768px) {
            .first-fold {
              height: calc(100vh - 100px);
            }
            .freckle:after {
              content: '';
            }
          }
        `}</style>
      </main>
    );
  }
}
