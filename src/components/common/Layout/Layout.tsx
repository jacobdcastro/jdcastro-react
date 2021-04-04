import React, { FC } from 'react'
import { Navbar } from '@components/common'
import s from './Layout.module.css'

const Layout: FC = ({ children }) => {
  return (
    <div className={s.root}>
      <div className={s.overlayContainer}>
        <div className={s.overlay} />
      </div>

      <div className={s.body}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
