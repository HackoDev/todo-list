import ReactDOM from 'react-dom'
import React from 'react';
import TodoDetails from './tododetails'


export default class TodoListItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    changeTitle(e) {
        this.setState({title: e.target.value});
    }

    changeDescription(e) {
        this.setState({description: e.target.value});
    }

    saveHandler(e) {
        this.props.saveAction(this.state.id, this.state.title, this.state.description);
    }
    handleClick() {
        this.props.actions.showTodo(this.props.id);
    }
    render() {
        return (
            <div className="todoList__item" onClick={this.handleClick}>
                <h4 className="todoList__item_title">{this.props.title}</h4>
                <p className="todoList__item_description">{this.props.description}</p>
            </div>
        );
    }
};
