<template>
    <div class="guide">
        <guide />
    </div> 
</template>
 
<style>

.demo-block{
        display: flex;
        color:silver;
}
.ui-container {
    padding: 24px 0;
    margin: 24px 0;
    background: #ffffff;
    display: table;
    width: 100%;
    table-layout: fixed;
    border-radius: 4px;
    -webkit-border-radius: 4px;
}
</style>
 
<script>
import guide from './template.md'
export default {
    components:{
       guide
    }
}
</script>