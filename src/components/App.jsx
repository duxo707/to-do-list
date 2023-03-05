import React, { useState } from "react";

function App () {
    const [itemText, setItemText] = useState("");
    var [items, setItems] = useState([]);
    function addItem (event) {
        items.push(itemText)
        setItems([...items]);
        setItemText("");
    }
    function handleChange (event) {
        setItemText(event.target.value);
    }
    return (
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <div className="form">
            <input type="text" onChange={handleChange} value={itemText}/>
            <button onClick={addItem}>
              <span>Add</span>
            </button>
          </div>
          <div>
            <ul>
              {items.map(itemValue =>  <li>{itemValue}</li>)}
            </ul>
          </div>
        </div>
      );
}

export default App;