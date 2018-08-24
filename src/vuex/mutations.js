/*
包含n个直接更新状态数据的对象
 */
import {ADD_TODO, DELETE_TODO, CHECK_ALL_TODOS, CLEAR_COMPLETED_TODOS, RECEIVE_TODOS} from './mutation-types'
export default {

  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },

  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },

  [CHECK_ALL_TODOS] (state, {isCheck}) {
    state.todos.forEach(todo => todo.complete = isCheck)
  },

  [CLEAR_COMPLETED_TODOS] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },

  [RECEIVE_TODOS] (state, {todos}) {
    state.todos = todos
  }
}