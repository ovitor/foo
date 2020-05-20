<template>
  <div class="home">
    <h1>about view</h1>
    <p>version: {{ version }}</p>
  </div>
</template>

<script>
export default {
  name: 'foo',
  data: function () {
    return {
      version: process.env.VUE_APP_VERSION
      }
    }
}
</script>

<style scoped="css">
</style>
