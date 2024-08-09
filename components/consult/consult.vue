<template>
  <div class="content">
    <div class="bottom-block">
		
      <transition name="fade">
        <div v-if="decideTop" @click="topScroll" :class="['top']">
          <span class="triangle"></span>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    scrollPop: Number,
  },
  computed: {
    decideTop() {
      return this.scrollPop >= 150;
    },
  },
  methods: {
    topScroll() {
      window.scrollTo(0, 0);
    },

  },
};
</script>

<style lang="less" scoped="scoped">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.content {
  .bottom-block {
    position: fixed;
    right: 30px;
    bottom: 100px;
    z-index: 100;
    .top {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      cursor: pointer;
      border: 1px solid #eee;
      box-shadow: 0px 0 10px rgba(0, 0, 0, 0.1);
      &::after {
        content: "";
        display: block;
        width: 10px;
        height: 2px;
        background-color: #870006;
        border-radius: 1px;
        transform: translateX(-1.5px) rotate(45deg);
        transition: 0.2s all;
      }
      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 2px;
        border-radius: 1px;
        background-color: #870006;
        transform: translateX(1.5px) rotate(-45deg);
        transition: 0.2s all;
      }
      &:hover::after {
        background-color: #e62129;
      }
      &:hover::before {
        background-color: #e62129;
      }
    }
  }
}
</style>
