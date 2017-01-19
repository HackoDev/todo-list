import React from 'react';
import TodoList from './todolist';
import TodoDetails from './tododetails';

export default class Sidebar extends React.Component {
  render() {
    return (
        <div>
          <div className="sidebar">
            <TodoList actions={this.props.actions}/>
          </div>
          <div className="todoDetails__wrap">
              <TodoDetails actions={this.props.actions}
                           title={this.props.title}
                           description={this.props.description}/>
          </div>
        </div>
    );
  }
};
