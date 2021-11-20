import storage from "./until/localStorage.js"
const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    edit: null
}

const actions = {
    add({ todos }, title) {
        if(title) {
            todos.push({ title, completed: false })
        }
        storage.set(todos)
    },
    toggle({ todos }, index) {
        const todoCompleted = todos[index]
        todoCompleted.completed = !todoCompleted.completed
        storage.set(todos)
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    remove({ todos }, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    change(state, filter) {
        state.filter = filter
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    startEdit(state, index) {
        state.edit = index
    },
    endEdit(state, title) {
        if(state.edit !== null) {
            if(title) {
                state.todos[state.edit].title = title
                storage.set(state.todos)
            } else {
                this.remove(state, state.edit)
            }
            state.edit = null
        }
    },
    cancel(state) {
        state.edit = null
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}