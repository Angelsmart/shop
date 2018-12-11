# vue-shop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

#目录结构
.mock 这个文件夹是放数据的
.src 
    .api 这个是放所有请求的
    .components  这个房页面级组件
    .base 这个放公用组件
    .router 路由
    .assets 静态文件
    .vuex/store 放vuex时候创建

组件引入步骤
	1.引入
	2.注册
	3.    

路由激活样式
router-link-exact-active 
router-link-active	
路由传参的时候需要写name

安装sass
npm install --save-dev sass-loader
//sass-loader依赖于node-sass
npm install --save-dev node-sass

slot标签  插槽  向组件内部指定位置传递内容，通过slot可以父子传参
通过slot来解决头部内容显示问题

通过props传值控制返回箭头是否显示

v-show 有没有都会渲染  display:none
v-if 通过布尔值来判断

axios 是基于promise封装的
//export 会把当前模块的变量放在一个对象里导出
// * as T 把变量放在一个对象里，as后面是对象名字  *表示所有的
	import * as T from "../api";
	created(){
		T.getBaner()
    }

ref 获取原生DOM/获取子组件的实例

js节流和防抖 _debounce _.throttle

keep-alive 缓存

 缓存的放这里
  <keep-alive >
  	<router-view v-if="$route.meta.keepAlive"/>
  </keep-alive>
  
 不缓存的放这里 
 <router-view v-if="!$route.meta.keepAlive"/>


vuex
vue组件 通过dispatch 提交到 actions 
actions通过commit触发mutations 
mutations负责修改state所有的组件就可以拿到state 进行渲染了

actions 是异步的     store.dispatch
mutations 是同步的
如果同步的话就可以直接用store.commit提交到 mutations
只有mutations能够修改state状态

getters 是vuex的计算属性   计算state相关的值    相当于组件的computed

dispatch 和 commit 的传参问题： 一个参数的时候可以直接传递，多个参数需要用对象传递
单个参数：
this.$store.commit('addcount',10)

多个参数方案一：
this.$store.commit('addcount',{a:10,b:20})

多个参数方案二：type是要为mutations提交的函数
    this.$store.commit({
	  	type:'addcount',
	  	a:10,
	  	b:20
	  	})

Vuex书写逻辑流程
	1.先定义事件
	2.触发事件
	
辅助函数    所有通过辅助函数拿到的  无论值还是方法  都会挂载在实例(this)上面	

localStorage  长期存在的
sessionStore  关闭会话就没了
方法：
setItem('name','ming')  设置
getItem('name') 获取
removeItem('name') 删除
clear() 清空

组件的computed 和 vuex 的 getters每一个值必须加return 才能返回


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
