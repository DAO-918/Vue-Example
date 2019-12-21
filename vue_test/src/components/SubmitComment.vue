<template>
    <div class="col-xs-5">
        <p v-show="showErrorMsg">不能为空</p>
        <form>
            <div class="form-group">
                <label>用户名</label>
                <input @focus="showErrorMsg=false" v-model="name" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label>评论</label>
                <textarea @focus="showErrorMsg=false" v-model="content" type="text" rows="10" style="resize: none;" class="form-control"></textarea>
            </div>
            <div class="form-group">
                <button @click.prevent="addComment" class="btn btn-primary btn-block">提交</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SubmitComment",
        data(){
            return{
                name: '',
                content: '',
                showErrorMsg: false
            }
        },
        methods:{
            addComment(){
                if (!this.name.trim()||!this.content.trim()){
                    this.showErrorMsg = true;
                    return;
                }
                let comm = {name: this.name, content: this.content}
                //this.$emit('addComment',{name:this.name,content:this.content});
                this.$emit('addComment',comm);
                this.name = '';
                this.content = '';
            }
        }
    }
</script>

<style scoped>

</style>