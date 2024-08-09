<template>
  <div>
    <headerPc />
    <consult :scrollPop="scrollTop"></consult>
    <nuxt />

    <footerPc/>
  </div>
</template>

<script>
import headerPc from "~/components/headerPc/headerPc.vue";
import consult from "@/components/consult/consult.vue";
import footerPc from "@/components/footer/footer";

export default {
  data() {
    return {
      scrollTop: 0,
      routerName: "",
      pageId: "",
      isPc: true,
    };
  },
  components: {
    consult,
    headerPc,
    footerPc,
  },
  watch: {
    $route: function (to, from) {
      console.log(to, "路由监听");

      //   this.isPc = this.$pc;

      // 如果跳转name 包含pc路由，在手机标识下，如果跳转包含pc路由，就去除'_p',进行跳转
      // 此时路由仍然被监听，index路由

      //   if (to.name.indexOf("_p") > 0 && !this.$pc) {
      //     this.$router.replace(to.name.split("_p")[0]);
      //   } else if (to.name.indexOf("_p") < 0 && this.$pc) {
      //     this.$router.replace(to.name + "_p");
      //   }
    },
  },
  mounted() {
    // this.isPc = this.$pc;

    if (process.client) {
      this.winFun();
    }
  },
  created() {
    if (process.client) {
      //  this.record();
    }
  },
  methods: {
    scrollHander(e) {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollTop = scrollTop;
    },
    async record() {
      await this.$store.commit("setTime", this.$visitTime());
      await this.$store.commit("setSearchTool", this.$pc);
      await this.$store.commit("setPageId", this.$route.meta.pageId);
      let rData = this.$store.state.website;
      let storegeVal = window.localStorage.getItem("FREE_STATE_ID");
      await post("/vistor/record", rData).then((res) => {
        if (
          !storegeVal ||
          storegeVal === " " ||
          storegeVal === null ||
          storegeVal === "null"
        ) {
          window.localStorage.setItem("FREE_STATE_ID", res.data);
        }
      });
      return "关闭页面";
    },
    async closePage() {
      await this.$store.commit("setTime", this.$visitTime());
      await this.$store.commit("setPageId", this.pageId);

      let rData = this.$store.state.website;
      let storegeVal = window.localStorage.getItem("FREE_STATE_ID");

      // await post("/vistor/closeWebsite", rData).then((res) => {});

      return "关闭页面";
    },
    winFun() {
      window.addEventListener("beforeunload", this.closePage());

      window.addEventListener("scroll", this.scrollHander);
    },
  },
};
</script>



<style lang="less">
@import "@/style/global.css";

html {
  scroll-behavior: smooth;
}
// $message
.el-message {
  top: 200px !important;
  z-index: 99999 !important;
}
.el-message {
  min-width: 340px !important;
  &__content {
    color: #e62129 !important;
  }
}

.btn-style {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e62129;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid rgba(230, 33, 41, 0.35);
}

.btn-null {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e62129;
  border-radius: 8px;
  font-weight: 400;
  color: #e62129;
  background-color: #fff;
}

.w-btn {
  width: 156px;
  height: 46px;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 46px;
  border-radius: 8px;
  border: 1px solid #e62129;
}
// mobile style
.m-btn {
  width: 90px;
  height: 30px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 30px;
  border-radius: 4px;
  border: 1px solid rgba(230, 33, 41, 0.35);
}
.m-btn-style {
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e62129;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid rgba(230, 33, 41, 0.35);
}
.m-btn-null {
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e62129;
  border-radius: 4px;
  font-weight: 400;
  color: #e62129;
  background-color: #fff;
}
</style>
