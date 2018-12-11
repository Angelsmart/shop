import * as Types from './mutations-types';
import Vue from 'vue'
const mutations = {
	//数量 
	[Types.ADD_CAR](state,parm){
		let good = parm.list;
		Vue.set(good,'sele',false);
		//判断购物车有没有这个商品，有的话数量加1，没有的数量为一
		let production = state.goodList.find(item=>item.id === good.id)
		console.log(production)
		
		if(production){
			production.count += 1;
			state.goodList = [...state.goodList]
			console.log(state.goodList)
		}else{
			good.count = 1;
			state.goodList = [...state.goodList,good]
			console.log(state.goodList)
			localStorage['list'] = JSON.stringify(state.goodList)
		}
		
	},
	//单选事件
	change(state,parm){
		//找到点击的项
		let parmid = state.goodList.find(item=>item.id === parm.id);
		//改变点击这一项的值
		parmid.sele = parm.sele;
		state.goodList = [...state.goodList];
	},
	//全选
	checkall(state,val){
     state.goodList.forEach(item =>item.sele=val);
     state.goodList=[...state.goodList];
  	},
  	//数量增加
	[Types.ADD_COUNT](state,parm){
			state.goodList[parm].count ++;
			state.goodList=[...state.goodList];
	},
	//数量减减
	[Types.RED_COUNT](state,parm){
		if(state.goodList[parm].count >1){
			state.goodList[parm].count --;
			state.goodList=[...state.goodList];
		}
	},
	//删除
	[Types.DETELE_NUM](state,parm){
		state.goodList.splice(parm,1)
		localStorage['list'] = JSON.stringify(state.goodList)
	}
}
export default mutations
