@这是我们展示的说明文档
**三维测量 measure**
### 基本用法

* @param type 测量类型
* line 直线测量
* area 面积测量
* vertical 垂直测量
* horizontal 水平测量

-----
@这部分是页面上可以交互的代码

<div class="measure-ct">
            <button @click="measure('line')">直线测量</button>
            <button @click="measure('area')">面积测量</button>
            <button @click="measure('vertical')">垂直测量</button>
            <button @click="measure('horizontal')">水平测量</button>
            <button @click="measureCancel">清除测量结果</button>
        </div>
        <br>

::: demo

@这部分是我们展示的示例代码
```shell
import {xxx} from 'index.js';
 
```
```html
<template>
    <div>
        <div class="measure-ct">
            <button @click="measure('line')">直线测量</button>
            <button @click="measure('area')">面积测量</button>
            <button @click="measure('vertical')">垂直测量</button>
            <button @click="measure('horizontal')">水平测量</button>
            <button @click="measureCancel">取消测量模式</button>
        </div>
    </div>
</template>
<script>
 
export default {
  name: 'measure',
  methods: {
    measure(type){
        console.log(type)
    },
    measureCancel(){
       console.log()

    }
  }
}
</script>

```
:::