import React, { useState } from "react";
import Draggable  from "react-draggable"; 

const Text = () => {

    const [editMode, setEditMode] = useState(false);
    const [val, seVal] = useState("double click to edit");

    return ( 
        <Draggable>
            {
                editMode ? ( <input onDoubleClick={(e) => setEditMode(false)} value={val} onChange={(e) => seVal(e.target.value)} /> ) : ( <h5 onDoubleClick={(e) => setEditMode(true)}>{val}</h5> )
            }
        </Draggable>
    );
};

export default Text;
