'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const ScrollTriggerDemo = () => {
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
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
      trigger: paraRef.current,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 20,
      toggleClass: { targets: bgRef.current, className: 'bg-white' }
    })
    gsap.utils.toArray('span').forEach((span) => {
      ScrollTrigger.create({
        trigger: span,
        start: 'top center',
        toggleClass: 'bg-gray-500'
      })
    })
  }, [])

  return (
    <div
      ref={bgRef}
      className='h-screen w-full bg-neutral-900 p-10 flex flex-col '
    >
      <h1 ref={headingRef} className='font-bold text-white text-3xl'>
        ABOUT ME
      </h1>
      <div className='flex-grow flex items-center'>
        <p ref={paraRef} className='text-white'>
          My name is Hrishik Shaji.I'm 23 years old.I'm from
          Thrissur,Kerala,India.I'm a son,a brother and a good friend for a
          handful of people. After 10th, i took computer science for plus two
          because i loved computers since i grew up playing computer games. As
          for my Degree i chose B.Sc Computer Science,unfortunately i failed
          some papers not the core subjects,but <span>yoyo</span>still i had to
          say goodbye to my degree.After leaving computers i tried jobs in other
          areas and had some success and some failures but nothing felt
          permanent.And then after few years i started learning programming, i
          attended a full stack Web development Bootcamp in Udemy,fortunately i
          completed it and it felt good to be back to the computer science.
          <span>yoyo</span>After that i have been teaching myself about
          programming,i learnt new languages and frameworks,implemented them in
          my projects and soon i was able to build working web apps,and
          <span>kooko</span> i believe i am ready now to have a career in web
          development.For my future employers i only have this message: Each and
          Every Error that stood before me as an obstacle stands no more and i
          will remove them as long as i wish to.Also i am hardworking,willing to
          learn new technologies,exceptionally adaptive to all kinds of
          scenarios.
        </p>
      </div>
    </div>
  )
}
