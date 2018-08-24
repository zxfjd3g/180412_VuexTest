<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        title: ''
      }
    },

    methods: {
      add () {
        // 1. 读取输入数据title
        const title = this.title.trim()
        // 2. 检查合法性
        if(!title) {
          return
        }
        // 3. 创建一个新的todo
        const todo = {
          title,
          complete: false
        }
        // 4. 添加到todos中
        // this.addTodo(todo)
        this.$store.dispatch('addTodo', todo)

        // 5. 清除输入
        this.title = ''
      }
    }
  }
</script>
<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>