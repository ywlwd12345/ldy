<template>
  <header id="header-main" :class="[{ 'headerMain-bg': current }, 'header']">

    <div class="header-setion bd">
      <div class="logo bd">
        <router-link :to="{ name: 'index' }">
          <img class="logo-img" src="@/assets/image/web/logo.png" alt="" />
        </router-link>
      </div>
      <div class="menu">

        <router-link exact tag="div" class="menu-li" :to="{ name: 'index' }">
          首页
        </router-link>

        <div>
          <el-dropdown>
            <el-button :class="['menu-li', { active: routerActive }]" type="">
              产品
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><router-link
                  class="menu-a"
                  tag="div"
                  :to="{ name: 'web-introduce' }"
                  >免费进销存</router-link
                ></el-dropdown-item
              >

              <el-dropdown-item
                ><router-link class="menu-a" tag="div" :to="{ name: 'web-cashier' }"
                  >辛巴收银系统</router-link
                ></el-dropdown-item
              >

              <el-dropdown-item
                ><router-link
                  class="menu-a"
                  tag="div"
                  :to="{ name: 'web-commercialCloud' }"
                  >商贸云进销存</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><router-link
                  class="menu-a"
                  tag="div"
                  :to="{ name: 'web-financeCloud' }"
                  >财贸云进销存</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><router-link
                  class="menu-a"
                  tag="div"
                  :to="{ name: 'web-clothingCloud' }"
                  >服装云进销存</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><router-link
                  class="menu-a"
                  tag="div"
                  :to="{ name: 'web-medicineCloud' }"
                  >医药云进销存</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><router-link
                  class="menu-a"
                  tag="div"
                  :to="{ name: 'web-medicalProCloud' }"
                  >医疗器械云进销存</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><router-link
                  class="menu-a"
                  tag="div"
                  :to="{ name: 'web-itCloud' }"
                  >IT通讯云进销存</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><router-link
                  class="menu-a"
                  tag="div"
                  :to="{ name: 'web-appCommercial' }"
                  >手机端进销存APP</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><router-link
                  class="menu-a"
                  tag="div"
                  :to="{ name: 'web-shoppingB2B' }"
                  >B2B小程序订货商城</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item
                ><router-link
                  class="menu-a"
                  tag="div"
                  :to="{ name: 'web-shoppingB2C' }"
                  >B2C小程序分销商城</router-link
                ></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <router-link class="menu-li" :to="{ name: 'web-price' }">
          价格
        </router-link>
      </div>
      <div class="right-btn">
        <div @click="openUrl('login')" class="button" data-type="login">
          登录
        </div>
        <div
          @click="openUrl('register')"
          class="button btn-style"
          data-type="register"
        >
          免费注册
        </div>
        <!-- <div @click="openUrl" class="button btn-style" data-agl-cvt='5'>免费使用</div> -->
        <!-- <router-link  :to="{name:'register_p'}" ><div class="button btn-style" data-agl-cvt='5'>免费使用</div></router-link> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    url: {
      type: Object,
      default: function () {
        return { name: "index_p" };
      },
    },
  },
  data() {
    return {
      current: false,
    };
  },

  created() {},
  mounted() {
    this.$nextTick(() => {
      this.changeBg();
    });
  },
  computed: {
    routerActive() {
      
      // return this.$route.meta.pageType == "product";
    },
  },
  methods: {
    openUrl(val) {
      let tip = val;
      // let source = 'promotion'
      if (tip == "register") {
        if (this.url.name == "pos") {
          window.open(`http://pos.xinbafar.com/#/login?id=2`);
        } else {
          window.open(`http://erp.xinbafar.com/#/login?id=2`);
        }
      } else if (tip == "login") {
        if (this.url.name == "pos") {
          window.open(`http://pos.xinbafar.com/#/login?id=1`);
        } else {
          window.open(`http://erp.xinbafar.com/#/login?id=1`);
        }
      } else if (tip == "news") {
        window.open(
          `http://www.xinbafar.com/index.php/home/listn/index/id/43.html`
        );
      }
    },
    changeBg() {
      var headerMain = document.getElementById("header-main");
      if (window.pageYOffset >= 70) {
        headerMain.classList.add("headerMain-bg");
      } else {
        headerMain.classList.remove("headerMain-bg");
      }
      window.onscroll = function () {
        if (window.pageYOffset >= 70) {
          headerMain.classList.add("headerMain-bg");
        } else {
          headerMain.classList.remove("headerMain-bg");
        }
      };
    },
  },
};
</script>

<style lang="less" scoped="scoped">
// elment-drown-menu-style
.el-dropdown-menu,
.el-popper {
  .el-dropdown-menu__item {
    text-align: center;
    padding: 0px !important;
    &:hover {
      color: #e62129;
      background-color: #fff3f3;
    }
  }
}
.el-dropdown,
.el-button {
  color: #000000;
  font-family: "微软雅黑";
  font-size: 16px !important;
  height: 21px;
  line-height: 21px !important;
}
.header .el-button:focus {
  color: none !important;
}

.el-button:focus {
  color: #e62129 !important;
  border: none !important;
}
.menu-a {
  display: block;
  min-width: 200px;
  padding: 10px 12px !important;
  text-align: center;
}
// elment-drown-menu-style

.router-link-exact-active,
.active {
  color: #e62129 !important;
}

.header {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 99;
  height: 80px;
  background-color: transparent;
  .el-button {
    padding: 0px !important;
    background-color: transparent !important;
    border: none !important;
    &:hover {
      color: #e62129;
    }
  }
  .header-setion {
    width: 1200px;
    height: 80px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    .logo {
      width: 250px;
      height: 50px;
      display: flex;
      align-items: center;
      .logo-tips {
        display: flex;
        align-items: center;
        height: 24px;
        margin-left: 16px;
        padding-left: 16px;
        font-size: 16px;
        text-align: center;
        min-width: 120px;
        color: #e62129 !important;
        border-left: 2px solid #e62129;
      }
    }
    .web-tips {
      &::before {
        content: "";
        display: block;
        width: 2px;
        height: 80%;
        background-color: #e62129;
        margin: 0 15px 0px 15px;
      }
      display: flex;
      align-items: center;
      height: 32px;
      font-size: 24px;
      font-family: "微软雅黑";
      color: #e62129;
    }

    .menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 101px;

      .menu-li {
        display: flex;
        align-items: center;
        font-size: 16px;
        min-width: 90px;
        text-align: center;
        &:hover {
          cursor: pointer;
          color: #e62129;
        }
      }

      .menu-li::after {
        content: "";
        width: 0;
        height: 0;
        margin-top: 4px;
        margin-left: 6px;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 7px solid #333333;
        transition: all 0.5s;
      }

      .menu-li:hover::after {
        border-top: 7px solid #e62129;
      }
      .active {
        color: red;
      }
      .active::after {
        border-top: 7px solid #e62129;
      }
    }

    .right-btn {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .button {
        font-size: 16px;
        width: 120px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
      }
    }
  }
}

.headerMain-bg {
  background-color: white;
  box-shadow: 0 0 1px rgb(0, 0, 0);
}
</style>
