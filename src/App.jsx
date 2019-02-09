import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
      todos: [
        {
            id: 1,
            title: 'Take out the trash',
            completed: false
        },
        {
          id: 2,
          title: 'Say hi to mark',
          completed: true 
        },
        {
          id: 3,
          title: 'Meeting at 5pm',
          completed: false
        },
      ]
  }

  toggleCompleted = (id) => {
    console.log('from app.js', id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      })
    })
    
  }

  render() {
    return (
      <div className="App">
        {/* <h1>App</h1> */}
        <Todos 
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
