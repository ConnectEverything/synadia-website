import React from 'react';

export default class PricingCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`wrapper ${this.props.data.special && 'special'}`}>
        <p className="label">Most Popular</p>
        <dl className="content">
          <dt className="title">{this.props.data.title}</dt>
          <dd className="price">
            <span>$</span>
            {this.props.data.price}
          </dd>
          <dt>
            {this.props.data.messageSize}
            <span>{this.props.data.messageUnit}</span>
          </dt>
          <dd>Message Size</dd>
          <dt>{this.props.data.connections}</dt>
          <dd>Connections</dd>
          <dt>
            {this.props.data.montlyData}
            <span>gb</span>
          </dt>
          <dd>Monthly Data</dd>
          <dt className="appendix">
            {this.props.data.dataSharing && <a href="#">Data Sharing *</a>}
          </dt>
        </dl>
        <a className="action" href="#">
          {this.props.data.ctaText}
        </a>
        <style jsx>{`
          .wrapper {
            position: relative;
            background: var(--color-primary);
            width: 20.835vw;
            min-width: 280px;
            margin-bottom: 4rem;
          }

          .wrapper.special {
            background: var(--diagonal-gradient-inverted);
          }

          .wrapper.special .content {
            clip-path: polygon(0% 0%, 63% 0%, 100% 20%, 100% 100%, 0% 100%);
          }

          .wrapper.special .label {
            display: block;
          }

          .content {
            background: #1a1c1d;
            margin: 1px;
            padding: 1rem 2rem;
            padding-bottom: 5rem;
            height: 99.5%;
          }

          .label {
            display: none;
            max-width: 7ch;
            position: absolute;
            top: 3.5%;
            right: 0;
            margin: 0;
            line-height: 1.1rem;
            letter-spacing: -0.69px;
            font-size: 1.125rem;
            font-weight: 600;
            transform: rotate(45deg);
          }

          dt,
          dd {
            text-align: center;
          }

          dt {
            padding-top: 1rem;
          }

          dd {
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(37, 219, 226, 0.2);
          }

          .title {
            text-transform: uppercase;
            font-size: 1.25rem;
            font-weight: 600;
            letter-spacing: 1.6px;
          }

          .price {
            color: var(--color-primary);
            font-size: 5.375rem;
            font-weight: 600;
          }

          .price span {
            vertical-align: super;
            font-size: 40%;
          }

          dt:not(.title) {
            font-size: 2rem;
            font-weight: 600;
            letter-spacing: -0.76px;
            color: var(--color-primary);
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

          .wrapper.special .price,
          .wrapper.special dt:not(.title) {
            background: var(--horizontal-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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
          }

          .action:hover {
          }

          @media (min-width: 1560px) {
            .wrapper.special .content {
              clip-path: polygon(0% 0%, 69% 0%, 100% 20%, 100% 100%, 0% 100%);
            }
          }
        `}</style>
      </div>
    );
  }
}
