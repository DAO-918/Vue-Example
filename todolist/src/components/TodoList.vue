<template>
    <ul class="list-group">
        <li class="list-group-item"
            v-for="(todo,index) in todoLists" :key="index"
            @mouseenter="currentIndex=index"
            @mouseleave="currentIndex=-1"
            :class="{'bg_over_color':index==currentIndex}"
        >
            <input type="checkbox" v-model="todo.completed">{{todo.title}}
            <button style="float: right" class="btn btn-xs btn-danger"
                    v-show="index==currentIndex" @click="delSpecifyTodo(index)">删除</button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Todo-List",
        data(){
            return{
                isShow:false,
                currentIndex:-1
            }
        },
        props:{
            todoLists:Array
        },
        methods:{
            delSpecifyTodo(index){
                this.$emit('delSpecifyTodo',index)
            }
        }
    }
</script>

<style scoped>
    .bg_over_color {
        background-color: #f7ecb5;;
    }
</style>