import React from 'react'
import VehicleEnquiry from '../../../components/VehicleEnquiry'
import Experience from './Experience'
import Features from './Features'
import TVC from './TVC'
import Specification from './Specification'
import FAQSupCar from './FAQSupCar'
import HeroSectionSuper from './HeroSectionSuper'

const SuperCarry = () => {
  return (
    <div>
      <HeroSectionSuper />
      <VehicleEnquiry />
      <Experience />
      <Features />
      <TVC />
      <Specification />
      <FAQSupCar />
    </div>
  )
}

export default SuperCarry