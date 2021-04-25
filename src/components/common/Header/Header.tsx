import React, { FC } from 'react'
import s from './Header.module.css'

const Header: FC = () => {
  return (
    <div className={s.root}>
      <div>
        <span>jdc.dev</span>
      </div>
      <nav>
        <ul>
          <li>blog -&gt;</li>
          <li>work -&gt;</li>
          <li>about -&gt;</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
