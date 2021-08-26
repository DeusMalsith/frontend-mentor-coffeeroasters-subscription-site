import { Link } from 'gatsby';
import React from 'react';
import Button from '../components/Button';
import Hero from '../components/hero';
import Layout from '../components/layout';
import * as style from '../components/Layout.module.css';
import GranEspresso from '../images/home/desktop/image-gran-espresso.png';
import Planalto from '../images/home/desktop/image-planalto.png';
import Piccollo from '../images/home/desktop/image-piccollo.png';
import Danche from '../images/home/desktop/image-danche.png';

function Index() {
  return (
    <Layout>
      <Hero
        title='Great coffee made simple.'
        paragraph='Start your mornings with the world’s best coffees. Try our expertly curated artisan 
      coffees from our best roasters delivered directly to your door, at your schedule.'
      >
        <Link to='/plan'>
          <Button title='Create your plan' />
        </Link>
      </Hero>
      <div className={style.ourCollectionContainer}>
        <h2 className={style.ourCollectionHeader}>our collection</h2>
        <img src={GranEspresso} alt='Gran Espresso Coffee' />
        <h4>Gran Espresso</h4>
        <p>
          Light and flavorful blend with cocoa and black pepper for an intense
          experience
        </p>
        <img src={Planalto} alt='Planalto Coffee' />
        <h4>Planalto</h4>
        <p>
          Brazilian dark roast with rich and velvety body, and hints of fruits
          and nuts
        </p>
        <img src={Piccollo} alt='Piccollo Coffee' />
        <h4>Piccollo</h4>
        <p>
          Mild and smooth blend featuring notes of toasted almond and dried
          cherry
        </p>
        <img src={Danche} alt='Danche Coffee' />
        <h4>Danche</h4>
        <p>
          Ethiopian hand-harvested blend densely packed with vibrant fruit notes
        </p>
      </div>
      <div className={style.whyChooseUsContainer}>
        <h4>Why choose us?</h4>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <h4>Best quality</h4>
        <p>
          Discover an endless variety of the world’s best artisan coffee from
          each of our roasters.
        </p>
        <h4>Exclusive benefits</h4>
        <p>
          Special offers and swag when you subscribe, including 30% off your
          first shipment.
        </p>
        <h4>Free shipping</h4>
        <p>
          We cover the cost and coffee is delivered fast. Peak freshness:
          guaranteed.
        </p>
      </div>
      <div className={style.howItWorksContainer}>
        <h4>How it works</h4>
        <h1>01</h1>
        <h4>Pick your coffee</h4>
        <p>
          Select from our evolving range of artisan coffees. Our beans are
          ethically sourced and we pay fair prices for them. There are new
          coffees in all profiles every month for you to try out.
        </p>
        <h1>02</h1>
        <h4>Choose the frequency</h4>
        <p>
          Customize your order frequency, quantity, even your roast style and
          grind type. Pause, skip or cancel your subscription with no commitment
          through our online portal.
        </p>
        <h1>03</h1>
        <h4>Receive and enjoy!</h4>
        <p>
          We ship your package within 48 hours, freshly roasted. Sit back and
          enjoy award-winning world-class coffees curated to provide a distinct
          tasting experience.
        </p>
        <Link to='/plan'>
          <Button title='Create your plan' />
        </Link>
      </div>
    </Layout>
  );
}

export default Index;
