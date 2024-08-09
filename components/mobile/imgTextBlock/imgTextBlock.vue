<template>
	<div class="i-content">
		<div class="p-block" v-for="(item,index) in plist" :key='item.id'>
			<div class="img-box">
				<img :src="item.src" alt="" class="p-img">
			</div>
			<div class="d-title">{{item.title}}</div>
			<div class="d-detail">{{item.detail}}</div>
		</div>	
	</div>
</template>

<script>
	export default{
		data() {
			return {
			}
		},
		props:{
			plist:{
				type:Array
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.i-content{
		.p-block{
			margin-top: 14px;
			&::after{
				content: '';
				display: block;
				width: 100%;
				height: 1px;
				margin-top: 14px;
				margin-bottom: 15px;
				background-color: #EBEBEB;
			}
			
			.img-box{
				width: 100%;
				height: 194px;
				margin-bottom: 12px;
				.p-img{
					width: 100%;
					height: 194px;
				}
			}
			.d-title{
				font-size: 14px;
				font-weight: 800;
				color: #2C0002;
				margin-bottom: 6px;
			}
			.d-detail{
				font-size: 13px;
				font-weight: 500;
				color: #666666;
				line-height: 20px;
				text-align: justify;
			}
		
			
		}
		.p-block:nth-last-child(1)::after{
				display: none;
		}
	}
</style>
