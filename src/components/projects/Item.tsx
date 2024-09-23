import Link from 'next/link';
import React from 'react'

type Props = {
    id: string;
    name: string;
    image: string;
    titleLeft?: boolean;
}

const Item = ({ id, image, name, titleLeft = true }: Props) => {
    return (
        <div className={`flex justify-between md:px-20 my-20 flex-col md:flex-row ${!titleLeft && 'md:flex-row-reverse'}`}>
            <div className='my-auto max-w-[15%]'>
                <h3 className="text-5xl capitalize">{name}</h3>
                <Link href={`/${id}`} className="flex align-center font-light">
                    {!titleLeft && <span className="material-symbols-outlined">arrow_left_alt</span>}
                    More
                    {titleLeft && <span className="material-symbols-outlined">arrow_right_alt</span>}
                </Link>
            </div>
            <img
                src={`/projects/${image}`}
                alt={name}
                width={647}
                className="md:w-70%"
            />
        </div>
    )
}

export default Item