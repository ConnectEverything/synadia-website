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
            "Derek is an industry veteran and pioneer in large-scale distributed systems. He has held executive positions at Google, VMware, and TIBCO Software. He is the creator of NATS.io and his goal is to provide a secure global utility to connect all of the world's digital systems, services and devices.",
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
            'Prior to Synadia, Colin had been managing and developing messaging products for over 20 years at Apcera, TIBCO, Talarian, and PLATINUM. In his spare time, Colin is an outdoor enthusiast and still occasionally tries to climb mountains.',
          links: {
            twitter: 'ColinSullivan01',
            linkedin: 'colinsullivan',
            github: 'ColinSullivan1'
          }
        },
        {
          name: 'Ginger Collison',
          position: 'Community',
          bio:
            'Self-taught technologist, culinary chef by training, Ginger spent over 20 years in the Oracle bubble and is now basking in the glow of OSS.',
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
            'Waldemar, aka Wally, is a core maintainer of NATS and the author of "Practical NATS". Before joining Synadia, he worked on a container orchestration system that used NATS for its control plane at Apcera and formed part of the PaaS team at Rakuten in Tokyo.',
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
          <h1>Connect Everything</h1>
          <ParticleWave />
        </section>
        <section id="about" className="about">
          <h3>
            At Synadia, we believe there is an opportunity{' '}
            <br className="desktop--only" />
            to create the first decentralized, <br className="desktop--only" />
            secure global utility, powered by{' '}
            <a href="https://nats.io">NATS.io</a>,{' '}
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
            position: relative;
            width: 100vw;
            margin: 100px auto 0 auto;
            height: 65vh;
            margin-bottom: 15vh;
          }

          h1 {
            position: relative;
            z-index: 10;
          }

          .about {
            margin-bottom: 12rem;
          }

          .highlight {
            color: var(--color-secondary);
          }

          @media (min-width: 895px) {
            .first-fold {
              justify-content: center;
              margin-bottom: 35vh;
            }
          }
        `}</style>
      </main>
    );
  }
}
