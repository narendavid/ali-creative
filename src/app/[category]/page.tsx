"use client"
import React, { useEffect, useState } from 'react';
import Card from '@/components/projects/Card';
import { categories, projectsData } from '@/constants/projects';
import { Category, Project } from '@/types';
import Link from 'next/link';

type Props = {
    params: {
        category: string
    }
}

const page = ({ params }: Props) => {

    const [category, setCategory] = useState<Category>();
    const [projects, setProjects] = useState<Project[]>();

    const findCategory = (category: string) => {
        const result = categories.find((value) => value.id === category);
        return result;
    }

    const findProjects = (category: string) => {
        const result = projectsData.filter((value) => value.category === category);
        return result;
    }

    useEffect(() => {
        const category = findCategory(params.category);
        const projects = findProjects(params.category);
        setCategory(category);
        setProjects(projects);
    }, []);

    return (
        <div className="mt-[100px] container mx-auto py-10">
            <Link href="/">
                <span className="material-symbols-outlined text-4xl">arrow_left_alt</span>
            </Link>
            <h1 className="text-[42px] font-semibold">{category?.name}</h1>
            <p className="text-xl">
                {category?.description}
            </p>
            <div className="grid lg:grid-cols-2 gap-32 py-36">
                {
                    projects?.map((project, index) => (
                        <Card key={index} {...project} />
                    ))
                }
            </div>
        </div>
    )
}

export default page