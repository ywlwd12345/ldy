<template>
	<div class="t-content">
		<div class="title">想了解更多软件功能从这里开始</div>
		<button @click="goRegister()" class="m-btn m-btn-style">立即试用</button>
	</div>
</template>

<script>
	export default{
		methods:{
			goRegister(){
				this.$router.push({name:'register'})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.t-content{
		width: 92%;
		height: 90px;
		margin: 0 auto;
		margin-top: 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #FDE9E9;
		border-radius: 5px;
		.title{
			font-size: 15px;
			font-family: '微软雅黑';
			font-weight: 800;
			color: #2C0002;
			line-height: 15px;
			margin-bottom: 8px;
		}
		
	}
</style>
