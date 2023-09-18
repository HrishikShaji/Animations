'use client'
import Image from 'next/image'
import React, { useRef } from 'react'

const projects = [
  {
    name: 'momo',
    src: '1.jpg'
  },
  {
    name: 'koko',
    src: '2.jpg'
  },
  {
    name: 'lolo',
    src: '3.jpg'
  },
  {
    name: 'soso',
    src: '4.jpg'
  }
]

interface DoubleProps {
  projects: Record<string, any>
}

const Double = ({ projects }: DoubleProps) => {
  const firstImage = useRef<HTMLDivElement | null>(null)
  const secondImage = useRef<HTMLDivElement | null>(null)
  let xPercent = 0
  let requestAnimationFrameId: any = null
  let currentXpercent = 0
  let speed = 0.15
  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX } = e
    xPercent = (clientX / window.innerWidth) * 100

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate)
    }
  }

  const animate = () => {
    const deltaXPercent = xPercent - currentXpercent
    currentXpercent = currentXpercent + deltaXPercent * speed

    if (firstImage.current && secondImage.current) {
      firstImage.current.style.width = 66.66 - currentXpercent * 0.33 + '%'
      secondImage.current.style.width = 33.33 + currentXpercent * 0.33 + '%'

      if (Math.round(currentXpercent) == Math.round(xPercent)) {
        cancelAnimationFrame(requestAnimationFrameId)
        requestAnimationFrameId = null
      } else {
        requestAnimationFrame(animate)
      }
    }
  }

  return (
    <div
      onMouseMove={(e) => manageMouseMove(e)}
      className='flex mt-[10vh] h-[45vw] '
    >
      <div className='w-[66.66%]' ref={firstImage}>
        <div className='pb-[66%] relative'>
          <Image
            className='object-cover'
            src={`/images/${projects[0].src}`}
            fill
            alt='image'
          />
        </div>
        <div>
          <h3 className=''>{projects[0].name}</h3>
        </div>
      </div>
      <div className='w-[33.33%]' ref={secondImage}>
        <div className='pb-[66%] relative'>
          <Image src={`/images/${projects[1].src}`} fill alt='image' />
        </div>
        <div>
          <h3>{projects[1].name}</h3>
        </div>
      </div>
    </div>
  )
}

export const MouseScaleGallery = () => {
  return (
    <div className='mt-[5vh] text-white pb-[10vh]'>
      <h1 className='p-[20px] text-xl max-w-[80%] font-semibold'>
        Image Gallery controlled by mouse
      </h1>
      <div className='m-0 bg-black min-h-screen w-full'>
        <Double projects={[projects[0], projects[1]]} />
      </div>
    </div>
  )
}
