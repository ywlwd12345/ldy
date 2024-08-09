<template>
  <div class="pc-content">
    <!-- <headerPc></headerPc> -->
    <div class="banner-box">
      <div class="banner-section">
        <div class="banner-text">
          <h1 class="title">云进销存，管理核心业务</h1>
          <h3 class="title-2">
            集成进销存财务业务一体化，电脑端、手机APP、订货小程序多端无缝连接使用，业务管理游刃有余。
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
            src="@/assets/image/web/xinbayun.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div
      class="property-section"
      style="height: 720px; justify-content: center"
    >
      <video
        class="videoElement"
        controls
        width="70%"
        height="100%"
        :src="videoUrl"
      ></video>
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
        <h3 class="title">高效的进销存、财务、运营管理中台</h3>
        <div class="text">
          电脑端、手机端、微信端多端并用，创造高效管理体验。多种新潮下单方式：电脑开单、手机开单、客户小程序商城自主下单，减少沟通成本，大大提高开单效率。
        </div>
      </div>

      <!-- <img
        class="show-img"
        src="@/assets/image/web/shouye-tupian1.png"
        alt=""
      /> -->

      <el-image
        :src="img1"
         class="show-img"
        lazy
      ></el-image>
      

    </div>

    <div class="block-section">
      <div class="block-wrap">
        <div class="block-left">
          <div class="block-text">
            <h3>集成商贸企业所需的所有管理功能</h3>
            <div class="text">
              集成期初、进货、付款、销售、收款、零售、库存查询、盘点、请货、调拨、组装、费用、工资、调账、调价、返利等开单功能。业务财务管理得心应手。
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
            src="@/assets/image/web/shouye-tupian2.png"
            alt=""
          />
        </div>
      </div>
      <div class="block-wrap">
        <div class="block-right">
          <img
            class="block-img"
            src="@/assets/image/web/shouye-tupian3.png"
            alt=""
          />
        </div>
        <div class="block-left">
          <div class="block-text">
            <h3>功能简单实用，账务全面管理</h3>
            <div class="text">
              傻瓜式操作、实用主义设计理念、简洁的功能导航图，一切都为使用者操作更简单；商品账、资金账、往来账、商品、库存、应收、应付、收入、支出、成本、利润，全面管理，一应俱全。
            </div>
          </div>
          <button
            @click="goHelp()"
            class="block-btn btn-style"
            data-agl-cvt="1"
          >
            了解更多
          </button>
        </div>
      </div>
      <div class="block-wrap">
        <div class="block-left">
          <div class="block-text">
            <h3>商品功能强大，力求满足管理要求</h3>
            <div class="text">
              可以管理：商品多单位或多规格、商品多个预设售价、商品多级分类、多种成本算法、商品条码、商品串号、商品批次与效期。
            </div>
          </div>
          <button
            @click="goHelp()"
            id="home_g3"
            class="block-btn btn-style"
            data-agl-cvt="1"
          >
            了解更多
          </button>
        </div>
        <div class="block-right">
          <img
            class="block-img"
            src="@/assets/image/web/shouye-tupian4.png"
            alt=""
          />
        </div>
      </div>
      <div class="block-wrap">
        <div class="block-right">
          <img
            class="block-img"
            src="@/assets/image/web/shouye-tupian5.png"
            alt=""
          />
        </div>
        <div class="block-left">
          <div class="block-text">
            <h3>软件架构支持企业快速扩张</h3>
            <div class="text">
              多门店连锁请货配送、多仓库和货位管理、多部门协同管理、地区与分支机构管理、员工权限自定义设置、员工数据权限自定义设置，能满足企业快速扩张的需求。
            </div>
          </div>
          <button
            @click="goHelp()"
            id="home_g4"
            class="block-btn btn-style"
            data-agl-cvt="1"
          >
            了解更多
          </button>
        </div>
      </div>
      <div class="block-wrap">
        <div class="block-left">
          <div class="block-text">
            <h3>打印设计灵活，支持远程打印</h3>
            <div class="text">
              系统内置打印模板，可自定义设计打印内容；打印服务器支持电脑端、手机端等远程自动打印。
            </div>
          </div>
          <button
            @click="goHelp()"
            id="home_g5"
            class="block-btn btn-style"
            data-agl-cvt="1"
          >
            了解更多
          </button>
        </div>
        <div class="block-right">
          <img
            class="block-img"
            src="@/assets/image/web/shouye-tupian6.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="industry">
      <div class="industry-section">
        <div class="ind-title">适用行业</div>
        <div class="item-box">
          <div class="item" v-for="(item, index) in indList" :key="item.id">
            <img class="item-icon" :src="item.icon" alt="" />
            <h4 class="item-title">{{ item.title }}</h4>
            <div class="item-detail">
              {{ item.detail }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <footerPc></footerPc> -->
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
          title: "五金机电",
          detail: "进销存、财务、报表。电脑端、手机端、订货小程序实时互联。",
        },
        {
          id: 2,
          icon: require("@/assets/image/web/icon2.png"),
          title: "食品生鲜",
          detail:
            "进销存、财务、报表。电脑端、手机端、订货小程序实时互联。批次批号管理。",
        },
        {
          id: 3,
          icon: require("@/assets/image/web/icon3.png"),
          title: "瓷砖建材",
          detail:
            " 进销存、财务、报表。电脑端、手机端、订货小程序实时互联。管理色号、数量与面积换算。",
        },
        {
          id: 4,
          icon: require("@/assets/image/web/icon4.png"),
          title: "服装鞋帽",
          detail:
            " 进销存、财务、报表。电脑端、手机端、订货小程序实时互联。颜色尺码管理、标签打印。",
        },
        {
          id: 5,
          icon: require("@/assets/image/web/icon5.png"),
          title: "电脑通讯",
          detail:
            "进销存、财务、报表。电脑端、手机端、订货小程序实时互联。串号、售后、返利管理等。",
        },
        {
          id: 6,
          icon: require("@/assets/image/web/icon6.png"),
          title: "药品保健品",
          detail:
            "进销存、财务、报表。电脑端、手机端、订货小程序实时互联。批次效期、经营范围、证照、GSP管理等。",
        },
        {
          id: 7,
          icon: require("@/assets/image/web/icon7.png"),
          title: "医疗器械",
          detail:
            "进销存、财务、报表。电脑端、手机端、订货小程序实时互联。批次效期、灭菌批号、经营范围、GSP管理等。",
        },
        {
          id: 8,
          icon: require("@/assets/image/web/icon8.png"),
          title: "其他商贸行业",
          detail:
            "进销存、财务、报表。电脑端、手机端、订货小程序实时互联。商品称重、体积面积等方面的管理。",
        },
      ],

      videoUrl: "",

      img1: require("@/assets/image/web/shouye-tupian1.png"),
    };
  },
  components: {
    // headerPc
  },

  created() {
    var _hmt = _hmt || [];

 if (process.client) {
     (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?d2253a6667e1c49d83242bd01fd58d87";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();


 }
   
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.videoUrl =
          "https://erpphoto.oss-cn-shenzhen.aliyuncs.com/product-shiping/smyjxc.mp4";
      }, 300);
    });
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
      right: 0px;
      z-index: 0;
      top: 50%;
      margin-top: -200px;

      .img-xinbayun {
        width: 100%;
        height: auto;
      }
    }

    .banner-point {
      position: absolute;
      right: 0px;
      top: 23%;
      margin-top: -50px;
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
        font-size: 66px;
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
        display: -webkit-box;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
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
