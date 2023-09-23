'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const LayeredPinnedSection = () => {
  useEffect(() => {
    gsap.utils.toArray('#sec').forEach((container, i) => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        pin: true,
        pinSpacing: false
      })

      gsap.from(container.children, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: container,
          start: 'top center',
          end: 'top top',
          toggleActions: 'play none reverse reset'
        }
      })
    })
  })
  return (
    <div>
      <div className='flex items-center justify-center h-fit w-full flex-col'>
        <div
          id='sec'
          className='flex items-center justify-center h-[100vh] w-full bg-[url("/images/6.jpg")] bg-center bg-cover flex-col'
        >
          <h1 className='text-6xl font-bold text-white'>SECTION ONE</h1>
        </div>
        <div
          id='sec'
          className='flex items-center justify-center h-[100vh] bg-[url("/images/7.jpg")] w-full bg-center bg-cover flex-col'
        >
          <h1 className='text-6xl font-bold text-white'>SECTION TWO</h1>
        </div>
        <div
          id='sec'
          className='flex items-center justify-center h-[100vh] bg-[url("/images/5.jpg")] w-full bg-center bg-cover flex-col'
        >
          <h1 className='text-6xl font-bold text-white'>SECTION THREE</h1>
        </div>
        <div
          id='sec'
          className='flex items-center justify-center h-[100vh] bg-[url("/images/4.jpg")] w-full bg-center bg-cover flex-col'
        >
          <h1 className='text-6xl font-bold text-white'>SECTION FOUR</h1>
        </div>
      </div>
    </div>
  )
}
