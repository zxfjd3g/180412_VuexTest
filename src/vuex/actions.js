/*
包含n个间接更新状态数据的对象
 */
import {ADD_TODO, DELETE_TODO, CHECK_ALL_TODOS, CLEAR_COMPLETED_TODOS, RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../utils/storageUtil'

export default {

  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo}) // action向mutation传递不是数据本身, 而是包含数据的对象
  },

  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  checkAllTodos ({commit}, isCheck) {
    commit(CHECK_ALL_TODOS, {isCheck})
  },

  clearCompletedTodos ({commit}) {
    commit(CLEAR_COMPLETED_TODOS)
  },

  readTodos ({commit}) {
    // 模拟异步读取
    setTimeout(() => {
      // 从local中读取出前面保存的todos
      const todos = storageUtil.getTodos()
      // 提交mutation
      commit(RECEIVE_TODOS, {todos})
    }, 1000)
  }
}