import React from 'react';
import AOS from 'aos';
import Header from '../components/Header';
import Team from '../components/Team';
import Footer from '../components/Footer';
import AnimateLoad from '../components/AnimateLoad';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: [
        {
          name: 'Derek Collison',
          position: 'Founder & CEO',
          bio:
            "Derek is an entrepreneur, industry veteran, and pioneer in large-scale distributed systems. He has held executive positions at Google, VMware, and TIBCO Software. He is the creator of NATS.io and his goal is to provide a secure global utility to connect all of the world's digital systems, services and devices.",
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
            'An engineer leveraging over 20 years of systems development experience into public cloud devops. David is an avid sci-fi reader and a master of 80s trivia.',
          links: {
            linkedin: 'david-kemper-531bb038',
            github: 'davidkemper'
          }
        },
        {
          name: 'Jaime Piña',
          position: 'Engineering',
          bio:
            'Jaime was a self-driving car whisperer at Cruise Automation before joining Synadia. He worked on systems that helped distressed vehicles when making challenging maneuvers on San Francisco streets. During off-hours, Jaime is always tinkering with something.',
          links: {
            twitter: 'variadico',
            linkedin: 'jaime-piña',
            github: 'variadico'
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

          <a className="button" href="/ngs/pricing" data-text="Introducing NGS">
            Introducing NGS
          </a>

          <div className="background">
            <AnimateLoad delay={100}>
              <img src="/static/images/bg-first-fold.png" alt="" />
            </AnimateLoad>
          </div>
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
            Synadia maintains and leads development of <a href="https://nats.io">NATS.io</a>. <br className="desktop--only" />
	    Along with the NGS offering, Synadia also provides Commercial Support, Consulting, NRE, and Training. <br className="desktop--only" />
            Feel free to <a className="link" href="mailto:info@synadia.com" target="_blank">Contact Us</a> for more information.
          </h3>
        </section>
        <section id="team">
          <h2>Meet the Team</h2>
          <h4>
            With over a century of combined experience in distributed systems and messaging technologies,
            the team at Synadia can provide a wealth of knowledge aimed at challenging how the world connects.
          </h4>
          <Team members={this.state.team} />
        </section>
        <Footer />
        <style jsx>{`
          .first-fold {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100vw;
            margin: 0 auto;
            height: 100vh;
          }

          .first-fold .button {
            margin-top: 2rem;
            font-size: 1.5rem;
          }

          .first-fold .background {
            max-width: 100vw;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: var(--z-index-1);
          }

          .first-fold .button,
          h1 {
            position: relative;
            z-index: var(--z-index-2);
          }

          h1 {
            margin-top: -10rem;
          }

          .about {
            margin-bottom: 12rem;
          }

          .highlight {
            color: var(--color-secondary);
          }
        `}</style>
      </main>
    );
  }
}
