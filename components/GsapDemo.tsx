'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export const GsapDemo = () => {
  const headingRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [control, setControl] = useState('')

  useEffect(() => {
    setMounted(true)
    const tweenControl = document.getElementById('tweenControl')
    const headingOne = document.getElementById('headingOne')
    const headingTwo = document.getElementById('headingTwo')
    const headingThree = document.getElementById('headingThree')
    const staggers = document.querySelectorAll('h2')
    const headingTween = gsap.to(headingOne, {
      x: 300,
      duration: 3,
      repeat: 1
    })

    const headingTwoTween = gsap.from(headingTwo, {
      x: 300,
      duration: 3,
      repeat: -1,
      delay: 1,
      ease: 'bounce'
    })

    const headingThreeTween = gsap.fromTo(
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
    const staggersTween = gsap.fromTo(
      staggers,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        repeat: -1,
        stagger: {
          amount: 1,
          from: 'center'
        }
      }
    )
  }, [])

  const tweenControl = useRef(null)

  useEffect(() => {
    const animate = gsap.fromTo(
      tweenControl.current,
      { x: 200 },
      { x: 0, duration: 5 }
    )

    if (control === 'play') {
      animate.play()
    } else if (control === 'pause') {
      animate.pause()
    } else if (control === 'reverse') {
      animate.reverse()
    } else if (control === 'restart') {
      animate.restart()
    }
  }, [control])

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
      <div className='flex gap-5'>
        <h2>STAGGER</h2>
        <h2>STAGGER</h2>
        <h2>STAGGER</h2>
        <h2>STAGGER</h2>
        <h2>STAGGER</h2>
      </div>
      <div className='flex gap-5 mt-20'>
        <button
          onClick={() => setControl('play')}
          className='bg-gray-700 rounded-md px-3 py2 font-semibold'
        >
          PLAY
        </button>
        <button
          onClick={() => setControl('pause')}
          className='bg-gray-700 rounded-md px-3 py2 font-semibold'
        >
          PAUSE
        </button>
        <button
          onClick={() => setControl('reverse')}
          className='bg-gray-700 rounded-md px-3 py2 font-semibold'
        >
          REVERSE
        </button>
        <button
          onClick={() => setControl('restart')}
          className='bg-gray-700 rounded-md px-3 py2 font-semibold'
        >
          RESTART
        </button>
        <div
          ref={tweenControl}
          className='h-10 w-10 rounded-md bg-neutral-500'
          id='tweenControl'
        />
      </div>
    </div>
  )
}
