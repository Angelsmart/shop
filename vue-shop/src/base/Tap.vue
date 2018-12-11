<template>
  <div class="footer" v-show="showA">
  	<router-link to="/Home"><i class="iconfont  icon-shouye"></i><span>首页</span></router-link>
  	<router-link to="/List"><i class="iconfont  icon-liebiao"></i><span>列表</span></router-link>
  	<router-link to="/Car"><i class="iconfont  icon-gouwuche"></i><span>购物车</span></router-link>
  	<router-link to="/My"><i class="iconfont  icon-wode"></i><span>我的</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'Tap',
  data () {
    return {
    	showA:true
    }
  },
  watch:{
  	$route(to,from){
//		console.log(this.$route);
//		console.log(from);
  		if(to.name=='Detail'){
  			this.showA = false;
  		}else{
  			this.showA = true;
  		}
  	}
  },
  created(){
  	if(this.$route.name == "Detail"){
  			this.showA = false;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--scoped 无论写什么组样式当前组件的-->
<style scoped lang="scss">
	.footer{
		display: flex;
		z-index: 99;
		width: 100%;
		height: 50px;
		background-color:white;
		position: fixed;
		bottom: 0;
		justify-content: center;
		align-items: center;
	}
	a{
		flex: 1;
		text-align: center;
		height: 100%;
		line-height: 50px;
		color: #000000;
	}
	.router-link-exact-active{
			color: white;
			background: orangered;
	}	
</style>
