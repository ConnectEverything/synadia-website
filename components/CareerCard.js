import React from 'react';

export default class PricingCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <dl className="content">
          <dd className="title">{this.props.data.title}</dd>
          <dt>Location: Remote</dt>
          <dt>Level: Mid to Senior</dt>
      </dl>
        <a
          className="action"
          href={this.props.data.to}
          id={this.props.data.title.replace(/\s+/g, '-').toLowerCase()}
        >
          {this.props.data.ctaText}
        </a>
        <style jsx>{`
          .wrapper {
            position: relative;
            background: var(--color-primary);
            width: 20.835vw;
            min-width: 280px;
            max-width: 400px;
            margin-bottom: 4rem;
          }

          .content {
            background: #1a1c1d;
            margin: 1px;
            padding: 1rem 2rem;
            padding-bottom: 5rem;
            height: 100%;
          }

          dt,
          dd {
            text-align: left;
          }

          dt {
            padding-top: 1rem;
          }

          dd {
            padding-bottom: 1rem;
            padding-top: 1rem;
            border-bottom: 1px solid rgba(37, 219, 226, 0.2);
          }

          .title {
            text-transform: uppercase;
            font-size: 1.25rem;
            font-weight: 600;
            letter-spacing: 1.6px;
          }

          .price p {
            position: relative;
            display: inline-block;
            font-size: 5.375rem;
            line-height: 1em;
            font-weight: 600;
            margin: 0;
            color: var(--color-primary);
          }

          .price span {
            position: absolute;
            top: 0;
            left: 0;
            vertical-align: super;
            font-size: 40%;
            transform: translate(-100%, -10%);
          }

          .price .period {
            font-size: 18.8%;
            left: initial;
            right: 0;
            vertical-align: baseline;
            transform: translate(100%, 25%);
          }

          dt:not(.title) {
            font-size: 1.2rem;
            font-weight: 400;
            letter-spacing: -0.76px;

          }

          dt:not(.title) span {
            text-transform: uppercase;
            font-size: 50%;
          }

          dt.appendix {
            font-size: 1.25rem;
            letter-spacing: -0.59px;
          }

          .appendix a {
            color: var(--color-primary);
          }

          dd:not(.price) {
            font-size: 1.25rem;
            letter-spacing: -0.5px;
          }

          .action {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 45%;
            text-align: center;
            padding: 1rem 0;
            font-size: 1.25rem;
            font-weight: 600;
            background: var(--horizontal-gradient);
            transform: translate(-50%, 50%);
            transition: transform 200ms ease-in-out;
          }

          .action:hover {
            color: var(--color-font);
            transform: translate(-50%, 37%);
          }
        `}</style>
      </div>
    );
  }
}
