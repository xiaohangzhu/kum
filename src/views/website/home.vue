<template>
  <div class="about">
    <img :src="logo" alt="">
  </div>
</template>


<script  lang="ts" setup>
  import logo from '/@/assets/images/website/logo_r.png'
</script>

<style lang="less" scoped>
.about {
  height: calc(100vh - 173px);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
    background: url(/@/assets/images/website/shouye_bg.jpg) no-repeat center center;
    background-size: cover;
  img {
    margin-bottom: 99px;
  }
}
</style>
