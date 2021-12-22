export interface toDoList{
    title: string,
    date: string,
    content: {
        text: string
    }[]
}

export interface projectName{
    project: string
}

export interface updateProject{
    project: string,
    content: string
}

export interface removeProject{
    project: string,
    deleteProject?: boolean,
    content?: string
}