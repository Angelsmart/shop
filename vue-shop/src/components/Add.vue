<template>
	<div class="Detail">
		<Mheader :showArrow=true>添加页面</Mheader>
		<div class="details">
			<div class="detailstop">
				<div class="detailstopl">
					<label for="">
						名称:<input type="text" name=""  v-model="good.name"/>
					</label>
					<label for="">
						价格:<input type="text" name="" v-model="good.price"/>
					</label>
					<label for="">
						图片:<input type="text" name="" id='asd' v-model="good.img"/>
					</label>
				</div>
			</div>
			<button @click="addGood">确认添加</button>
		</div>
	</div>	
</template>

<script>
	import Mheader from "../base/Mheader";
	import {getOne,modfiyGood,addNew} from "../api"
	export default{
		name:"Add",
		data(){
			return{
				good:{}
			}
		},
		components:{
			Mheader
		},
		computed:{
			gid(){
				return this.$route.params.id
			}
		},
		methods:{
			//添加功能
			async addGood(){
				await addNew(this.good)
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
		button{
			display:inline-block;
			width: 30%;
			height: 50px;
			margin: 0 auto;
		}
	}
</style>