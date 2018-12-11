<template>
  <div>
  	<input type="text" v-model="textv" /><input type="button" id="" value="添加" @click="addtop()"/>
  	<p>正在进行的</p>
  	<ul class="ultop">
	  		<li v-for="(item,index) in datas" :key='index' v-if="!item.ck">
	  			<input type="checkbox" v-model="item.ck"/>
	  			{{item.text}}<p @click='removea(index)'>删除</p>
	  		</li>
  	</ul>
  	<p>已经完成的</p>
  	<ul class="ulbottom">
  		<li v-for="(item,index) in datas" :key='index' v-if="item.ck">
	  			<input type="checkbox" v-model="item.ck"/>
	  			{{item.text}}<p @click='removea(index)'>删除</p>
	  	</li>
  	</ul>
  </div>
</template>

<script>
	export default {
	  name: 'TodoListtwo',
	  data () {
	    return {
	    		datas:[],
	    		textv:''
	    }
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
