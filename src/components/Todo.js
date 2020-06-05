import React from 'react';

const Todo = props =>{
    return(
        <div 
        /*style={props.todo.completed ? { textDecoration: 'line-through' } : null}*/
        onClick={()=>props.toggleItem(props.item.id)}
        className={`item${props.item.completed ? "completed" : ""}`}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;