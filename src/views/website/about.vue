<template>
  <div class="about">
    <div class="website__banner bg1">
      <div class="website__banner_main"><h3>企业背景</h3> <span>business background</span></div>
    </div>

    <div>
      <img :src="qiye_1" alt="">
      <img :src="qiye_2" alt="">
      <img :src="lishi_1" alt="">
      <img :src="lishi_2" alt="">
      <img :src="linian_1" alt="">
      <img :src="linian_2" alt="">
    </div>

    <div class="about_main1">

      <div class="qy_name"></div>
      <div class="qy_map">
        <img :src="ditu" alt="">
      </div>

    </div>

  </div>
</template>


<script  lang="ts" setup>
import qiye_1 from '/@/assets/images/website/qiye_1.png';
import qiye_2 from '/@/assets/images/website/qiye_2.png';
import lishi_1 from '/@/assets/images/website/lishi_1.png';
import lishi_2 from '/@/assets/images/website/lishi_2.png';
import linian_1 from '/@/assets/images/website/linian_1.png';
import linian_2 from '/@/assets/images/website/linian_2.png';
import ditu from '/@/assets/images/website/ditu.png';
</script>

<style lang="less" scoped>
.about {
  .website__banner_main {
    --color--: #fff;
  }

  .bg1 {
    background: url(/@/assets/images/website/qy-bg.png) no-repeat center center;
  }

  .about_main1 {
    .qy_name {
      width: 100%;
      height: 475px;
      background: url(/@/assets/images/website/qy-bg2.png) no-repeat center center;
      background-size: cover;
    }
    .qy_map {
      width: 100%;
    }
  }

}
</style>
