export type Project = {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
}

export type Category = {
    id: string;
    name: string;
    description: string;
    projects?: Project[];
}