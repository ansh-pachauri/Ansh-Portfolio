import { MarqueeDemo } from "./MarqueeDemo"

export const Myskills = () => {
    return (
        <div className="flex flex-col h-full w-full items-center justify-center p-20 pt-32">
            <div className="flex flex-col h-full w-full items-center justify-center">
                <h1 className="text-4xl font-bold text-center text-purple-500">My Technical Skills</h1>
            </div>
            <MarqueeDemo />
        </div>
    )
}
