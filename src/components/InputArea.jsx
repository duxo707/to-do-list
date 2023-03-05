import React, {useState} from "react";

function InputArea (props) {
    const [itemText, setItemText] = useState("");
    function handleChange (event) {
        setItemText(event.target.value);
    }
    return <div className="form">
        <input type="text" onChange={handleChange} value={itemText}/>
        <button onClick={() => {
            props.onAdd(itemText);
            setItemText("");
        }}>
        <span>Add</span>
        </button>
  </div>
}

export default InputArea;