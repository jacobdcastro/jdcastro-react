import React, { FC } from 'react'
import s from './CircleButton.module.css'

interface Props {
  size: 'sm' | 'md' | 'lg'
  className: string
}

// TODO create buttons of social media accounts
// expandable button menu
// grid animates up from 1 button to
// a column of social media links
// * use "network" icon for initial button

const CircleButton: FC<Props> = ({ size, className, children }) => {
  return <div className={s.root}>{children}</div>
}

export default CircleButton
