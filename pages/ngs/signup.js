import React from 'react';
import Header from '../../components/Header';
import CopyCode from '../../components/CopyCode';
import Footer from '../../components/Footer';

export default class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header internal />
        <section>
          <h2>What do you want to connect today?</h2>
          <h3>
            We appreciate you signing up for NGS. In a few short steps we'll
            have you up and running and sending messages.
          </h3>

          <h3 className="inner">Installation of the NGS and NSC utilities</h3>

          <p>
            NGS depends on two command line tools. The first, called <span className="highlight">nsc</span>, is an open 
             source tool used to create and edit configurations for
             the <a href="https://nats.io">NATS.io</a> account <a href="https://nats-io.github.io/docs/nats_server/jwt_auth.html">security system</a>. This is the same system
             used by NGS. The second, called <span className="highlight">ngs</span>, is used to manage your billing account 
             with Synadia.
          </p>

          <p>
            The installation process is straightforward. Open up a command prompt and type the following:
          </p>

          <CopyCode content="$ curl https://downloads.synadia.com/ngs/install.py -sSf | python" />

          <p>
            This will install the <span className="highlight">nsc</span> and <span className="highlight">ngs</span> utilities into ~/.nsc/bin.
            You can get usage help anytime by executing{' '}
            <span className="highlight">ngs -h</span> or <span className="highlight">nsc -h</span>, 
            or search the <a href="https://nats-io.github.io/docs/nats_tools/nsc/nsc.html">nsc documentation.</a>
          </p>

          <p>
            Next we need to tell NSC about Synadia, create an account and user and deploy the account to the NGS servers.
            To create a new account named &quot;First&quot; (you can use any name here) and deploy it to NGS, 
            open a command prompt and type:
          </p>

          <CopyCode content="$ nsc init -o synadia -n First" />

          <p>
           This will import Synadia's operator information, create an account and user named &quot;First&quot; on your local system, deploy the account to
           NGS, create a billing account on NGS for you and associate it with a free plan. This free plan allows you to
           use NGS but places some limits on your connections. You can check your limits using:
          </p>

          <CopyCode content="$ ngs status" />

          <p>
            The signup process will also generate the necessary credentials to
            access your account on NGS. To test that everything is working, let's
            send our first message with one of the tools built into nsc.
          </p>

          <CopyCode content="$ nsc tool req ngs.echo <some text>" />

          <p>
          NGS provides three demonstration services to new accounts through a set of automated imports added to your account 
          JWT when you upload it. These services can be accessed with the `nsc` tool as follows:
          </p>
            
            <code>
              > nsc tool req ngs.echo HELLO <br />
              Published [ngs.echo] : 'HELLO'
              <br />
              Received [_INBOX.IUAKVmH8SZfgJc6M666obM.wn1hGbsk] : '[California,
              US]: "HELLO"'
            </code>

          <p>
            Congratulations! You have successfully registered with NGS and sent your first message on the NGS secure global messaging system.
          </p>

          <h3 className="inner"><em>Installation Issues</em></h3>
          
          <p>
          If you are using a version of nsc installed by other means (homebrew, built from source, etc), you may run into issues due
          to a version mismatch between NGS and the nsc tooling.  If you encounter an error related to an unexpected ed25519 key
          algorithm, or &quot;Error: this version of nsc (x.x.x) is incompatible with the provided jwt v1&quot; set nsc to version 0.5.0.
          </p>

          <CopyCode content="$ nsc update --version 0.5.0" />

          <p>
          If you need additional help please contact us at{' '}
            <a href="mailto:info@synadia.com">info@synadia.com</a>.
          </p>

          <h3 className="inner">Learn More</h3>

          <p>
            When you are ready to program your own NGS client, you can
            get started with one of our <a href="https://nats.io/download/">NGS aware clients</a>. Extensive documentation is
            available at the NATS Docs site <a href="https://docs.nats.io/">docs.nats.io</a>.
          </p>

          <p>
            To learn more about NGS and the NATS technology, please visit <a href="/ngs/how-it-works"><span className="highlight">How it Works</span></a> and
            join the <a href="https://slack.nats.io" target="_blank"><span className="highlight">NATS Slack Channel</span></a> to get help and information.
          </p>

          <h3 className="inner">Paid Plans and Account Limits</h3>

          <p>
            You can expand the limits applied to your account by updating to a paid plan. Synadia even offers
            a "free" paid plan that requires an email and credit card, but doesn't cost anything.
            In addition to finding plan
            information on <a href="https://synadia.com/ngs/pricing"> synadia.com/ngs/pricing</a>, you can view information about current plans locally with the
            following command:
          </p>

          <CopyCode content="$ ngs plans" />

          <p>
            You'll see the list of available plans, select the one that most
            closely matches your requirements. If your needs exceed any of the
            plans listed, contact us at{' '}
            <a href="mailto:info@synadia.com">info@synadia.com</a> and we’d be
            happy to help create a custom plan for you. To move to a new plan, type:
          </p>

          <CopyCode content="$ ngs edit" />

          <p>
            Follow the instructions, and once you complete the steps, check your email, 
            within a minute or so you will receive an email
            with a link to a secure payment page. There you can enter your
            payment information and upgrade your account. You can check your
            account status with:
          </p>

          <CopyCode content="$ ngs status" />

          <p>
            Information about your NGS billing account status will be displayed. We bill
            on a monthly basis, so you will see a four week expiry, which will
            be renewed on the next automatic credit card payment.
          </p>

          <h3 className="inner">Demonstration Imports</h3>

          <p>
          NGS provides three demonstration services (echo, usage, active) to new accounts through a set of automated imports added to your account
          JWT when you upload it. These services can be accessed with the nsc tool as follows:
          </p>

          <p>
            As we saw earlier, the echo service returns what you send it, a standard NATS request.
          </p>
          
          <CopyCode content="$ nsc tool req ngs.echo Hello" />

          <p>
            The usage service shows an approximation of your account-wide data usage.
          </p>

          <CopyCode content="$ nsc tool req ngs.usage ''" />

          <p>
          The active service sends out a message stream you can subscribe to. Messages indicate known servers based on various locations in the NGS cluster.
          </p>

          <CopyCode content="$ nsc tool sub ngs.active" />

          <p>
            In all three cases, the operator should be synadia, 
            and the account and user should be the ones you want to use to run the tool. Keep in mind that these services
            are only available when you are connecting to NGS and not when you run locally.
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
            text-align: left;
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
            max-width: none;
            text-align: left;
          }

          h3.inner {
            font-weight: 600;
            color: var(--color-secondary);
            margin-top: 2em;
          }

          p {
            font-size: 1.3rem;
            max-width: 80%;
          }

          p:last-of-type {
            margin-bottom: 8rem;
          }

          .highlight {
            color: var(--color-secondary);
          }

          code {
            display: block;
            padding: 1.2em 1.3em;
            background-color: #1a1c1d;
            color: var(--color-secondary);
            text-align: left;
            min-width: none;
          }

          @media (min-width: 1024px) {
            code {
              max-width: 80%;
            }
          }
        `}</style>
      </main>
    );
  }
}
