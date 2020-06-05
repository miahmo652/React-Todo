import React from 'react';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'

const todoData =[

  {
    task: 'Organize Garage',
    id: 15282,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 15281,
    completed: false
  },
  {
    task:'cook food',
    id: 158284,
    completed: false
  },
  {
    task:'clean',
    id: 15285,
    completed: false
  }

]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state ={
    todoData
  }
}
toggleItem = todoId =>{
  console.log(todoId)
  this.setState({

    todoData: this.state.todoData.map(todo=>{
      if(todoId === todo.id){
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      else {
        return todo;
      }
      
    })
  }); 
};

addItem = (e, item)=>{
  e.preventDefault();
  const newItem ={
    task:item,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todoData: [...this.state.todoData, newItem]
  });
};

clearCompleted = e =>{
  e.preventDefault();
  this.setState({
    todoData: this.state.todoData.filter(item=> !item.completed)
  })
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
      <TodoList 
      toggleItem={this.toggleItem}
      clearCompleted={this.clearCompleted}
      todoData={this.state.todoData}/>
      </div>
    );
  }
}

export default App;
