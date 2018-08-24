/*
包含n个基于state数据的getter计算属性方法的对象
 */
export default {
  totalSize (state) {
    return state.todos.length
  },

  completeSize (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
  },

  isCheckAll (state, getters) {
    return getters.totalSize===getters.completeSize && getters.completeSize>0
  }
}