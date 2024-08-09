<template>
	<div class="btn-content">
		<button data-agl-cvt='1' @click='goLink()' :class="[size ? 'w-btn':'m-btn', int ? 'm-null' : 'm-color']" >了解更多</button>
	</div>
</template>

<script>
	export default{
		props:{
			int:{
				type:Boolean,
				default:false
			},
			size:{
				type:Boolean,
				default:false
			}
		},
		computed:{
		},
		methods:{
			goLink(){
				window.open('https://tb.53kf.com/code/client/96aae2b8adfab00032c10e6f2e2448cb7/1')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.btn-content{
		display: flex;
		align-items: center;
		.m-color{
			background-color: #E62129;
			color: white;
		}
		.m-null{
			background-color: white;
			color: #E62129;
		}
	}
</style>
