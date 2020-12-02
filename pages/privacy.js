import React from "react"
import Header from "../components/Header";
import CopyCode from "../components/CopyCode";
import Footer from "../components/Footer";

export default class Privacy extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <h2>Synadia Privacy Policy</h2>
          <h3 className="inner">Our Commitment</h3>
            <p>
              We are committed to safeguarding the privacy of our website visitors. In this policy we will explain how we treat your personal information.
               </p>
              <p>
              Analytics is used to track consumers of our site and improve its content. Various cookies along with Google Analytics are used to collect the following kinds of personal information;

              information about your computer and about your visits to and use of this website including your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths.
              Our website includes hyperlinks to, and details of, third party websites. We have no control over, and are not responsible for, the privacy practices of third parties.
              If you signup for our newsletter, your email will be stored and used for Synadia email campaigns. We do not supply your personal information to third parties.
            </p>
            <h3 className="inner">Privacy and NGS</h3>
            <p>Information provided during NGS sign up is stored and used for communication and secured services billing only. NGS is built using NATS.io which is payload agnostic and NGS does not inspect or record data traversing the system. Upon request, we can provide the specific URLs for regional cluster(s) and we guarantee data only flows through servers/regions that applications connect to.  User data won't leave those servers unless the user's application connects and subscribes somewhere else in the world.
            </p>
            <h3 className="inner">Changes to the Privacy Policy</h3>
            <p>If we change our privacy policies and procedures, we will post those changes on this page and/or continue to provide access to a copy of the prior version. If we make any changes to this Privacy Policy that materially change how we treat your personal information, we will endeavor to provide you with reasonable notice of such changes, such as via prominent notice on our Sites or to your email address of record, and where required by law, we will obtain your consent or give you the opportunity to opt out of such changes.
            </p>
            <p>Please contact <a href="mailto:info@synadia.com?subject=Privacy Policy Inquiry"><span className="highlight">Synadia</span></a> with questions regarding this Privacy Policy.
              </p>

        </section>
        <Footer simple />
        <style jsx>{`
          main {
                      padding-top: 25vh;
                      position: relative;
                      background-image: url('/static/images/bg.png');
                      background-repeat: no-repeat;
                      background-size: contain;
                      background-position: 50% 2%;
                    }

                    section {
                      max-width: 1280px;
                      margin: 0 auto;
                      padding: 2rem;
                    }

                    code {
                      min-width: 60%;
                      max-width: 80%;
                    }

                    h2 {
                      margin-top: -1em;
                      margin-bottom: 2em;
                    }

                    p,
                    h2,
                    h3,
                    h4 {
                      display: block;
                      text-align: left;
                      max-width: none;
                    }

                    p {
                      max-width: 80%;
                    }

                    h3.inner {
                      font-weight: 600;
                      color: var(--color-secondary);
                      margin-top: 2em;
                    }

                    h4 {
                      padding-left: 20px;
                      font-weight: bold;
                    }

                    p {
                      font-size: 1.3rem;
                    }

                    p:last-of-type {
                      margin-bottom: 8rem;
                    }

                    .highlight {
                      color: var(--color-secondary);
                    }

                    code {
                      display: block;
                      min-width: 80%;
                      padding: 1.2em 1.3em;
                      background-color: #1a1c1d;
                      color: var(--color-secondary);
                    }

                    @media (min-width: 1024px) {
                      code {
                        width: 60%;
                      }
                    }
                  `}</style>
                </main>
    )
  }
}
