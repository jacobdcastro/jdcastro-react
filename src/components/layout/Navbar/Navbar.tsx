import React, { FC } from 'react'
import s from './Navbar.module.css'

const Navbar: FC = () => {
  return (
    <div className={s.root}>
      <h1 className={s.h1}>This is just a test!</h1>
    </div>
  )
}

export default Navbar
