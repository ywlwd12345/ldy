<template>
  <div class="h-content">
    <div class="header">
      <div class="logo-box">
        <router-link :to="{name:'index_p'}"
          ><img class="logo" src="@/assets/image/mobile/logo.png" alt=""
        /></router-link>
        <!-- <div class="logo-tips"> 地区代理商</div> -->
      </div>

      <div class="menu">
        <router-link class="menu-li" :to="{name:'index_p'}"> 首页 </router-link>
        <el-dropdown>
          <el-button :class="['menu-li', { active: routerActive }]" type="">
            产品
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><router-link class="menu-a" tag="div" :to="{ name: 'introduce' }"
                >免费进销存</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link
                class="menu-a"
                tag="div"
                :to="{ name: 'commercial' }"
                >商贸云进销存</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link
                class="menu-a"
                tag="div"
                :to="{ name: 'finaceCloud' }"
                >财贸云进销存</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link class="menu-a" tag="div" :to="{ name: 'clothing' }"
                >服装云进销存</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link
                class="menu-a"
                tag="div"
                :to="{ name: 'medicineCloud' }"
                >医药云进销存</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link
                class="menu-a"
                tag="div"
                :to="{ name: 'medicneProCloud' }"
                >医疗器械云进销存</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link class="menu-a" tag="div" :to="{ name: 'itCloud' }"
                >IT通讯云进销存</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link
                class="menu-a"
                tag="div"
                :to="{ name: 'appCommercial' }"
                >手机端进销存APP</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link
                class="menu-a"
                tag="div"
                :to="{ name: 'shoppingB2B' }"
                >B2B小程序订货商城</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link
                class="menu-a"
                tag="div"
                :to="{ name: 'shoppingB2C' }"
                >B2C小程序分销商城</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link
                class="menu-a"
                tag="div"
                :to="{ name: 'pos' }"
                >辛巴收银系统</router-link
              ></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <router-link class="menu-li" :to="{ name: 'price' }">
          价格
        </router-link>
        <router-link class="menu-li" :to="{ name: 'support' }">
          支持
        </router-link>
        <div class="menu-li" @click="goNews">新闻</div>
      </div>
    </div>
  </div>
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
    return {};
  },
  methods: {
    goNews() {
      window.open(
        `http://www.xinbafar.com/index.php/home/listn/index/id/43.html`
      );
      // window.location.href=`http://www.xinbafar.com/index.php/home/listn/index/id/43.html`
    },
  },
  computed: {
    routerActive() {
      return this.$route.meta.pageType == "product";
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
  font-family: '微软雅黑' !important;
  font-size: 16px !important;
  height: 17px;
  line-height: 17px !important;
  padding: 0px !important;
}
.header .el-button:focus {
  color: none !important;
}
.el-dropdown {
  // padding: 0px 4%;
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
.el-button {
  border: none !important;
}
.h-content {
  .header {
    position: fixed;
    top: 0px;
    z-index: 99;
    width: 100%;
    padding: 15px 0px;
    box-shadow: 0px 0px 1px rgb(0, 0, 0);
    background-color: white;
    .logo-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 18px;
      .logo {
        display: block;
        width: 100px;
        height: 29px;
        margin: 0 auto;
      }
      .logo-tips {
        margin-left: 10px;
        padding-left: 10px;
        font-size: 13px;
        text-align: center;
        color: #e62129 !important;
        border-left: 2px solid #e62129;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      justify-content: center;
      .menu-li {
        display: flex;
        align-items: center;
        font-size: 13px;
        text-align: center;
        // padding: 0px 4%;
        font-size: 13px !important;
        margin-right: 18px;
        &:last-child {
          margin-right: 0px !important;
        }
      }

      .menu-li::after {
        content: "";
        width: 0;
        height: 0;
        margin-top: 2px;
        margin-left: 6px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #333333;
        transition: all 0.5s;
      }

      .menu-li:hover::after {
        border-top: 6px solid #e62129;
      }

      .router-link-active {
        color: red;
      }

      .router-link-active::after {
        border-top: 7px solid #e62129;
      }
    }
  }
}
</style>
