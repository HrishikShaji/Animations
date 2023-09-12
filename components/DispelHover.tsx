'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const transforms = [
  {
    x: -0.8,
    y: -0.6,
    rotationZ: -29
  },
  {
    x: -0.2,
    y: -0.4,
    rotationZ: -6
  },
  {
    x: -0.05,
    y: 0.1,
    rotationZ: 12
  },
  {
    x: -0.05,
    y: -0.1,
    rotationZ: -9
  },
  {
    x: -0.1,
    y: 0.55,
    rotationZ: 3
  },
  {
    x: 0,
    y: -0.1,
    rotationZ: 9
  },
  {
    x: 0,
    y: 0.15,
    rotationZ: -12
  },
  {
    x: 0,
    y: 0.15,
    rotationZ: -17
  },
  {
    x: 0,
    y: -0.65,
    rotationZ: 9
  },
  {
    x: 0.1,
    y: 0.4,
    rotationZ: 12
  },
  {
    x: 0,
    y: -0.15,
    rotationZ: -9
  },
  {
    x: 0.2,
    y: 0.15,
    rotationZ: 12
  },
  {
    x: 0.8,
    y: 0.6,
    rotationZ: 20
  }
]

export const disperse = {
  open: (i) => ({
    x: transforms[i].x + 'em',
    y: transforms[i].y + 'em',
    rotateZ: transforms[i].rotationZ
  }),
  closed: {
    x: 0,
    y: 0,
    rotateZ: 0
  }
}

const TextDisperse = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false)
  const getChars = (element) => {
    let chars = []
    const word = element.props.children
    word.split('').forEach((char, i) => {
      console.log(char, i)
      chars.push(
        <motion.span
          variants={disperse}
          animate={isActive ? 'open' : 'closed'}
          key={char + i}
          custom={i}
        >
          {console.log(i)}
          {char}
        </motion.span>
      )
    })

    return chars
  }
  const manageMouseEnter = () => {
    setIsActive(true)
    console.log(isActive)
  }

  const manageMouseLeave = () => {
    setIsActive(false)
    console.log(isActive)
  }
  return (
    <div
      className='text-3xl '
      onMouseEnter={() => manageMouseEnter()}
      onMouseLeave={() => manageMouseLeave()}
    >
      {getChars(children)}
    </div>
  )
}

export const DispelHover = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-black'>
      <div className='w-[50vw] text-white'>
        <div className='flex text-3xl justify-between uppercase'>
          <p>Hrishik</p>
          <p>Shaji</p>
        </div>
        <div className='flex text-3xl justify-between uppercase'>
          <p>Design</p>
          <p>&</p>
        </div>
        <div className='flex text-3xl justify-between uppercase'>
          <p>Art</p>
          <p>Direction</p>
        </div>
        <TextDisperse>
          <p>+1234567890</p>
        </TextDisperse>
        <TextDisperse>
          <p>-Email</p>
        </TextDisperse>
        <TextDisperse>
          <p>-Insta</p>
        </TextDisperse>
      </div>
    </div>
  )
}
