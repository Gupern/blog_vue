<template>
  <div id="postDetail">
    <h1>{{ this.postDetail.postTitle }}</h1>
    <p>{{ this.postDetail.postDate }}</p>
    <div id="content" v-html="this.postDetail.postContent"></div>
    <div id="button">
      <p @click="goBack()">返回列表页</p>
    </div>
  </div>
</template>

<script>
import { getRequest } from '../util/api'
export default {
  name: 'BlogClientDetail',
  props: {
    msg: 'msg'
  },
  data() {
    return {
      postId: '',
      postTitle: '',
      postModified: '',
      postDate: '',
      postContent: '',
      postDetail: ''
    }
  },
  created() {
    // 获取详情页数据
    this.fetchPostDetail(this.$route.params.postId)
  },
  methods: {
    // 获取列表页数据
    fetchPostDetail(postId) {
      this.loading = true
      let listUrl = '/client/detail/' + postId
      var _this = this
      getRequest(listUrl).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          _this.postDetail = resp.data
          console.log(_this.postDetail)
        } else {
          alert('请求后台接口错误，请联系管理员')
        }
      })
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
p {
  text-align: center;
}
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
#postDetail {
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 6%;
  margin-right: 10%;
}
#button {
  float: right;
  margin-top: 10%;
  margin-bottom: 30%;
}
</style>
