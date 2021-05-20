<template>
  <div id="app">
    <p>
      <img id="logo" alt="blog logo" src="./assets/logo.png" />
      Welcome to Gupern's blog
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#logo {
  margin-left: 10px;
  width: auto;
  height: 100px;
}
</style>
