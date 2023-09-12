import Image from 'next/image'

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

const Double = ({ projects }) => {
  return (
    <div className='flex mt-[10vh] h-[45vw] '>
      <div className='w-[66.66%] even:w-[33.33%]'>
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
      <div className='w-[33.33%] even:w-[66.66%]'>
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
      <div className='m-0 bg-black'>
        <Double projects={[projects[0], projects[1]]} />
      </div>
    </div>
  )
}
