'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

export const ScrollTextOpacity = () => {
  const phrase =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  const refs = useRef([])
  const container = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    createAnimations()
  }, [])

  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: 'none',
      stagger: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: 'top',
        end: `+=${window.innerHeight / 1.5}`,
        markers: true,
        scrub: true
      }
    })
  }

  const splitWords = () => {
    let body = []
    phrase.split(' ').forEach((word, index) => {
      const letters = splitLetters(word)
      body.push(
        <p className='text-3xl m-0 mr-[1.5vw] font-bold' key={`word_${index}`}>
          {letters}
        </p>
      )
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split('').forEach((letter, index) => {
      letters.push(
        <span
          ref={(el) => {
            refs.current.push(el)
          }}
          className='opacity-20'
          key={`letter_${index}`}
        >
          {letter}
        </span>
      )
    })
    return letters
  }
  return (
    <div
      ref={container}
      className='h-screen mb-[100vh] flex items-end justify-center text-gray-600'
    >
      <div className='w-[90%] flex flex-wrap'>{splitWords()}</div>
    </div>
  )
}
