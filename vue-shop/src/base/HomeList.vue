<template>
	<div class="HomeList">
		<ul>
			<li v-for="(list,index) in homelist" :key="index">
				<img :src="list.img"/>
				<p>
					<span>名称：{{list.name}}</span>
				    <span>价格：{{list.price}}￥</span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:["homelist"],
		name : "HomeList",
		data(){
			return{
				
			}
		}
		
	}
</script>

<style scoped lang="scss">
	ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		li{
			width: 48%;
			font-size: 12px;
			margin-bottom: 10px;
			outline: 1px solid orangered;
			
			img{
				width: 100%;
				height: 100px;
			}
			p{
				width: 100%;
				display: flex;
				justify-content: space-around;
			}
		}
	}
</style>