import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '15px',
            borderBottom: '2px dotted #ccc',
            textDecoration: this.props.todo.completed 
            ? 'line-through' 
            : 'none',
        
        }
        // return this.props.todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none'}
    }
    // toggleCompleted = (e) => {
    //     console.log(e);
    // }

  render() {
      const {id, title} = this.props.todo;
    return (
      <div style={ this.getStyle() }>
        <p>
            <input 
                type="checkbox" 
                    onChange={this.props.toggleCompleted.bind(this, id)}
            />
            {title}
                <button onClick={this.props.remove.bind(this, id)} style={{ padding: '5px', color: 'red', fontWeight: 'bold', fontSize: '20px' ,backgroundColor: 'transparent', border: 'none', float: 'right'}}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = { 
//     backgroundColor: '#f4f4f4',
//     padding: '10px',
//     marginTop: '10px'
// }

export default TodoItem
