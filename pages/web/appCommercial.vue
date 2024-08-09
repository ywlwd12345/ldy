<template>
  <div class="app-content">
    <div class="section">
      <div class="img-box">
        <img
          class="main-img"
          src="@/assets/image/web/shouye-tupian1.png"
          alt=""
        />
        <div class="img-text">
          <h3 class="img-title">高效的进销存、财务、运营管理中台</h3>
          <div class="img-detail">
            电脑端、手机端、微信端多端并用，创造高效管理体验。多种新潮下单方式：电脑开单、手机开单、客户小程序商城自主下单，减少沟通成本，大大提高开单效率。
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="phone-box">
        <div class="p-title-box">
          <h3 class="p-title">手机进销存端</h3>
          <div class="m-title">
            与辛巴云进销存系统结合使用，可以在手机上实现进销存单据录入和审核，收款与付款往来对账,库存查询与盘点，员工签到定位，老板报表查询等功能
          </div>
        </div>
        <div class="detail-box">
          <div class="d-img-box">
            <img
              class="p-img"
              src="@/assets/image/web/app-phone-1.png"
              alt=""
            />
          </div>
          <div class="text-box">
            <div class="t-block">
              <h4 class="t-title">手机开单与打印</h4>
              <div class="t-detail">
                手机上可以开各种单据：进货单，进货退货单，销售单，销售退货单，零售单，盘点单，调拨单，收款单，付款单。并支持蓝牙打印和远程打印服务器打印。
              </div>
            </div>
            <div class="t-block">
              <h4 class="t-title">单据查询与审核</h4>
              <div class="t-detail">
                业务员手机开单可以保存草稿或审核，管理者在手机上查看开单历史或审核草稿单据，也可以在电脑端打开业务草稿在进行审核。
              </div>
            </div>
            <div class="t-block">
              <h4 class="t-title">库存管理与盘点处理</h4>
              <div class="t-detail">
                实际库存查询、可售库存查询、库存序列号查询、库存报警、库存流水、库存调拨，库存盘点等，商品成本管理：移动加权平均法，手工指定法（批次效期商品）。
              </div>
            </div>
            <div class="t-block">
              <h4 class="t-title">基础数据录入</h4>
              <div class="t-detail">
                可以管理：商品分类与增加商品信息、商品多单位、仓库、客户、供应商、一般单位处理、商品颜色尺码、结算账户、系统配置。
              </div>
            </div>
          </div>
        </div>

        <div class="detail-box">
          <div class="text-box">
            <div class="t-block">
              <h4 class="t-title">员工外勤管理</h4>
              <div class="t-detail">
                员工出外勤，每拜访一个客户可以对客户单位门头和商品陈列情况拍照，进行定位签到。公司管理者可以实时掌握员工业务开展情况。
              </div>
            </div>
            <div class="t-block">
              <h4 class="t-title">客户对账</h4>
              <div class="t-detail">
                手机上查询客户收款情况，并查询关联的全部单据，可以完成收款单录入。查询与供应商的付款情况，并查询关联的全部单据，可以完成付款单录入。
              </div>
            </div>
            <div class="t-block">
              <h4 class="t-title">领导报表查询</h4>
              <div class="t-detail">
                提供按时间查询销售明细流水、销售排行榜报表、进货报表、调拨报表、库存流水、签到查询与统计。总收入、总支出、结余金额等。
              </div>
            </div>
          </div>
          <div class="d-img-box">
            <img
              class="p-img"
              src="@/assets/image/web/app-phone-2.png"
              alt=""
            />
          </div>
        </div>
        <button class="btn-size btn-style" @click="open()" data-agl-cvt="1">
          了解更多
        </button>
      </div>
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
          title: "移动开单查询更方便",
          detail:
            "手机上随时开进销存调拨等单据、看库存、查价格、看报表、新增客户、收款付款、审核草稿单据、查看各种历史单据，舒适方便！",
        },
        {
          id: 2,
          icon: require("@/assets/image/web/icon2.png"),
          title: "多端数据实时共享易管理",
          detail:
            "手机端开单，电脑端立即就能查看到；电脑端开单，手机上也能立即查看到，手机端和电脑端无缝数据连接，实时互联，简单管理。",
        },
        {
          id: 3,
          icon: require("@/assets/image/web/icon3.png"),
          title: "蓝牙或远程打印，强大",
          detail:
            "手机端APP配合手机蓝牙功能，可随时随地连通蓝牙打印机，实现开单打印。还可以连接远程打印机打印进销存单据。",
        },
        {
          id: 4,
          icon: require("@/assets/image/web/icon4.png"),
          title: "多种方式检索信息，灵活",
          detail:
            "开单通过手机摄像头扫描条码录入商品，或手工输入名称、编码、拼音检索商品信息和往来单位，方便快速灵活。",
        },
        {
          id: 5,
          icon: require("@/assets/image/web/icon5.png"),
          title: "支持手机和平板",
          detail:
            "采用流行的架构和兼容设计让手机端可以在安卓和苹果手机上使用，也可以在安卓和苹果平板上使用。",
        },
        {
          id: 6,
          icon: require("@/assets/image/web/icon6.png"),
          title: "灵活配置菜单与权限",
          detail:
            "手机端可配置快捷菜单，还可以给操作员设置不同权限，从而显示相应功能图标。",
        },
        {
          id: 7,
          icon: require("@/assets/image/web/icon6.png"),
          title: "强大报表，助决策支持",
          detail:
            "强大的进货报表，销售报表，对账报表，库存查询报表，为领导决策提供了强有力的支持。",
        },
        {
          id: 8,
          icon: require("@/assets/image/web/icon6.png"),
          title: "新增基础资料实时同步",
          detail:
            "客户、供应商、商品、仓库、账户等基本信息，可以在电脑端和手机端同时新增，实时同步。",
        },
        {
          id: 9,
          icon: require("@/assets/image/web/icon6.png"),
          title: "购买辛巴云送手机端",
          detail:
            "正在促销中，凡是在促销活动期间，购买辛巴云服务的用户均可享受免费使用手机进销存端。",
        },
      ],
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
  created() {
    var _hmt = _hmt || [];

    if (process.client) {
      (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a188e2eef39853c5d3ea78c3fd145104";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    }

    
  },
};
</script>

<style lang="less" scoped="scoped">
.btn-size {
  margin: 0 auto;
  width: 156px;
  height: 46px;
  font-size: 18px;
}

.app-content {
  padding-top: 170px;
  .section {
    width: 1200px;
    margin: 0 auto;
    .img-box {
      margin-bottom: 90px;
      width: 100%;
      height: 1098px;
      overflow: hidden;
      position: relative;
      z-index: -1;
      .main-img {
        width: 100%;
        height: auto;
      }
      .img-text {
        width: 960px;
        position: absolute;
        left: 50%;
        z-index: 1;
        top: 136px;
        margin-left: -480px;
        .img-title {
          font-size: 60px;
          font-weight: 800;
          color: #2c0002;
          text-align: justify;
        }
        .img-detail {
          margin-top: 44px;
          font-size: 30px;
          font-weight: 400;
          color: #2c0002;
          line-height: 45px;
        }
      }
    }
    .phone-box {
      width: 100%;
      margin-bottom: 92px;
      .p-title-box {
        text-align: justify;
        text-align-last: center;
        margin-bottom: 48px;
        .p-title {
          margin-bottom: 16px;
          font-size: 38px;
          font-weight: 800;
          color: #2c0002;
          line-height: 38px;
        }
        .m-title {
          width: 991px;
          margin: 0 auto;
          margin-bottom: 47px;
          font-size: 24px;
          font-weight: 400;
          color: #333333;
          line-height: 36px;
        }
      }

      .detail-box {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 80px;

        .d-img-box {
          width: 244px;
          height: 487px;
          .p-img {
            width: 100%;
            height: 487px;
          }
        }
        .text-box {
          width: 767px;
          .t-block {
            margin-bottom: 36px;
            &:nth-last-child(1) {
              margin-bottom: 0px;
            }
            .t-title {
              margin-bottom: 18px;
              font-size: 24px;
              font-weight: 800;
              color: #2c0002;
            }
            .t-detail {
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
      .btn-size {
        margin-top: 50px;
      }
    }
  }
}
</style>
