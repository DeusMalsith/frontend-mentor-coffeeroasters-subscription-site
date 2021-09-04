import React, { useState } from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero.js';
import Button from '../components/Button.js';
import IconClose from '../images/shared/mobile/icon-close.svg';
import * as style from '../components/plan-page-components/PlanStyle.module.css';
import PlanStepsCard from '../components/plan-page-components/PlanStepsCard';
import PlanQuestionCard from '../components/plan-page-components/PlanQuestionCard';

function Plan() {
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  const [answer3, setAnswer3] = useState(null);
  const [answer4, setAnswer4] = useState(null);
  const [answer5, setAnswer5] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
    handleBodyScroll();
  };
  const handleBodyScroll = () => {
    !showModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  };

  return (
    <Layout>
      <Hero
        pageName='plan'
        title='Create a plan'
        paragraph='Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
      />

      <div className={style.planStepsContainer}>
        <PlanStepsCard
          number='01'
          title='Pick your coffee'
          paragraph='Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        />
        <PlanStepsCard
          number='02'
          title='Choose the frequency'
          paragraph='Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        />
        <PlanStepsCard
          number='03'
          title='Receive and enjoy!'
          paragraph='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
        />
      </div>

      <div className={style.planQuestionContainer}>
        {/* 01 Preferences
          02 Bean type
          03 Quantity
          04 Grind option
          05 Deliveries */}

        <form
          action=''
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <PlanQuestionCard
            formName='question1'
            question='How do you drink your coffee?'
            answer1='Capsule'
            paragraph1='Compatible with Nespresso systems and similar brewers'
            answer2='Filter'
            paragraph2='For pour over or drip methods like Aeropress, Chemex, and V60'
            answer3='Espresso'
            paragraph3='Dense and finely ground beans for an intense, flavorful experience'
            setAnswer={setAnswer1}
            answer={answer1}
          />

          <PlanQuestionCard
            formName='question2'
            question='What type of coffee?'
            answer1='Single origin'
            paragraph1='Distinct, high quality coffee from a specific family-owned farm'
            answer2='Decaf'
            paragraph2='Just like regular coffee, except the caffeine has been removed'
            answer3='Blended'
            paragraph3='Combination of two or three dark roasted beans of organic coffees'
            setAnswer={setAnswer2}
            answer={answer2}
          />

          <PlanQuestionCard
            formName='question3'
            question='How much would you like?'
            answer1='250g'
            paragraph1='Perfect for the solo drinker. Yields about 12 delicious cups.'
            answer2='500g'
            paragraph2='Perfect option for a couple. Yields about 40 delectable cups.'
            answer3='1000g'
            paragraph3='Perfect for offices and events. Yields about 90 delightful cups.'
            setAnswer={setAnswer3}
            answer={answer3}
          />

          <PlanQuestionCard
            formName='question4'
            question='Want us to grind them?'
            answer1='Wholebean'
            paragraph1='Best choice if you cherish the full sensory experience'
            answer2='Filter'
            paragraph2='For drip or pour-over coffee methods such as V60 or Aeropress'
            answer3='Cafetiére'
            paragraph3='Course ground beans specially suited for french press coffee'
            setAnswer={setAnswer4}
            answer={answer4}
          />

          <PlanQuestionCard
            formName='question5'
            question='How often should we deliver?'
            answer1='Every week'
            paragraph1='$14.00 per shipment. Includes free first-class shipping.'
            answer2='Every 2 weeks'
            paragraph2='$17.25 per shipment. Includes free priority shipping.'
            answer3='Every month'
            paragraph3='$22.50 per shipment. Includes free priority shipping.'
            setAnswer={setAnswer5}
            answer={answer5}
          />

          <div className={style.orderSummary}>
            <p>Order Summary</p>
            <h4>
              “I drink my coffee as <span>{answer1 ? answer1 : '_____'}</span>,
              with a <span>{answer2 ? answer2 : '_____'}</span> type of bean.{' '}
              <span>{answer3 ? answer3 : '_____'}</span> ground ala{' '}
              <span>{answer4 ? answer4 : '_____'}</span>, sent to me{' '}
              <span>{answer5 ? answer5 : '_____'}</span>.”
            </h4>
          </div>

          <div className={style.buttonContainer}>
            <Button onClick={handleShowModal}>Create my plan!</Button>
          </div>

          {/* <!-- Modal --> */}
          <div className={showModal ? style.modalBackground : null}>
            <div className={showModal ? style.modal : style.hideModal}>
              <div className={style.modalHeader}>
                <h3>Order Summary</h3>
                <button onClick={handleShowModal}>
                  <img src={IconClose} alt='close order summary modal' />
                </button>
              </div>
              <div className={style.modalSummarySubContainer}>
                <h4 className={style.modalSummary}>
                  “I drink my coffee as{' '}
                  <span>{answer1 ? answer1 : '_____'}</span>, with a{' '}
                  <span>{answer2 ? answer2 : '_____'}</span> type of bean.{' '}
                  <span>{answer3 ? answer3 : '_____'}</span> ground ala{' '}
                  <span>{answer4 ? answer4 : '_____'}</span>, sent to me{' '}
                  <span>{answer5 ? answer5 : '_____'}</span>.”
                </h4>
                <p>
                  Is this correct? You can proceed to checkout or go back to
                  plan selection if something is off. Subscription discount
                  codes can also be redeemed at the checkout.
                </p>
                <div className={style.modalCheckout}>
                  <Button>Checkout</Button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End modal --> */}
        </form>
      </div>
    </Layout>
  );
}

export default Plan;
