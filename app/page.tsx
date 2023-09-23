'use client'

import { GsapGallery } from '@/components/GsapGallery'
import { HorizontalScroll } from '@/components/HorizontalScroll'

export default function Home() {
  return (
    <main className=''>
      <GsapGallery />
      <HorizontalScroll />
      <section className='h-screen w-full bg-teal-500'></section>
    </main>
  )
}
