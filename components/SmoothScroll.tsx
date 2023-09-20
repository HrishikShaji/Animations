'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function SmoothScroll({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    window.scrollTo(0, 10)

    const lenis = new Lenis({
      duration: 5
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return children
}
