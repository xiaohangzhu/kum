<template>
  <div class="website">
    <!-- web {{ t('okText') }} -->
    <header class="website__header" ref="stickyElement">
      <img :src="logo" alt="logo" class="logo" @click="goHome" />

      <div class="header_right">
        <ul class="menu">
          <li class="menu__item" :class="currentMenu === 'about' && 'active'" @click="toggleMenu('about')" v-html="t('website.menu1')"></li>
          <li class="menu__item" :class="currentMenu === 'business' && 'active'" @click="toggleMenu('business')">我們的<br />業務</li>
          <li class="menu__item" :class="currentMenu === 'team' && 'active'" @click="toggleMenu('team')">我們的<br />團隊</li>
          <li class="menu__item" :class="currentMenu === 'connect' && 'active'" @click="toggleMenu('connect')">聯絡<br />我們</li>
        </ul>
        <div class="locale">
          <span class="locale__title">VIP 客户管理系统</span>
          <span :class="['locale__item', currentLocale === 'en' && 'active']" @click="toggleLocale('en')">En</span>
          <span class="locale__item">/</span>
          <span :class="['locale__item', currentLocale === 'zh_CN' && 'active']" @click="toggleLocale('zh_CN')">简</span>
        </div>
      </div>
    </header>

    <RouterView />
    <footer class="website__footer">
      <img :src="logo" alt="logo" />
      <span>© 2024 KUM INTERNATIONAL GROUP LTD. ALL RIGHTS RESERVED.</span>
    </footer>
  </div>
</template>

<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useLocale } from '/@/locales/useLocale';
  import { router } from '/@/router';
  import { useRoute } from 'vue-router';





  const { changeLocale, getLocale } = useLocale();

  import logo from '/@/assets/images/website/logo.png';
  import { ref, unref, watchEffect, watch, onMounted, onUnmounted } from 'vue';


  const stickyElement = ref(null);

  const handleScroll = () => {
    console.log('scroll')
      const element = stickyElement.value;
      if (element) {
        const rect = element.getBoundingClientRect();
        console.log(rect.top, 'rect')
        if (rect.top <= 0) {
          element.style.position = 'fixed';
          element.style.top = '0';
          element.style.width = '100%'; // 确保宽度与容器一致
        } else {
          element.style.position = 'relative';
          element.style.top = 'initial';
          element.style.width = 'initial';
        }
      }
    };

    onMounted(() => {
      const container = stickyElement.value?.parentElement;
      console.log(container, stickyElement.value, 'stickyElement')
      window.addEventListener('scroll', handleScroll);
      
    });
 
    onUnmounted(() => {
      const container = stickyElement.value?.parentElement;
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    });






  const currentMenu = ref('home');
  const currentLocale = ref('');
  const { t } = useI18n();

  const route = useRoute();

  watch(() => route.name, (newName) => {
    console.log(newName)
    currentMenu.value = String(newName ?? '')
  }, {
    deep: true, immediate: true
  })
  watchEffect(() => {
    currentLocale.value = unref(getLocale);
  });

  const toggleMenu = (str) => {
    currentMenu.value = str;
    router.push({
      name: str,
    });
  };
  const toggleLocale = async (str) => {
    currentLocale.value = str;

    await changeLocale(str);

    location.reload();

    console.log(unref(getLocale));
  };
  const goHome = () => {
    router.push({
      name: 'home',
    });
  };
</script>
<style lang="less">
  .website {
    background: #f2f2f2;
  }
  .website__banner {
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 605px;
    position: relative;
    .website__banner_main {
      position: absolute;
      width: 517px;
      text-align: center;
      top: 275px;
      left: 50%;
      transform: translateX(-50%);
      --color--: #000;
      @color: var(--color--, #000);
      > h3 {
        font-weight: bold;
        font-size: 54px;
        color: @color;
        border-bottom: 1px solid @color;
        margin-bottom: 26px;
        padding-bottom: 22px;
      }
      > span {
        font-weight: bold;
        font-size: 24px;
        color: @color;
      }
    }
  }
  @media (max-width: @screen-md) {
    .website {
      background: #ccc;
    }
  }
</style>
<style lang="less" scoped>
  .website {
    width: 100%;
    min-height: 100%;
    position: relative;
    box-sizing: border-box;

    .website__header {
      background: url(/@/assets/images/website/daohang_1.png) no-repeat left top;
      background-size: 100% 100%;
      height: 89px;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      padding: 0 100px;
      z-index: 11;
      .logo {
        cursor: pointer;
      }

      .header_right {
        line-height: 1;
        font-size: 18px;
        color: #ffffff;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        height: 100%;
        .menu {
          display: flex;
          height: 100%;
          margin-bottom: 0;
          .menu__item {
            width: 104px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            text-align: center;
            line-height: 1.2;
            &.active {
              background: #711711;
            }
          }
        }
        .locale {
          padding-left: 72px;
          .locale__title {
            color: #95352f;
            border-right: 1px solid #95352f;
            padding-right: 15px;
            margin-right: 15px;
            height: 26px;
          }
          .locale__item {
            width: 26px;
            height: 26px;
            display: inline-block;
            text-align: center;
            line-height: 26px;
            cursor: pointer;
            &.active {
              background: #95352f;
            }
          }
        }
      }
    }

    .website__footer {
      // position: absolute;
      // left: 0;
      // bottom: 0;
      width: 100%;
      height: 173px;
      background: url(/@/assets/images/website/daohang_2.png) no-repeat left top;
      background-size: 100% 100%;
      font-weight: 400;
      font-size: 12px;
      color: #ffffff;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 0 100px;
    }
  }
</style>
