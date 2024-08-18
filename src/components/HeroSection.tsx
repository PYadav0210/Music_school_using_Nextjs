import React from 'react'
import { HoveredLink } from './ui/navbar-menu'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <div className='p-4 relative z-10 w-full text-center'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="aqua"
      />
        <h1 className='mt-200 md:mt-0 text-1xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into our comprehensive music courses and transform your musical journey today. Wheather you are a begginer or looking to refine your skills, join us to unlock your true potential</p>
      <div className='mt-4'>
        <HoveredLink href="/courses"> <Button
      className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'
        >Explore Courses</Button>
        </HoveredLink>
      </div>
      </div>
          </div>
  )
}

export default HeroSection
