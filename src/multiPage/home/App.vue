<template>
    <div class="main" >1111</div>
    <ConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>

</template>

<script lang="ts" setup>

import { AppProvider } from '/@/components/Application';
import { useLocale } from '/@/locales/useLocale';


const { getAntdLocale } = useLocale();


</script>
<style scoped lang="less">
.main {
    background: @content-bg;
}

</style>