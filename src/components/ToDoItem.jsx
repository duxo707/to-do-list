import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ToDoItem(props) {
    const [isDone, setIsDone] = useState(false);
    const [isMouseOver, setMouseOver] = useState(false);
    function handleMouseOver() {
        setMouseOver(true);
    }
    function handleMouseOut() {
        setMouseOver(false);
    }
    function handleClick () {
        isDone ? setIsDone(false) : setIsDone(true);
        return isDone;
    }
    return <div
        onMouseOver = {handleMouseOver}
        onMouseOut = {handleMouseOut}
    >
    <li 
        style = {{textDecoration: isDone ? "line-through" : "none"}}
        onClick={handleClick}>
        {props.text} <FontAwesomeIcon 
            onClick = {() =>{props.onDelete(props.id);}}
            style = {{visibility: isMouseOver ? "visible" : "hidden"}}
            icon="fa-solid fa-xmark" />
    </li>
    </div>
}

export default ToDoItem;