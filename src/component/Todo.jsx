import { useState } from "react";
import "./todo.css"


function Todo() {
  const [data, setdata] = useState([]);
  const [val, setVal] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function fetchdata() {
    if (val.trim() === "") {
      alert("No task added");
      return;
    }

    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = val;
      setdata(updatedData);
      setEditIndex(null);
    } else {
      setdata([...data, val]);
    }

    setVal("");
  }

  function handledelete(id) {
    const newData = data.filter((_, index) => index !== id);
    setdata(newData);
  }

  function handleEdit(index) {
    setVal(data[index]);
    setEditIndex(index);
  }

  return (
    <>
      <h1 >Todo</h1>
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
      <button onClick={fetchdata} className="addButton">
        {editIndex !== null ? "Update Task" : "Add Task"}
      </button>
      <div className="parent">
        {data.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          data.map((ele, i) => (
            <div key={i}>
              <h1 className="taskname">{ele}</h1>
              <button onClick={() => handleEdit(i)}>Edit Task</button>
              <button onClick={() => handledelete(i)}>Delete Task</button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Todo;
