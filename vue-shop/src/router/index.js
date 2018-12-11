import Vue from 'vue'
import Router from 'vue-router'
import My from '@/components/My'
import List from '@/components/List'
import Car from '@/components/Car'
import Detail from '@/components/Detail'
import TodoList from '@/components/TodoList'
import TodoListtwo from '@/components/TodoListtwo'
import Add from '@/components/Add'
Vue.use(Router)

export default new Router({
  routes: [
    
    {
		    path: '/',
		    redirect:"/Home"
		},
		{
		    path: '/Home',
		    name: 'Home',
		    component:()=>import
		    ('@/components/Home'), //所谓的懒加载
		    meta:{keepAlive:true}
		},
		{
		    path: '/List',
		    name: 'List',
		    component:List
		},
		{
			path: '/Car',
		    name: 'Car',
		    component:Car
		},
		{
		    path: '/My',
		    name: 'My',
		    component:My
		},
		{
		    path: '/Detail/:id',
		    name: 'Detail',
		    component:Detail
		},
		{
		    path: '/TodoList',
		    name: 'TodoList',
		    component:TodoList
		},
		{
		    path: '/TodoListtwo',
		    name: 'TodoListtwo',
		    component:TodoListtwo
		},
		{
		    path: '/Add',
		    name: 'Add',
		    component:Add
		},
		{
		    path: '/Demo',
		    name: 'Demo',
		    component:()=>import
		    ('@/components/Demo')
		},
		{
			path: '/*',
		  redirect:"/Home"
		}
  ]
})
