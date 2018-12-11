<template>
  <div>
  	<Mheader :showArrow=true>列表</Mheader>
	  	<ul ref="scroll" @scroll="loadmorea()">
	  			<router-link :to="{name:'Detail',params:{id:item.id}}" v-for="(item,index) in list" :key="index" tag="li">
		  				<img v-lazy="item.img"/>
							<p>
								<span>名称：{{item.name}}</span>
							  <span>价格：{{item.price}}￥</span>
							</p>
							<button @click.stop="deleGood(item.id)">{{deleGoodtxt}}</button>
							<button @click.stop="addCar(item)">添加到购物车</button>
	  			</router-link>
	  			<p>
			  		<button @click="btn">{{btntext}}</button>
			  		<router-link :to="{name:'Add'}" style="color: red;">添加</router-link>
			  	</p>
	  	</ul>
  </div>
</template>

<script>
	import Mheader from "../base/Mheader";
	import {getPage,deleteGood} from "../api";
	import * as Types from '../store/mutations-types';
export default {
  name: 'List',
  data () {
    return {
    	page:1,
    	list:[],
    	hastmore:true,
    	btntext:'加载更多',
    	deleGoodtxt:'删除'
    }
  },
  components:{
  	Mheader
  },
  created(){
  	 this.getList();
  },
  methods:{
  	//添加商品到购物车
  	addCar(list){
  		this.$store.commit({
  			type:Types.ADD_CAR,
  			list
  		})
  	},
  	//删除商品
  	async deleGood(deleId){
  			await deleteGood(deleId)
//	 		this.list.splice(index,1)
				this.list = this.list.filter(item=>item.id!==deleId)
				
  	 },
  	 //加的滚动事件
  	loadmorea(){
  	 	clearTimeout(this.timer)
  	 	this.timer = setTimeout(()=>{
  	 		let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
  	 		if(scrollTop + clientHeight + 60 > scrollHeight){
  	 				this.btn()
  	 		}
  	 	},1000)
  	 },
  	 //获取列表的信息  还有 分页
  	 async getList(){
					let {data:list,hasmore} = await getPage(this.page)
	  	 		this.list = [...this.list,...list];
	  	 		this.hasmore = hasmore;
	  	 		if(!hasmore){
	  	 				this.btntext = "没有更多"
	  	 		}
  	 },
  	 btn(){
  	 		if(this.hasmore){
  	 				this.page+=1;
  	 				this.getList();
  	 		}
  	 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	ul{
		width: 100%;
		height: 100%;
		overflow: scroll;
		position: fixed;
		padding: 55px 0 50px 0;
		box-sizing: border-box;
		li{
			width: 100%;
			font-size: 12px;
			margin-bottom: 20px;
			background-color: orangered;
			overflow: hidden;
			img{
				width: 60%;
				height: 100px;
				float: left;
			}
			p{
				color: white;
				span{
						display: block;
						text-align: left;
				}
			}
		}
	}
</style>
