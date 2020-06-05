// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = props =>{
    return (
        <div>
            {props.todoData.map(todo=>(
                <Todo key={todo.id} item={todo} toggleItem={props.toggleItem}/>
            ))}
            <button onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList;