import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';


function TodoDetailState(state) {
  return {todos: state.todos, todo: state.active, editing: state.editing};
}


export default connect(TodoDetailState)(class TodoDetails extends React.Component {
    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.saveHandler = this.saveHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    deleteHandler(e) {
        this.props.actions.deleteTodo(this.props.todo.id);
    }

    changeHandler(e, field) {
        let obj = Object.assign({}, this.props.todo);
        obj[field] = e.target.value;
        this.props.actions.changeTodo(obj.id, obj.title, obj.description);
    }

    saveHandler(e) {
        this.props.actions.saveTodo();
    }
    render() {
        return (
            (this.props.editing?
            <Card className="todoDetails__box">
              <TextField hintText="TODO Title" underlineShow={true} fullWidth={true} value={this.props.todo.title} onChange={(e)=>this.changeHandler(e, 'title')}/>
              <TextField hintText="Description" underlineShow={true} fullWidth={true} multiLine={true} value={this.props.todo.description} onChange={(e)=>this.changeHandler(e, 'description')}/>
              <RaisedButton label="Save" secondary={true} className="todoDetails__btn_save" onClick={this.saveHandler}/>
              <RaisedButton label="Done" secondary={true} className="todoDetails__btn_delete" onClick={this.deleteHandler}/>
            </Card>:null)
        );
    }
});
