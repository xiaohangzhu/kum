<template>
  <div class="website">
    <!-- web {{ t('okText') }} -->
    <header class="website__header">

    </header>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  const { t } = useI18n();
</script>
<style lang="less" scoped>
  .website {
    width: 100%;
    min-height: 100%;
    border: 1px solid red;
    background: url(/@/assets/images/website/shouye_bg.jpg) no-repeat center center;
    background-size: cover;
    position: relative;


    .website__header {
      background: url(/@/assets/images/website/daohang_1.png)  no-repeat left top;
      background-size: 100% 100%;
      height: 89px;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;

    }

  }

  @media (max-width: @screen-md) {
    .website {
      // background: #ccc;
    }
  }
</style>
