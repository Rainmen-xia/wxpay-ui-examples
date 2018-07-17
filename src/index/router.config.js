const  config ={
    'demo1':'demo1'

}


// {
//     return r => require.ensure([], () =>
//       r(require(`./docs/zh-CN${path}.md`)),
//     'zh-CN');
//   }


 function getComponet(){
    return path=>{
        return r => require.ensure([], () =>
                r(require(`./docs/zh-CN${path}.md`))
                ,'doc');
        }
} 


config.forEach(element => {
    
});