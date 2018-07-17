const http = require('http');
const url = require('url');
const path  = require('path');
const fs  =require('fs');
 

class serverPlugin{


  apply(compiler){


    let server = http.createServer((req,res)=>{

      var pathname = url.parse(req.url).pathname; //获取url的pathname (/index.html)
      console.log("file:"+pathname.substring(1)); //将‘/’去掉
      fs.readFile('devDist/'+pathname.substring(1), function (err,data) { //fs模块加载文件
          if(err){
              res.writeHead(404,{
                'Content-Type':'text/html'
              });
          }else{
            res.writeHead(200,{
              'Content-Type':'text/html'
            });
            res.write(data.toString());
          }
          res.end();
      });

    });

    compiler.hooks.done.tap("serverPlugin",function(){
        server.listen(3000,'127.0.0.1', ()=>{
        console.log("服务器已经运行，请打开浏览,输入:http://127.0.0.1:3000/ 来进行访问.")
      }); 
 //   console.log('test');
    })



  }
}

module.exports = serverPlugin
 
//netstat -ano|findstr "3000"