import React from 'react';

export default class AnimateLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      didMount: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true });
    }, this.props.delay || 0);
  }

  renderComponent() {
    return (
      <div className="fade-in">
        {this.props.children}
        <style jsx>{`
          .fade-in {
            opacity: 0;
            animation: fadeIn 1s ease-in-out forwards;
            z-index: var(--z-index-2);
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }

  render() {
    const { didMount } = this.state;

    return didMount ? this.renderComponent() : '';
  }
}
