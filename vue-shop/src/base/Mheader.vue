<template>
	<div class="header">
		<i v-if="showArrow" @click="goBack" class="iconfont icon-fanhui"></i>
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name: 'Mheader',
		props:{
			showArrow:{
				type:Boolean,
				default:false
			}
		},
		data () {
		   return {
		   	
		    }
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped lang="scss">
	.header{
		position: fixed;
		top: 0;
		z-index: 99;
		color: white;
		i{
			position: absolute;
			left: 10px;
		}
		width: 100%;
		height:50px;
		background:orangered;
		text-align: center;
		line-height: 50px;
	}
</style>