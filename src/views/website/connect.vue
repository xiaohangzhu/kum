<template>
  <div class="connect">
    <div class="website__banner connect__header">
      <div class="website__banner_main"><h3 v-html="t('website.menu4').replace('<br>', '')"></h3> <span>CONTACT US</span></div>
    </div>
    <div class="connect__content">
      <div class="cate">
        <dl class="cate_col">
          <dt class="name">香港辦事處</dt>
          <dd class="label">地址</dd>
          <dd class="value">香港中環皇后大道中1號17樓</dd>
          <dd class="label">電話</dd>
          <dd class="value">+123 4567 0000</dd>
          <dd class="label">電郵</dd>
          <dd class="value">info@kum.com</dd>
        </dl>
        <dl class="cate_col">
          <dt class="name">新加坡辦事處</dt>
          <dd class="label">地址</dd>
          <dd class="value">新加坡獅城大道123號</dd>
          <dd class="label">電話</dd>
          <dd class="value">+123 4567 0000</dd>
          <dd class="label">電郵</dd>
          <dd class="value">info@kum.com</dd>
        </dl>
        <dl class="cate_col">
          <dt class="name">北京辦事處</dt>
          <dd class="label">地址</dd>
          <dd class="value">北京市鼓樓大街13號</dd>
          <dd class="label">電話</dd>
          <dd class="value">+123 4567 0000</dd>
          <dd class="label">電郵</dd>
          <dd class="value">info@kum.com</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();
</script>
<style lang="less" scoped>
.connect {
  .connect__header {
    background-image: url(/@/assets/images/website/banner_6.png);
  }
  .connect__content {
    background: url(/@/assets/images/website/banner_9.png) no-repeat center center;
    background-size: cover;
    padding: 88px 0 158px;
    .cate {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;

        width: 1093px;
        background: url(/@/assets/images/website/dizhi_bg.png) no-repeat left top;
        background-size: 100% 100%;
        margin: 0 auto;

       
     
    }
    .cate_col {
      margin-bottom: 0;
      overflow: hidden;
      text-align: center;
      padding-top: 42px;
      .name {
        border-bottom: 1px solid #000000;
        font-weight: 500;
        font-size: 24px;
        padding-bottom: 24px;
        display: block;
      }
      .label {
        background: #7a0808;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        display: inline-block;
        padding: 0 20px;
        margin: 20px 0 25px;
      }
      .value {
        font-weight: 300;
        font-size: 16px;
        color: #000000;
      }
    }
  }
}
</style>
