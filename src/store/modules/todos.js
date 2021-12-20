
const state = {
    todos: []
}

const getters = {
    allTodos: state => state.todos
}

const actions = {
    async addTodo({ commit }, obj) {
        commit("newTodo", obj)
    },
    async deleteTodo({ commit }, id) {
        commit("removeTodo", id)
    },
    async updateTodo({ commit }, obj) {
        commit("update", obj)
    }
}

const mutations = {
    newTodo: (state, obj) => state.todos.unshift(obj),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id != id),
    update: (state, obj) => state.todos = [...state.todos.filter(todo => todo.id != obj.id), { id: obj.id, title: obj.title }]
}

export default {
    state,
    getters,
    actions,
    mutations
}