'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const GsapDemo = () => {
  const headingRef = useRef(null)

  useEffect(() => {
    const headingOne = document.getElementById('headingOne')
    const headingTwo = document.getElementById('headingTwo')
    const headingThree = document.getElementById('headingThree')
    gsap.to(headingOne, {
      x: 300,
      duration: 3,
      repeat: 1
    })

    gsap.from(headingTwo, {
      x: 300,
      duration: 3,
      repeat: -1,
      delay: 1,
      ease: 'bounce'
    })

    gsap.fromTo(
      headingThree,
      {
        opacity: 0,
        x: 500
      },
      {
        opacity: 1,
        duration: 3,
        repeat: -1,
        x: 0,
        delay: 2,
        yoyo: true,
        ease: 'bounce.inOut'
      }
    )
  }, [])

  return (
    <div className='h-screen p-10 text-teal-500'>
      <h1 id='headingOne' ref={headingRef} className='text-3xl font-bold'>
        HEADING
      </h1>
      <h1 id='headingTwo' className='text-3xl font-bold'>
        HEADING TWO
      </h1>
      <h1 id='headingThree' className='text-3xl font-bold'>
        HEADING THREE
      </h1>
    </div>
  )
}
