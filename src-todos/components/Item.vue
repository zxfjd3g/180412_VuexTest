<template>
  <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo">删除</button>
  </li>
</template>
<script>
  export default {
    props: { // 指定接收属性的属性名及属性值类型
      todo: Object,
      index: Number
    },

    data () {
      return {
        bgColor: '#ffffff',
        isShow: false
      }
    },

    methods: {
      handleEnter (isEnter) {
        if(isEnter) { // 进入
          this.bgColor = '#cccccc'
          this.isShow = true
        } else { // 离开
          this.bgColor = '#ffffff'
          this.isShow = false
        }
      },

      deleteTodo () {
        this.$store.dispatch('deleteTodo', this.index)
      }
    }
  }
</script>
<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>