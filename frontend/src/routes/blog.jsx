import { Navbar } from "../components/Navbar"

export const Blog = ()=>{
    return <div>
        <Navbar/>
        <div className="flex flex-col items-center">
            <div className="mt-5">
                <div id="title" className="text-4xl font-bold">
                    hello world
                </div>
                <div id="byline" className="text-2xl text-gray-500">
                    hello
                </div>
            </div>
            <div>
                content content
            </div>
        </div>
    </div>
}