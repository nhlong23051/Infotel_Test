import React from 'react'
import img from '../../asset/images/unknown_1.png'
type Props = {}

export default function Footer({ }: Props) {
    return (
        <>
            <hr />
            <div className='text-center text-gray-400 flex items-center justify-center'>Make By <img className='' src={img} alt='' /></div>
        </>
    )
}