import React from 'react';

function TaskItem({ item, onDelete, onToggle}) {
    const { task, completed, taskAssignedTo} = item;

    return (
    
        <div style={{ border: "1px solid purpel", margin: "10px" }}>
        <span style={{ color: completed ? "green" : "red", }}>{task}</span>
        <span>{` - Assigned to: ${taskAssignedTo}`}</span>
        <button style={{padding: "5px", margin:"5px"}} onClick={() => onDelete(item)}>Delete Task</button>
        <button style={{padding: "5px",margin:"5px"}} onClick={() => onToggle(item)}>Toggle Task</button>
   </div>

    )
}

export default TaskItem;