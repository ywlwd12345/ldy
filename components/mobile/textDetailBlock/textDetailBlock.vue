<template>
	<div class="d-list-box">
		<div class="d-item"  v-for="item in dList" :key='item.id'>
			<div class="d-title">{{item.title}}</div>
			<div class="d-text">
				{{item.text}}
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['dList']
	}
</script>

<style lang="less" scoped="scoped">
	
	.d-list-box{
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.d-item{
			width: 48.53%;
			min-height: 161px;
			margin-bottom: 11px;
			border-top: 1px solid #E62129;
			box-shadow: 0px 1px 3px 0px #EBEBEB;
			background-color: white;
			border-radius: 8px;
			padding: 20px 0px;
			&:nth-last-child(2),&:nth-last-child(1){
				margin-bottom: 0px;
			}
			.d-title{
				text-align: center;
				font-size: 12px;
				font-weight: 500;
				color: #2C0002;
				line-height: 12px;
				margin-bottom: 5px;
			}
			.d-text{
				padding: 0px 6%;
				text-align: justify;
				font-size: 12px;
				font-weight: 500;
				color: #666666;
				line-height: 18px;
			}
		}
	}
</style>
