<template>
  <div class="p-content">
    <div class="img-box">
      <img class="i-banner" src="@/assets/image/medical-pc.png" />
    </div>
    <div class="js-box">
      <div
        style="
          width: 100%;
          height: 720px;
          justify-content: center;
          display: flex;
        "
      >
        <video
          class="videoElement"
          controls
          width="70%"
          height="100%"
          :src="videoUrl"
        ></video>
      </div>

      <div class="title">什么是辛巴医疗器械管理软件？</div>
      <div class="js-info-box">
        <div class="left-img">
          <img class="l-img" src="@/assets/image/web/js-detail.png" />
        </div>
        <div class="right-text-box">
          <div class="r-item r-item-1">
            专为医疗器械企业定制，进销存、财务、业务员管理、GSP管理
          </div>
          <div class="r-item r-item-2">
            符合药监局新版GSP验收标准《医疗器械经营质量管理规范》
          </div>
          <div class="r-item r-item-3">
            GSP流程管理、首营管理、经营范围、追溯管理、质量管理
          </div>
          <div class="r-item r-item-4">
            提升医疗器械企业效率，为企业提供数据决策依据
          </div>
          <div class="r-item r-item-4 blue">
            支持线下买断多用户安装部署，同时支持云端按年收费
          </div>
          <div class="r-item r-item-3">
            针对一、二、三类医疗器械经营企业开发的专业GSP软件
          </div>
          <div class="r-item r-item-2">
            支持客户小程序订货商城下单、对账、付款、微信推送
          </div>
          <div class="r-item r-item-1">
            支持手机端APP查看库存、开销售单、采购单、盘点单、员工考勤等
          </div>
        </div>
      </div>
      <button class="btn-size btn-null btn" @click="open()" data-agl-cvt="1">
        了解更多
      </button>
    </div>
    <div class="s-cloud">
      <h3 class="title">医疗器械云进销存</h3>
      <div class="m-title">
        医疗器械批发公司、器械零售企业进销存、财务管理、GSP一体化软件
      </div>
      <div class="m-title">
        符合国家食药监局GSP要求，真实记录企业发生的业务。管人、管钱、管账
      </div>
      <div class="p-list">
        <div class="p-list-item">
          <img
            src="@/assets/image/web/yq-jichuziliao.png"
            alt=""
            class="left-img"
          />
          <div class="right-text">
            <h3 class="t-title">基础资料</h3>
            <div class="t-detail">
              首营企业，企业经营范围，单位资质、器械效期，器械种类，器械分类，器械名称，器械单位，分级价格设置，GSP属性等，方便用户快速建账。
            </div>
          </div>
        </div>
        <div class="p-list-item">
          <img
            src="@/assets/image/web/yq-GSPguanli.png"
            alt=""
            class="left-img"
          />
          <div class="right-text">
            <h3 class="t-title">GSP管理</h3>
            <div class="t-detail">
              GSP管理主要包含首营企业审批表、首营品种审批表、储存与养护、购进器械验收记录等，符合国家药监局GSP认证，全国多个地区药监认可并推荐的GSP认证达标软件。
            </div>
          </div>
        </div>
        <div class="p-list-item">
          <img src="@/assets/image/web/yq-caigou.png" alt="" class="left-img" />
          <div class="right-text">
            <h3 class="t-title">采购管理</h3>
            <div class="t-detail">
              管理采购订单、采购入库、供应商、经手人、入库仓库、付款、器械数量（批次、串号、灭菌批次、检验报告号）、单价、金额等。自动生成报表和应付账款等。
            </div>
          </div>
        </div>
        <div class="p-list-item">
          <img
            src="@/assets/image/web/yq-xiaoshouguanli.png"
            alt=""
            class="left-img"
          />
          <div class="right-text">
            <h3 class="t-title">销售管理</h3>
            <div class="t-detail">
              管理销售订单、出库、客户、业务员、仓库、收款、器械数量（批次、串号、灭菌批次、检验报告号）、单价、金额等。自动生成流水报表、统计报表、应收账款等。
            </div>
          </div>
        </div>
        <div class="p-list-item">
          <img
            src="@/assets/image/web/kucunguanli.png"
            alt=""
            class="left-img"
          />
          <div class="right-text">
            <h3 class="t-title">库存管理</h3>
            <div class="t-detail">
              器械出入库、调拨、盘点、报损、报溢、生产配料、费用分摊等。查询器械批次、串号等信息。库存数据：商品分布、库存状况、历史库存、库存流水、批次追踪等。
            </div>
          </div>
        </div>
        <div class="p-list-item">
          <img
            src="@/assets/image/web/caiwuguanli.png"
            alt=""
            class="left-img"
          />
          <div class="right-text">
            <h3 class="t-title">财务管理</h3>
            <div class="t-detail">
              进销存业务单据自动生成会计凭证，按会计期间、记账标准流程进行凭证审核、记账、期末结账等，并自动生成相应账务报表。
            </div>
          </div>
        </div>
        <div class="p-list-item">
          <img
            src="@/assets/image/web/lingshoushouyin.png"
            alt=""
            class="left-img"
          />
          <div class="right-text">
            <h3 class="t-title">零售收银</h3>
            <div class="t-detail">
              管理门店里的收银，比如商品扫码录入、扫码支付、打印收银小票等。自动生成零售流水、收款流水、统计报表等。
            </div>
          </div>
        </div>
        <div class="p-list-item">
          <img
            src="@/assets/image/web/huiyuanguanli.png"
            alt=""
            class="left-img"
          />
          <div class="right-text">
            <h3 class="t-title">会员管理</h3>
            <div class="t-detail">
              管理会员卡类型、会员打折、会员积分、会员储值、会员消费、会员计次服务等。自动记录会员消费、储值、积分的日志。
            </div>
          </div>
        </div>
      </div>
      <button class="btn-size btn-style" @click="open()" data-agl-cvt="1">
        了解更多
      </button>
    </div>
    <div class="gl-soft-box">
      <div class="title">辛巴医疗器械管理系统架构</div>
      <div class="list-block-box">
        <div class="man-img">
          <img class="m-img" src="@/assets/image/man-list.png" />
        </div>
      </div>
    </div>
    <div class="cai-img-box">
      <div class="cai-img">
        <img class="c-img" src="@/assets/image/caigou-list.png" />
      </div>
    </div>
    <div class="x-img-box">
      <div class="x-img">
        <img class="x-img" src="@/assets/image/xs-list.png" />
      </div>
    </div>
    <div class="section">
      <div class="gps-box">
        <div class="title">GPS管理</div>
        <div class="m-title">
          对供应商、产品等资质的合法性、有效性进行审核、跟踪,证件到期提前预警
        </div>
        <div class="d-box">
          <div class="left-img">
            <img src="@/assets/image/web/2.png" class="l-img" />
          </div>
          <div class="right-text">
            <div class="item" v-for="(item, index) in gpsList" :key="index">
              <div class="title">
                {{ item.title }}
              </div>
              <div class="text">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gps-box">
        <div class="title">库存管理</div>
        <div class="m-title">
          管理医疗器械的出库、入库、盘点、养护、报警、锁定等
        </div>
        <div class="d-box">
          <div class="left-text">
            <div class="item" v-for="(item, index) in rList" :key="index">
              <div class="title">
                {{ item.title }}
              </div>
              <div class="text">
                {{ item.text }}
              </div>
            </div>
          </div>
          <div class="right-img">
            <img src="@/assets/image/web/3.png" class="r-img" />
          </div>
        </div>
      </div>

      <div class="gps-box">
        <div class="title">UDI条码识别</div>
        <div class="m-title">入库，出库，盘点自动识别UDI条码</div>
        <div class="d-box">
          <div class="left-img">
            <img src="@/assets/image/web/uidsm.png" class="l-img" />
          </div>
          <div class="right-text">
            <div class="item" v-for="(item, index) in udiList" :key="index">
              <div class="title">
                {{ item.title }}
              </div>
              <div class="text">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 	<div class="industry">
			<div class="industry-section">
				<div class="ind-title">
					优势特点
				</div>
				<div class="item-box">
				</div>
				<button class="btn-size btn-null" @click="open()" data-agl-cvt='1'>了解更多</button>
			</div>
		</div> -->

    <div class="industry">
      <div class="industry-section">
        <div class="ind-title">优势特点</div>
        <div class="item-box">
          <div class="item" v-for="(item, index) in indList" :key="item.id">
            <h4 class="item-title">{{ item.title }}</h4>
            <div class="item-detail">
              {{ item.detail }}
            </div>
          </div>
        </div>
        <button @click="open()" class="btn-size btn-null" data-agl-cvt="1">
          了解更多
        </button>
      </div>
    </div>

    <div class="section">
      <div class="detail-title">
        <h3 class="title">辛巴云优势</h3>
      </div>
      <div class="server-box">
        <img
          class="kefu-img"
          src="@/assets/image/web/xinbayunyoushi1.png"
          alt=""
        />
        <div class="server-info">
          <div class="b-info">
            <div class="i-title">云端更划算</div>
            <div class="i-text">
              按年付费，低至每天0.5元，免费赠送手机端，免维护费、服务费、培训费，正在限时促销优惠中，多买多送！
            </div>
          </div>
          <div class="b-info">
            <div class="i-title">安装部署更快</div>
            <div class="i-text">
              不受网络限制，不用购买VPN，任意电脑、任意手机均可安装，随时随地联网即用，申请后30分钟即可开通。
            </div>
          </div>
          <div class="b-info">
            <div class="i-title">管理更省心</div>
            <div class="i-text">
              每天你只需要根据实际情况录入业务单据和统计查询，数据安全和维护交给辛巴云专业资深运维工程师来做。
            </div>
          </div>
          <div class="b-info">
            <div class="i-title">操作更可靠</div>
            <div class="i-text">
              辛巴云技术，纯净PC客户端+APP操作模式，操作更安全可靠。拒绝浏览器模式的中毒挂马崩溃堵塞。
            </div>
          </div>
        </div>
      </div>
      <div class="server-box">
        <div class="server-info server-info-2">
          <div class="b-info">
            <div class="i-title">服务更快捷</div>
            <div class="i-text">
              专业技术服务人员通过QQ：4006000280或电话提供7*12小时的专业指导服务。
            </div>
          </div>
          <div class="b-info">
            <div class="i-title">数据更安全</div>
            <div class="i-text">
              每天进行日常例行服务器检查、帐套数据每日、每周自动备份、日备份保存2份，周备份保存4份。
            </div>
          </div>
          <div class="b-info">
            <div class="i-title">维护成本更省</div>
            <div class="i-text">
              无需添置和人工维护服务器，降低维护难度，快速解决使用问题，节省时间和人力成本！
            </div>
          </div>
          <div class="b-info">
            <div class="i-title">生意更红火</div>
            <div class="i-text">
              使用辛巴进销存云端版，根据业务发展能灵活增加操作员数量，更利于业务拓展，生意更上层楼！
            </div>
          </div>
        </div>
        <img
          class="kefu-img"
          src="@/assets/image/web/xinbayunyoushi2.png"
          alt=""
        />
      </div>

      <button class="btn-size btn-null" @click="open()" data-agl-cvt="1">
        了解更多
      </button>
      <!-- <footerPc></footerPc> -->
      <div class="company-img-box">
        <img
          src="@/assets/image/web/conpany2.jpg"
          alt="图片加载失败"
          class="f-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { wfList1, gpsList, repertoryList, udiList } from "@/assets/js/mock.js";
export default {
  data() {
    return {
      manList1: wfList1,
      gpsList: gpsList,
      rList: repertoryList,
      udiList: udiList,
      indList: [
        {
          id: 1,
          icon: require("@/assets/image/web/icon1.png"),
          title: "批发管理游刃有余",
          detail:
            "销售开单、进货开单、盘点单默认商品辅助单位，多仓库出入库，商品支持4个辅助单位自动换算，并支持劳务商品、按单付款与按商品付款、欠款与信用额度管理、客户分级价格与价格跟踪等。",
        },
        {
          id: 2,
          icon: require("@/assets/image/web/icon2.png"),
          title: "订单管理人性化",
          detail:
            "手机端、微信小程序、平板、电脑端多端下单，销售订单可通过采购需求计划自动生成商品默认供应商的采购订单，整单发货、分批多次发货、再来一单。",
        },
        {
          id: 3,
          icon: require("@/assets/image/web/icon3.png"),
          title: "库存管理，超强大",
          detail:
            " 支持商品成本调价、费用分摊、报损单、报溢单、盘点单、配料单模板生产商品等。支持多种成本算法，支持商品批次效期管理和序列号（串号）管理。支持实时库存与可售库存管理。",
        },
        {
          id: 4,
          icon: require("@/assets/image/web/icon4.png"),
          title: "移动管理，随时随地",
          detail:
            "支持手机端APP开单、支持微信小程序下单、支持客户二维码自动注册开拓新客户、扫码开单、查库存、对账收款、签到定位、单据审核、营业报表。移动管理，随时随地。",
        },
        {
          id: 5,
          icon: require("@/assets/image/web/icon5.png"),
          title: "多端协作共享，实时高效",
          detail:
            "多部门、多门店、多员工、手机、平板、电脑、PDA多终端实时互联，无缝连接，共享云端数据，业务协作实时高效。用户功能权限+基本信息权限设置，保证了各部门、各门店仓库、各员工权责分明，支持公司快速扩张。",
        },
        {
          id: 6,
          icon: require("@/assets/image/web/icon6.png"),
          title: "打印设计灵活，支持远程打印",
          detail:
            "内置多种实用打印模板，可自定义设计打印内容，支持分类打印；打印服务器支持电脑端、手机端等远程自动打印。支持多联打印、小票打印、标签打印。",
        },
      ],

      videoUrl: "",
    };
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.videoUrl =
          "https://erpphoto.oss-cn-shenzhen.aliyuncs.com/product-shiping/ylqxyjxc.mp4";
      }, 300);
    });
  },

  created() {
    var _hmt = _hmt || [];
    if (process.client) {
      (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?3b1a17b091872d5c64f7426e29a6d3b9";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    }
  },

  components: {},
  methods: {
    open() {
      window.open(
        "https://tb.53kf.com/code/client/96aae2b8adfab00032c10e6f2e2448cb7/1"
      );
    },
  },
};
</script>
<style lang="less" scoped="scoped">
.btn-size {
  display: block;
  margin: 0 auto;
  margin-top: 52px;
  font-size: 18px;
  font-family: "微软雅黑";
  font-weight: 400;
  width: 156px;
  height: 46px;
}
.p-content {
  background-color: white;
  // padding-top: 78px;
  .js-box {
    width: 1200px;
    margin: 0 auto 80px;

    .videoElement {
      object-fit: fill !important;
    }

    .title {
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 38px;
      font-family: "微软雅黑";
      font-weight: bold;
      color: #2c0002;
      margin-bottom: 30px;
    }
    .js-info-box {
      width: 100%;
      display: flex;
      .left-img {
        width: 560px;
        height: 450px;
      }
      .right-text-box {
        width: 560px;
        height: 453px;
        .r-item {
          font-size: 18px;
          line-height: 34px;
          position: relative;
          margin-bottom: 30px;
          &::before {
            content: "";
            display: inline-block;
            width: 18px;
            height: 18px;
            background-color: red;
            position: absolute;
            left: -27px;
            top: 50%;
            margin-top: -9px;
            border-radius: 50%;
          }
        }
        .r-item-1 {
          left: -53px;
          &::before {
            background-color: #009bda;
          }
        }
        .r-item-2 {
          left: 50px;
          &::before {
            background-color: #e8371f;
          }
        }
        .r-item-3 {
          left: 95px;
          &::before {
            background-color: #47d0a0;
          }
        }
        .r-item-4 {
          left: 114px;
          &::before {
            background-color: #d173d6;
          }
        }
        .blue {
          &::before {
            background-color: #5d62ff;
          }
        }
      }
    }
  }
  .img-box {
    width: 100%;
    height: 600px;
    .i-banner {
      width: 100%;
      height: 600px;
    }
  }
  .gl-soft-box {
    width: 1200px;
    margin: 80px auto;
    .title {
      width: 100%;
      text-align: center;
      height: 36px;
      font-size: 38px;
      font-family: "微软雅黑";
      font-weight: bold;
      color: #2c0002;
      line-height: 36px;
    }
    .list-block-box {
      width: 100%;
      margin-top: 50px;
      .man-img {
        width: 100%;
        .m-img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .cai-img-box {
    width: 1200px;
    margin: 80px auto;
    .cai-img {
      width: 100%;
      .c-img {
        width: 100%;
        height: auto;
      }
    }
  }
  .x-img-box {
    width: 1200px;
    margin: 80px auto;
    .x-img {
      width: 100%;
      height: auto;
    }
  }
  .s-cloud {
    width: 1200px;
    margin: 80px auto;
    .title {
      text-align: center;
      margin-bottom: 19px;
      font-size: 38px;
      font-weight: 800;
      color: #2c0002;
    }
    .m-title {
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      color: #333333;
      line-height: 36px;
    }

    .p-list {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .p-list-item {
        width: 577px;
        margin-bottom: 29px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-img {
          width: 200px;
          height: 150px;
          margin-right: 20px;
        }
        .right-text {
          padding: 3px 0px;
          .t-title {
            margin-bottom: 18px;
            font-size: 28px;
            font-family: "微软雅黑";
            font-weight: 800;
            color: #2c0002;
            line-height: 24px;
          }
          .t-detail {
            min-height: 108px;
            text-align: justify;
            font-size: 18px;
            font-family: "微软雅黑";
            font-weight: 400;
            color: #777777;
            line-height: 27px;
          }
        }
      }
    }
  }
  .industry {
    width: 100%;
    margin: 48px auto;
    margin-top: 0px;
    padding: 60px 0px;
    background-color: #fff3f3;

    .industry-section {
      width: 1200px;
      margin: 0 auto;

      .ind-title {
        margin-bottom: 20px;
        text-align: center;
        font-size: 38px;
        font-weight: 800;
        color: #2c0002;
      }

      .item-box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        .item {
          width: 370px;
          height: 282px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 26px;
          cursor: pointer;
          text-align: left;
          padding: 56px 40px;
          box-sizing: border-box;
          background: #ffffff;
          border-top: 2px solid #e62129;
          box-shadow: 0px 1px 8px 0px rgba(230, 33, 41, 0.25);
          transition: 0.2s all ease;

          &:hover {
            transform: translate(0, -10px);
          }

          .item-title {
            text-align: center;
            font-size: 22px;
            font-family: "微软雅黑";
            font-weight: 500;
            color: #2c0002;
          }
          .item-detail {
            margin-top: 22px;
            text-align: justify;
            font-size: 14px;
            font-family: "微软雅黑";
            font-weight: 400;
            color: #787878;
            line-height: 21px;
          }
        }
      }
    }
  }
  .section {
    width: 1200px;
    margin: 0 auto;
    .gps-box {
      width: 100%;
      margin-bottom: 40px;
      .title {
        width: 100%;
        text-align: center;
        font-size: 38px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #2c0002;
        line-height: 26px;
      }
      .m-title {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 80px;
        margin-bottom: 20px;
        width: 100%;
        text-align: center;
      }
      .d-box {
        display: flex;
        justify-content: space-between;
        .left-img,
        .right-img {
          width: 100%;
          height: 356px;
          display: flex;
          justify-content: center;
          .l-img {
            width: 380px;
            height: 356px;
          }
        }
        .right-text,
        .left-text {
          display: flex;
          flex-direction: column;
          min-width: 640px;
          .item {
            margin-bottom: 30px;
            .title {
              font-size: 24px;
              font-family: "微软雅黑";
              font-weight: 400;
              color: #404040;
              line-height: 24px;
              text-align: left;
              margin-bottom: 18px;
            }
            .text {
              font-size: 18px;
              font-family: "微软雅黑";
              font-weight: 400;
              color: #777777;
              line-height: 27px;
            }
          }
        }
      }
    }
    .detail-title {
      width: 100%;
      text-align: center;
      margin-bottom: 40px;

      .title {
        text-align: center;
        font-size: 38px;
        font-weight: 800;
        color: #2c0002;
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
        margin-top: 16px;
        background: #e62129;
      }
    }
    .server-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 420px;
      margin-top: 40px;
      margin-bottom: 90px;
      .kefu-img {
        width: 530px;
        height: 420px;
      }
      .server-info {
        margin-left: 60px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .b-info {
          .i-title {
            font-size: 24px;
            font-weight: 800;
            color: #2c0002;
            margin-bottom: 14px;
          }
          .i-text {
            text-align: justify;
            font-size: 18px;
            font-family: "微软雅黑";
            font-weight: 400;
            color: #777777;
            line-height: 26px;
          }
        }
      }
      .server-info-2 {
        max-width: 601px;
        margin-left: 0px !important;
        margin-right: 60px;
      }
    }

    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 1200px;
      margin: 120px auto;
      margin-bottom: 0px;
      padding: 70px 0px;
      background-color: #fde9e9;

      .detail {
        font-size: 32px;
        font-weight: 800;
        color: #2c0002;
      }

      .f-btn {
        width: 156px;
        height: 46px;
        margin-top: 41px;
        border-radius: 8px;
      }
    }
  }
  .company-img-box {
    width: 100%;
    min-height: 800px;
    .f-img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
