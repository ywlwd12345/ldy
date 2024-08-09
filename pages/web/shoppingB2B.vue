<template>
  <div class="s-content">
   
    <div class="section">
      <div
        style="
          width: 100%;
          height: 720px;
          justify-content: center;
          display: flex;
          margin-bottom: 10px;
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
      <div class="shopping-box">
        <div class="s-title-box">
          <h3 class="s-title">B2B小程序订货商城</h3>
          <div class="m-title">
            与辛巴进销存系统结合使用，帮助企业管理进销存财务、管理客户在B2B订货商城自助下单并控制客户信用额度和应收账款，并进行往来对账的微信小程序订货商城
          </div>
        </div>
        <div class="s-product-block">
          <div class="s-img-box">
            <img class="s-img" src="@/assets/image/web/s-1.png" alt="" />
          </div>
          <div class="s-text-box">
            <h4 class="s-title">小程序客户端</h4>
            <div class="s-detail-block">
              <div class="m-title">浏览商品详情</div>
              <div class="s-detail">
                客户在B2B订货商城上随时随地都可以查看商品分类目录和浏览商品信息和图片，随时查看订货价格，增加了客户对公司产品的全面深入了解。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">客户自助下单</div>
              <div class="s-detail">
                客户根据需要在订货商城上选择商品、规格，输入数量，并依次放入购物车，等把所有需要的商品都选择完毕后，在购物车中查看订单详情，选择付款方式后完成下单。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">查看发货情况</div>
              <div class="s-detail">
                下单后，客户可以在订货商城上查看订单的发货情况：发货时间、商品种类、数量，未发货商品种类和数量，实时了解订单的发货动态。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">客户对账付款</div>
              <div class="s-detail">
                客户在订货商城上可随时查看自己的订单情况和往来对账情况，还可以自动付款充值。客户的付款情况，余额，每一笔订单的发生额都清清楚楚。
              </div>
            </div>
          </div>
        </div>
        <moreBtn :size="true" :int="false"></moreBtn>

        <div class="s-product-block">
          <div class="s-text-box">
            <h4 class="s-title">小程序管理端</h4>
            <div class="s-detail-block">
              <div class="m-title">订货客户管理</div>
              <div class="s-detail">
                客户新增、客户注册二维码新增客户、客户审核与客户授权、客户账号管理、客户信用额度管理、客户适用价格体系管理。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">代客下单</div>
              <div class="s-detail">
                业务员在小程序管理端帮助客户下订单，直接提交订单给总部，或提交给客户审核后再提交给总部。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">订单查询与发货</div>
              <div class="s-detail">
                管理人员可以在管理端随时查看客户的订单情况和状态，可以了解订单的完成情况，并对订单进行发货管理。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">往来对账</div>
              <div class="s-detail">
                管理人员可以随时查看客户余额、往来明细情况，客户随时随地对账。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">实际库存与可售库存</div>
              <div class="s-detail">
                管理人员可以在手机上进行实际库存查询、可售库存查询。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">员工外勤管理</div>
              <div class="s-detail">
                业务人员出外勤，每拜访一个客户可以对客户单位门头和商品陈列情况拍照，进行定位签到。公司管理者可以实时掌握业务开展情况。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">报销单</div>
              <div class="s-detail">
                业务人员外面，可以通过手机上的管理端的报销单功能填写费用报销信息。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">首页配置与系统配置</div>
              <div class="s-detail">
                首页banner广告设置、首页商品分类设置、首页专栏活动设置、通知公告设置、系统选项配置等。
              </div>
            </div>
          </div>
          <div class="s-img-box s-img-right">
            <img class="s-img" src="@/assets/image/web/s-3.png" alt="" />
          </div>
        </div>
        <moreBtn :size="true" :int="true"></moreBtn>

        <div class="s-product-block">
          <div class="s-img-box">
            <img class="s-img" src="@/assets/image/web/s-2.png" alt="" />
          </div>
          <div class="s-text-box">
            <h4 class="s-title">进销存ERP端</h4>
            <div class="s-detail-block">
              <div class="m-title">采购管理</div>
              <div class="s-detail">
                管理商品的采购情况，包括采购订单、采购入库、供应商、经手人、入库仓库、付款情况、商品数量、单价、金额等信息。自动成流水报表和统计报表以及应付账款等信息。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">销售管理</div>
              <div class="s-detail">
                管理商品销售情况，包括销售订单、销售出库、客户、业务员、出库仓库、收款情况、商品数量、单价、金额等情况。自动生成流水报表、统计报表、应收账款等。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">库存管理</div>
              <div class="s-detail">
                管理商品出入库、调拨、盘点、报损、报溢、生产配料、费用分摊等情况。查询库存数据：商品分布、库存状况、历史库存、库存流水等。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">财务管理</div>
              <div class="s-detail">
                管理企业收款、付款、费用支出的发生情况。管理客户和供应商的应收应付账款、往来对账、明细账等。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">零售收银</div>
              <div class="s-detail">
                管理门店里的收银，比如商品扫码录入、扫码支付、打印收银小票等。自动生成零售流水、收款流水、统计报表等。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">会员管理</div>
              <div class="s-detail">
                管理会员卡类型、会员打折、会员积分、会员储值、会员消费、会员计次服务等。自动记录会员消费、储值、积分的日志。
              </div>
            </div>
          </div>
        </div>
        <moreBtn :size="true" :int="true"></moreBtn>
        <div class="s-product-block">
          <div class="s-text-box">
            <h4 class="s-title">手机进销存端</h4>
            <div class="s-detail-block">
              <div class="m-title">手机开单与打印</div>
              <div class="s-detail">
                手机上可以开各种单据：进货单，进货退货单，销售单，销售退货单，零售单，盘点单，调拨单，收款单，付款单。并支持蓝牙打印和远程打印服务器打印。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">单据查询与审核</div>
              <div class="s-detail">
                业务员手机开单可以保存草稿或审核，管理者在手机上查看开单历史或审核草稿单据，也可以在电脑端打开业务草稿在进行审核。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">库存管理与盘点处理</div>
              <div class="s-detail">
                实际库存查询、可售库存查询、库存序列号查询、库存报警、库存流水、库存调拨，库存盘点等，商品成本管理：移动加权平均法，手工指定法（批次效期商品）。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">基础数据录入</div>
              <div class="s-detail">
                可以管理：商品分类与增加商品信息、商品多单位、仓库、客户、供应商、一般单位处理、商品颜色尺码、结算账户、系统配置。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">员工外勤管理</div>
              <div class="s-detail">
                员工出外勤，每拜访一个客户可以对客户单位门头和商品陈列情况拍照，进行定位签到。公司管理者可以实时掌握员工业务开展情况。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">客户对账</div>
              <div class="s-detail">
                手机上查询客户收款情况，并查询关联的全部单据，可以完成收款单录入。查询与供应商的付款情况，并查询关联的全部单据，可以完成付款单录入。
              </div>
            </div>
            <div class="s-detail-block">
              <div class="m-title">领导报表查询</div>
              <div class="s-detail">
                手机上查询客户收款情况，并查询关联的全部单据，可以完成收款单录入。查询与供应商的付款情况，并查询关联的全部单据，可以完成付款单录入。
              </div>
            </div>
          </div>
          <div class="s-img-box s-img-right">
            <img class="s-img" src="@/assets/image/web/s-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <moreBtn :size="true" :int="true"></moreBtn>
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

    <!-- 客户展示 -->
    <div class="customer-display">
      <h1 class="big-title">客户行业</h1>
      <div class="customer-display-section">
        <customer-show :objContent="obj_sxpf"> </customer-show>
        <customer-show :objContent="obj_sppf">
          <template slot="subtitle">
            (饮料、牛奶、休闲食品、火锅食品、冻品等)
          </template>
        </customer-show>
        <!-- 化妆品行业 -->
        <customer-show :objContent="obj_hzphy"> </customer-show>

        <!-- 医药行业 -->
        <customer-show :objContent="obj_yyhy"> </customer-show>

        <!-- 文具用品行业 -->
        <customer-show :objContent="obj_wjyp"> </customer-show>

        <!-- 母婴服饰行业 -->
        <customer-show :objContent="obj_myfs"> </customer-show>

        <!-- 手机通讯行业 -->
        <customer-show :objContent="obj_sjtx"> </customer-show>
      </div>
    </div>

  
  </div>
</template>

<script>

import moreBtn from "@/components/btnMoreP/btnMoreP.vue";
import customerShow from "@/components/customerShow/index.vue";
export default {
  data() {
    return {
      indList: [
        {
          id: 1,
          icon: require("@/assets/image/web/icon1.png"),
          title: "立体展示产品，提高客户粘性",
          detail:
            "小程序订货商城以图文形式展示公司产品，简化下游客户的下单方式,提高客户的粘度,同时降低企业的推广成本。",
        },
        {
          id: 2,
          icon: require("@/assets/image/web/icon2.png"),
          title: "减少沟通损耗，减少发货错误",
          detail:
            "客户在小程序订货商城下单，商品图片、文字、详情一目了然，减少沟通频次，降低沟通损耗，减少电话、微信、QQ下单发货容易发生的错误。",
        },
        {
          id: 3,
          icon: require("@/assets/image/web/icon3.png"),
          title: "整体解决方案，拒绝重复工作",
          detail:
            " 线上订货商城、线下进销存ERP、手机端无缝对接,提供给批发客户手机订货+企业总部进销存财务一体化管理解决方案。",
        },
        {
          id: 4,
          icon: require("@/assets/image/web/icon4.png"),
          title: "客户分级价格，灵活管理客户",
          detail:
            "客户价格跟踪、制定不同客户的适用价格-7档售价、默认订货价格等能有针对性的区别对待不同类型客户。",
        },
        {
          id: 5,
          icon: require("@/assets/image/web/icon5.png"),
          title: "订单短信提醒、订单自动打印",
          detail:
            "客户下单后，后台管理人员收到订单提醒，辛巴进销存ERP端自动打印客户销售订单,订单分批发货、整单发货均可。",
        },
        {
          id: 6,
          icon: require("@/assets/image/web/icon6.png"),
          title: "移动拓新客户，销售业绩翻倍",
          detail:
            "业务员可以随时开拓新客户，新增客户进入进销存ERP系统，在手机上完成新客户商城开户。业务员推广二维码，助力客户裂变。",
        },
        {
          id: 7,
          icon: require("@/assets/image/web/icon6.png"),
          title: "客户手机上往来对账，客户放心",
          detail:
            "公司管理者随时随地可以和客户进行往来对账，并进行实时问题的解决和沟通,让客户消费更加安心放心。",
        },
        {
          id: 8,
          icon: require("@/assets/image/web/icon6.png"),
          title: "不限用户数，主张开拓新客户",
          detail:
            "小程序管理端和小程序客户端下单的订货端都不限用户数，全力支持企业发展新客户。",
        },
        {
          id: 9,
          icon: require("@/assets/image/web/icon6.png"),
          title: "客户信用额度管控，保证回款",
          detail:
            "客户拥有信用额度,用来透支赊账，快捷订货，可以实现客户信用额度管理和应收账款余额实时监管和控制。",
        },
        {
          id: 10,
          icon: require("@/assets/image/web/icon6.png"),
          title: "实时订单情况，营运状态清晰",
          detail:
            "老板或管理员在手机上随时随地查看到每个客户每天的订货情况,实时了解客户需求和产品畅销情况。并快速做出采购、库存、发货等决策行动。",
        },
        {
          id: 11,
          icon: require("@/assets/image/web/icon6.png"),
          title: "采购需求计划，一键完成采购",
          detail:
            "通过采购需求计划，销售订单一键生成各个供应商采购订单，能快速订货、拣货、发货。",
        },
        {
          id: 12,
          icon: require("@/assets/image/web/icon6.png"),
          title: "购就送进销存ERP端和手机端",
          detail:
            "正在促销中，凡是在促销活动期间，购买B2B小程序商城服务的用户均可享受免费使用一定数量的进销存ERP端和手机进销存端。",
        },
      ],

      obj_sxpf: {
        title: "生鲜批发配送行业小程序下单",
        content: [
          {
            id: 1,
            text: "1、客户按辅助单位(边、只、根、个、排、条)下单，进销存系统后台按辅助单位(边、只、根、个、排、条)收单、汇总、采购。按基本单位斤开单采购、出库、收款、对账。",
          },
          { id: 2, text: "2、客户每天必须在规定营业时间才能下单。" },
          { id: 3, text: "3、客户按默认商品单位简易模式下单。" },
          { id: 4, text: "4、客户下单时，商品单价为0元也可以下单。" },
          {
            id: 5,
            text: "5、客户下单时，低于商品起订数量或单据起订金额不能下单。",
          },
          {
            id: 6,
            text: "6、客户下单时，可输入或选择商品特殊要求备注和整单备注。",
          },
          { id: 7, text: "7、客户下单时，选择线下结算。" },
          {
            id: 8,
            text: "8、后台管理人员根据市场行情对订单商品单价进行批量修改。",
          },
          {
            id: 9,
            text: "9、后台管理人员可以对订单汇总和EXCEL处理后发给供应商配货。",
          },
          { id: 10, text: "10、后台管理人员直接调用订单出库。" },
          { id: 11, text: "11、自动生成应收账款，并进行对账、收款。" },
        ],
        imgUrl: [
          { url: require("@/assets/image/ldy/sxpf/1.png") },
          { url: require("@/assets/image/ldy/sxpf/2.png") },
          { url: require("@/assets/image/ldy/sxpf/3.png") },
          { url: require("@/assets/image/ldy/sxpf/4.png") },
        ],
      },

      obj_sppf: {
        title: "食品批发行业客户小程序下单",
        content: [
          {
            id: 1,
            text: "1、客户每天必须在规定营业时间才能下单。",
          },
          {
            id: 2,
            text: "2、客户按默认商品单位（比如大单位件，箱，条），简易模式下单。",
          },
          {
            id: 3,
            text: "3、客户下单时，低于起订数量或单据起订金额不能下单。",
          },
          {
            id: 4,
            text: "4、客户下单时，可输入或选择商品特殊要求备注和整单备注。",
          },
          {
            id: 5,
            text: "5、客户下单时，可选择授信支付或在线直接支付。",
          },
          {
            id: 6,
            text: "6、客户下单可售数量控制。",
          },
          { id: 7, text: "7、客户预设售价设置、客户信用额度控制。" },
          {
            id: 8,
            text: "8、后台管理人员可以按单打印、拣货，直接调用订单出库。",
          },
          {
            id: 9,
            text: "9、自动生成应收账款，并进行对账、收款。",
          },
        ],
        imgUrl: [
          { url: require("@/assets/image/ldy/sppf/1.png") },
          { url: require("@/assets/image/ldy/sppf/2.png") },
          { url: require("@/assets/image/ldy/sppf/3.png") },
          { url: require("@/assets/image/ldy/sppf/4.png") },
          { url: require("@/assets/image/ldy/sppf/5.png") },
          { url: require("@/assets/image/ldy/sppf/6.png") },
        ],
      },

      obj_hzphy: {
        title: "化妆品行业连锁门店小程序下单",
        content: [
          {
            id: 1,
            text: "1、门店每天必须在规定营业时间才能下单。",
          },
          { id: 2, text: "2、门店按默认商品单位，简易模式下单。" },
          {
            id: 3,
            text: "3、门店下单时，低于起订数量或单据起订金额不能下单。",
          },
          { id: 4, text: "4、门店下单时，可输入整单备注要求。" },
          {
            id: 5,
            text: "5、门店下单时，可选择授信支付或在线直接支付。",
          },
          {
            id: 6,
            text: "6、门店下单生成门店请货单。",
          },
          { id: 7, text: "7、客户下单可售数量控制。" },
          {
            id: 8,
            text: "8、门店下单月度额度控制。",
          },
          {
            id: 9,
            text: "9、后台管理人员可以按门店请货单打印、拣货。",
          },
          {
            id: 10,
            text: "10、后台管理人员调门店请货单生成自营店调拨单出库。",
          },
          { id: 11, text: "11、后台按调单零售金额进行对账、收款。" },
        ],
        imgUrl: [
          { url: require("@/assets/image/ldy/hzphy/1.png") },
          { url: require("@/assets/image/ldy/hzphy/2.png") },
          { url: require("@/assets/image/ldy/hzphy/3.png") },
          { url: require("@/assets/image/ldy/hzphy/4.png") },
        ],
      },

      obj_yyhy: {
        title: "医药、医疗器械、保健品批发配送小程序下单",
        content: [
          {
            id: 1,
            text: "1、客户每天必须在规定营业时间才能下单。",
          },
          { id: 2, text: "2、客户可以选择按小单位或大单位下单。" },
          {
            id: 3,
            text: "3、客户下单时，低于起订数量或单据起订金额不能下单。",
          },
          { id: 4, text: "4、客户下单时，可输入整单备注要求。" },
          {
            id: 5,
            text: "5、客户预设售价设置、客户信用额度控制。",
          },
          {
            id: 6,
            text: "6、客户下单时，可选择授信支付或在线直接支付。",
          },
          { id: 7, text: "7、客户下单付款时，可生成代付二维码找人代付款。" },
          {
            id: 8,
            text: "8、客户下单可售数量控制。",
          },
          {
            id: 9,
            text: "9、后台管理人员调销售订单开出库单，选择商品批次打印、拣货、出库。",
          },
          {
            id: 10,
            text: "10、自动生成应收账款，并进行对账、收款。",
          },
        ],
        imgUrl: [
          { url: require("@/assets/image/ldy/yyhy/1.png") },
          { url: require("@/assets/image/ldy/yyhy/2.png") },
        ],
      },

      obj_wjyp: {
        title: "玩具、文具、体育用品批发小程序下单",
        content: [
          {
            id: 1,
            text: "1、客户每天在规定营业时间才能下单。",
          },
          {
            id: 2,
            text: "2、客户按默认商品单位（比如单位件，箱，盒、条、个），简易模式下单。",
          },
          {
            id: 3,
            text: "3、客户下单时，低于商起订数量或单据起订金额不能下单。",
          },
          { id: 4, text: "4、客户下单时，可输入整单备注要求。" },
          {
            id: 5,
            text: "5、客户下单时，可选择授信支付或在线直接支付。",
          },
          {
            id: 6,
            text: "6、客户预设售价设置、客户信用额度控制。",
          },
          { id: 7, text: "7、客户下单可售数量控制。" },
          {
            id: 8,
            text: "8、后台管理人员可以按单打印、拣货，直接调用订单出库。",
          },
          {
            id: 9,
            text: "9、自动生成应收账款，并进行对账、收款。",
          },
        ],
        imgUrl: [
          { url: require("@/assets/image/ldy/wjyp/1.png") },
          { url: require("@/assets/image/ldy/wjyp/2.png") },
          { url: require("@/assets/image/ldy/wjyp/3.png") },
          { url: require("@/assets/image/ldy/wjyp/4.png") },
        ],
      },

      obj_myfs: {
        title: "母婴类、玩具类、服饰类连锁门店配送小程序下单",
        content: [
          {
            id: 1,
            text: "1、客户每天在规定营业时间才能下单。",
          },
          {
            id: 2,
            text: "2、客户按默认商品单位（比如单位件，箱，盒、条、个），简易模式下单。",
          },
          {
            id: 3,
            text: "3、客户下单时，低于商起订数量或单据起订金额不能下单。",
          },
          { id: 4, text: "4、客户下单时，可输入整单备注要求。" },
          {
            id: 5,
            text: "5、客户下单时，可选择授信支付或在线直接支付。",
          },
          {
            id: 6,
            text: "6、客户预设售价设置、客户信用额度控制。",
          },
          { id: 7, text: "7、客户下单可售数量控制。" },
          {
            id: 8,
            text: "8、后台管理人员可以按单打印、拣货，直接调用订单出库。",
          },
          {
            id: 9,
            text: "9、自动生成应收账款，并进行对账、收款。",
          },
        ],
        imgUrl: [
          { url: require("@/assets/image/ldy/myfs/1.png") },
          { url: require("@/assets/image/ldy/myfs/2.png") },
        ],
      },

      obj_sjtx: {
        title: "手机类、配件类、IT类批发小程序下单",
        content: [
          {
            id: 1,
            text: "1、客户每天在规定营业时间才能下单。",
          },
          {
            id: 2,
            text: "2、客户按默认商品单位（比如单位件，箱，盒、条、个），简易模式下单。",
          },
          {
            id: 3,
            text: "3、客户下单时，低于商起订数量或单据起订金额不能下单。",
          },
          { id: 4, text: "4、客户下单时，可输入整单备注要求。" },
          {
            id: 5,
            text: "5、客户下单时，可选择授信支付或在线直接支付。",
          },
          {
            id: 6,
            text: "6、客户预设售价设置、客户信用额度控制。",
          },
          { id: 7, text: "7、客户下单可售数量控制。" },
          {
            id: 8,
            text: "8、后台管理人员可以按单打印、拣货，直接调用订单出库。",
          },
          {
            id: 9,
            text: "9、自动生成应收账款，并进行对账、收款。",
          },
        ],
        imgUrl: [
          { url: require("@/assets/image/ldy/sjtx/1.png") },
          { url: require("@/assets/image/ldy/sjtx/2.png") },
        ],
      },
      videoUrl: "",
    };
  },
  components: {
    moreBtn,
    customerShow,
  },
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
          "https://erpphoto.oss-cn-shenzhen.aliyuncs.com/product-shiping/%E8%BE%9B%E5%B7%B4%E7%88%BD%E8%AE%A2%E8%B4%A7%E8%A7%86%E9%A2%91%E7%AE%80%E4%BB%8B.mp4";
      }, 300);
    });
  },

  created() {
    var _hmt = _hmt || [];

if (process.client) {
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?e9157fc4cb6d185b48405dea65bd5f02";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();

}

  },
};
</script>

<style lang="less" scoped="scoped">
.s-content {
  padding-top: 100px;
  .section {
    width: 1200px;
    margin: 0 auto;

    .videoElement {
      object-fit: fill !important;
    }

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
    .shopping-box {
      .s-title-box {
        width: 100%;
        margin-bottom: 58px;
        text-align: justify;
        text-align-last: center;
        .s-title {
          font-size: 38px;
          font-weight: 800;
          color: #2c0002;
          line-height: 38px;
          margin-bottom: 16px;
        }
        .m-title {
          width: 955px;
          margin: 0 auto;
          font-size: 24px;
          font-family: "微软雅黑";
          font-weight: 400;
          color: #333333;
          line-height: 36px;
        }
      }
      .s-product-block {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 46px;
        margin-top: 46px;
        .s-img-box {
          width: 518px;
          height: 635px;
          .s-img {
            width: 100%;
            height: auto;
          }
        }
        .s-img-right {
          width: 518px;
          height: 848px;
          .s-img {
            width: 100%;
            height: auto;
          }
        }
        .s-text-box {
          width: 604px;
          .s-title {
            display: flex;
            align-items: center;
            font-size: 30px;
            font-weight: 800;
            color: #2c0002;
            margin-bottom: 50px;
            &::before {
              content: "";
              display: block;
              width: 5px;
              height: 30px;
              margin-right: 8px;
              background-color: #e62129;
            }
          }
          .s-detail-block {
            margin-bottom: 38px;
            .m-title {
              font-size: 24px;
              font-family: "微软雅黑";
              font-weight: 800;
              color: #2c0002;
            }
            .s-detail {
              text-align: justify;
              margin-top: 18px;
              font-size: 18px;
              font-family: "微软雅黑";
              font-weight: 400;
              color: #777777;
              line-height: 27px;
            }
            &:nth-last-child(1) {
              margin-bottom: 0px;
            }
          }
        }
      }
    }
  }

  .industry {
    width: 100%;
    margin: 48px auto;
    margin-top: 90px;
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
          align-items: center;
          margin-top: 26px;
          cursor: pointer;
          text-align: left;
          padding: 56px 0px;
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
            width: 288px;
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
        display: block;
        margin: 0 auto;
        margin-top: 52px;
        font-size: 18px;
        font-family: "微软雅黑";
        font-weight: 400;
        width: 156px;
        height: 46px;
      }
    }
  }
}

.customer-display {
  width: 100%;
  margin: 48px auto;
  padding: 60px 0px;
  padding-bottom: 0;
}

.customer-display-section {
  width: 700px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.big-title {
  font-size: 38px;
  font-weight: 800;
  color: #2c0002;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
