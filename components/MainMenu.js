import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import ScrollTo from './ScrollTo';
import SocialItems from './SocialItems';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      isTop: true,
      vpWidth: null
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 1;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  updateWindowDimensions() {
    this.setState({ vpWidth: window.innerWidth });
  }

  componentWillUnmount() {
    this.state.vpWidth;
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  renderMenu() {
    return this.state.vpWidth > 1024
      ? this.renderDesktopMenu()
      : this.renderMobileMenu();
  }

  renderDesktopMenu() {
    return (
      <React.Fragment>
        <nav>
          <ul className="navigation">
            <li>
              <ScrollTo onClick={() => this.closeMenu()} href="about">
                About
              </ScrollTo>
            </li>
            <li>
              <ScrollTo onClick={() => this.closeMenu()} href="team">
                Team
              </ScrollTo>
            </li>
            <li>
              <ScrollTo onClick={() => this.closeMenu()} href="join-us">
                Join us
              </ScrollTo>
            </li>
          </ul>
        </nav>

        <SocialItems />

        <style jsx>{`
          .navigation {
            display: inline-block;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .navigation li {
            display: inline-block;
            margin: 0 1rem;
          }
          .navigation li:first-child {
            margin-left: 0;
          }
          .navigation li:last-child {
            margin-right: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }

  renderMobileMenu() {
    return (
      <Menu
        right
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <nav>
          <ScrollTo onClick={() => this.closeMenu()} href="about">
            About
          </ScrollTo>
          <ScrollTo onClick={() => this.closeMenu()} href="team">
            Team
          </ScrollTo>
          <ScrollTo onClick={() => this.closeMenu()} href="join-us">
            Join us
          </ScrollTo>
        </nav>
        <SocialItems />
        <style jsx global>{`
          /* Position and sizing of burger button */
          .bm-burger-button {
            position: relative;
            width: 1.4rem;
            height: 14px;
          }

          /* Color/shape of burger icon bars */
          .bm-burger-bars {
            position: absolute;
            height: 2px !important;
            border-radius: 4px;
            left: 0;
            right: 0;
            background-color: var(--color-font);
          }

          .bm-burger-bars:nth-child(1) {
            top: 0 !important;
          }
          .bm-burger-bars:nth-child(2) {
            top: 50% !important;
            transform: translateY(-50%);
          }
          .bm-burger-bars:nth-child(3) {
            top: 100% !important;
            transform: translateY(-100%);
          }

          .bm-cross-button {
            right: 4vw !important;
            top: 4vw !important;
          }

          /* Color/shape of close button cross */
          .bm-cross {
            cursor: pointer;
            background: var(--color-font);
            height: 20px !important;
          }

          /* General sidebar styles */
          .bm-menu {
            background: var(--color-quaternary) !important;
            padding: 4em 1.5em 0;
            font-size: 1.15em;
            transition: all 400ms ease;
          }

          .bm-menu button {
            width: 80%;
            margin: 1rem 0;
          }

          .bm-menu button:first-of-type {
            margin-top: 30%;
          }

          .bm-menu-wrap {
            background: var(--color-quaternary) !important;
            top: 0;
          }

          /* Wrapper for item list */
          .bm-item-list {
            padding: 0.8em;
          }

          /* Styling of overlay */
          .bm-overlay {
            top: 0;
            left: 0;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 1001 !important;
            background: var(--color-quaternary) !important;
          }
        `}</style>
      </Menu>
    );
  }

  render() {
    return <React.Fragment>{this.renderMenu()}</React.Fragment>;
  }
}
