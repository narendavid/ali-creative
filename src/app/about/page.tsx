import Card from '@/components/about/Card';
import Item from '@/components/about/Item';
import { about, cards } from '@/constants/about';
import tools from '@/constants/tools';
import Link from 'next/link';
import React from 'react'

const page = () => {

    return (
        <div className="mt-[100px] container mx-auto">
            <Link href="/">
                <span className="material-symbols-outlined text-4xl">arrow_left_alt</span>
            </Link>
            <div className="flex gap-16">
                <div className='flex flex-col gap-8 md:w-1/2'>
                    <h2 className="text-[42px]">ALICIA PALACIO JIMENÉZ</h2>
                    <p className="text-2xl">Diseñadora Gráfica - UI UX</p>
                    <p className="font-light text-base">
                        Soy Alicia Palacio Jiménez, diseñadora gráfica apasionada por la creación de soluciones visuales atractivas y efectivas. Poseo una gran capacidad creativa y me entusiasma traducir ideas en conceptos tangibles que comuniquen de manera clara y poderosa. Mi experiencia en
                        el ámbito del diseño me ha permitido desarrollar habilidades en diversas áreas, incluyendo:
                    </p>
                    <div className="flex flex-col gap-5">
                        {
                            about.map(({ description, icon, id, title }) => (
                                <Item key={id} description={description} icon={icon} title={title} />
                            ))
                        }
                    </div>
                    <div className="flex justify-center gap-8 mt-20">
                        <div className="md:w-1/2">
                            <Card title={cards[0].title} description={cards[0].description} />
                        </div>
                        <div className="mt-[60px] md:w-1/2">
                            <Card title={cards[1].title} description={cards[1].description} />
                        </div>
                    </div>


                    {/* {
                        cards.map(({ description, title }, index) => (
                            <Card key={index} title={title} description={description} />
                        ))
                    } */}
                </div>
                <div className="md:w-1/2">
                    <img src="/me.png" className='w-full' alt="me" />
                    <div className='flex justify-center my-20 gap-8 flex-wrap'>
                        {
                            tools.map((tool, index) => (
                                <img key={index} src={tool.image} alt={tool.name} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;