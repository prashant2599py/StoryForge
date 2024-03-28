import { Blog } from "../hooks"
import { Appbar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog  = ({ blog }: {blog : Blog}) => {
    return <div>
        <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 w-full px-20 pt-200 max-w-screen-xl pt-12">
                    <div className="col-span-8">
                            <div className="text-3xl font-extrabold">
                                {blog.title}
                            </div>
                            <div className="pt-4 text-slate-500">
                                Posted on 23 March 2024
                            </div>
                            <div className="pt-4 pr-2">
                                {blog.content}
                            </div>
                    </div>
                    <div className="col-span-4 ">
                            <div className="text-lg text-slate-600">
                                Author
                            </div>
                            <div className="flex w-full">
                                <div className="pr-4 flex flex-col justify-center">
                                    <Avatar name={blog.author.name || "Anonymous"}/>
                                </div>
                                <div className="pt-4">
                                    <div className="text-xl font-bold">
                                        {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className="pt-2 text-slate-500">
                                        Random catch phrase about the author's ability to grab the user's attention
                                    </div>
                                </div>
                            </div>
                    </div>    
                </div>
            </div>
    </div>
}