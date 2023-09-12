'use client'
import gsap from 'gsap'

export const TextHover = () => {
  const projects = [
    {
      title: 'New York',
      color: '#F06318'
    },
    {
      title: 'San Francisco',
      color: '#DCF018'
    },
    {
      title: 'San Antonio',
      color: '#18F0E8'
    },
    {
      title: 'Nashville',
      color: '#8C0CF0'
    },
    {
      title: 'Houston',
      color: '#F0183C'
    },
    {
      title: 'New Orleans',
      color: '#F0BA18'
    },
    {
      title: 'Oklahoma City',
      color: '#0C34F0'
    },
    {
      title: 'Detroit',
      color: '#0CBCF0'
    },
    {
      title: 'Indianapolis',
      color: '#91F018'
    }
  ]

  const manageMouseEnter = (e, color) => {
    gsap.to(e.target, { backgroundColor: color, top: '-3.5vw', duration: 0.5 })
  }

  const manageMouseLeave = (e) => {
    gsap.to(e.target, {
      backgroundColor: 'white',
      top: '0vw',
      duration: 0.5,
      delay: 0.1
    })
  }
  return (
    <div className='w-full'>
      {projects.map((project, i) => (
        <div
          onMouseEnter={(e) => manageMouseEnter(e, project.color)}
          onMouseLeave={(e) => manageMouseLeave(e, project.color)}
          key={i}
          className='w-full border-t-black p-[1vw] border-2 relative mb-[-3.5vw] bg-white'
        >
          <p className='m-0 text-[4vw] uppercase pointer-events-none'>
            {project.title}
          </p>
        </div>
      ))}
    </div>
  )
}
