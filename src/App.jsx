import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';

class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'Take out the trash',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Say hi to mark',
                completed: true
            },
            {
                id: uuid.v4(),
                title: 'Meeting at 5pm',
                completed: false
            },
        ]
    }

    toggleCompleted = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            })
        })
    }

    remove = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => {
                return todo.id !== id
            })
        })
        
    }

    add = (title) => {
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid.v4(),
                    title: title,
                    completed: false
                }
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <AddTodo add={this.add} />
                <Todos
                    todos={this.state.todos}
                    remove={this.remove}
                    toggleCompleted={this.toggleCompleted}
                />
                
            </div>
        );
    }
}

export default App;
