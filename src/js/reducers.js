import * as actionTypes from './actionTypes'


let iState = {editing: false, todos: []};

export default function todoList(state=iState, action) {
    let todoItem;
    switch (action.type) {

        case actionTypes.ADD_TODO:
            let newTodo = {id: new Date().getTime(), title: "New todo", description: "..."};
            return Object.assign({}, state, {active: Object.assign({}, newTodo), editing: true, todos: [...state.todos, newTodo]});

        case actionTypes.DELETE_TODO:
            return Object.assign({}, state, {editing: false, todos: state.todos.filter((elem) => elem.id != action.id)});

        case actionTypes.CHANGE_TODO:
            todoItem = Object.assign({}, state.active, {title: action.title, description: action.description});
            return Object.assign({}, state, {active: todoItem});

        case actionTypes.SAVE_TODO:
            let newTodos = [...state.todos];
            let index = state.todos.indexOf(state.todos.find((elem)=>elem.id == state.active.id));
            newTodos.splice(index, 1, state.active);
            return Object.assign({}, state, {todos: newTodos, active: null, editing: false});

        case actionTypes.SHOW_TODO:
            return Object.assign({}, state, {active: state.todos.find((elem)=>elem.id == action.id), editing: true});

        case actionTypes.CLEAR_LIST:
            return Object.assign({}, state, {todos: [], active: null, editing: false});

        default:
            return state;
    }
}