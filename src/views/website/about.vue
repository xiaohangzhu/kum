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
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 99px;
  }
}
</style>
