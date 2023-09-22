'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export const GsapDemoTwo = () => {
  const circleRef = useRef(null)
  useEffect(() => {
    const headingOne = document.getElementById('headingOne')
    const headingTwo = document.getElementById('headingTwo')
    const headingThree = document.getElementById('headingThree')
    const headingFour = document.getElementById('headingFour')
    const headingFive = document.getElementById('headingFive')

    gsap
      .timeline()
      .from(headingOne, { duration: 1, opacity: 0 })
      .from(headingTwo, { opacity: 0, scale: 0, ease: 'back' })
      .from(headingThree, { y: 160, duration: 0.8, ease: 'back' })
      .from(headingFour, { xPercent: 100, duration: 0.2 })
      .from(headingFive, { yPercent: 200, duration: 1 })
  }, [])

  const manageMouseEnter = () => {
    gsap.fromTo(
      circleRef.current,
      { scale: 0 },
      {
        scale: 0,
        duration: 1,
        ease: 'circ'
      }
    )
  }
  return (
    <div className='h-screen w-full flex flex-col gap-10 justify-center text-white items-center'>
      <div
        onMouseEnter={manageMouseEnter}
        className='h-40 w-40 bg-teal-400 flex justify-center items-center rounded-full relative'
      >
        <div
          ref={circleRef}
          className='h-40 w-40  absolute rounded-full bg-teal-600 text-black font-bold text-2xl'
        />
        <span className='absolute z-20 text-2xl font-bold'>HOVER</span>
      </div>
      <div className='flex gap-5'>
        <h1 id='headingOne' className=''>
          HELLO
        </h1>
        <h1 id='headingTwo' className=''>
          I'M
        </h1>
        <h1 id='headingThree' className=''>
          HRISHIK
        </h1>
        <h1 id='headingFour' className=''>
          I'M{' '}
        </h1>
        <h1 id='headingFive' className=''>
          A WEB DEVELOPER
        </h1>
      </div>
    </div>
  )
}
