<template>
  <div>
    <button v-on:click="alert();">click me</button>

    <p v-if="login">user has been logged in</p>

    <hello-vue v-bind:num="num" v-on:add-num="addNumber"></hello-vue>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: false,
      num: 10,
    }
  },
  methods: {
    addNumber: function () {
      this.num++;
    }
  }
}

Vue.component('hello-vue', {
  props: ['num'],
  template: '<p>hello vue, number : {{ num }} <button v-on:click="addNum">add num</button></p>',
  methods: {
    addNum: function () {
      this.$emit('add-num');
    }
  }
});
</script>

<style>
</style>