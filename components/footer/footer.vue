<template>
  <div class="footer1">
    <div class="detail">{{ title }}</div>
    <button @click="goErp" class="f-btn btn-style" data-agl-cvt="5">
      免费注册
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "免费使用云ERP进销存",
    },
  },
  methods: {
    goErp() {
      if (this.title == "欢迎使用辛巴收银系统") {
        window.location.href = `http://pos.xinbafar.com/#/login?id=2`;
      } else {
        window.location.href = `http://erp.xinbafar.com/#/login?id=2`;
        // window.location.href=`http://192.168.16.137:8080/#/login?id=2`
      }
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.footer1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin: 20px auto;
  // padding: 70px 0px;
  // background-color: #fde9e9;
}

.detail {
  font-size: 32px;
  font-weight: 800;
  color: #2c0002;
}

.f-btn {
  font-size: 16px;
  width: 156px;
  height: 46px;
  margin-top: 41px;
  border-radius: 8px;
}
</style>
