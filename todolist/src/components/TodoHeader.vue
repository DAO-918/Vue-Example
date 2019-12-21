<template>
    <div>
        <input v-model="title" @keyup.enter="addTodo" class="form-control" style="margin-bottom: 10px">
    </div>
</template>

<script>
    export default {
        name: "Todo-Header",
        data(){
            return{
                title:''
            }
        },
        methods:{
            addTodo(){
                if (!this.title.trim()){
                    return;
                }
                this.$emit('addTodo', {
                    title:this.title,
                    completed:false})
                this.title = '';
            }
        }
    }
</script>

<style scoped>

</style>