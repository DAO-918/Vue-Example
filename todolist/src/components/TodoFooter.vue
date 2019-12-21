<template>
    <div v-show="todoLists.length > 0">
        <!-- 全选框 -->
        <input v-model="allCompletedStatus" type="checkbox">已完成{{completedTodoNum}}/{{todoLists.length}}
        <button @click="delCompletedTodo" class="btn btn-xs btn-danger" style="float: right">删除已完成</button>
    </div>
</template>

<script>
    export default {
        name: "Todo-Footer",
        props:{
            todoLists:Array
        },
        computed:{
            completedTodoNum: function(){
                let todoLists = this.todoLists;
                /**reduce 相当于
                 let num = 0;
                 todoLists.forEach(todo => {
                    num += (todo.complted ? 1 : 0);
                });
                 return num;
                 */
                return todoLists.reduce((num,todo) => num + (todo.completed?1:0),0);
            },
            allCompletedStatus:{
                get(){
                    return this.todoLists.length == this.completedTodoNum;
                },
                set(value){
                    this.$emit('changeAllTodoStatus',value);
                }
            }
        },
        methods:{
            delCompletedTodo(){
                this.$emit('deleteCompeletedTodo')
            }
        }
    }
</script>

<style scoped>

</style>