import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingCard from '../components/CareerCard';

export default class Careers_2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header internal />
<section>

          <h2>Careers</h2>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in velit ipsum.
              Aliquam lacus tellus, cursus quis mauris ut, bibendum pharetra dui.
              Donec porttitor varius odio vel posuere. Vestibulum porta diam non tellus consequat, sit amet scelerisque nunc lacinia.
            </p>
           </div>
          <div className="content2">
            <h3 className="inner">Benefits</h3>
            <div className="row">
              <div className="column">
               <h3 className="boxes">Healthcare</h3>
              <p>some text here...</p>
              </div>

              <div className="column">
               <h3 className="boxes">Retirement</h3>
               <p>some text here...</p>
              </div>

              <div className="column">
               <h3 className="boxes"> Vacation</h3>
                <p>some text here...</p>
              </div>
             </div>

           <h3 className="inner">Available Positions</h3>
       </div>


       <PricingCard
           data={{special: false,
                title: 'Software Engineer',
                price: '0',
                messageSize: '256',
                messageUnit: 'b',
                connections: '2',
                monthlyData: '1',
                dataSharing: false,
                to: '',
                ctaText: 'Apply'

                           }}
                         />
        <PricingCard
           data={{special: false,
                title: 'Sales/Marketing',
                price: '0',
                messageSize: '256',
                messageUnit: 'b',
                connections: '2',
                monthlyData: '1',
                dataSharing: false,
                to: '',
                ctaText: 'Apply'

                           }}
                         />

     </section>

        <Footer simple />
        <style jsx>{`
          main {
            background-image: url('/static/images/bg.png');
            background-repeat: no-repeat;
            background-size: 200%;
            background-position: 50% 10%;
            padding-top: 15vh;
            position: relative;

          }

          section {
            display: flex;

            justify-content: space-evenly;
            align-items: center;
            min-height: 75vh;
            padding: 5rem 10px;
            padding-bottom: 20;
            max-width: 1020px;
            flex-wrap: wrap;
          }

          cardsection {
              max-width: 1020px;
              margin: 0 auto;
              display: flex;
              justify-content: space-evenly;
              flex-wrap: wrap;
              padding: 5rem 10px;
              padding-bottom: 20px;

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

        .content2 {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    max-width:800px;

                  }


       .content2 p {
                   max-width: 100%;
                   margin: 0 auto;
                   font-size: 1.0rem;
                 }

         .column {
           float: left;
           width: 33.33%;
           text-align: center;
           padding: 40px;
           height: 200px;
         }

         /* Clear floats after the columns */
         .row:after {
           content: "";
           display: table;
           clear: both;
         }

         .cardcolumn {
                    float: left;
                    width: 33.33%;
                    margin-bottom: 20px;
                    padding: 20px;
                    height: 200px;
                  }

         .card {
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           text-align: left;
           background-color: #1a1c1d;
         }

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
                     margin-bottom: 2em;
                   }

                   h3.boxes {
                    font-weight: 400;
                    margin-top: 1em;
                  }

                   h4 {
                     padding-left: 20px;
                     font-weight: bold;
                   }

                   p {
                     font-size: 1rem;
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
    );
  }
}
