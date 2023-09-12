'use client'
export const PixelCursor = () => {
  const getBlocks = () => {
    const blockSize = window.innerWidth * 0.05
    const noOfBlocks = Math.ceil(window.innerHeight / blockSize)
    return [...Array(noOfBlocks).keys()].map((_, index) => {
      return (
        <div
          onMouseEnter={(e) => colorize(e)}
          key={`b_${index}`}
          className='w-full h-[5vw] '
        />
      )
    })
  }
  const colorize = (e) => {
    e.target.style.backgroundColor = 'black'
    setTimeout(() => {
      e.target.style.backgroundColor = 'transparent'
    }, 300)
  }
  return (
    <div className='flex items-center justify-center h-screen w-full bg-white'>
      <div className='w-[70%] z-10 uppercase text-4xl pointer-events-none font-extrabold text-center mix-blend-difference text-white relative'>
        <p>We Specialize in turning space into complex shapes</p>
      </div>
      <div className='absolute w-full h-full flex'>
        {[...Array(20).keys()].map((_, index) => {
          return (
            <div className='w-[5vw] h-full' key={index}>
              {getBlocks()}
            </div>
          )
        })}
      </div>
    </div>
  )
}
