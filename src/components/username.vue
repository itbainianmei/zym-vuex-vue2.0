<template>
    <div class="form-group" id="username">
        <label>用户名</label>
        <div>
            <input type="text" name="username" v-model="username" v-on:change="userNameChange" class="form-control" :placeholder="username">
        </div>
    </div>
</template>

<script>
    export default{
        name:'username',
        props:["placeholder"],
        data:function () {
            return {
                username:""
            }
        },
        methods:{
            userNameChange(){
                //this.$emit("childChange","name",this.username)
                this.$store.state.name = this.username;
            }
        }
    }
</script>