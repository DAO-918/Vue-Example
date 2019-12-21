<template>
    <div class="container">
        <div class="row">
            <!--col-xs-push-3 从左向右推3格-->
            <div class="col-xs-6 col-xs-push-3 main-box" >
                <todo-header></todo-header>
                <todo-list></todo-list>
                <todo-footer></todo-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoList from "./components/TodoList";
    import TodoFooter from "./components/TodoFooter";
    import TodoHeader from "./components/TodoHeader";
    export default {
        name: "todos",
        components: {
            TodoHeader,
            TodoFooter,
            TodoList
        },
        data(){
            return{
                todoLists: [
                    {title: '吃饭', completed: false},
                    {title: '睡觉', completed: true},
                    {title: '打豆豆', completed: false},
                ]
            }
        },
        methods:{
            //添加代办事项
            addTodo(todo){
                this.todoLists.push(todo);
            },
            //删除已经完成，就是保留未完成
            deleteCompeletedTodo(){
                // let newTodos = [];
                // this.todoLists.forEach(todo => {
                //     if(!todo.completed) {
                //         newTodos.push(todo);
                //     }
                // })
                // this.todoLists = newTodos;
                this.todoLists = this.todoLists.filter(todo => !todo.completed)
            },
            //删除指定索引的todo
            delSpecifyTodo(index) {
                this.todoLists.splice(index, 1);
            },
            //改变全选框的状态，或者，改变所有的todo的状态
            changeAllTodoStatus(value) {
                this.todoLists.forEach(todo => {  //只需要让所有的todo与checkbox状态保持一致
                    todo.completed = value;
                })
            }
        }
    }
</script>

<style scoped>
    .main-box{
        margin-top: 100px;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
        padding: 20px 10px;
    }
</style>