import React from 'react'
import { FaStar } from "react-icons/fa"
const Star = () => {
    return (
        <div>
            <ul className='flex gap-1 text-sm text-orange-50'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </ul>
        </div>
    )
}

export default Star
