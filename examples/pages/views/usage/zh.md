# 配置与使用
在使用`ikaros-ui`之前推荐先学习vue2.0，配合vue官方的脚手架`vue-cli`使用效果将会更佳！


## 快速上手
### 安装vue-cli并初始化项目
(如果是自行配置项目结构的请忽略这一步)
```shell
npm install vue-cli -g
vue init webpack my-project
```

### 配置
修改入口文件,使用 Vue.use() 方法全部加载
```js
import ikaros from 'ikaros'
import 'ikaros/dist/ikaros.css'

Vue.use(ikaros)
```
