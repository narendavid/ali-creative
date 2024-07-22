"use client"
import { projectsData } from '@/constants/projects';
import { Project } from '@/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {
    params: {
        id: string;
        category: string;
    }
}

const page = ({ params }: Props) => {

    const [project, setProject] = useState<Project>();

    const findProject = (id: string) => {
        const project = projectsData.find((project) => project.id === id);
        return project;
    }

    useEffect(() => {
        setProject(findProject(params.id))
    }, [])

    return (
        <div className="mt-[100px] container mx-auto py-10">
            <Link href={`/${params.category}`}>
                <span className="material-symbols-outlined text-4xl">arrow_left_alt</span>
            </Link>
            <div className="flex gap-20">
                <div>
                    <h1 className="text-6xl">{project?.name}</h1>
                    <p className="text-base">{project?.description}</p>
                </div>
                <img src={project?.image} alt={project?.name} />
            </div>
        </div>
    )
}

export default page