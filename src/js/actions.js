import * as actionTypes from './actionTypes';

function addTodo(title, description) {
    return {
        type: actionTypes.ADD_TODO
    }
}

function deleteTodo(id) {
    return {
        type: actionTypes.DELETE_TODO,
        id
    }
}

function changeTodo(id, title, description) {
    return {
        type: actionTypes.CHANGE_TODO,
        id, title, description
    }
}

function clearList() {
    return {
        type: actionTypes.CLEAR_LIST
    }
}

function showTodo(id) {
    return {
        type: actionTypes.SHOW_TODO,
        id
    }
}

function saveTodo() {
    return {
        type: actionTypes.SAVE_TODO
    }
}

export {addTodo, changeTodo, deleteTodo, clearList, showTodo, saveTodo}