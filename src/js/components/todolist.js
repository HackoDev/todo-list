import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from './todolistitem'


function TodoListState(state) {
  return {todos: state.todos};
}

export default connect(TodoListState)(class TodoListComponent extends React.Component {

  render() {
    console.log(this.props.actions);
    const { actions }= this.props;
    return (
      <ul className="todoList">
          {this.props.todos.map(function(item) {
            return <TodoListItem actions={actions} title={item.title} description={item.description} key={item.id} id={item.id}/>;
          })}
      </ul>
    );
  }
})
