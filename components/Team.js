import React from 'react';
import TeamMember from './TeamMember';

export default class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vpWidth: null
    };
  }

  componentDidMount() {
    this.setState({ vpWidth: window.innerWidth });
  }

  render() {
    return (
      <div className="outer">
        <div className="inner">
          {this.props.members.map((item, i) => (
            <TeamMember
              key={i}
              id={i}
              name={item.name}
              position={item.position}
              bio={item.bio}
              links={item.links}
            />
          ))}
        </div>
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

          @media (min-width: 768px) {
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
          }
        `}</style>
      </div>
    );
  }
}
