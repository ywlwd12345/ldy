<template>
	<div class="p-content">
		
		<div class="banner-box">
			<img class="jia-banner" @click="jumplj" src="@/assets/image/web/jiage-banner.jpg" alt="">
		</div>
		<div class="section">
			<div class="detail-title">
				<h3 class="title">
					简单方便 管理全面
				</h3>
				<span class="text">从现在起，步入正轨，进销存、业务财务管理井井有条</span>
				<span class="line-red"></span>
			</div>

			<div class="price-block">
				<div class="block-title">
					<h3 class="title">云进销存</h3>
					<span class="m-title">商贸云/财贸云</span>
				</div>
				<div class="price-box">
					<div class="price-item price-2">
						<div class="p-title">精英版</div>
						<div class="m-title m-title-2">适合管理较简单的商贸企业</div>
						<div class="n-price">￥480起</div>
						<button id="price_7" @click="goHelp()" class="btn-white btn-size">咨询客服</button>
						<div class="p-detail">
							赠送手机端，培训免费，实施免费，服务免费
						</div>
					</div>
					<div class="line-gray"></div>
					<div class="price-item price-2">
						<div class="p-title title-red">旗舰版</div>
						<div class="m-title m-title-2">适合管理要求较高的多用户、连锁型商贸企业</div>
						<div class="n-price">¥580起</div>
						<button id="price_6" @click="goHelp()" class=" btn-size btn-style">咨询客服</button>
						<div class="p-detail p-w431">
							赠送手机端，培训免费，实施免费，服务免费，支持无缝对接B2B批发订货商城，支持无缝对接B2C分销商城
						</div>
					</div>
				</div>
			</div>

			<div class="price-block">
				<div class="block-title">
					<h3 class="title">行业云进销存</h3>
					<span class="m-title">服装云/电脑IT/财贸云/汽配云/食品云/医药云/医疗器械云/汽修汽配云</span>
				</div>
				<div class="price-box">
					<div class="price-item price-2">
						<div class="p-title">精英版</div>
						<div class="m-title m-title-2">适合管理较简单的商贸企业</div>
						<div class="n-price">￥580起</div>
						<button id="price_5" @click="goHelp()" class="btn-white btn-size">咨询客服</button>
						<div class="p-detail">
							赠送手机端，培训免费，实施免费，服务免费
						</div>
					</div>
					<div class="line-gray"></div>
					<div class="price-item price-2">
						<div class="p-title">旗舰版</div>
						<div class="m-title m-title-2">适合管理要求较高的多用户、连锁型商贸企业</div>
						<div class="n-price">¥680起</div>
						<button id="price_4" @click="goHelp()" class="btn-white btn-size">咨询客服</button>
						<div class="p-detail p-w431">
							赠送手机端，培训免费，实施免费，服务免费，支持无缝对接B2B批发订货商城，支持无缝对接B2C分销商城
						</div>
					</div>
				</div>
			</div>

			<div class="price-block">

				<div class="price-box">
					<div class="price-item">
						<div class="p-title">手机通</div>
						<div class="m-title">手机进销存/员工签到/老板报表</div>
						<div class="n-price">￥365起</div>
						<button id="price_3" @click="goHelp()" class="btn-white btn-size">咨询客服</button>
						<div class="p-detail">
							<p> 购云进销存，赠送手机端 </p>
							<p>培训免费，实施免费，服务免费</p>
						</div>
					</div>
					<div class="line-gray"></div>
					<div class="price-item ">
						<div class="p-title">B2B小程序订货商城</div>
						<div class="m-title">与云进销存无缝衔接/商品展示/商家授权&下单&支付/订单管理/授信管理/往来对账/优惠促销</div>
						<div class="n-price">￥2980起</div>
						<button id="price_2" @click="goHelp()" class="btn-white btn-size">咨询客服</button>
						<div class="p-detail">
							<p>购B2B订货商城，送云进销存+手机进销存端 </p>
							<p> 培训免费，实施免费，服务免费</p>
						</div>
					</div>
					<div class="line-gray"></div>
					<div class="price-item price-item-min">
						<div class="p-title">B2C小程序分销商城</div>
						<div class="m-title m-w344">与云进销存无缝衔接/商品展示/购物车/优惠促销/下单支付/会员管理/分销管理</div>
						<div class="n-price">￥1280起</div>
						<button id="price_1" @click="goHelp()" class="btn-white btn-size"> 咨询客服</button>
						<div class="p-detail" id="home_2">
							购B2C小程序分销商城，送云进销存+手机进销存端
							<p>培训免费，实施免费，服务免费</p>
						</div>
					</div>
				</div>
			</div>
			<footerPc></footerPc>

		</div>
	</div>
</template>
<script>

	export default {
		data() {
			return {}
		},
		components: {
		
		},
		methods: {
			goHelp() {
				window.open('https://tb.53kf.com/code/client/96aae2b8adfab00032c10e6f2e2448cb7/1')
			},
			jumplj() {
				window.open('https://mp.weixin.qq.com/s?__biz=MzA5MzMxNTMwOQ==&mid=2648360427&idx=1&sn=72cc6aeb363dbe0565e3f463ca804302&chksm=8871ac69bf06257f8e5e36b8ff0e83d544b22b2c93c7b97729ac21b8d0ffeac728a0d2885a19&token=711472111&lang=zh_CN#rd')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.p-content {
		background-color: white;

		.banner-box {
			width: 100%;
			padding-top: 80px;
			margin-bottom: 90px;

			.jia-banner {
				width: 100%;
				height: auto;
			}
		}

		.section {
			width: 1200px;
			margin: 0 auto;

			.detail-title {
				width: 100%;
				text-align: center;
				margin-bottom: 40px;

				.title {
					text-align: center;
					font-size: 38px;
					font-weight: 800;
					color: #2C0002;
				}

				.text {
					display: block;
					margin: 24px auto 21px;
					font-size: 24px;
					font-weight: 400;
					text-align: center;
					line-height: 28px;
				}

				.line-red {
					display: block;
					width: 80px;
					height: 6px;
					margin: 0 auto;
					background: #E62129;
				}
			}

			.price-block {
				width: 100%;
				padding: 70px 0px;
				margin-bottom: 90px;
				background: #FFFFFF;
				box-shadow: 0px 1px 16px 2px rgba(194, 194, 194, 0.63);

				.block-title {
					margin-bottom: 40px;
					text-align: center;

					.title {
						font-size: 30px;
						font-weight: 800;
						color: #2C0002;
						line-height: 27px;
					}

					.m-title {
						display: inline-block;
						margin-top: 20px;
						font-size: 24px;
						font-weight: 400;
						color: #333333;
						line-height: 28px;
					}
				}

				.price-box {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.price-item {
						display: flex;
						flex: 1;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						.p-title {
							font-size: 28px;
							color: #2C0002;
							line-height: 28px;
						}

						.title-red {
							color: #E62129;
						}

						.m-title {
							display: inline-block;
							min-height: 56px;
							max-width: 338px;
							margin-top: 20px;
							text-align: justify;
							text-align-last: center;
							font-size: 16px;
							color: #333333;
							// line-height: 28px;
						}

						.m-w344 {
							max-width: 348px;
						}

						.m-title-2 {
							min-height: 30px;
						}

						.n-price {
							margin: 18px 0px 20px 0px;
							font-size: 48px;
							font-weight: 800;
							color: #2C0002;
						}

						.btn-white {
							border: 1px solid #E62129;
							border-radius: 8px;
							font-weight: 400;
							color: #E62129;
							background-color: white;
						}

						.btn-size {
							width: 156px;
							height: 46px;
							font-size: 18px;
						}

						.p-detail {
							display: inline-block;
							min-height: 70px;
							margin-top: 28px;
							font-size: 16px;
							text-align: justify;
							text-align-last: center;
							font-weight: 400;
							color: #333333;
							line-height: 24px;
						}

						.p-w431 {
							width: 431px;
						}


					}

					.price-item-min {
						padding: 0px 20px;
					}

					.price-item-min {
						min-width: 368px;
					}

					.price-2 {
						padding: 0px 84px;
					}

					.line-gray {
						width: 2px;
						height: 230px;
						background-color: #E6E6E6;
					}
				}
			}

			.footer {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 1200px;
				margin: 120px auto;
				padding: 70px 0px;
				background-color: #FDE9E9;

				.detail {
					font-size: 32px;
					font-weight: 800;
					color: #2C0002;
				}

				.f-btn {
					width: 156px;
					height: 46px;
					margin-top: 41px;
					border-radius: 8px;
				}
			}
		}

	}
</style>
