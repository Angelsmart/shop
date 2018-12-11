<template>
  <div>
  	<Mheader :showArrow=true>购物车</Mheader>
  	<div class="box">
  			<ul>
  				<li><input type="checkbox" v-model="checkallA"/>全选</li>
  				<li>商品</li>
  				<li>数量</li>
  				<li>单价</li>
  				<li>金额</li>
  				<li>操作</li>
  			</ul>
  			<ul v-for="(item,index) in goodList" :key="index">
  				 <li><input type="checkbox" v-model='item.sele' @change="checkone(item)" /><img :src="item.img"/></li>
  				 <li>{{item.name}}</li>
  				 <li><button @click="redcount(index)">-</button>{{item.count}}<button @click="addcount(index)">+</button></li>
  				 <li>{{item.price}}</li>
  				 <li>{{item.price*item.count}}</li>
  				 <li><button @click="detele(index)">删除</button></li>
  			</ul>
  			<div>
		  			<p>总数量：{{allCount}}</p>
		  			<p>价格：{{totalPrice}}￥</p>
		  	</div>
  	</div>
  </div>
</template>

<script>
	import Mheader from "../base/Mheader";
	import {mapState,mapMutations,mapGetters} from "vuex";
	import * as Types from '../store/mutations-types';
	export default {
	  name: 'Car',
	  data () {
	    return {
	    	
	    }
	  },
	  computed:{
	  	 checkallA:{
	       get(){
	         return this.$store.getters.checkall
	       }, 
	       set(val){
	          this.$store.commit('checkall',val);
	       }
    	},
	  	...mapState(['goodList']),
	  	...mapGetters(['checkall']),
	  	...mapGetters(['allCount']),
	  	...mapGetters(['totalPrice'])
	  	
	  	
	  },
	  components:{
	  	Mheader
	  },
	  methods:{
	  	//单选
	  	checkone(item){
	  		this.$store.commit('change',item)
	  	},
	  	//删除
	  	detele(index){
       this.$store.commit(Types.DETELE_NUM,index)
    	},
    	//数量增加
    	addcount(index){
    		this.$store.commit(Types.ADD_COUNT,index)
    	},
    	//数量减减
    	redcount(index){
    		this.$store.commit(Types.RED_COUNT,index)
    	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
		.box{
			width: 100%;
			height: 100%;
			overflow: scroll;
			position: fixed;
			padding: 55px 0 50px 0;
			box-sizing: border-box;
			ul{
					width: 100%;
					height: 35px;
					text-align: center;
					li{
							width: 16.6%;
							height: 100%;
							float: left;
							overflow: hidden;
							/*input:checked:before{
								  content: '\00a0';
							    display: inline-block;
							    border: 2px solid green;
							    border-top-width: 0;
							    border-right-width: 0; 
							    width: 13px;
							    height: 15px;
							    -webkit-transform: rotate(-50deg);
							}*/
							img{
								width: 50%;
							}
					}
			}
		}
</style>
