'use client'
import Image from 'next/image'
import { useRef } from 'react'

export const ImageGalleryTrailer = () => {
  let currentIndex = 0
  let collection = []
  let step = 0
  let maxImages = 8
  let noOfImages = 0

  const manageMouseMove = (e: any) => {
    const { clientX, clientY, movementX, movementY } = e
    step += Math.abs(movementX) + Math.abs(movementY)

    if (step >= 150 * currentIndex) {
      mouseMove(clientX, clientY)

      if (noOfImages === maxImages) {
        removeImages()
      }
    }
    if (currentIndex === collection.length) {
      currentIndex = 0
      step = -150
    }
  }

  let user: number = 'world'

  let userrr = 'www'

  const mouseMove = (x: number, y: number) => {
    console.log(x, y, collection)
    const targetImage = collection[currentIndex].current
    targetImage.style.display = 'block'
    targetImage.style.left = x + 'px'
    targetImage.style.top = y + 'px'
    currentIndex++
    noOfImages++
    resetZIndex()
  }

  const resetZIndex = () => {
    const images = getImages()
    images.forEach((image, index) => {
      image.style.zIndex = index
    })
  }

  const removeImages = () => {
    const images = getImages()
    images[0].style.display = 'none'
    noOfImages--
  }

  const getImages = () => {
    let images = []
    const indexOfFirstImage = currentIndex - noOfImages
    for (let i = indexOfFirstImage; i < currentIndex; i++) {
      let targetIndex = i
      if (targetIndex < 0) targetIndex += collection.length
      images.push(collection[targetIndex].current)
    }
    return images
  }
  return (
    <div
      onMouseMove={(e) => manageMouseMove(e)}
      className='flex w-full h-screen '
    >
      {[...Array(10).keys()].map((_, index) => {
        const ref = useRef(null)
        collection.push(ref)
        return (
          <Image
            ref={ref}
            key={index}
            src={`/images/${index}.jpg`}
            alt='image'
            height={1000}
            width={1000}
            className='h-[300px] w-[300px] transform translate-x-[-50%] translate-y-[-50%] object-cover absolute hidden'
          />
        )
      })}
    </div>
  )
}
