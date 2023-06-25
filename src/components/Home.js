import React,{useEffect, useState} from "react";
import Card from "./Card";
import './Home.css'

export default function HomePage(){
    const [allMemes,setAllMemes]=useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    const cardElement=allMemes.map(item => {
        return (
            <Card 
                key={item.id}
                {...item} 
            />
        )
    })
    
    return (
        <div className="card-list">
            {cardElement}
        </div>
    )
}