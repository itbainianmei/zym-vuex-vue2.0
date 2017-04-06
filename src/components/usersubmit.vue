<template>
    <div class="form-group">
        <div>
            <button type="button" v-on:click="submit" class="btn btn-default">提交</button>
        </div>
    </div>
</template>

<script>
    export default{
        name:'usersubmit',
        methods:{
            submit(){
                //alert(this.$parent.$data.username +"==="+ this.$parent.$data.userarea);
                this.$store.commit("showUserName");
            }
        }
    }
</script>