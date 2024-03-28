import { Appbar } from "../components/AppBar"
import  axios  from "axios"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useMemo, useRef, useState } from "react"
// import JoditEditor from 'jodit-react';

export const Publish = () => {
    // const editor = useRef(null);
    // const [content, setContent] = useState<string>('');

    // const handleContentChange = (newContent: string) => {
    //     setContent(newContent);
    // }

    // const config = {
    //     readonly: false,
    //     placeholder: "Start Typing....."
    // }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();


    return <div>
            <Appbar />

            <div className="flex justify-center my-8">
                
                <div className="w-1/2">
                    
                        <input onChange={(e)=> {
                                setTitle(e.target.value)
                            }} 
                        id="title" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." />

                    <div className="mt-8 w-full mb-4 border border-gray-200 rounded-lg  ">
                        <TextEditor onChange={(e)=> {
                                setDescription(e.target.value)
                            }}  />
                        <div className="flex items-center justify-between px-3 py-2 border-t">
                            <button onClick={async ()=>{
                                    const response =  await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                        title,
                                        content : description
                                    }, {
                                        headers: {
                                            Authorization: localStorage.getItem("token")
                                        }
                                    });
                                    navigate(`/blog/${response.data.id}`)
                                }}
                            type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                            Publish
                            </button>
                            
                        </div>
                    </div>
                </div>


                    {/* <JoditEditor
                        ref = {editor}
                        value = {content}
                        config={config}
                        onChange = {handleContentChange}
                    /> */}
                
            </div>

    </div>
}


export const TextEditor = ({ onChange } : {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) => {
    return <div>
        <div className="px-4 py-2 bg-white rounded-t-lg">    
            <textarea onChange={onChange} rows={8}  className="w-full px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0 dark:text-black dark:placeholder-gray-400 focus:outline-none"  placeholder="Tell your story...." required />
        </div>
    </div>
}