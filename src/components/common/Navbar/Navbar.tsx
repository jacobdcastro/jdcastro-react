import React, { FC } from 'react'
import s from './Navbar.module.css'
import { Link } from 'gatsby'
import { Logo } from '@components/svg'
import { DropdownMenu } from '@components/ui'

const Navbar: FC = () => {
  return (
    <div className={s.root}>
      <DropdownMenu />

      <ul className={s.nav}>
        <li>
          <Link to="/blog" activeClassName={s.activeLink}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/open-source" activeClassName={s.activeLink}>
            Open Source
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName={s.activeLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName={s.activeLink}>
            Contact
          </Link>
        </li>
      </ul>

      <div className={s.logo}>
        <Link to="/">
          <Logo className="text-black w-32 h-auto" />
        </Link>
      </div>

      <ul className={s.social}>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>YouTube</li>
        <li>Twitch</li>
        <li>Clubhouse</li>
      </ul>
    </div>
  )
}

export default Navbar
