import React,{useState} from "react";
import Draggable from 'react-draggable'

export default function Text(props){
    const [show,setShow]=useState(false)
    const [editMode,setEditMode]=useState(false)
    const [val,setVal]=useState("Double Click to Edit")
    function toggle()
    {
        setShow(!show)
    }

    return (
    
            <Draggable>
                {
                    editMode? (<input value={val} onDoubleClick={() => setEditMode(false)} onChange={(e) => setVal(e.target.value)}/>) : 
                    (<div>
                        <h1 className="text-box" onDoubleClick={() => setEditMode(true)} onClick={toggle}>{val}</h1> 
                        {
                        show && (<button className="remove-btn" onClick={() => props.remove(props.idx)}>Remove</button>)
                        }
                    </div>)
                }
            </Draggable>
    )
}