'use client'

import img1 from '@/public/images/0.jpg'
import img2 from '@/public/images/2.jpg'
import img3 from '@/public/images/3.jpg'
import img4 from '@/public/images/4.jpg'
import img5 from '@/public/images/5.jpg'
import img6 from '@/public/images/6.jpg'
import img7 from '@/public/images/7.jpg'
import img8 from '@/public/images/8.jpg'
import img9 from '@/public/images/9.jpg'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

export const FloatingImageGallery = () => {
  const plane1 = useRef(null)
  const plane2 = useRef(null)
  const plane3 = useRef(null)
  const speed = 0.01
  let xForce = 0
  let yForce = 0
  let requestAnimationFramId = null

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e
    xForce += movementX * speed
    yForce += movementY * speed

    if (!requestAnimationFramId) {
      requestAnimationFramId = requestAnimationFrame(animate)
    }
  }

  const lerp = (start, end, amount) => start * (1 - amount) + end * amount

  const animate = () => {
    gsap.set(plane1.current, {
      x: `+=${xForce}`,
      y: `+=${yForce}`
    })

    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`
    })
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`
    })
    requestAnimationFrame(animate)
  }
  return (
    <div
      onMouseMove={(e) => manageMouseMove(e)}
      className='h-screen w-full relative overflow-hidden'
    >
      <div ref={plane1} className='absolute w-full h-full'>
        <Image
          className='absolute  brightness-200 left-[80%] top-[70%]'
          src={img1}
          alt='image'
          width={300}
        />
        <Image
          className='absolute brightness-200 left-[5%] top-[65%]'
          src={img2}
          alt='image'
          width={300}
        />
        <Image
          className='absolute brightness-200 left-[35%] top-[0%]'
          src={img3}
          alt='image'
          width={225}
        />
      </div>
      <div ref={plane2} className='absolute w-full h-full'>
        <Image
          className='absolute brightness-110 left-[5%] top-[10%]'
          src={img4}
          alt='image'
          width={250}
        />
        <Image
          className='absolute brightness-110 left-[80%] top-[5%]'
          src={img5}
          alt='image'
          width={200}
        />
        <Image
          className='absolute brightness-110 left-[60%] top-[60%]'
          src={img6}
          alt='image'
          width={225}
        />
      </div>
      <div ref={plane3} className='absolute w-full h-full'>
        <Image
          className='absolute brightness-50 left-[65%] top-[2.5%]'
          src={img7}
          alt='image'
          width={150}
        />
        <Image
          className='absolute brightness-50 left-[40%] top-[75%]'
          src={img8}
          alt='image'
          width={200}
        />
        <Image
          className='absolute brightness-50 left-[30%] top-[60%]'
          src={img9}
          alt='image'
          width={200}
        />
      </div>
    </div>
  )
}
