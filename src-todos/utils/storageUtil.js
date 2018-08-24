/*
使用localStorage保存数据的工具模块
 */
const TODOS_KEY = 'todos_key'
export default {
  saveTodos (todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },

  getTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}