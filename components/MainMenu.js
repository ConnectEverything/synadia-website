import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import ScrollTo from './ScrollTo';
import Link from './ActiveLink';
import HeaderSocialItems from './HeaderSocialItems';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      vpWidth: null
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
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

  renderDesktopMenu() {
    return (
      <React.Fragment>
        <nav>
          <ul className="navigation">
            <li>
              <ScrollTo className="navigation-item" href="about">
                About
              </ScrollTo>
            </li>
            <li>
              <ScrollTo className="navigation-item" href="team">
                Team
              </ScrollTo>
            </li>
            {/* <li>
              <Link activeClassName="active" href="/ngs/pricing">
                <a className="navigation-item">Pricing</a>
              </Link>
            </li> */}
            <li>
              <Link activeClassName="active" href="/ngs/how-it-works">
                <a className="navigation-item">How it works</a>
              </Link>
            </li>
            <li>
              <a className="navigation-item" href="mailto:jobs@synadia.com">
                Join us
              </a>
            </li>
          </ul>
        </nav>

        <HeaderSocialItems />

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
        width={'100%'}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <nav>
          <ScrollTo
            className="navigation-item"
            onClick={() => this.closeMenu()}
            href="about"
          >
            About
          </ScrollTo>
          <ScrollTo
            className="navigation-item"
            onClick={() => this.closeMenu()}
            href="team"
          >
            Team
          </ScrollTo>

          {/* <Link activeClassName="active" href="/ngs/pricing">
            <a className="navigation-item">Pricing</a>
          </Link> */}

          <Link activeClassName="active" href="/ngs/how-it-works">
            <a className="navigation-item">How it works</a>
          </Link>

          <a className="navigation-item" href="mailto:jobs@synadia.com">
            Join us
          </a>
        </nav>
        <HeaderSocialItems />
        <style jsx global>{`
          /* Position and sizing of burger button */
          .bm-burger-button {
            position: relative;
            width: 3rem;
            height: 30px;
          }

          .bm-burger-button:before {
            content: 'Menu';
            font-family: var(--font-primary);
            font-size: 1.2rem;
            color: var(--color-font);
            position: absolute;
            left: -5px;
            top: 50%;
            transform: translate(-120%, -50%);
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
            width: 30px !important;
            height: 45px !important;
            right: 50px !important;
            top: 40px !important;
          }

          /* Color/shape of close button cross */
          .bm-cross {
            cursor: pointer;
            background: var(--color-font);
            height: 40px !important;
          }

          /* General sidebar styles */
          .bm-menu {
            background: var(--color-quaternary) !important;
            padding: 4em 1.5em 0;
            font-size: 1.15em;
            transition: all 400ms ease;
          }

          .bm-menu-wrap {
            background: var(--color-quaternary) !important;
            top: 0;
          }

          /* Wrapper for item list */
          .bm-item-list {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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

          .bm-menu-wrap {
            width: 100vw !important;
            height: 80vh !important;
          }

          .bm-item .navigation-item {
            margin: 3rem 0;
            display: block;
            padding: 0;
            width: auto;
            font-size: 1.7rem;
          }
        `}</style>
      </Menu>
    );
  }

  render() {
    return this.state.vpWidth > 1024
      ? this.renderDesktopMenu()
      : this.renderMobileMenu();
  }
}
