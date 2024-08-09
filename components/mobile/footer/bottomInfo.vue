<template>
	<div class="bo-content">
		<h3 class="b-title">辛巴云端优势</h3>
		<div class="b-block">
			<div class="img-box">
				<img src="@/assets/image/web/xinbayunyoushi1.png" alt="" class="b-img">
			</div>
			<div class="b-detail-box">
				<div class="d-title">云端更划算</div>
				<div class="d-text">按年付费，低至每天0.5元，免费赠送手机端，免维护费、服务费、培训费，正在限时促销优惠中，多买多送！</div>
			</div>
			<div class="b-detail-box">
				<div class="d-title">安装部署更快</div>
				<div class="d-text">不受网络限制，不用购买VPN，任意电脑、任意手机均可安装，随时随地联网即用，申请后30分钟即可开通。</div>
			</div>
			<div class="b-detail-box">
				<div class="d-title">管理更省心</div>
				<div class="d-text">每天你只需要根据实际情况录入业务单据和统计查询，数据安全和维护交给辛巴云专业资深运维工程师来做。</div>
			</div>
			<div class="b-detail-box">
				<div class="d-title">操作更可靠</div>
				<div class="d-text">辛巴云技术，纯净PC客户端+APP操作模式，操作更安全可靠。拒绝浏览器模式的中毒挂马崩溃堵塞。</div>
			</div>
		</div>
		<div class="b-block">
			<div class="img-box">
				<img src="../../../assets/image/xinbayunyoushi2.png" alt="" class="b-img">
			</div>
			<div class="b-detail-box">
				<div class="d-title">服务更快捷</div>
				<div class="d-text">专业技术服务人员通过QQ：4006000280或电话提供7*12小时的专业指导服务。</div>
			</div>
			<div class="b-detail-box">
				<div class="d-title">数据更安全</div>
				<div class="d-text">每天进行日常例行服务器检查、帐套数据每日、每周自动备份、日备份保存2份，周备份保存4份。</div>
			</div>
			<div class="b-detail-box">
				<div class="d-title">维护成本更省</div>
				<div class="d-text">无需添置和人工维护服务器，降低维护难度，快速解决使用问题，节省时间和人力成本！</div>
			</div>
			<div class="b-detail-box">
				<div class="d-title">生意更红火</div>
				<div class="d-text">使用辛巴进销存云端版，根据业务发展能灵活增加操作员数量，更利于业务拓展，生意更上层楼！</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.bo-content{
		width: 100%;
		padding: 10px;
		box-shadow: 0px 1px 3px 0px #EBEBEB;
		border-radius: 10px;
		font-family: '微软雅黑';
		background-color: white;
		.b-title{
			margin-top: 10px;
			margin-bottom: 15px;
			font-size: 18px;
			font-weight: 800;
			color: #2C0002;
			line-height: 27px;
			text-align: center;
		}
		.b-block{
			&:nth-last-child(1){
				margin-top: 20px;
			}
			.img-box{
				width: 100%;
				height: 194px;
				.b-img{
					width: 100%;
					height: 194px;
				}
			}
			.d-title{
				font-size: 14px;
				font-weight: 800;
				color: #2C0002;
				line-height: 20px;
			}
			.d-text{
				text-align: justify;
				font-size: 13px;
				font-weight: 500;
				color: #666666;
				line-height: 20px;
			}
			.b-detail-box{
				margin-bottom: 17px;
				&:nth-child(2){
					margin-top: 20px;
				}
				&:nth-last-child(1){
					margin-bottom: 10px;
				}
			}
		}
	}
</style>
