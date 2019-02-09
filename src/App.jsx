import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
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

    render() {
        return (
            <div className="App">
                <Header />
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
