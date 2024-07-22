import React from 'react'

type Props = {
    title: string;
    description: string;
    icon: string;
}

const Item = ({ title, description, icon }: Props) => {
    return (
        <div className="flex shadow-[0px_2px_12px_0px_#00000033] p-3 rounded-xl">
            <div className="flex w-[15%] justify-center items-center">
                <p className="text-3xl">1</p>
            </div>
            <div className="w-[70%]">
                <span className="text-base font-bold">{title}</span>
                <p className="text-base font-light">{description}</p>
            </div>
            <div className="flex w-[15%] justify-center items-center">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
        </div>
    )
}

export default Item