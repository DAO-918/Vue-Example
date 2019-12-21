<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-2">
        <ul class="list-group">
          <li class="list-group-item">
            <router-link to="/home">Home</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
      <div class="col-xs-10">
        <!--将对应的路由组件设置到这个标签当中-->
        <router-view></router-view>
      </div>
    </div>
    <router-view></router-view>
    <div class="jumbotron">
      <h1>请发表对Vue的看法</h1>
    </div>
    <div class="row">
      <!--可以是驼峰式命名SubmitComment，也可以自动转换成 以"-"为分隔符的命名方式-->
      <!--组件编程, 最大的两个难点就是: 组件间值的传递; 父子组件间方法的调用-->
      <!--addComm是一个给子组件使用的方法的别名 @addComm="addCommment" 在子组建中 可以使用 this.$emit('addComm', {})-->
      <submit-comment @addComment="addComment" @deleteComment="deleteComment"></submit-comment>
      <!--父子组件间传值: :数据别名(名称可以一致) 引号中的内容是父组件data中定义的数据，那么子组件需要使用 props: {comments: Array}-->
      <comment-list :comments="comments"></comment-list>
    </div>
  </div>
</template>

<script>
// 引入组件
import CommentList from "./components/CommentList";
import SubmitComment from "./components/SubmitComment";

export default {
  name: 'app',
  components: {
    //引入的组件需要在components中定义
    CommentList,
    SubmitComment//末尾的逗号可加可不加
  },
  data(){
    return{
      comments:[
        {name: '刘德华', content: 'vue没有张学友说的那么简单'},
        {name: '张学友', content: 'just so so'},
      ]
    }
  },
  methods:{
    //value 是{name: '名字', content: '内容'}
    addComment(value){
      this.comments.push(value);
    },
    deleteComment(index){
      this.comments.splice(index,1);
    }
  }
}
</script>

<style>

</style>
