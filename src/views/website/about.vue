<template>
  <div class="about">
    <div class="website__banner bg1">
      <div class="website__banner_main"><h3>企业背景</h3> <span>business background</span></div>
    </div>

    <div class="menu">
      <div @click="change(1)" :class="['menu__item', current === 1 && 'active']">
        <img :src="current === 1 ? qiye_2: qiye_1" alt="" class="img" />
        <span class="name">企业背景</span>
      </div>
      <div @click="change(2)" :class="['menu__item', current === 2 && 'active']">
        <img :src="current === 2 ? lishi_2: lishi_1" alt="" class="img" />
        <span class="name">发展历史</span>
      </div>
      <div @click="change(3)" :class="['menu__item', current === 3 && 'active']">
        <img :src="current === 3 ? linian_2: linian_1" alt="" class="img" />
        <span class="name">经营理念</span>
      </div>
    </div>

    <div class="about_main1" v-if="current === 1">
      <div class="lishi_name">
        <div class="lishi_name_desc">Origin of Creation</div>
        <div class="lishi_name_main"><span>創始</span>由来</div>
      </div>

      <div class="qy_name">
        <img src="/@/assets/images/website/k_bg.png" alt="">
        <img src="/@/assets/images/website/u_bg.png" alt="">
        <img src="/@/assets/images/website/m_bg.png" alt="">
      </div>
      <div class="qy_map">
        <img :src="ditu" alt="" />
      </div>
    </div>

    <div v-if="current === 2" class="about_main2">

      <div class="lishi__time">

        <ul>
          <li>1995</li>
          <li>KUM成立時間</li>
          <li>29余年</li>
          <li>深耕保險經紀行業</li>
          <li>FB1380</li>
          <li>保監局牌照編號</li>
        </ul>

        <img src="/@/assets/images/website/lishi_tupian.png" alt="">

      </div>

      <ol>
        <li>香港老牌保險經紀行，合法許可銷售保險類金融產品的持牌法團。</li>
        <li>
          本港同業少數滿足中央政府與香港特區政府簽署的《內地與香港關於建立更緊密經貿關係的安排》
          (CEPA, Closer EconomicPartnership Agreement)框架協議要求的優良信用經紀公司。
        </li>
        <li>超29年保險服務經營，穩健經營一般保險、長期保險、及政府強積金保險業務。</li>
      </ol>

      <img src="/@/assets/images/website/lishi_bg.png" alt="">

    </div>
  </div>
</template>


<script  lang="ts" setup>
import qiye_1 from '/@/assets/images/website/1-1.png';
import qiye_2 from '/@/assets/images/website/1.png';
import lishi_1 from '/@/assets/images/website/2-2.png';
import lishi_2 from '/@/assets/images/website/2.png';
import linian_1 from '/@/assets/images/website/3-3.png';
import linian_2 from '/@/assets/images/website/3.png';
import ditu from '/@/assets/images/website/ditu.png';
import {ref} from 'vue'
const current = ref(1)
const change = (num) => {
  current.value = num
}
</script>

<style lang="less" scoped>
.about {
  .website__banner_main {
    --color--: #fff;
  }

  .bg1 {
    background-image: url(/@/assets/images/website/qy-bg.png);
  }

  .menu {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    margin-bottom: 74px;
    .menu__item {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all .2s;
      margin-left: 66px;
      color: #711711;
      font-size: 20px;
      width: 192px;
      height: 92px;
      background: #ffffff;
      box-shadow: 0px 1px 13px 0px rgba(102, 14, 33, 0.31);
      .img {
        width: 44px;
      }
      &:nth-of-type(1) {
        margin-left: 0;
      }
      &.active {
        transform: scale(1.4);
        background: #711711;
        color: #fff;
      }
    }
  }

  .about_main1 {
    .lishi_name {
      text-align: center;
      margin-bottom: 82px;
      .lishi_name_desc {
        font-weight: bold;
        font-size: 39px;
        line-height: 40px;
        color: #9a2841;
        opacity: 0.14;
        margin-bottom: -24px;
      }
      .lishi_name_main {
        color: #373435;
        font-size: 30px;
        width: 256px;
        border-bottom: 2px solid #9A2841;
        display: inline-block;
        > span {
          color: #9A2841;
        }
      }
    }
    .qy_name {
      width: 100%;
      height: 475px;
      background: url(/@/assets/images/website/qy-bg2.png) no-repeat center center;
      background-size: cover;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      > img {
        margin-left: 70px;
        &:nth-of-type(1) {
          margin-left: 0;
        }
      }
    }
    .qy_map {
      width: 100%;
    }
  }

  .about_main2 {

  }
}
</style>
