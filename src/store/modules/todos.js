import axios from 'axios';
import { stat } from 'fs';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data);
    },
    async addNewTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', 
            {
                title, completed: false
            }
        );
        commit('addTodo', response.data);
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('delTodo', id);
    },
    async filterTodos({commit}, e){
        const filterTotal = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${filterTotal}`)
        commit('setTodos', response.data);
    },
    async updateTodo({commit}, updTodo){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`);
        commit('updateTodoStatus', updTodo);
    }
};

const mutations = {
    setTodos: (state, todos) => {
        state.todos = todos
    },
    addTodo: (state, todo) => {
        state.todos.unshift(todo);
    },
    delTodo: (state, id) => {
        state.todos = state.todos.filter(todo => todo.id !== id);
    },
    updateTodoStatus: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if(index !== -1){
            state.todos.splice(index, 1, updTodo);
        }
    }
};

export default {
    state, getters, actions, mutations
}