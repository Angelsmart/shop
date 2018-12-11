<template>
  <div>
  	<Mheader :showArrow=true>我的</Mheader>
  	
  </div>
</template>

<script>
	import Mheader from "../base/Mheader"
	export default {
	  name: 'My',
	  data () {
	    return {
	    }
	  },
	  components:{
	  	Mheader
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	
</style>
