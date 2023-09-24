'use client'

import { useEffect } from 'react'

export const CustomCursor = () => {
  return (
    <>
      <Cursor />
      <div className='p-10 flex gap-10 text-white justify-center'>
        <h1 className='text-2xl font-bold'>ITEM ONE</h1>
        <h1 className='text-2xl font-bold'>ITEM ONE</h1>
        <h1 className='text-2xl font-bold'>ITEM ONE</h1>
        <h1 className='text-2xl font-bold'>ITEM ONE</h1>
      </div>
    </>
  )
}

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.pageX + 'px'
      cursor.style.top = e.pageY + 'px'
    })
  }, [])
  return (
    <div
      id='cursor'
      className='fixed bg-neutral-black bg-white top-0 rounded-full left-0 w-5 h-5 transform translate-x-[-50%] translate-y-[-50%] mix-blend-difference transition duration-300'
    />
  )
}
