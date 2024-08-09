<template>
  <div class="introduce">
    <!-- <headerPc></headerPc> -->
    <div class="banner-box">
      <div class="banner-text">
        <h1>真正免费的进销存软件</h1>
        <p>采购管理、销售出库、库存管理、财务管理、报表查询</p>
        <p>一体化管理软件</p>
      </div>
      <div class="banner-img">
        <img src="@/assets/image/banner.png" alt="" />
      </div>
    </div>
    <div class="jinxiaocun-version">
      <div class="title">
        <h1>进销存软件版本划分</h1>
        <p>免费版 、精英版、旗舰版</p>
      </div>
      <div class="software-jiagou">
        <div class="jiagou-title">辛巴软件产品架构</div>
        <div class="jiagou-img-box">
          <img
            class="jiagou-img"
            src="@/assets/image/software-jiagou.png"
            alt=""
          />
        </div>
        <div class="jiegou-list">
          <div class="item-column">
            <div class="item">采购管理</div>
            <div class="item">财务管理</div>
            <div class="item">报表查询</div>
          </div>
          <div class="item-column">
            <div class="item">销售管理</div>
            <div class="item">零售管理</div>
            <div class="item">数据分析</div>
          </div>
          <div class="item-column">
            <div class="item">库存管理</div>
            <div class="item">外勤管理</div>
            <div class="item">提成管理</div>
          </div>
          <div class="item-column">
            <div class="item">数据实时同步</div>
            <div class="item">数据云端存储</div>
            <div class="item">专业技术服务</div>
          </div>
        </div>
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
    <div class="grid-box">
      <div class="hangye-title">
        <h2>辛巴进销存软件适用行业</h2>
      </div>
      <div class="list-box">
        <div class="item" v-for="(item, index) in gridList" :key="item.id">
          <div class="item-img">
            <img class="img" :src="item.url" alt="" />
          </div>
          <div class="item-text">{{ item.text }}</div>
        </div>
        <div style="clear: both"></div>
      </div>
    </div>
    <!-- <footerPc></footerPc> -->
  </div>
</template>

<script>
// import headerPc from "@/components/headerPc/headerPc.vue";
// import footerPc from "@/components/footer/footer.vue";
export default {
  data() {
    return {
      gridList: [
        {
          id: 1,
          text: "五金机电行业",
          url: require("@/assets/image/grid1.png"),
        },
        {
          id: 2,
          text: "食品饮料行业",
          url: require("@/assets/image/grid2.png"),
        },
        {
          id: 3,
          text: "瓷砖建材行业",
          url: require("@/assets/image/grid3.png"),
        },
        {
          id: 4,
          text: "服装鞋帽行业",
          url: require("@/assets/image/grid4.png"),
        },
        {
          id: 5,
          text: "手机通讯行业",
          url: require("@/assets/image/grid5.png"),
        },
        {
          id: 6,
          text: "电脑IT行业",
          url: require("@/assets/image/grid6.png"),
        },
        {
          id: 7,
          text: "汽修汽配行业",
          url: require("@/assets/image/grid7.png"),
        },
        {
          id: 8,
          text: "药品保健品行业",
          url: require("@/assets/image/grid8.png"),
        },
        {
          id: 9,
          text: "医疗器械行业",
          url: require("@/assets/image/grid9.png"),
        },
        {
          id: 10,
          text: "批发零售行业",
          url: require("@/assets/image/grid10.png"),
        },
        {
          id: 11,
          text: "餐饮生鲜配送",
          url: require("@/assets/image/grid11.png"),
        },
        {
          id: 12,
          text: "化妆品行业",
          url: require("@/assets/image/grid12.png"),
        },
      ],
      indList: [
        {
          id: 1,
          icon: require("@/assets/image/web/icon1.png"),
          title: "操作简单易用",
          detail: "注册即用，无需安装， 软件工学设计方便操作且功能强大",
        },
        {
          id: 2,
          icon: require("@/assets/image/web/icon2.png"),
          title: "全程专业服务",
          detail: "全程多对一技术指导，技术服务工程师具备5年以上软件服务经验",
        },
        {
          id: 3,
          icon: require("@/assets/image/web/icon3.png"),
          title: "数据安全可靠",
          detail:
            "数据云存储，云安全防护，每日例行服务器检查、数据每日备份隔离",
        },
        {
          id: 4,
          icon: require("@/assets/image/web/icon4.png"),
          title: "老品牌值得信赖",
          detail: "辛巴品牌创立近20年，积累了大量的行业经验，深受客户认可",
        },
        {
          id: 5,
          icon: require("@/assets/image/web/icon5.png"),
          title: "整体解决方案",
          detail: "进销存+财务+移动管理+订货商城整体解决方案，助力业务扩张",
        },
        {
          id: 6,
          icon: require("@/assets/image/web/icon6.png"),
          title: "多端协同，实时高效",
          detail:
            "多部门、多门店、多员工、手机、平板、电脑、PDA多端实时互联，无缝连接",
        },
      ],

      bannerImg: require("@/assets/image/banner.png"),
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
        hm.src = "https://hm.baidu.com/hm.js?dcb55a807b09fd62cf796199aa503a78";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    }
  },
};
</script>

<style lang="less" scoped="scoped">
.introduce {
  padding-top: 80px;
  .banner-box {
    position: relative;
    .banner-img {
      width: 100%;
      height: 600px;
      img {
        width: 100%;
        height: 600px;
      }
    }
    .banner-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 60px;
        font-family: "微软雅黑";
        font-weight: bold;
        color: #ffffff;
        line-height: 48px;
      }
      p {
        margin-top: 20px;
        font-size: 20px;
        font-family: "微软雅黑";
        font-weight: 300;
        color: #ffffff;
        line-height: 30px;
      }
    }
  }
  .jinxiaocun-version {
    width: 100%;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      margin-bottom: 50px;
      text-align: center;
      h1 {
        font-size: 38px;
        font-family: "微软雅黑";
        font-weight: 800;
        color: #2c0002;
        line-height: 28px;
        margin-bottom: 16px;
      }
      p {
        font-size: 24px;
        font-family: "微软雅黑";
        font-weight: 400;
        color: #333333;
        line-height: 36px;
      }
    }
    .software-jiagou {
      margin-bottom: 90px;
      .jiagou-title {
        width: 270px;
        height: 70px;
        margin: 0 auto;
        line-height: 70px;
        background: #e62129;
        box-shadow: 0px 1px 8px 0px rgba(230, 33, 41, 0.25);
        border-radius: 8px;
        text-align: center;
        font-size: 30px;
        font-family: "微软雅黑";
        font-weight: bold;
        color: #ffffff;
      }
      .jiegou-list {
        width: 1266px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .item-column {
          .item {
            width: 225px;
            height: 70px;
            margin-bottom: 30px;
            background: #f0f0f0;
            border: 2px solid #e6e6e6;
            transform: translate(-10px, 0px);
            line-height: 70px;
            text-align: center;
            font-size: 24px;
            font-family: "微软雅黑";
            font-weight: 400;
            color: #333333;
          }
        }
      }
    }
  }
  .grid-box {
    width: 1200px;
    margin: 90px auto;
    .hangye-title {
      text-align: center;
      height: 60px;
      line-height: 60px;
      h2 {
        font-size: 38px;
        font-family: "微软雅黑";
        font-weight: 800;
        color: #2c0002;
        line-height: 28px;
      }
    }
    .list-box {
      .item {
        float: left;
        width: 25%;
        margin-bottom: 20px;
        .item-img {
          width: 270px;
          height: 270px;
          margin: 0 auto;
          border-radius: 10px;
          overflow: hidden;
          img {
            width: 270px;
            height: 270px;
          }
        }
        .item-text {
          text-align: center;
          font-size: 24px;
          line-height: 60px;
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
      .btn-null {
        width: 156px;
        height: 46px;
        margin: 0 auto;
        margin-top: 40px;
        line-height: 46px;
        text-align: center;
        border: 1px solid #e62129;
        border-radius: 8px;
      }
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
          width: 360px;
          height: 152px;
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
}
</style>
