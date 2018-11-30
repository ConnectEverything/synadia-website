import React from 'react';
import Logo from './Logo';
import MainMenu from './MainMenu';
import InternalMenu from './InternalMenu';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 1;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <header className={this.state.isTop ? ' ' : 'sticky'}>
        <Logo responsive link={this.props.internal} />
        {this.props.internal ? <InternalMenu /> : <MainMenu />}
        <style jsx>{`
          header {
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            top: 0;
            z-index: var(--z-index-3);
            width: 100vw;
            background-color: var(--color-quaternary);
            padding: 1.8rem 0;
            border-bottom: 2px solid #052034;
            transform: translateY(-100%);
            animation: fadeDown 800ms ease 1s forwards;

            ${this.props.internal &&
              'animation: none; transform: translateY(0);'};
          }

          @keyframes fadeDown {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}</style>
      </header>
    );
  }
}
