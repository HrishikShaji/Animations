'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

export const HorizontalScroll = () => {
  const targetRef = useRef(null)
  const lineRef = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const sections = gsap.utils.toArray('#container')
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: targetRef.current,
        pin: true,
        scrub: 1,
        end: '+=3000'
      }
    })

    gsap.to(lineRef.current, {
      width: '80%',
      scrollTrigger: {
        trigger: targetRef.current,
        start: 'top left',
        scrub: 1
      }
    })

    sections.forEach((section) => {
      let square = section.querySelectorAll('div')

      gsap.from(square, {
        y: -100,
        opacity: 0,
        duration: 2,
        ease: 'elastic',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: 'left center'
        }
      })
    })
  }, [])
  return (
    <div ref={targetRef} className='overflow-x-hidden relative box-border'>
      <div
        ref={lineRef}
        className='absolute top-10 z-20 left-10 w-[200px] h-1 bg-white'
      />
      <div className='flex w-[300vw]'>
        <section
          id='container'
          className='w-screen h-screen bg-neutral-900 flex justify-center items-center'
        >
          <div className='bg-teal-500 w-20 h-20 rounded-md' />
        </section>
        <section
          id='container'
          className='w-screen h-screen bg-neutral-800 flex justify-center items-center'
        >
          <div className='bg-teal-500 w-20 h-20 rounded-md' />
        </section>
        <section
          id='container'
          className='w-screen h-screen bg-neutral-700 flex justify-center items-center'
        >
          <div className='bg-teal-500 w-20 h-20 rounded-md' />
        </section>
      </div>
    </div>
  )
}
