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
import Lenis from '@studio-freight/lenis'
import Image from 'next/image'
import { useEffect } from 'react'

const projects = [
  {
    bg: img5,
    img: img1
  },
  {
    bg: img6,
    img: img2
  },
  {
    bg: img7,
    img: img3
  },
  {
    bg: img8,
    img: img4
  }
]

export const SplitVignete = () => {
  return (
    <div>
      {projects.map((project, i) => {
        return (
          <div key={i} className='h-[120vh]'>
            <div className='w-full h-full relative '>
              <Image
                src={project.bg}
                alt='image'
                fill
                className='w-full object-cover'
              />
            </div>
            <div className='h-[30vw] w-[25vw] fixed top-0 rounded-md overflow-hidden'>
              <Image
                src={project.img}
                alt='image'
                fill
                className='w-full object-cover'
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
