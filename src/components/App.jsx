import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App () {
    var [items, setItems] = useState([]);
    function addItem (itemText) {
        items.push(itemText)
        setItems([...items]);
    }
    function deleteItem(id, event) {
      const updatedList = items.filter((item, index) => index !== id);
      setItems(updatedList);
        event.preventDefault();
    }
    return (
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <InputArea 
            onAdd = {addItem}
          />
          <div>
            <ul>
              {items.map((itemValue, index) =>  <ToDoItem 
                key = {index}
                id = {index}
                text = {itemValue}
                onDelete = {deleteItem} />)}
            </ul>
          </div>
        </div>
      );
}

export default App;
