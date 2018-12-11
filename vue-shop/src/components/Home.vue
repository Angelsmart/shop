<template>
  <div>
  	<Mheader :showArrow=false>首页</Mheader>
  	<div class="container">
  		<Loading  v-if="loading"></Loading>
  		<template v-else>
	  			<mySwiper :swiperSlides="slider"></mySwiper>
	  		 	<HomeList :homelist="list"></HomeList>
  		</template>
  	</div>
  </div>
</template>

<script>
	import Mheader from "../base/Mheader";
	import mySwiper from "../base/mySwiper";
	import HomeList from "../base/HomeList";
	import Loading from "../base/Loading";
	import {getHome} from "../api";
export default {
  name: 'Home',
 
  data () {
    return {
    		slider:[],
    		list:[],
    		loading:true
    }
  },
  components:{
  	 Mheader,
  	 mySwiper,
  	 HomeList,
  	 Loading
  },
  created(){
		this.getHomeList();
  },
  methods:{
  		async getHomeList(){
  			  //await 后面通常跟着promise 这就是在api的index里return axios的！！
  				[this.slider,this.list] = await getHome();
  				this.loading = false;
  				/*getHome().then((data)=>{
  						this.slider = data[0];
  						this.list = data[1];
  				}).then(()=>{
  						this.loading = false;
  				})*/
  		}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 .container{
	 	position:relative;
	 	top: 50px;
	 	margin-bottom: 50px;
	 	overflow: hidden;
	 }
</style>
