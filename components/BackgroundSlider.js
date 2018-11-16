import React from 'react';

class BackgroundSlider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="slider-container">
        <style jsx>{`
          .slider-container {
            overflow: hidden;
            white-space: nowrap;
          }
          .slider-content-wrapper {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            animation: slide ${this.props.duration * 2 || 10}s linear infinite;
          }
          .slider-content-wrapper > div {
            display: inline-flex;
          }
          @keyframes slide {
            to {
              transform: translate3d(-50%, 0, 0);
            }
          }
          @media (any-pointer: coarse) and (max-width: 600px) {
            .slider-container {
              overflow-x: auto;
              scroll-behavior: smooth;
              -webkit-overflow-scrolling: touch;
              scroll-snap-points-x: repeat(100px);
              scroll-snap-type: mandatory;
            }
          }
        `}</style>
        <div className="slider-content-wrapper">
          <div>{this.props.children}</div>
          <div>{this.props.children}</div>
          <div>{this.props.children}</div>
          <div>{this.props.children}</div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default BackgroundSlider;
