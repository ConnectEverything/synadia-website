import React from 'react';

export default class TeamMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="outer">
        <div className="inner">
          <div className="content">
            {this.props.thumbnail && (
              <figure className="thumbnail">
                <img
                  className="thumbnail__image"
                  src={this.props.thumbnail}
                  alt={`${this.props.name} profile picture`}
                />
              </figure>
            )}
            <h4>{this.props.name}</h4>
            {this.props.position && (
              <h5 className="primary">{this.props.position}</h5>
            )}
            {this.props.bio && <p>{this.props.bio}</p>}
          </div>
          <ul className="links">
            {this.props.links.twitter && (
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://twitter.com/${this.props.links.twitter}`}
                >
                  <svg
                    width="25px"
                    height="22px"
                    viewBox="0 0 25 22"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g stroke="none" strokeWidth="1" fillRule="evenodd">
                      <g
                        transform="translate(-1526.000000, -41.000000)"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1451.000000, 38.000000)">
                          <path
                            fill="#FFF"
                            d="M99.6878981,5.49085758 C98.7792448,5.91354575 97.8042729,6.20020802 96.7798848,6.32818754 C97.8258547,5.67063028 98.6265184,4.62765222 99.0059946,3.38868169 C98.0248508,3.99762198 96.941849,4.43979081 95.7878896,4.67948773 C94.8638265,3.64459839 93.5494358,3 92.0915566,3 C89.2946391,3 87.0268583,5.38074946 87.0268583,8.31538514 C87.0268583,8.73159386 87.0715951,9.1381046 87.1580029,9.52682864 C82.9495162,9.30491841 79.2177245,7.18817437 76.7200877,3.97170422 C76.2834904,4.75558939 76.0351185,5.66897866 76.0351185,6.64398612 C76.0351185,8.4886784 76.9298949,10.1163306 78.2874894,11.0685965 C77.4574987,11.0394602 76.6768838,10.7997633 75.9934878,10.4013413 L75.9934878,10.4677449 C75.9934878,13.0428352 77.7398367,15.1919765 80.0554202,15.6811107 C79.6311668,15.8009591 79.1837988,15.8673628 78.7209806,15.8673628 C78.3939461,15.8673628 78.0776823,15.8333563 77.7675905,15.7685619 C78.4124217,17.8820874 80.2822103,19.4190275 82.4975494,19.461165 C80.7650774,20.8863877 78.5805982,21.7334156 76.207934,21.7334156 C75.7991308,21.7334156 75.3964592,21.7074979 75,21.6605325 C77.2415599,23.1715972 79.9027341,24.0526316 82.7629044,24.0526316 C92.0792933,24.0526316 97.1717857,15.9515955 97.1717857,8.92597706 L97.1548027,8.23767422 C98.1498234,7.49262334 99.0106337,6.55653486 99.6878981,5.49085758 Z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            )}
            {this.props.links.linkedin && (
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://linkedin.com/in/${this.props.links.linkedin}`}
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 25 25"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g stroke="none" strokeWidth="1" fillRule="evenodd">
                      <path
                        fill="#FFF"
                        d="M0.38275811,10.2684822 L5.45430307,10.2684822 L5.45430307,27 L0.38275811,27 L0.38275811,10.2684822 Z M2.96637535,2 C4.59309732,2 5.9327507,3.36186765 5.9327507,5.01556408 C5.9327507,6.66926052 4.59309732,8.03112817 2.96637535,8.03112817 C1.33965338,8.03112817 -1.77635684e-13,6.66926052 -1.77635684e-13,5.01556408 C-1.77635684e-13,3.36186765 1.33965338,2 2.96637535,2 Z M8.707747,10.2684822 L13.5879129,10.2684822 L13.5879129,12.5058362 L13.6836024,12.5058362 C14.3534291,11.1439685 16.0758406,9.78210086 18.5637683,9.78210086 C23.7310028,9.78210086 24.6878981,13.2840463 24.6878981,17.7587543 L24.6878981,26.9027228 L19.6163531,26.9027228 L19.6163531,18.7315169 C19.6163531,16.7859916 19.6163531,14.2568089 16.9370464,14.2568089 C14.2577396,14.2568089 13.8749815,16.3968866 13.8749815,18.5369643 L13.8749815,26.8054465 L8.80343653,26.8054465 L8.80343653,10.2684822 L8.707747,10.2684822 Z"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            )}
            {this.props.links.github && (
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://github.com/${this.props.links.github}`}
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 25 25"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g stroke="none" strokeWidth="1" fillRule="evenodd">
                      <g transform="translate(-1601.000000, -40.000000)">
                        <g transform="translate(1451.000000, 38.000000)">
                          <path
                            fill="#FFF"
                            d="M162.343949,2 C155.554777,2 150,7.76637972 150,14.8141771 C150,20.5004683 153.548885,25.3057847 158.409315,26.9876454 C159.026513,27.067734 159.257962,26.7473796 159.257962,26.3469366 C159.257962,26.0265821 159.257962,25.2256961 159.257962,24.1845442 C155.786226,24.9854303 155.091879,22.5026834 155.091879,22.5026834 C154.551831,21.0610885 153.703185,20.6606455 153.703185,20.6606455 C152.545939,19.8597594 153.780334,19.8597594 153.780334,19.8597594 C155.014729,19.939848 155.709076,21.1411771 155.709076,21.1411771 C156.789172,23.0633037 158.563615,22.5026834 159.335111,22.182329 C159.412261,21.3814429 159.79801,20.8208227 160.106608,20.5004683 C157.32922,20.1801138 154.474682,19.0588733 154.474682,14.1734683 C154.474682,12.811962 154.93758,11.6106329 155.709076,10.7296582 C155.554777,10.4093038 155.169029,9.12788604 155.863376,7.36593668 C155.863376,7.36593668 156.866322,7.04558225 159.257962,8.64735439 C160.260908,8.32699997 161.263854,8.24691136 162.343949,8.24691136 C163.424045,8.24691136 164.42699,8.40708857 165.429936,8.64735439 C167.821576,6.96549364 168.824522,7.28584807 168.824522,7.28584807 C169.518869,9.04779743 169.055971,10.3292151 168.978822,10.6495696 C169.750318,11.5305443 170.213217,12.6517848 170.213217,14.0933797 C170.213217,18.9787847 167.358678,20.1000252 164.58129,20.4203796 C165.044188,20.8208227 165.429936,21.6217088 165.429936,22.8230379 C165.429936,24.5048986 165.429936,25.9464935 165.429936,26.3469366 C165.429936,26.667291 165.661385,27.067734 166.278583,26.9876454 C171.139013,25.3057847 174.687898,20.5004683 174.687898,14.8141771 C174.687898,7.76637972 169.133121,2 162.343949,2 Z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            )}
          </ul>
        </div>
        <style jsx>{`
          .outer {
            display: inline-block;
            position: relative;
            margin-top: 5rem;
            margin-right: 3vw;
            min-width: 270px;
            width: 70vw;
            padding: 2px;
            background: var(--horizontal-gradient);
          }

          .inner {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
            position: relative;
            padding: 5.5rem 1.5rem 0.5rem 1.5rem;
            background-color: var(--color-tertiary);
          }

          .thumbnail {
            display: flex;
            justify-content: center;
            width: 12rem;
            height: 12rem;
            position: absolute;
            left: 50%;
            top: 0;
            margin: 0;
            transform: translateX(-50%);
          }

          .thumbnail__image {
            user-select: none;
            object-fit: cover;
            transform: translateY(-45%);
          }

          .content {
            text-align: center;
            width: 100%;
            white-space: normal;
          }

          h4 {
            margin-bottom: 0.5rem;
          }

          h5 {
            white-space: nowrap;
          }

          .links {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .links li {
            display: inline-block;
            margin: 1em;
          }

          .links li:first-of-type {
            margin-left: 0;
          }

          .links li:last-of-type {
            margin-right: 0;
          }

          .links li a svg path {
            transition: all 200ms ease;
          }

          .links li a:hover svg path {
            fill: var(--color-secondary);
          }

          @media (min-width: 1024px) {
            .outer {
              width: 25.5%;
              min-height: 21.25rem;
              min-width: 27.187rem;
              margin: 5rem 1%;
            }

            .inner {
              padding: 5.5rem 3rem 0.5rem 3rem;
            }
          }
        `}</style>
      </div>
    );
  }
}
