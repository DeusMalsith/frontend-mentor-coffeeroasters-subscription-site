import { Link } from 'gatsby'
import React from 'react'
import Button from '../components/Button'
import Hero from '../components/hero'
import Layout from '../components/layout'
import * as style from '../components/Layout.module.css'

function Index() {
  return (
  <Layout>
    <Hero 
      title="Great coffee made simple." 
      paragraph="Start your mornings with the world’s best coffees. Try our expertly curated artisan 
      coffees from our best roasters delivered directly to your door, at your schedule.">
      <Link to='/plan'>
      <Button title="Create your plan"/>
      </Link>
    </Hero>
    
  <h2 className={style.ourCollection}>our collection</h2>
    

    

  

    Gran Espresso
    Light and flavorful blend with cocoa and black pepper for an intense experience

    Planalto
    Brazilian dark roast with rich and velvety body, and hints of fruits and nuts

    Piccollo
    Mild and smooth blend featuring notes of toasted almond and dried cherry

    Danche
    Ethiopian hand-harvested blend densely packed with vibrant fruit notes

    Why choose us?

    A large part of our role is choosing which particular coffees will be featured 
    in our range. This means working closely with the best coffee growers to give 
    you a more impactful experience on every level.

    Best quality
    Discover an endless variety of the world’s best artisan coffee from each of our roasters.

    Exclusive benefits
    Special offers and swag when you subscribe, including 30% off your first shipment.

    Free shipping 
    We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.

    How it works

    01
    Pick your coffee
    Select from our evolving range of artisan coffees. Our beans are ethically 
    sourced and we pay fair prices for them. There are new coffees in all profiles 
    every month for you to try out.

    02
    Choose the frequency
    Customize your order frequency, quantity, even your roast style and grind type. 
    Pause, skip or cancel your subscription with no commitment through our online portal.

    03
    Receive and enjoy!
    We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
    world-class coffees curated to provide a distinct tasting experience.

    Create your plan
  </Layout>

  
  )
}

export default Index



  
 

  
