import React from 'react'

type Props = {
    title: string,
    image: string
}

const Items = ({ image, title }: Props) => {
    return (
        <div className='relative'>
            <p className='absolute z-1 top-20 left-0'>{title}</p>
            <img className='brightness-50 w-[168px] z-0' src={image} alt="image" />
        </div>
    )
}

export default Items