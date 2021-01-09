import React, { FC } from 'react'
import Navbar from '../components/layout/Navbar/Navbar'
import Hero from '../components/Hero'

const HomePage: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default HomePage
