<template>
  <div id="postList">
    <ul>
      <li id="postItem" v-for="(post, index) in postList" :key="index">
        <div @click="toPostDetail(post.id)">
          <p style="float: left; margin-left: 1%">
            {{ post.postTitle }}
          </p>
          <p style="float: right; margin-right: 1%">{{ post.postDate }}</p>
        </div>
      </li>
      <!-- TODO 增加上一页、下一页的功能-->
    </ul>
    <ul id="button">
      <li>
        <p v-if="this.pageNum > 1" @click="prePage()">上一页</p>
      </li>
      <li>
        <p @click="nextPage()">下一页</p>
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
  data() {
    return {
      postList: [],
      pageNum: 1,
      pageSize: 5
    }
  },
  created() {
    // TODO 获取pageNum
    this.fetchPostList(this.pageNum)
  },
  methods: {
    // 获取列表页数据
    fetchPostList(pageNum) {
      this.loading = true
      // TODO size固定，页数随机变动
      let listUrl = '/client/list/' + pageNum + '/' + this.pageSize
      var _this = this
      getRequest(listUrl).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          _this.postList = resp.data
          console.log(_this.postList)
        } else {
          alert('请求后台接口错误，请联系管理员')
        }
      })
    },
    // 上一页数据
    prePage() {
      this.pageNum--
      console.log(this.pageNum)
      this.fetchPostList(this.pageNum)
    },
    // 下一页数据
    nextPage() {
      this.pageNum++
      console.log(this.pageNum)
      this.fetchPostList(this.pageNum)
    },
    // 跳转到详情页
    toPostDetail(postId) {
      // name的方式，传params，地址栏不展示变量
      // path的方式，传query，地址栏展示变量
      this.$router.push({ name: 'BlogClientDetail', params: { postId: postId } })
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
#button {
  float: right;
  margin-bottom: 30%;
}
</style>
