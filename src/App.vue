<template>
  <div id="app">
    <p>
      <img id="logo" alt="blog logo" src="./assets/logo.png" />
      Welcome to Gupern's blog
    </p>
    <BlogClientList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// 导入components
import BlogClientList from "./components/BlogClientList.vue";

export default {
  name: "App",
  components: {
    BlogClientList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#logo {
  margin-left: 10px;
  width: auto;
  height: 100px;
}
</style>
