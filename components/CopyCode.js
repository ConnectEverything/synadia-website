import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class CopyCode extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <CopyToClipboard text={this.props.content}>
          <code>{this.props.content}</code>
        </CopyToClipboard>
        <style jsx>{`
          code {
            display: block;
            width: 50%;
            padding: 1.2em 1.3em;
            background-color: #1a1c1d;
            color: var(--color-secondary);
          }
        `}</style>
      </React.Fragment>
    );
  }
}
