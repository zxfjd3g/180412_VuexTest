<template>
  <div>
    <p>clicked: {{count}} times, count is {{oddOrEven}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {


    /*computed: {
      count () {
        return this.$store.state.count
      },

      oddOrEven () {
        return this.$store.getters.oddOrEven
      }
    },*/

    computed: {
      ...mapState(['count']),   // {count (){return this.$store.state.count}}
      ...mapGetters(['oddOrEven']),
    },

    /*methods: {
      increment () {
        this.$store.dispatch('increment')
      },

      decrement () {
        this.$store.dispatch('decrement')
      },

      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },

      incrementAsync () {
        console.log('xxx')
        this.$store.dispatch('incrementAsync')
      }
    }*/
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }
  }
</script>

<style>

</style>