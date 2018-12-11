<template>
	<div class="Detail">
		<Mheader :showArrow=true>详情页</Mheader>
		
		<div class="details">
			<div class="detailstop">
				<img :src="good.img"/>
				<div class="detailstopl">
					<label for="asd">
						名称:<input type="text" name="" id='asd' v-model="good.name"/>
					</label>
					<label for="">
						价格:<input type="text" name="" v-model="good.price"/>
					</label>
					<label for="">
						图片:<input type="text" name="" v-model="good.img"/>
					</label>
				</div>
			</div>
			<div class="detailsbottom">
				<p>简介</p>
				<p>
					{{good.brief}}
				</p>
			</div>
			<button @click="updata">确认修改</button>
		</div>
	</div>	
</template>

<script>
	import Mheader from "../base/Mheader";
	import {getOne,modfiyGood,addNew} from "../api"
	export default{
		name:"Detail",
		data(){
			return{
				good:{}
			}
		},
		components:{
			Mheader
		},
		created(){
			this.getGood()
		},
		computed:{
			gid(){
				return this.$route.params.id
			}
		},
		methods:{
			//修改功能
			async updata(){
				await modfiyGood(this.gid,this.good)
				this.$router.push("/list")
			},
			async getGood(){
				let good = await getOne(this.gid);
				this.good = good;
			}
		}
	}
</script>

<style scoped lang="scss">
	.details{
		width: 100%;
		height: 100%;
		position: relative;
		top: 55px;
		left: 0;
		right: 0;
		bottom: 0;
		.detailstop{
			width: 100%;
			display: flex;
			img{
				width: 50%;
				height: 100px;
			}
			.detailstopl{
				flex: 1;
					label{
						display: flex;
						flex: wrap;
						margin-top: 10px;
						input{
							width: 70%;
						}
					}
			}
		}
		.detailsbottom{
			width: 100%;
			p:nth-of-type(2){
				padding: 10px;
				text-indent: 24px;
				font-size: 12px;
			}
		}
		button{
			display:inline-block;
			width: 30%;
			height: 50px;
			margin: 0 auto;
		}
	}
</style>