import React from 'react';
import Logo from './Logo';
import MainMenu from './MainMenu';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Logo />
        <MainMenu />
        <style jsx>{`
          header {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1.8rem 0;
            border-bottom: 2px solid #052034;
          }
        `}</style>
      </header>
    );
  }
}
