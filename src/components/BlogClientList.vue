<template>
  <div id="postList">
    <p>this is in BlogClientList</p>
    <ul>
      <li id="postItem" v-for="(post, index) in postList" :key="index">
        <p style="float: left; margin-left: 1%">
          {{ post.postTitle }}
        </p>
        <p style="float: right; margin-right: 1%">{{ post.postDate }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRequest } from '../util/api'
export default {
  name: 'BlogClientList',
  props: {
    msg: 'msg'
  },
  data () {
    return {
      postList: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true
      let listUrl = '/client/list/1/2'
      var _this = this
      getRequest(listUrl).then((resp) => {
        this.loading = false
        if (resp.status === 200) {
          _this.postList = resp.data
          console.log(_this.postList)
        } else {
          alert('请求后台接口错误，请联系管理员')
        }
      })
    }
  }
}
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
