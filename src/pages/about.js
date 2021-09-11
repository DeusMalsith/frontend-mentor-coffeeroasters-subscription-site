import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import OurHeadquartersCard from '../components/about-page-components/OurHeadquartersCard';
import OurCommitmentImageMobile from '../images/about/mobile/image-commitment.jpg';
import OurCommitmentImageTablet from '../images/about/tablet/image-commitment.jpg';
import OurCommitmentImageDesktop from '../images/about/desktop/image-commitment.jpg';
import QualityImageMobile from '../images/about/mobile/image-quality.jpg';
import QualityImageTablet from '../images/about/tablet/image-quality.jpg';
import QualityImageDesktop from '../images/about/desktop/image-quality.jpg';
import UnitedKingdomIcon from '../images/about/desktop/illustration-uk.svg';
import CanadaIcon from '../images/about/desktop/illustration-canada.svg';
import AustraliaIcon from '../images/about/desktop/illustration-australia.svg';
import * as style from '../components/about-page-components/AboutStyle.module.css';

function About() {
  return (
    <Layout>
      <Hero
        pageName='about'
        title='About us'
        paragraph='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
        coffee from around the world. We have since been dedicated to bring the perfect cup - from 
        bean to brew - in every shipment.'
      />
      <div className={style.ourCommitmentContainer}>
        <picture>
          <source
            media='(min-width: 1440px)'
            srcSet={OurCommitmentImageDesktop}
          />
          <source
            media='(min-width: 768px)'
            srcSet={OurCommitmentImageTablet}
          />
          <img
            className={style.ourCommitmentImage}
            src={OurCommitmentImageMobile}
            alt='Man making coffee'
          />
        </picture>
        <div className={style.ourCommitmentSubContainer}>
          <h3 className={style.ourCommitmentTitle}>Our commitment</h3>
          <p className={style.ourCommitmentParapgraph}>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
      <div className={style.qualityContainer}>
        <picture className={style.pictureContainer}>
          <source media='(min-width: 1440px)' srcSet={QualityImageDesktop} />
          <source media='(min-width: 768px)' srcSet={QualityImageTablet} />
          <img
            className={style.qualityImage}
            src={QualityImageMobile}
            alt='Latte with flower design'
          />
        </picture>
        <h4 className={style.qualityTitle}>Uncompromising quality</h4>
        <p className={style.qualityParagraph}>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
      <h4 className={style.ourHeadquartersTitle}>Our headquarters</h4>
      <div className={style.ourHeadquartersContainer}>
        <OurHeadquartersCard
          image={UnitedKingdomIcon}
          imageAlt='United Kingdom Icon'
          title='United Kingdom'
          address='68  Asfordby Rd'
          city='Alcaston'
          state='SY6 1YA'
          number='+44 1241 918425'
        />
        <OurHeadquartersCard
          image={CanadaIcon}
          imageAlt='Canada Icon'
          title='Canada'
          address='1528  Eglinton Avenue'
          city='Toronto'
          state='Ontario M4P 1A6'
          number='+1 416 485 2997'
        />
        <OurHeadquartersCard
          image={AustraliaIcon}
          imageAlt='Australia Icon'
          title='Australia'
          address='36 Swanston Street'
          city='Kewell'
          state='Victoria'
          number='+61 4 9928 3629'
        />
      </div>
    </Layout>
  );
}

export default About;
