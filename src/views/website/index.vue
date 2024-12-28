<template>
  <div class="website" :class="currentMenu === 'home' && 'website-home'">
    <!-- web {{ t('okText') }} -->
    <header class="website__header" ref="stickyElement">
      <img :src="logo" alt="logo" class="logo" @click="goHome" />

      <div class="header_right">
        <ul class="menu">
          <li class="menu__item" :class="currentMenu === 'about' && 'active'" @click="toggleMenu('about')" v-html="t('website.menu1')"></li>
          <li class="menu__item" :class="currentMenu === 'business' && 'active'" @click="toggleMenu('business')" v-html="t('website.menu2')"></li>
          <li class="menu__item" :class="currentMenu === 'team' && 'active'" @click="toggleMenu('team')" v-html="t('website.menu3')"></li>
          <li class="menu__item" :class="currentMenu === 'connect' && 'active'" @click="toggleMenu('connect')" v-html="t('website.menu4')"></li>
        </ul>
        <div class="locale">
          <span class="locale__title" @click="toOut">VIP {{ t('website.out') }}</span>
          <span :class="['locale__item', currentLocale === 'en' && 'active']" @click="toggleLocale('en')">En</span>
          <span class="locale__item">/</span>
          <span :class="['locale__item', currentLocale === 'zh_CN' && 'active']" @click="toggleLocale('zh_CN')">简</span>
          <span class="locale__item">/</span>
          <span :class="['locale__item', currentLocale === 'zh_TC' && 'active']" @click="toggleLocale('zh_TC')">繁</span>
        </div>
      </div>
      <img src="/@/assets/images/website/daohang.png" class="daohang" @click="changeMenu" alt="" />
      <Transition name="collapse">
        <ul class="menu-phone" v-if="menuPhone">
          <li class="menu__item" :class="currentMenu === 'about' && 'active'" @click="toggleMenu('about')" v-html="t('website.menu1').replace('<br>', '')"></li>
          <li class="menu__item" :class="currentMenu === 'business' && 'active'" @click="toggleMenu('business')" v-html="t('website.menu2').replace('<br>', '')"></li>
          <li class="menu__item" :class="currentMenu === 'team' && 'active'" @click="toggleMenu('team')" v-html="t('website.menu3').replace('<br>', '')"></li>
          <li class="menu__item" :class="currentMenu === 'connect' && 'active'" @click="toggleMenu('connect')" v-html="t('website.menu4').replace('<br>', '')"></li>
          <li class="menu__item" @click="toOut2">VIP {{ t('website.out') }}</li>
          <li class="menu__item" @click="toggleLocale('en')">En</li>
          <li class="menu__item" @click="toggleLocale('zh_CN')">简</li>
          <li class="menu__item" @click="toggleLocale('zh_TC')">繁</li>
        </ul>
      </Transition>
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

const currentMenu = ref('home');
const currentLocale = ref('');
const menuPhone = ref(false);

const changeMenu = () => {
  menuPhone.value = !menuPhone.value;
};

const { t } = useI18n();

const route = useRoute();

const stickyElement: any = ref(null);

const toOut = () => {
  window.open('https://ansump0a.cbit.zhibaocloud.com', "_blank");
  changeMenu()
}

const toOut2 = () => {
  window.open('https://ansump0a-jn.cbit.zhibaocloud.com', "_blank");
  changeMenu()
}

const handleScroll = (e) => {
  const scrollY = e.target.scrollTop;
  if (scrollY > 0) {
    stickyElement.value.classList.add('sticky');
  } else {
    stickyElement.value.classList.remove('sticky');
  }
};

onMounted(() => {
  const pEle = stickyElement.value?.parentElement;
  pEle?.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  const pEle = stickyElement.value?.parentElement;
  pEle?.removeEventListener('scroll', handleScroll);
});

watch(
  () => route.name,
  (newName) => {
    console.log(newName);
    currentMenu.value = String(newName ?? '');
  },
  {
    deep: true,
    immediate: true,
  }
);
watchEffect(() => {
  currentLocale.value = unref(getLocale);
});

const toggleMenu = (str) => {
  currentMenu.value = str;
  // if () {}
  console.log(window.innerWidth);
  if (window.innerWidth <= 768) {
    setTimeout(() => {
      changeMenu();
    }, 300);
  }

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
@import url('./index.less');
.website {
  background: #f2f2f2;
}
.daohang {
  display: none;
}
.menu-phone {
  position: absolute;
  left: 0;
  width: 100%;
  background: rgba(13, 13, 13, 0.8);
  color: #ffffff;
  max-height: 400px;
  overflow: hidden;
  .menu__item {
    text-align: center;
    font-size: 20px;
    padding: 10px 0;
    &:hover {
      background: #711711;
    }
  }
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
</style>
<style lang="less" scoped>
// @import url(./index.less);

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
}

.website {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  box-sizing: border-box;
  &.website-home {
    overflow: hidden;
  }

  .website__header {
    background: url(/@/assets/images/website/daohang_1.png) no-repeat left top;
    background-size: 100% 100%;
    height: 89px;
    // .px-rem(height, 89);
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    z-index: 11;
    &.sticky {
      // position: sticky;
      position: fixed;
    }
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
          cursor: pointer;
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
