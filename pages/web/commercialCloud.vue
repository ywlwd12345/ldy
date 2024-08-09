<template>
  <div class="p-content">
    <div class="s-cloud">
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

      <h3 class="title">商贸云进销存</h3>
      <div class="m-title">
        进销存、财务管理一体化软件。以简单、实用的设计理念，真实记录企业发生的业务
      </div>
      <div class="p-list">
        <div class="p-list-item">
          <img
            src="@/assets/image/web/caigouguanli.png"
            alt=""
            class="left-img"
          />
          <div class="right-text">
            <h3 class="t-title">采购管理</h3>
            <div class="t-detail">
              管理商品的采购情况，包括采购订单、采购入库、供应商、经手人、入库仓库、付款情况、商品数量、单价、金额等信息。自动成流水报表和统计报表以及应付账款等信息。
            </div>
          </div>
        </div>
        <div class="p-list-item">
          <img
            src="@/assets/image/web/xiaoshouguanli.png"
            alt=""
            class="left-img"
          />
          <div class="right-text">
            <h3 class="t-title">销售管理</h3>
            <div class="t-detail">
              管理商品销售情况，包括销售订单、销售出库、客户、业务员、出库仓库、收款情况、商品数量、单价、金额等情况。自动生成流水报表、统计报表、应收账款等。
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
              管理商品出入库、调拨、盘点、报损、报溢、生产配料、费用分摊等情况。查询库存数据：商品分布、库存状况、历史库存、库存流水等。
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
              管理企业收款、付款、费用支出的发生情况。管理客户和供应商的应收应付账款、往来对账、明细账等。
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
    <div class="industry">
      <div class="industry-section">
        <div class="ind-title">优势特点</div>
        <div class="item-box">
          <div class="item" v-for="(item, index) in indList" :key="item.id">
            <!-- <img class="item-icon" :src="item.icon" alt=""> -->
            <h4 class="item-title">{{ item.title }}</h4>
            <div class="item-detail">
              {{ item.detail }}
            </div>
          </div>
        </div>
        <button class="btn-size btn-null" @click="open()" data-agl-cvt="1">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  components: {},
  methods: {
    open() {
      window.open(
        "https://tb.53kf.com/code/client/96aae2b8adfab00032c10e6f2e2448cb7/1"
      );
    },
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.videoUrl =
          "https://erpphoto.oss-cn-shenzhen.aliyuncs.com/product-shiping/smyjxc.mp4";
      }, 300);
    });
  },

  created() {
    var _hmt = _hmt || [];

    if (process.client) {
      (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?35fe80cda25c34a9faf34a58400655de";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    }
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

  .s-cloud {
    width: 1200px;
    margin: 80px auto;

    .videoElement {
      object-fit: fill !important;
    }

    .title {
      text-align: center;
      margin-bottom: 19px;
      font-size: 38px;
      font-weight: 800;
      color: #2c0002;
    }

    .m-title {
      text-align: center;
      margin-bottom: 50px;
      font-size: 24px;
      font-weight: 400;
      color: #333333;
      line-height: 36px;
    }

    .p-list {
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
            text-align: justify;
            line-height: 21px;
          }
        }
      }
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
}
</style>
