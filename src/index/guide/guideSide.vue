<template>
    <ul class="ui-menu ">
      <li class="index-menu " :class="[active==index?'selected':'']" @click="changeGuide(index)" v-for="(item ,index ) in urls">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>  
    </ul>
</template>
<style type="text/css">
    
</style>

<script>
    export default{
        data(){
            return{
                urls:[
                    {
                        path:'/guide/start',
                        name:'开始'
                    },
                    {
                        path:'/guide/tab',
                        name:'tab'
                    }
                ],
                active:0
            }        
        },
        methods:{
           changeGuide(index){
                this.active=index;
           } 
        }
    }  
</script>