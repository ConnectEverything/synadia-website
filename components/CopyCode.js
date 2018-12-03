import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class CopyCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    };

    this.copyAction = this.copyAction.bind(this);
  }

  copyAction() {
    this.setState({ copied: true });

    setTimeout(() => {
      this.setState({
        copied: false
      });
    }, 1000);
  }

  render() {
    return (
      <div className="wrapper">
        <code>{this.props.content}</code>
        <CopyToClipboard
          text={this.props.content.replace(/\$/g, '')}
          onCopy={this.copyAction}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="41">
            <g fill="none" fillRule="evenodd">
              <path fill="#199BFC" d="M28.7 0H0v34.746h3.5V3.475h25.2z" />
              <path
                d="M6.3 6.254H35v23.28L23.52 41H6.3V6.254zm25.2 21.89V9.73H9.8v27.796h12.25l9.45-9.38zm-9.8-.347v6.949h-3.5V24.322h10.5v3.475h-7z"
                fill="#25DBE2"
              />
            </g>
          </svg>
        </CopyToClipboard>
        {this.state.copied ? <span>Copied!</span> : null}
        <style jsx>{`
          .wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            padding: 1.2em 1.3em;
            background-color: #1a1c1d;
            margin: 2.5rem 0;
          }

          code {
            color: var(--color-secondary);
            word-break: break-all;
            line-height: 1.5em;
          }

          svg {
            transform: scale(0.7);
            cursor: pointer;
            flex: 0 0 auto;
            margin-left: 1rem;
          }

          span {
            position: absolute;
            top: 0;
            right: 4%;
            animation: fadeUp 400ms ease-in-out 500ms forwards;
            transform-origin: bottom center;
          }

          @keyframes fadeUp {
            to {
              opacity: 0;
              transform: translateY(-100%);
            }
          }

          @media (min-width: 1024px) {
            .wrapper {
              width: 60%;
            }
            span {
              right: -10%;
            }
          }
        `}</style>
      </div>
    );
  }
}
