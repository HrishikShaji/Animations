'use client'

import gsap from 'gsap'
import { useEffect } from 'react'

export const TextAnimation = () => {
  const word = 'HRISHIK SHAJI'
  const splitWord = () => {
    return word.split('').map((letter, i) => (
      <div
        className='text-animate translate-y-[115px] transition transform duration-700'
        key={i}
      >
        {letter}
      </div>
    ))
  }

  useEffect(() => {
    gsap.to('.text-animate', {
      y: 0,
      stagger: 0.05,
      duration: 0.1,
      ease: 'bounce'
    })
  }, [])

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <h1
        id='text'
        className='custom-clip text-6xl font-extrabold flex text-white'
      >
        {splitWord()}
      </h1>
    </div>
  )
}
