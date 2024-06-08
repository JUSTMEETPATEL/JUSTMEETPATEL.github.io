import React from 'react'
import { BackgroundBeams } from './ui/BackgroundBeam'
import { FlipWords } from './ui/WordFlip'

const Hero = () => {
  return (
    <>
      <BackgroundBeams />
      <div className="flex justify-center items-center absolute h-full w-full ">
        <h1 className='text-5xl'>My Name is Meet Patel and I am a <FlipWords words={["Web Developer", "Student"]} duration={1500} className='text-cyan-500' /></h1>
      </div>
    </>
  )
}

export default Hero
