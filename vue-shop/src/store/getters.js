const getters = {
	checkall(state){
		//已经选中的商品的数量等于所有商品的数量
		/*let hassel = state.goodList.filter(item=>item.sele === true);
		
		let checkval = hassel.length === state.goodList.length
		
		console.log(checkval,'是否全选')
		
		return checkval*/
		if(state.goodList.length==0){
			return false;
		}
		return state.goodList.every(item => item.sele === true)
		 //return !(state.goodList.some(item=>item.sele==false))
	},
	//总数量
	allCount(state){
		//所有选中的放一个数组()
		let buyAry =
		state.goodList.filter(item=>item.sele === true)
		//选中的进行求和
		return buyAry.reduce((prev,next)=>prev + next.count,0)
	},
	//总价钱
	totalPrice(state){
		return state.goodList.filter(item=>item.sele === true).reduce((prev,next)=>prev + next.count*next.price,0)
	}
}
export default getters