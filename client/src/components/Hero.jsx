import React from 'react'
import CardHandemade from './CardHandemade'
function Hero() {
    return (
        <div className='max-w-3xl mx-auto  ' >
            <div className='grid grid-cols-2   ' >
                <CardHandemade />
                <CardHandemade />
            </div>


        </div>
    )
}

export default Hero