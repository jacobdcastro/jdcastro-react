import React, { FC } from 'react'
import s from './Hero.module.css'

const Hero: FC = () => {
  return (
    <div className={s.root}>
      I'm Jacob Daniel Castro,
      <br /> a fullstack JavaScript
      <br /> developer.
    </div>
  )
}

export default Hero
