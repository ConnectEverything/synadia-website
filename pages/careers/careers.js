import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricingCard from '../../components/CareerCard';

export default class CareersCard extends React.Component {
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
     <div className="content">
     <h3 className="inner">Benefits and Perks</h3>
<div className="wrapper">
  <div className="box a">
      <h3 className="boxes">Growth Culture</h3>
   We are learning and working with cutting edge technology as it becomes available to build the future of distributed systems</div>
  <div className="box b">
     <h3 className="boxes">Opportunity</h3>
                         From attending relevant conferences to speaking at events, you will get a chance to grow professionally</div>
  <div className="box c">
     <h3 className="boxes">Catered Snacks</h3>
     In office snacks and drinks, plus Friday lunches and occasional happy hour
     </div>
  <div className="box d">
     <h3 className="boxes">Time Off</h3>
        Paid holidays, sick days and personal time to rest, recover and recharge</div>
  <div className="box e">
     <h3 className="boxes">Wellness</h3>
       Medial, dental and vision coverage for you and your family</div>
  <div className="box f">
     <h3 className="boxes">401K & FSA</h3>
       Pre-tax savings plans for out of pocket care costs and retirement savings.</div>
</div>
<h3 className="cards">Available Positions</h3>

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
                to: '/careers/job_description_biz_dev',
                ctaText: 'Apply'

                           }}
                         />
        <PricingCard
           data={{special: false,
                title: 'Business Development',
                price: '0',
                messageSize: '256',
                messageUnit: 'b',
                connections: '2',
                monthlyData: '1',
                dataSharing: false,
                to: '/careers/job_description_biz_dev',
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
              max-width: 800px;
              margin: 0 auto;
              display: grid;
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
                   max-width: 1080px;
                   margin: 0 auto;
                   font-size: 1.0rem;
                 }



         .box {

           color: #fff;
           border-radius: 5px;
           padding: 20px;
           font-size: 1.1em;
           text-align: center;
         }


             .wrapper {

                 display: grid;
             grid-gap: 10px;
                 grid-template-columns: repeat(3, 300px);
                 align-content: center;

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

                   }

                   h3.boxes {
                    font-weight: 400;
                    color: var(--color-secondary);
                    font-size: 1.5em;
                    text-align: center;
                  }

                  h3.cards {
                      font-weight: 600;
                       color: var(--color-secondary);
                       margin-top: 2em;
                       margin-bottom: 2em;

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
