<template>
  <div class="pc-content">
    <div class="banner-box">
      <div class="banner-section">
        <div class="banner-text">
          <h1 class="title">辛巴收银台，门店管理无忧</h1>
          <h3 class="title-2">
            简单好用，支持现金支付、聚合支付、可多门店、多员工，具有收银系统，会员促销，方便操作，助力门店运营。
          </h3>
          <!-- <router-link :to="{name:'register_p'}"><div class="button btn-style" data-agl-cvt='5'>免费试用</div></router-link> -->
        </div>
        <div class="banner-point">
          <img
            class="img-point"
            src="@/assets/image/web/fangkuai.png"
            alt=""
          />
        </div>
        <div class="banner-img">
          <img
            class="img-xinbayun"
            src="@/assets/image/web/pos_1.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="property-section">
      <div class="property-item">
        <div class="property-num">75%</div>
        <div class="property-text">财务效率提升</div>
      </div>
      <div class="line"></div>
      <div class="property-item center">
        <div class="property-num">80%</div>
        <div class="property-text">管理效率提升</div>
      </div>
      <div class="line"></div>
      <div class="property-item">
        <div class="property-num">90%</div>
        <div class="property-text">业务效率提升</div>
      </div>
    </div>

    <div class="show-section">
      <div class="text-box">
        <h3 class="title">软硬件一体化，极速收银</h3>
        <div class="text">
          辛巴收银包括收银机、扫码枪、钱箱、收款盒子，全套设备，全方位提供支持，收银如此便捷。
        </div>
      </div>
      <img class="show-img" src="@/assets/image/web/pos_2.png" alt="" />
    </div>

    <div class="block-section">
      <div class="block-wrap">
        <div class="block-left">
          <div class="block-text">
            <h3>具备门店收银所需功能</h3>
            <div class="text">
              集成进货、销售、收款、零售、库存查询、盘点、对账、交班、打印等，收银管理得心应手。
            </div>
          </div>
          <button
            @click="goHelp()"
            id="home_1"
            class="block-btn btn-style"
            data-agl-cvt="1"
          >
            了解更多
          </button>
        </div>
        <div class="block-right">
          <img
            class="block-img"
            src="@/assets/image/web/pos_3.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="industry">
      <div class="industry-section">
        <div class="ind-title">适用行业</div>
        <div class="item-box">
          <div class="item" v-for="(item, index) in indList" :key="index">
            <img class="item-icon" :src="item.icon" alt="" />
            <h4 class="item-title">{{ item.title }}</h4>
            <div class="item-detail">
              {{ item.detail }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: { name: "pos" },
      indList: [
        {
          id: 1,
          icon: require("@/assets/image/web/pos_4.png"),
          title: "小区便利店",
          detail: "辛巴收银的简约性符合小区便利店的使用场景，操作快捷。",
        },
        {
          id: 2,
          icon: require("@/assets/image/web/pos_5.png"),
          title: "社区超市",
          detail:
            "应对社区小超市的经营，辛巴收银各种功能可以应对较为复杂的场景。",
        },
        {
          id: 3,
          icon: require("@/assets/image/web/pos_6.png"),
          title: "生鲜超市",
          detail:
            "辛巴收银除了对标准商品的支持，也支持称重商品的售卖，可与称重称对接。",
        },
      ],
    };
  },
  components: {},

  created() {
    var _hmt = _hmt || [];

    if (process.client) {
      (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?957a866a16e7db13c7cccc7b24258806";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    }
  },

  methods: {
    goHelp() {
      window.open(
        "https://tb.53kf.com/code/client/96aae2b8adfab00032c10e6f2e2448cb7/1"
      );
    },
  },
};
</script>


<style lang="less" scoped="scoped">
.pc-content {
  width: 100%;
  min-height: 100vh;
  background-color: white;
}

.banner-box {
  width: 100%;
  height: 780px;
  background: #fff3f3 url(@/assets/image/web/beijing.png) no-repeat;
  background-size: cover;
  background-position: top center;

  .banner-section {
    width: 1200px;
    position: relative;
    left: 50%;
    height: 680px;
    margin-left: -600px;

    .banner-img {
      position: absolute;
      right: -10px;
      z-index: 0;
      top: 223px;
      .img-xinbayun {
        width: 100%;
        height: auto;
      }
    }

    .banner-point {
      position: absolute;
      right: 0px;
      top: 171px;
      z-index: 1;

      .img-point {
        width: 120px;
        height: 120px;
      }
    }

    .banner-text {
      max-width: 730px;
      position: absolute;
      left: 0px;
      top: 50%;
      z-index: 1;
      margin-top: -150px;

      .title {
        white-space: nowrap;
        font-size: 60px;
        font-weight: 800;
        color: #2c0002;
        margin: 20px 0px;
      }

      .title-2 {
        font-size: 30px;
        font-weight: 400;
        color: #2c0002;
        line-height: 45px;
        margin: 20px 0px;
        text-align: left;
      }

      .button {
        width: 240px;
        height: 70px;
        font-size: 29px;
      }
    }
  }
}

.property-section {
  width: 1200px;
  height: 270px;
  margin: 0 auto;
  display: flex;

  .videoElement {
    object-fit: fill !important;
  }

  .property-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    .property-num {
      font-size: 30px;
      font-weight: 500;
      color: #333;
      margin-bottom: 10px;
    }

    .property-text {
      margin-top: 10px;
      font-size: 18px;
      color: #999999;
    }
  }

  .line {
    display: flex;
    align-items: center;
  }

  .line:after {
    content: "";
    display: block;
    width: 2px;
    height: 50px;
    background: #999999;
    border-radius: 2px;
  }

  .line:before {
    content: "";
    display: block;
    width: 2px;
    height: 50px;
    background: #999999;
    border-radius: 2px;
  }
}

.show-section {
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 10px;
  position: relative;
  z-index: 0;

  .text-box {
    width: 960px;
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 138px;
    margin-left: -475px;

    .title {
      margin-bottom: 44px;
      font-size: 60px;
      font-weight: 800;
      color: #2c0002;
      white-space: nowrap;
    }

    .text {
      font-size: 30px;
      font-weight: 400;
      color: #2c0002;
      line-height: 45px;
    }
  }

  .show-img {
    width: 100%;
    height: auto;
  }
}

.block-section {
  width: 1200px;
  margin: 0 auto;

  .block-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 41px 0px;

    .block-left {
      width: 560px;

      .block-text {
        h3 {
          text-align: left;
          font-size: 28px;
          font-weight: 800;
          color: #2c0002;
        }

        .text {
          text-align: left;
          margin: 37px 0px 32px 0px;
          font-size: 18px;
          color: #777777;
          line-height: 27px;
        }
      }

      .block-btn {
        width: 156px;
        height: 46px;
        font-size: 18px;
      }
    }

    .block-right {
      width: 550px;

      .block-img {
        width: 100%;
        height: auto;
      }
    }
  }
}

.industry {
  width: 100%;
  margin-top: 48px;
  padding: 70px 0px;
  background-color: #fff3f3;

  .industry-section {
    width: 1200px;
    margin: 0 auto;

    .ind-title {
      text-align: center;
      font-size: 28px;
      font-weight: 800;
      color: #2c0002;
    }

    .item-box {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      .item {
        width: 280px;
        height: 290px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 26px;
        cursor: pointer;
        text-align: left;
        padding: 56px 20px;
        background: #ffffff;
        border-top: 2px solid #e62129;
        box-shadow: 0px 1px 8px 0px rgba(230, 33, 41, 0.25);
        transition: 0.2s all ease;

        &:hover {
          transform: translate(0, -10px);
        }

        .item-icon {
          width: 51px;
          height: 51px;
          margin: 0 auto;
        }

        .item-title {
          text-align: center;
          font-size: 22px;
          font-weight: 600;
          margin: 28px 0px 19px 0px;
        }

        .item-detail {
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
</style>
