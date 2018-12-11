<template>
  <div>
  	<input type="text" v-model="textv" /><input type="button" id="" value="添加" @click="addtop()"/>
  	<p>正在进行的</p>
  	<ul class="ultop">
	  		<li v-for="(item,index) in datas" :key='index'>
	  			<input type="checkbox" v-model="item.ck" @click="addbottom(index)"/>
	  			{{item.text}}<p @click='removea(index)'>删除</p>
	  		</li>
  	</ul>
  	<p>已经完成的</p>
  	<ul class="ulbottom">
  		<li v-for="(item,index) in two" :key='index'>
  			<input type="checkbox" v-model="item.ck" @click="shiftbottom(index)"/>
  			{{item.text}}<p @click='removeb(index)'>删除</p></li>
  	</ul>
  </div>
</template>

<script>
	import Mheader from "../base/Mheader"
	export default {
	  name: 'TodoList',
	  data () {
	    return {
	    		datas:[],
	    		two:[],
	    		textv:''
	    }
	  },
	  components:{
	  	Mheader
	  },
	  methods:{
	  	addtop(){
	  		this.datas.push({
	  			text:this.textv,
	  			ck:false
	  		});
	  	},
	  	removea(index){
	  		this.datas.splice(index,1);
	  	},
	  	removeb(index){
	  		this.two.splice(index,1);
	  	},
	  	addbottom(index){
	  		if(this.datas[index].ck == false){
	  			this.two.push(this.datas[index])
	  			this.removea(index)
	  		}
	  	},
	  	shiftbottom(index){
	  		if(this.two[index].ck == true){
	  			this.datas.push(this.two[index])
	  			this.removeb(index)
	  		}
	  	}
	  },
	  created(){
	  	console.log(this.datas)
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
		.ultop{
				width: 100%;
				li{
					width: 100%;
					background-color: #007046;
					color: white;
					margin-top: 10px;
					p{
						float: right;
						color: red;
					}
				}
		}
		.ulbottom{
				width: 100%;
				li{
					width: 100%;
					background-color: #007046;
					color: white;
					margin-top: 10px;
					p{
						float: right;
						color: red;
					}
				}
		}
</style>
