import axios from 'axios';
//export 会把当前模块的变量放在一个对象里导出
// * as T 把变量放在一个有命名(例如：T)对象里，as后面是对象名字  *表示所有的

//axios.defaults.baseURL = 'http://localhost:3000';

//拦截器
axios.interceptors.response.use(function (response) {
    return response.data;
 }, function (error) {
    return Promise.reject(error);
  });
  
// axios 返回的是promise  
//获取的是轮播图
export let getBaner = ()=>{
//	axios.get('/slider').then(data=>{
//		console.log(data)
//	})
	return axios.get('/slider');
}

//获取的是首页列表数据
export let getNew = ()=>{
	return axios.get('/new');
}

//获取的是列表页的数据
export let getList = () =>{
	return axios.get('/list');
}

//获取一个
export let getOne = (id) =>{
	//以get方式发送过去
	return axios.get(`/list?id=${id}`);
}

//获取分页接口
export let getPage = (page) =>{
	return axios.get(`/page?page=${page}`);
}

//首页所有数据获取完成
export let getHome = () =>{
	return axios.all([getBaner(),getNew()]);
}

//删除商品
export let deleteGood = (id) =>{
	return axios.delete(`/list?id=${id}`);
}

//详情页修改商品
export let modfiyGood = (id,data) =>{
	return axios.put(`/list?id=${id}`,data)
}

//添加商品功能
export let addNew = (good) => {
	return axios.post(`/list`,good)
}


