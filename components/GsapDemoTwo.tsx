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
      .from(headingThree, { y: 160, duration: 0.8, ease: 'back' }, '+=1')
      .from(headingFour, { xPercent: 100, duration: 0.2 })
      .from(headingFive, { yPercent: 200, duration: 1 }, '<')
  }, [])

  const manageMouseHover = () => {
    gsap.fromTo(
      circleRef.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        ease: 'circ'
      }
    )
  }

  const items = [
    {
      name: 'ONE'
    },
    {
      name: 'TWO'
    },
    {
      name: 'THREE'
    }
  ]
  const manageMouseEnter = (id: number) => {
    const title = document.getElementById(`k_${id}`)
    const dot = document.getElementById(`j_${id}`)
    gsap.to(title, { x: 10 })
    gsap.to(dot, { scale: 2 })
  }
  const manageMouseLeave = (id: number) => {
    const title = document.getElementById(`k_${id}`)
    const dot = document.getElementById(`j_${id}`)
    gsap.to(title, { x: 0 })
    gsap.to(dot, { scale: 1 })
  }
  return (
    <div className='h-screen w-full flex flex-col gap-10 p-10 justify-center text-white items-center'>
      <div
        onMouseEnter={manageMouseHover}
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
      <div className='flex flex-col gap-2 w-full items-start'>
        {items.map((item, i) => (
          <div
            className='flex gap-2 items-center'
            key={i}
            onMouseEnter={() => manageMouseEnter(i)}
            onMouseLeave={() => manageMouseLeave(i)}
          >
            <div id={`j_${i}`} className='h-2 w-2 rounded-full bg-teal-500' />
            <h3 id={`k_${i}`} className='font-semibold text-xl'>
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
