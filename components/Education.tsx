import React from 'react'
import { TracingBeam } from './ui/TrackingBeam'
import { GlowingStarsBackgroundCard } from './ui/GlowingStar'
import Image from 'next/image'



const Education = () => {
    return (
        <div id='about'>
            <main className='my-12 container w-full h-full'>
                <h1 className="text-7xl mb-36 relative left-3"><span className='text-indigo-700'>&lt;</span>My <span className='text-indigo-700'>Education /&gt;</span></h1>
                <TracingBeam>
                    <div className='container flex-col h-full flex justify-center items-center'>
                        <GlowingStarsBackgroundCard className='mb-16'>
                            <h1 className="text-bold text-3xl">2018-2022</h1>
                            <h1 className="text-bold text-2xl">Global Indian International School</h1>
                        </GlowingStarsBackgroundCard>
                        <GlowingStarsBackgroundCard className='mb-16'>
                            <h1 className="text-bold text-3xl">2023-Current</h1>
                            <h1 className="text-bold text-2xl">SRM Ramapuram</h1>
                        </GlowingStarsBackgroundCard>
                    </div>
                </TracingBeam>


            </main>
        </div>
    )
}

export default Education