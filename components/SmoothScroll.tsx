'use client'

import Lenis from '@studio-freight/lenis'
import { warn } from 'console'
import { useEffect } from 'react'

export default function SmoothScroll({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <>{children}</>
}
