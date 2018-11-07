import React from 'react';
import AOS from 'aos';
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
          bio:
            'Colin loves to make complex software easy for people to use and understand. He has extensive experience developing messaging products and designing distributed systems and has been solving tough problems for over 20 years. Prior to Synadia, Colin has worked at Apcera, TIBCO Software, Talarian, and PLATINUM technology. In his spare time, Colin is an outdoor enthusiast and still occasionally tries to climb mountains.',
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
          bio:
            'A software engineer who has been working in Messaging for the last 17 years, so he knows a thing or two about the challenges of building distributed systems.',
          links: {
            twitter: 'ivankozlovic',
            linkedin: 'ivankozlovic',
            github: 'kozlovic'
          }
        },
        {
          name: 'Waldemar Quevedo',
          position: 'Engineering',
          bio:
            'Waldemar works on the NATS project and its ecosystem and is the author of "Practical NATS", one of the first books about the project. Previously at Apcera, he worked on a container orchestration system that used NATS for its control plane and also formed part of the PaaS team at Rakuten in Tokyo which was one of the early adopters of CloudFoundry for production usage.',
          links: {
            twitter: 'wallyqs',
            linkedin: 'waldemarquevedo',
            github: 'wallyqs'
          }
        },
        {
          name: 'Alberto Ricart',
          position: 'Engineering',
          bio:
            "A software engineer who has been fitting round pegs in square holes for over 26 years, Alberto is a lead architect and maintainer for NATS anything Nodejs, and Synadia's cloud-based applications and tools.",
          links: {
            twitter: 'albertoricart',
            linkedin: 'albertoricart',
            github: 'aricart'
          }
        },
        {
          name: 'Stephen Asbury',
          position: 'Engineering',
          bio:
            'Before joining Synadia Stephen was an engineering manager at Google, engineer at Fog Creek, architect at TIBCO, and maniac at NeXT. For some reason he has a PhD in Nuclear Engineering, and is trying to figure out how to use that with NATS.',
          links: {
            twitter: 'thesasbury',
            linkedin: 'stasbury',
            github: 'sasbury'
          }
        },
        {
          name: 'David Kemper',
          position: 'Engineering',
          bio:
            'An engineer leveraging over 20 years of systems development experience into public cloud devops.',
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
    return (
      <main>
        <Header />
        <section id="home" className="first-fold">
          <ParticleWave />
          <h1>
            Connect Everything
            <div className="freckle">.</div>
          </h1>
        </section>
        <section id="about" className="about">
          <h3>
            At Synadia, we believe there is an opportunity{' '}
            <br className="desktop--only" />
            to create the first decentralized, <br className="desktop--only" />
            <span className="highlight">
              secure global utility,powered by{' '}
              <a className="link" href="https://nats.io">
                NATS.io
              </a>
              ,{' '}
            </span>
            <br className="desktop--only" />
            to connect all digital systems, services and devices.
          </h3>
          <h3>
            This offering will be decentralized by design,{' '}
            <br className="desktop--only" />
            secure by default, globally available,{' '}
            <br className="desktop--only" />
            and easy to use and manage.
          </h3>
        </section>
        <section id="team">
          <h2>Meet the Team</h2>
          <h4>
            With 100+ years of combined experience in engineering and messaging,
            the good people of Synadia provide a wealth of knowledge aimed at
            challenging how the world connects.
          </h4>
          <Team members={this.state.team} />
        </section>
        <Footer />
        <style jsx>{`
          .first-fold {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 74vh;
            width: 100vw;
            margin: 100px auto 0 auto;
            margin-bottom: 5vh;
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
            opacity: 0;
            animation: appear 1s ease 50ms forwards;
          }

          @keyframes appear {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .about {
            margin-bottom: 12rem;
          }

          .highlight {
            color: var(--color-secondary);
          }

          @media (min-width: 768px) {
            .first-fold {
              justify-content: center;
              height: 65vh;
              margin-bottom: 35vh;
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
