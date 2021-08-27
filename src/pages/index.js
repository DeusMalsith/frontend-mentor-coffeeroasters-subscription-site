import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import OurCollectionCard from '../components/index-page-components/OurCollectionCard';
import WhyChooseUsCard from '../components/index-page-components/WhyChooseUsCard';
import Button from '../components/Button';
import Hero from '../components/hero';
import GranEspresso from '../images/home/desktop/image-gran-espresso.png';
import Planalto from '../images/home/desktop/image-planalto.png';
import Piccollo from '../images/home/desktop/image-piccollo.png';
import Danche from '../images/home/desktop/image-danche.png';
import IconCoffeeBean from '../images/home/desktop/icon-coffee-bean.svg';
import IconGift from '../images/home/desktop/icon-gift.svg';
import IconTruck from '../images/home/desktop/icon-truck.svg';
import * as LayoutStyle from '../components/Layout.module.css';
import * as IndexStyle from '../components/index-page-components/IndexStyle.module.css';
let style = {};
Object.assign(style, LayoutStyle, IndexStyle);

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
        <OurCollectionCard
          imageSrc={GranEspresso}
          imageAlt='Gran Espresso Coffee'
          title='Gran Espresso'
          paragraph='Light and flavorful blend with cocoa and black pepper for an intense
          experience'
        />
        <OurCollectionCard
          imageSrc={Planalto}
          imageAlt='Planalto Coffee'
          title='Planalto'
          paragraph='Brazilian dark roast with rich and velvety body, and hints of fruits
          and nuts'
        />
        <OurCollectionCard
          imageSrc={Piccollo}
          imageAlt='Piccollo Coffee'
          title='Piccollo'
          paragraph='Mild and smooth blend featuring notes of toasted almond and dried
          cherry'
        />
        <OurCollectionCard
          imageSrc={Danche}
          imageAlt='Danche Coffee'
          title='Danche'
          paragraph='Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
        />
      </div>
      <div className={style.whyChooseUsContainer}>
        <div className={style.whyChooseUsProposal}>
          <h4>Why choose us?</h4>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <WhyChooseUsCard
          image={IconCoffeeBean}
          imageAlt='Coffee Bean Icon'
          title='Best quality'
          paragraph='Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.'
        />
        <WhyChooseUsCard
          image={IconGift}
          imageAlt='Gift Icon'
          title='Exclusive benefits'
          paragraph='Special offers and swag when you subscribe, including 30% off your
            first shipment.'
        />
        <WhyChooseUsCard
          image={IconTruck}
          imageAlt='Truck Icon'
          title='Free Shipping'
          paragraph='We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.'
        />
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
