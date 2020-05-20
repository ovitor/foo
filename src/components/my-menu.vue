<template>
<div class="my-menu">
  <ul>
    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
    <li><router-link :to="{ name: 'foo' }">Foo</router-link></li>
    <li><router-link :to="{ name: 'bar' }">Bar</router-link></li>
    <li><router-link :to="{ name: 'about' }">About</router-link></li>
  </ul>
 </div> 
</template>

<script>
export default {
  name: 'my-menu'
}
</script>

<style scoped lang="css">
.menu {
  display: inline;
  }
ul {
  padding: 0;
  margin: 0;
  }
ul li {
  display: inline;
  padding: 5px;
  }
</style>
