<template>
  <div class="business">
    <div class="website__banner business__top">
        <div class="website__banner_main"><h3 v-html="t('website.menu2').replace('<br>', '')"></h3> <span>OUR BUSINESS</span></div>
      </div>
    <div class="business__area">
      
      <div class="banner1">
        <h3 class="title" v-html="t('website.bt1')"></h3>

        <ul class="long_business">
          <li class="long_business_item">{{ t('website.bdesc1') }}</li>
          <li class="long_business_item">{{ t('website.bdesc2') }}</li>
          <li class="long_business_item">{{ t('website.bdesc3') }}</li>
          <li class="long_business_item">{{ t('website.bdesc4') }}</li>
          <li class="long_business_item">{{ t('website.bdesc5') }}</li>
          <li class="long_business_item">{{ t('website.bdesc6') }}</li>
        </ul>
      </div>
      <div class="banner2">
        <div class="right">
          <h3 class="title" v-html="t('website.bt2')"></h3>

          <ul class="long_business">
            <li class="long_business_item">{{ t('website.bdesc7') }} </li>
            <li class="long_business_item">{{ t('website.bdesc8') }}</li>
            <li class="long_business_item">{{ t('website.bdesc9') }}</li>
          </ul>
        </div>
      </div>
      <h3 class="title baoxian" v-html="t('website.bt3')"></h3>
    </div>
    <img :src="img1" alt="" class="flow" />
  </div>
</template>
<script lang="ts" setup>
import img1 from '/@/assets/images/website/baoxian_3.png';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();
</script>
<style lang="less" scoped>
.business {
  .business__top {
    background-image: url(/@/assets/images/website/banner_8.png);
  }
  .business__area {
    width: 1000px;
    margin: 0 auto;
  }
  .banner1 {
    background: url(/@/assets/images/website/baoxian.png) no-repeat center center;
    background-size: 100% auto;
    width: 100%;
    min-height: 435px;
    margin: 90px auto;
    padding: 50px 0 0 88px;
  }
  .long_business {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 50%;
    padding: 20px 88px 0 0;
    .long_business_item {
      padding: 14px 40px;
      background: #711711;
      font-size: 22px;
      color: #ffffff;
      font-weight: 500;
      display: inline-block;
      margin-bottom: 32px;
      &:nth-of-type(2n) {
        background: #000000;
      }
    }
  }
  .banner2 {
    background: url(/@/assets/images/website/baoxian_2.png) no-repeat center center;
    background-size: 100% auto;
    // width: 1062px;
    width: 100%;
    min-height: 435px;
    margin: 0 auto 63px;
    .right {
      margin-left: 50%;
      padding: 50px 0 0 50px;
    }

    .long_business {
      width: 100%;
      padding: 20px 50px 0 0;
      .long_business_item {
        &:nth-of-type(1) {
          background: #000000;
        }
        &:nth-of-type(2) {
          background: #711711;
        }
      }
    }
  }
  .flow {
    width: 100%;
    object-fit: cover;
  }
  .title {
    padding-left: 28px;
    // height: 45px;
    line-height: 45px;
    font-size: 36px;
    color: #000000;
    position: relative;
    span {
      color: #7a0808;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 10px;
      background: #000000;
    }
  }
  .baoxian {
    margin-left: 88px;
  }
}
</style>
