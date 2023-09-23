'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const GsapGallery = () => {
  const leftSideRef = useRef(null)
  const rightSideRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      trigger: leftSideRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: rightSideRef.current
    })
  }, [])
  return (
    <div>
      <section className='h-screen w-full bg-neutral-500'></section>
      <div className='flex'>
        <div ref={leftSideRef} className='flex-1 bg-gray-500 flex flex-col'>
          <div className='h-screen bg-teal-500 w-full'></div>
          <div className='h-screen bg-teal-600 w-full'></div>
          <div className='h-screen bg-teal-700 w-full'></div>
        </div>
        <div
          ref={rightSideRef}
          className='flex-1 bg-gray-700 h-screen flex justify-center items-center'
        >
          <div className='bg-neutral-900 h-20 w-20 rounded-md' />
        </div>
      </div>
      <section className='h-screen w-full bg-neutral-500'></section>
    </div>
  )
}
