<template>
  <div class="text">
    Hello, {{ message }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: "World"
      }
    }
  }
</script>

<style>
  .text {
    color: green;
  }
</style>