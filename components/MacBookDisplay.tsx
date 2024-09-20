import React from 'react'
import { MacbookScroll } from './ui/Macbook'

const MacBookDisplay = () => {
    const redirect = () =>{

    }
    return (
        <div>
            {/* <div className="mt-32"></div> */}
            <div className='mb-72'>
                <MacbookScroll src='/Hackathon.jpeg' showGradient={true}  title=" "/>
            </div>

        </div>
    )
}

export default MacBookDisplay
