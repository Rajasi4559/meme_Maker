import React,{useState, createRef} from "react";
import { useSearchParams } from "react-router-dom";
import {exportComponentAsJPEG} from 'react-component-export-image'
import Text from "./Text";
import './Edit.css'

export default function EditPage()
{
    const [params]=useSearchParams()
    const [textList,setTextList]= useState([])

    const memeRef=createRef()
    
    function addText()
    {
        setTextList([...textList,{text:""}])
    }
    function remove(index)
    {
        const list=[...textList]
        list.splice(index,1)
        setTextList(list)

    }

    return (
        <div className="edit-page">
            <div ref={memeRef} className="meme">
                <img className="meme-image" src={params.get("image")}/>
                {
                    textList.map((element,index) => (
                        <Text key={index} idx={index} remove={remove}/>
                    ))
                }
            </div>
            <div>
                <button className="add-text" onClick={addText}>Add Text</button>
                <button variant="sucess" className="download" onClick={() => exportComponentAsJPEG(memeRef)}>Download</button>
            </div>
        </div>
    )
}