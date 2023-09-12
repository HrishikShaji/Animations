'use client'
import { useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const phrases = [
  'Hello There',
  'My Name Is',
  'Hrishik Shaji',
  "I'm A Web Developer"
]

export const MaskText = () => {
  const body = useRef(null)
  const isInView = useInView(body, { once: true, margin: '-10%' })

  useEffect(() => {
    console.log(isInView)
  }, [isInView])

  const animate = {
    initial: { y: '100%' },
    open: (i) => ({
      y: '0%',
      transition: { duration: 0.5, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] }
    })
  }

  return (
    <div ref={body} className='text-3xl font-bold'>
      {phrases.map((phrase, i) => (
        <div className='overflow-hidden' key={i}>
          <motion.p
            variants={animate}
            custom={i}
            initial='initial'
            animate={isInView ? 'open' : ''}
            key={i}
            className='font-bold '
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  )
}
