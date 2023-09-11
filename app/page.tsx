import { CursorTrailer } from '@/components/CursorTrailer'
import { MaskText } from '@/components/MaskText'
import Image from 'next/image'

export default function Home() {
  const phrases = [
    'It is a long established fact',
    'that a reader will be distracted',
    'by the readable content of a page',
    'when looking at its layout',
  ]
  return (
    <main className='bg-white text-black flex flex-col items-center gap-20 mt-20'>
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
    </main>
  )
}
