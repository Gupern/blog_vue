<template>
  <div id="postList">
    <ul>
      <li id="postItem" v-for="post in postList" :key="post">
        <p>{{ post.title }} - {{ post.author }} - {{ post.publishedAt }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogClientList",
  props: {
    msg: String, // String为App.vue里的HTML传进来的变量
  },
  data() {
    return {
      postList: [
        {
          id: 0,
          title: "How to do lists in Vue",
          author: "Jane Doe",
          publishedAt: "2016-04-10",
        },
        {
          id: 1,
          title: "Vue2",
          author: "Doe",
          publishedAt: "2016-04-11",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#postList {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 6%;
  margin-right: 10%;
}
#postItem {
  width: 100%;
  margin: 10px;
  border: solid 1px black;
}
</style>
