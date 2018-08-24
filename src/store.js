/*
vuex最核心的管理对象: store
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
相当于data的对象
 */
const state = {
  count: 2  //初始化状态数据
}

/*
包含n个直接更新状态的方法的对象
方法中不能包含逻辑和异步代码
 */
const mutations = {
  INCREMENT (state) {
    state.count++
  },

  DECREMENT (state) {
    state.count--
  }
}

/*
包含n个间接更新状态的方法的对象
通过commit()来触发某个mutation调用
方法中可以包含逻辑和异步代码
方法由组件中的dispatch()触发调用
 */
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },

  decrement ({commit}) {
    commit('DECREMENT')
  },

  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit('INCREMENT')
    }
  },

  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

/*
包含n个getter计算属性方法的对象
 */
const getters = {
  oddOrEven (state) {
    return state.count%2===0 ? '偶数' : '奇数'
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})