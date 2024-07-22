import React from 'react';

type Props = {
    title: string;
    description: string;
};

const Card = ({ description, title }: Props) => {
    return (
        <div className="px-[35px] pt-[30px] pb-[50px] rounded-xl shadow-[0px_3px_12px_0px_#00000033]">
            <p className="font-semibold	text-lg">{title}</p>
            <p className="font-light text-base">{description}</p>
        </div>
    )
};

export default Card;