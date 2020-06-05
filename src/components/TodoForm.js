import React from "react";

class TodoForm extends React.Component {
  
    constructor(){
        super();
        this.state = {
            item: ''
        };
    }

  handleChanges = e => {
    console.log(e.target.value)
    this.setState({item: e.target.value})
  };

  submitItem = e =>{
      e.preventDefault();
      this.props.addItem(e, this.state.item);
  }

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
        <button>Add Tasks</button>
      </form>
    );
  }
}

export default TodoForm;
