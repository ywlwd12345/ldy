<template>
  <div>
    <div class="nav-bot">
      <div class="nav-bot-center">
        <div class="nav-bot-left">
          <div class="nav-bot-title">关于我们</div>
          <div class="ul-nav-wrap">
            <ul class="ul-left">
              <li @click="toPage('companyProfile_p')">公司简介</li>
              <li @click="toPage('companyQualifications_p')">公司资质</li>
              <li @click="toPage('companyCulture_p')">公司文化</li>
            </ul>

            <ul class="ul-right">
              <li @click="toPage('compCopyright_p')">版权信息</li>
              <li @click="toPage('compServicesAgreements_p')">用户服务协议</li>
              <li @click="toPage('compPrivacyAgreement_p')">隐私政策</li>
            </ul>
          </div>
        </div>

        <div class="nav-bot-right">
          <div class="nav-bot-title">联系方式</div>
          <ul class="contact-info">
            <li>售前：028-85243072 18123224365</li>
            <li>售后：4006000280 028-85484391 028-85243074</li>
            <li>渠道：13308084391 18980599187</li>
            <li>QQ：4006000280</li>
            <li>网址：https://www.xinbafar.com</li>
            <li>
              地址：四川.成都.高新区.吉瑞三路99号泰然环球时代中心C座1904号
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bot-copyright-area">
      <p class="copyright-text">
        © 2005 - {{ year }} 四川辛巴远扬科技有限公司
        为您提供进销存系统_医疗器械&医药GSP软件_订货系统_手机APP
        蜀ICP备09025540号-1
      </p>
    </div>

    <div class="new-copyright-area">
      <p>
        APP名称：辛巴手机通&nbsp;&nbsp;
        <router-link class="a_before" to="/productFeatures_p"
          >产品功能</router-link
        >&nbsp;
        <router-link class="a_before" to="/permissionDesc_p"
          >权限列表</router-link
        >&nbsp; <a class="a_before"   @click="toPrivacy">用户协议</a>&nbsp;
        <router-link class="a_before" to="/privacyPolicy_p"
          >隐私政策</router-link
        >&nbsp;&nbsp;&nbsp;&nbsp; 开发者名称：四川辛巴远扬科技有限公司
        版本号：3.8.2
      </p>

      <p>
        咨询热线：028-85243072
        地址：四川.成都.高新区.吉瑞三路99号泰然环球时代中心C座1904号
      </p>
      <p>
        辛巴手机通 ©2005-{{ year }} xinba All Rights Reserved
        四川辛巴远扬科技有限公司 版权所有
        <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">
          蜀ICP备09025540号-3A</a
        >
        <!-- <a
            id="_xinchacharenzheng_cert_vip_ssl"
            class="area_vip_ssl"
            style="text-decoration: none"
            target="_blank"
            href="https://xyt.xinchacha.com/getpcInfo?sn=1518834944388800512&amp;certType=8&amp;url=*.ukuaiqi.com"
          >
            <img
              src="https://xyt.xinchacha.com/img/icon/icon8.png"
              style="height: 25px; width: 80px"
            />
          </a> -->
      </p>

      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  props: {},
  methods: {
    toPage(name) {
      this.$router.push({ name: name });
    },

    toPrivacy() {
      window.open(
        "https://www.xinbafar.com/data/upload/2022-05-05/6273806ddbcae.pdf"
        , "_blank"
      )
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.nav-bot {
  width: 100%;
  height: 380px;
  padding-top: 64px;
  background: #e8e8e8;
}

.nav-bot-center {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  // padding: 0 50px;
  // background: red;
}

.nav-bot-title {
  font-size: 26px;
  font-weight: bold;
  color: #000000;
  line-height: 27px;
}

.nav-bot-left {
  margin-right: 180px;
}

.ul-nav-wrap {
  display: flex;
  flex-direction: row;
}

li {
  margin-top: 18px;
  font-size: 18px;
  color: #333;
}

.ul-nav-wrap li {
  transition: all 0.3s;
}

.ul-nav-wrap li:hover {
  color: #ff410f;
  cursor: pointer;
}

.ul-right {
  margin-left: 63px;
}

ol,
ul,
li {
  list-style-type: disc !important;
}

.bot-copyright-area {
  // width: 100%;
  // background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.copyright-text {
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  line-height: 27px;
}

div.new-copyright-area {
  position: relative;
  background: #000000;
  box-shadow: 0px -2px 0px 0px #007aff;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 1px;
  font-weight: 300;
  text-align: center;
  font-size: 12px;
  line-height: 22px;
  padding-top: 12px;
}

.new-copyright-area > p {
  position: relative;
  margin: 0 0 2px;
}

.new-copyright-area > p > a {
  color: rgba(255, 255, 255, 0.65);
}

.new-copyright-area > p > a:hover {
  color: #fff;
}

.new-copyright-area .a_before:before {
  content: "";
  width: 1px;
  height: 8px;
  background: #ffffffa6;
  display: inline-block;
  margin-right: 6px;
}
</style>
