import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class ScrollTo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      element: null,
      event_category: '',
      event_label: ''
    };
  }

  componentDidMount() {
    this.setState({ element: document.getElementById(this.props.href) });
    if (this.props.gtm) {
      this.setState({
        event_category: this.props.gtm.category,
        event_label: this.props.gtm.label
      });
    }
  }

  handleClick(cb) {
    if (this.state.event_category && this.state.event_label) {
      gtag('event', 'Click', {
        event_category: this.state.event_category,
        event_label: this.state.event_label
      });
    }

    if (cb) {
      cb();
    }
  }

  render() {
    return (
      <button
        onClick={() => this.handleClick(this.props.onClick)}
        className={this.props.className}
      >
        <AnchorLink offset="150" href={`#${this.props.href}`}>
          {this.props.children}
        </AnchorLink>
        <style jsx>{`
          button {
            cursor: pointer;
            color: var(--color-font);
          }
          button:hover {
            color: var(--color-secondary);
          }
        `}</style>
      </button>
    );
  }
}
