<template>
    <div>
        <h1>About</h1>
        <router-link to="/about/info">信息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "About",
        data(){
            return{
                users:[
                    {id:1,name:'a'},
                    {id:2,name:'b'},
                    {id:3,name:'c'},
                    {id:4,name:'d'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>