import React from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";

export default function Card(props){
    const navigate=useNavigate()
    return (
        <div className="card">
            <img className="card-image" src={props.url}/>
            <h3 className="title">{props.name}</h3>
            <button onClick={e => navigate(`/edit?image=${props.url}`)} className="edit-btn">Edit</button>
        </div>
    )
}