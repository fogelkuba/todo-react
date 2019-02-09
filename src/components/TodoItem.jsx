import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        // if (this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     } 
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
        return this.props.todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none'}
    }

  render() {
    return (
      <div style={ this.getStyle() }>
        <p>
        {this.props.todo.title}</p>

      </div>
    )
  }
}

TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = { 
//     backgroundColor: '#f4f4f4',
//     padding: '10px',
//     marginTop: '10px'
// }

export default TodoItem
