import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
import s from './DropdownMenu.module.css'

interface Props {
  rootIcon: any
  bgColor: string
  items: {
    content: any
    url: string
    local?: boolean
    animated?: boolean
    alignment?: 'right' | 'left'
  }[]
}

const DropdownMenu: FC<Props> = ({ items }) => {
  const [open, setOpen] = useState(false)

  const animate = {
    position: open ? 'relative' : 'absolute',
    top: open ? '' : 0,
  }

  return (
    <div className={s.root}>
      <button onClick={() => setOpen(!open)} className="bg-blue-200">
        toggle open
      </button>
      <motion.div animate={{ top: open ? '4rem' : 0 }} className={s.button}>
        1
      </motion.div>
      <motion.div animate={{ top: open ? '8rem' : 0 }} className={s.button}>
        2
      </motion.div>
      <motion.div animate={{ top: open ? 'rem' : 0 }} className={s.button}>
        3
      </motion.div>
    </div>
  )
}

export default DropdownMenu
