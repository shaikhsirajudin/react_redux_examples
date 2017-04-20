import appConstants from '../AppConstants';
let nextTodoId = 0
export const addTodo = (text) => {
    return {
        type: appConstants.ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = (filter) => {
    return {type: appConstants.SET_VISIBILITY_FILTER, filter}
}

export const toggleTodo = (id) => {
    return {type: appConstants.TOGGLE_TODO, id}
}