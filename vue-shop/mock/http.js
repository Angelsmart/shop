let http = require('http');
let url = require('url');
let fs = require('fs');
//轮播的
let sliders = require('./slider')
//读取首页列表的
function read(cb){
	fs.readFile("./good.json","utf8",(err,data)=>{
		if(err||data.length==0){ //文件错误或者没长度
			cd([])
		}else{
			cb(JSON.parse(data))
		}
	})
}
//写入首页列表的，可做删除，添加
function write(data,cb){
	fs.writeFile("./good.json",JSON.stringify(data),"utf8",cb)
}

//定义每页显示5条数据
let offset = 5;
http.createServer((req,res)=>{
	res.setHeader('content-type','text/plain;charset=utf8');
//	//设置那个域名可以跨域
//	res.setHeader('Access-Control-Allow-Origin','*');
//  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  //允许哪个方法可以跨域
//  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//  res.setHeader("X-Powered-By", ' 3.2.1')
    //如果是OPTIONS 直接返回成功
    if (req.method == 'OPTIONS') return res.end('200')

	let {pathname,query} = url.parse(req.url,true);
	
	//轮播图接口     http://localhost:3000/slider
	if(pathname === "/slider"){
		return res.end(JSON.stringify(sliders))
	}
	//首页列表接口   http://localhost:3000/new
	if(pathname === "/new"){
		read((data)=>{
			setTimeout(()=>{
				res.end(JSON.stringify(data))
			},2000)
		})
		return
	}
	//获取的是列表页的数据
	if(pathname === "/list"){
		let id = parseInt(query.id);
		switch(req.method){
			//删除
			case 'DELETE':
				if(id){
					read(data=>{
						//把不等于传递过来的id值变成一个新的data  也就是过滤传过来不等于的id
					    data = data.filter(item=>item.id!==id)
						//把新的数据重新写回到json文件里
						write(data,()=>{
							res.end(JSON.stringify({}))
						})
					})
				}
			break;
			//修改商品
			case 'PUT':
			let str = '';
			req.on('data',chunk=>{
				str+=chunk;
			})
			req.on('end',()=>{
				let up = JSON.parse(str)
				read((data)=>{
					let ups = data.map(item=>{
						//如果等于改变的对象的id，返回改变后的数据 ups
						if(item.id === id){
							return up
						}
						//如果不等于直接返回原来的
						return item
					})
					write(ups,()=>{
						res.end(JSON.stringify(ups))
					})
				})
				
			})
			break;
			//添加商品
			case "POST":
			let str1 = '';
			req.on('data',chunk=>{
				str1+=chunk;
			})
			req.on('end',()=>{
				let addgood = JSON.parse(str1);
				read((data)=>{
					addgood.id = data.length?data[data.length-1].id+1:1;
					data = [...data,addgood]
					write(data,()=>{
						return res.end(JSON.stringify(addgood))
					})
				})
			})
			break;
		}
		
		read((data)=>{
			if(id){
				let good = data.find(item=>item.id===id)
//				如果有这个id的话就返回当前id的数据,否则返回空的对象
				if(good){
					res.end(JSON.stringify(good))
				}else{
					res.end(JSON.stringify())
				}
			}else{
				res.end(JSON.stringify(data))
			}
			
		})
		return
	}
	//分页接口    http://localhost:3000/page?page=1
	if(pathname === '/page'){
		let page =parseInt(query.page);
		console.log(page)
		if(!page){
				 page = 1
			}   
		page = page-1;	
	    //默认有下一页
		let hasmore = true;    
		read((data)=>{
			let pagedata = data.slice(page*offset,page*offset+offset)
			let lastindex = page*offset+offset
			//如果当前最后的索引大于data的length，则表示没有数据了
			if(lastindex>data.length){
				hasmore = false;
			}
			res.end(JSON.stringify({data:pagedata,hasmore}))
		})
		return
	}
	res.end('404')
}).listen(3000)
