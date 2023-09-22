'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

export const ScrollTriggerDemo = () => {
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const el = headingRef.current
    gsap.to(el, {
      x: 300,
      scrollTrigger: {
        trigger: paraRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 4,
        toggleActions: 'play none reverse none',
        pin: el,
        pinSpacing: true,
        toggleClass: 'red',
        markers: false
      }
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        markers: true,
        toggleActions: 'restart none none none',
        start: 'top center',
        end: 'top 20%',
        scrub: 1
      }
    })
    tl.to(paraRef.current, { x: 200, duration: 3 })
      .to(paraRef.current, { y: 200, duration: 2 })
      .to(paraRef.current, { x: 0, duration: 2 })

    ScrollTrigger.create({
      trigger: bgRef.current,
      start: 'top center',
      end: 'end top',
      scrub: 20,
      toggleClass: { targets: bgRef.current, className: 'bg-neutral-700' }
    })
    gsap.utils.toArray('span').forEach((span) => {
      ScrollTrigger.create({
        trigger: span as any,
        start: 'top center',
        toggleClass: 'bg-gray-500'
      })
    })
  }, [])

  return (
    <>
      <div className='h-screen w-full bg-black' />
      <div ref={bgRef} className='h-screen w-full bg-black p-10 flex flex-col '>
        <h1 className='text-3xl font-bold text-white' ref={headingRef}>
          Heading
        </h1>
      </div>
      <div className='h-screen w-full bg-black' />
    </>
  )
}
