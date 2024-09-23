import Link from 'next/link';
import React from 'react'

type Props = {
    id: string;
    image?: string;
    name?: string;
    description?: string;
    category?: string;
}

const Card = ({ description, image, category, name, id }: Props) => {

    return (
        <Link href={`/${category}/${id}`}>
            <div
                className="cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out"
            >
                <img src={`/projects/${image}`} alt={name} />
                <h3 className="text-[28px] font-semibold">{name}</h3>
                <p className="text-base">{description}</p>
            </div>
        </Link>
    )
}

export default Card