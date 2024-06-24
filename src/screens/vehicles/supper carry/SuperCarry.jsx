import React from 'react'
import VehicleEnquiry from '../../../components/VehicleEnquiry'
import Experience from './Experience'
import Features from './Features'
import TVC from './TVC'
import Specification from './Specification'
import FAQSupCar from './FAQSupCar'
import HeroSectionSuper from './HeroSectionSuper'
import Three from './Three'

const SuperCarry = () => {
  const variant = [
    {
      name: "Super Carry Petrol",
      price: "4.88",
      title: "Super Carry ",
    },
    {
      name: "Super Carry Petrol Chassis",
      price: "6.30",
      title: "Super Carry ",
    },
    {
      name: "Super Carry CNG",
      price: "4.73",
      title: "Super Carry ",
    },
    {
      name: "Super Carry CNG Chassis",
      price: "6.15",
      title: "Super Carry ",
    },
  ];
  return (
    <div>
      <HeroSectionSuper />
      <VehicleEnquiry data={variant} />
      <Experience />
      <Three />
      <Features />
      <TVC />
      <Specification />
      <FAQSupCar />
    </div>
  )
}

export default SuperCarry