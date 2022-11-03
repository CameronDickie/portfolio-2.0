import React from 'react'
import pfp from '../public/pfp.png'
export default function Header() {
    return (
        <div>
            <div className="bg-black text-white">
                <div className='flex justify-between items-center p-2'>
                    <div className="relative overflow-hidden h-20 w-20">
                        <img src={pfp.src} className="absolute object-cover" />
                    </div>
                    <div>
                        <h2 className='text-4xl font-rubik font-black'>Cameron Dickie</h2>
                    </div>
                    <div className='flex-grow'></div>
                    <nav className="text-xl">
                        <a className='pr-2'>GitHub</a>
                        <a className='pr-2'>Twitter</a>
                        <a className='pr-2'>LinkedIn</a>
                    </nav>
                </div>
            </div>
            
        </div>
    )
}
/*
<div className="inline-flex float-left">
                    <img src={pfp.src} className="w-20 h-20 aspect-square" />
                    <h2 className='text-4xl font-rubik font-black mt-8'>Cameron Dickie</h2>
                </div>
                <div className="float-right">
                    <a>GitHub</a>
                    <a>Twitter</a>
                    <a>LinkedIn</a>
                </div>
*/