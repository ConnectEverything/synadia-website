import React from 'react';

export default class AnimateUnLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      didMount: false
    };
  }

  componentWillUnmount() {
    setTimeout(() => {
      this.setState({ didMount: true });
    }, 0);
  }

  render() {
    const { didMount } = this.state;

    return (
      <div className={`fade-out ${!didMount && 'visible'}`}>
        {this.props.children}
        <style jsx>{`
          .fade-out {
            opacity: 0;
          }
          .fade-out.visible {
            transition: opacity 1s ease-in;
            opacity: 1;
          }
        `}</style>
      </div>
    );
  }
}
