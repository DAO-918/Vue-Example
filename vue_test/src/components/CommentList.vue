<template>
    <div class="col-xs-7">
        <h2 v-show="comments.length == 0">暂无评论</h2>
        <ul v-if="comments.length > 0" class="list-group">
            <li v-for="(comment,index) in comments" :key="index" class="list-group-item">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <h3 class="panel-title">{{comment.name}}说：</h3>
                        <button @click="deleteComment(index)" style="position: relative; left: 4px; bottom: 18px;" type="button" class="close"><span>&times;</span></button>
                    </div>
                    <div class="panel-body">
                        {{comment.content}}
                    </div>
                </div>
            </li>
            <li class="list-group-item">

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CommentList",
        //定义props的目的是接收父组件的数据  :comments="comments"
        props:{
            comments:Array
        },
        methods:{
            deleteComment(index){
                this.$emit('deleteComment',index);
            }
        }
    }
</script>

<style scoped>

</style>