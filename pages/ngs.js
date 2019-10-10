import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Ngs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Header internal />
        <section>
          <h2>Introducing NGS!</h2>
          <div className="content">
            <p>
              NGS is a global communications system built on{" "}
              <a hre="https://nats.io">NATS.io</a>. NGS is easy to use, secure
              by default, and globally available in all major cloud providers.
              <br /> Get connected and send your first message in under a
              minute.
            </p>
            <a
              className="button"
              href="/ngs/pricing"
              data-text="Get Started Today!"
            >
              Get Started Today!
            </a>
          </div>
        </section>
        <Footer simple />
        <style jsx>{`
          main {
            background-image: url("/static/images/bg.png");
            background-repeat: no-repeat;
            background-size: 200%;
            background-position: 50% 10%;
          }

          section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 75vh;
            padding: 5rem 10px;
            padding-bottom: 0;
          }

          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 800px;
            margin: 0 auto;
          }

          .content p {
            max-width: 100%;
            margin: 0 auto;
            font-size: 1.5rem;
          }

          .content a {
            font-size: 1.5rem;
          }

          .button {
            margin: 1em;
          }

          @media (min-width: 768px) {
            main {
              background-size: contain;
            }

            .contact {
              max-width: 70%;
            }
          }
        `}</style>
      </main>
    )
  }
}
