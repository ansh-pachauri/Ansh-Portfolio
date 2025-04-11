import Card from "./Card"

export const Projects = () => {
    return (
        <div className="flex flex-col h-full w-full items-center justify-center p-20 pt-32">
            <div className="flex flex-col h-full w-full items-center justify-center">
                <h1 className="text-4xl font-bold text-center text-purple-500">My Projects</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Project 1" description="Description 1" image="/profile.jpg" link="https://via.placeholder.com" tags={["React", "Tailwind", "Typescript"]} />

            <Card title="Project 1" description="Description 1" image="/profile.jpg" link="https://via.placeholder.com" tags={["React", "Tailwind", "Typescript"]} />

            <Card title="Project 1" description="Description 1" image="/profile.jpg" link="https://via.placeholder.com" tags={["React", "Tailwind", "Typescript"]} />

            <Card title="Project 1" description="Description 1" image="/profile.jpg" link="https://via.placeholder.com" tags={["React", "Tailwind", "Typescript"]} />
            </div>
            
        </div>
    )
}
