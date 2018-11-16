import React from 'react';
import TeamMember from './TeamMember';

export default class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  shuffle(originalArray) {
    let shuffledArray = originalArray.slice(0);

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i]
      ];
    }
    return shuffledArray;
  }

  renderDesktopMembers() {
    return this.props.members.map((item, i) => (
      <TeamMember
        key={i}
        id={i}
        name={item.name}
        position={item.position}
        bio={item.bio}
        links={item.links}
      />
    ));
  }

  renderMobileMembers() {
    const scrambledArray = this.shuffle(this.props.members);

    return scrambledArray.map((item, i) => (
      <TeamMember
        key={i}
        id={i}
        name={item.name}
        thumbnail={`static/images/people/${item.name.split(' ').join('')}.png`}
        position={item.position}
        bio={item.bio}
        links={item.links}
      />
    ));
  }

  render() {
    return (
      <div className="outer">
        <div className="inner desktop">{this.renderDesktopMembers()}</div>
        <div className="inner mobile">{this.renderMobileMembers()}</div>
        <style jsx>{`
          .outer {
            position: relative;
            width: 100vw;
            overflow: hidden;
            scroll-snap-type: x mandatory;
            scroll-snap-points-x: repeat(80vw);
            background-image: url('/static/images/bg.png');
            background-repeat: no-repeat;
            background-size: 200%;
            background-position: 50% 10%;
          }

          .outer:before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              transparent 10%,
              var(--color-quaternary),
              var(--color-quaternary),
              var(--color-quaternary)
            );
          }

          .inner {
            display: flex;
            flex-wrap: nowrap;
            scroll-snap-align: start;
            -webkit-overflow-scrolling: touch;
            margin-top: 5rem;
            margin-bottom: -50px; /* maximum width of scrollbar */
            padding-bottom: 50px; /* maximum width of scrollbar */
            padding-left: 10vw;
            overflow-y: hidden;
            overflow-x: scroll;
          }

          .mobile {
            display: flex;
          }

          .desktop {
            display: none;
          }

          @media (min-width: 1023px) {
            .outer {
              background-size: contain;
            }

            .inner {
              max-width: 1400px;
              flex-wrap: wrap;
              justify-content: center;
              padding-left: 0;
              margin-left: auto;
              margin-right: auto;
            }

            .mobile {
              display: none;
            }

            .desktop {
              display: flex;
            }
          }
        `}</style>
      </div>
    );
  }
}
