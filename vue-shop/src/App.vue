<template>
  <div id="app">
  	<keep-alive >
  			<!--keep-alive 是缓存  如果路由里meta的keepAlive为true就缓存-->
  			<router-view v-if="$route.meta.keepAlive"/>
  	</keep-alive>
  	<router-view v-if="!$route.meta.keepAlive"/>
  	<Tap></Tap>
  </div>
</template>

<script>
	import Tap from './base/Tap';
export default {
  name: 'App',
  components:{
  	Tap
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a{
		color: #666;
		text-decoration: none;
	}
</style>
