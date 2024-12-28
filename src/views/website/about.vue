<template>
  <div class="about">
    <div class="website__banner bg1">
      <div class="website__banner_main">
        <h3>{{ [null, t('website.tab1'), t('website.tab2'), t('website.tab3')][current] }}</h3>
        <span>{{ [null, 'Enterprise background', 'Development history', 'Business philosophy'][current] }}</span></div
      >
    </div>

    <div class="menu">
      <div @click="change(1)" :class="['menu__item', current === 1 && 'active']">
        <img :src="current === 1 ? qiye_2 : qiye_1" alt="" class="img" />
        <span class="name">{{ t('website.tab1') }}</span>
      </div>
      <div @click="change(2)" :class="['menu__item', current === 2 && 'active']">
        <img :src="current === 2 ? lishi_2 : lishi_1" alt="" class="img" />
        <span class="name">{{ t('website.tab2') }}</span>
      </div>
      <div @click="change(3)" :class="['menu__item', current === 3 && 'active']">
        <img :src="current === 3 ? linian_2 : linian_1" alt="" class="img" />
        <span class="name">{{ t('website.tab3') }}</span>
      </div>
    </div>

    <div class="about_main1" v-if="current === 1">
      <div class="lishi_name">
        <div class="lishi_name_desc">Origin of Creation</div>
        <div class="lishi_name_main" v-html="t('website.about1Title')"></div>
      </div>

      <div class="qy_name">
        <img src="/@/assets/images/website/k_bg.png" alt="" />
        <img src="/@/assets/images/website/u_bg.png" alt="" />
        <img src="/@/assets/images/website/m_bg.png" alt="" />
      </div>
      <div class="qy_map">
        <img :src="ditu" alt="" />
      </div>
    </div>

    <div v-if="current === 2" class="about_main2">
      <div class="about_main2_content">
        <div class="lishi__time">
          <ul class="lishi__time_progress">
            <li>1995</li>
            <li>{{ t('website.about2Title') }}</li>
            <li>29余年</li>
            <li>{{ t('website.about2Title2') }}</li>
            <li>FB1380</li>
            <li>{{ t('website.about2Title3') }}</li>
          </ul>

          <img src="/@/assets/images/website/lishi_tupian.png" alt="" />
        </div>

        <ol class="lishi__desc">
          <li>{{ t('website.about2desc1') }}</li>
          <li>
            {{ t('website.about2desc2') }}
          </li>
          <li>{{ t('website.about2desc3') }}</li>
        </ol>
      </div>

      <img src="/@/assets/images/website/lishi_bg.png" alt="" />
    </div>

    <div v-if="current === 3" class="about_main3">
      <ul class="idea">
        <li class="idea__item">
          <h4 class="idea__item_title" v-html="t('website.about3tab1')"></h4>
          <div class="idea__item_desc">
            <div v-html="t('website.about3desc1')">  </div>
          </div>
        </li>
        <li class="idea__item">
          <h4 class="idea__item_title" v-html="t('website.about3tab2')"></h4>
          <div class="idea__item_desc idea__item_desc2">
            <div v-html="t('website.about3desc2')"> </div>
          </div>
        </li>
        <li class="idea__item">
          <h4 class="idea__item_title" v-html="t('website.about3tab3')"></h4>
          <div class="idea__item_desc idea__item_desc3">
            <div v-html="t('website.about3desc3')">  </div>
          </div>
        </li>
        <li class="idea__item">
          <h4 class="idea__item_title" v-html="t('website.about3tab4')"></h4>
          <div class="idea__item_desc idea__item_desc4">
            <div v-html="t('website.about3desc4')">
              
              </div
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import qiye_1 from '/@/assets/images/website/1-1.png';
import qiye_2 from '/@/assets/images/website/1.png';
import lishi_1 from '/@/assets/images/website/2-2.png';
import lishi_2 from '/@/assets/images/website/2.png';
import linian_1 from '/@/assets/images/website/3-3.png';
import linian_2 from '/@/assets/images/website/3.png';
import ditu from '/@/assets/images/website/ditu.png';
import { ref } from 'vue';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

console.log(t('website.tab2', 'en'));
const current = ref(1);
const change = (num) => {
  current.value = num;
};
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
      text-align: center;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
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
        border-bottom: 2px solid #9a2841;
        display: inline-block;
        :deep(span) {
          color: #9a2841;
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
    width: 100%;

    .about_main2_content {
      width: 1000px;
      margin: auto;
    }
    .lishi__time {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      overflow: hidden;
      > img {
        flex: 1;
      }
      .lishi__time_progress {
        margin-right: 40px;
        text-align: center;
        > li {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
          &:nth-of-type(2n-1) {
            font-weight: bold;
            font-size: 55px;
            color: #7a0808;
          }
          &:nth-of-type(2n) {
            font-weight: 500;
            font-size: 20px;
            color: #ffffff;
            min-height: 40px;
            // line-height: 40px;
            padding: 0 10px;
            background: #000000;
          }
        }
      }
    }
    .lishi__desc {
      font-weight: 300;
      font-size: 18px;
      color: #191818;
      line-height: 48px;
      margin: 80px 0;
      list-style: none;
      li {
        padding-left: 22px;
        position: relative;
        &::before {
          position: absolute;
          content: '';
          width: 12px;
          height: 12px;
          background: #7a0808;
          left: 0;
          top: 24px;
          transform: translateY(-50%);
        }
      }
    }
  }

  .about_main3 {
    background: url(/@/assets/images/website/banner_3.png) no-repeat center center;
    background-size: cover;
    height: 814px;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    .idea {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-between;
      width: 1000px;
      .idea__item {
        &:nth-of-type(-n + 2) {
          margin-bottom: 90px;
        }
        .idea__item_title {
          font-weight: bold;
          font-size: 34px;
          color: #000000;
          position: relative;
          padding-left: 32px;
          &::after {
            position: absolute;
            content: '';
            width: 10px;
            height: 30px;
            background: #000;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          > span {
            color: #7a0808;
          }
        }
        .idea__item_desc {
          background: url(/@/assets/images/website/fuwu_bg.png) no-repeat center center;
          background-size: 100% 100%;
          width: 410px;
          height: 117px;
          padding: 0 100px 0 30px;
          box-sizing: border-box;
          font-size: 17px;
         color: #000;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          transform: translateX(-20px);
          :deep(em) {
            font-style: normal;
            color: #7a0808;
          }
          &.idea__item_desc2 {
            background: url(/@/assets/images/website/baozhang_bg.png) no-repeat center center;
            background-size: 100% 100%;
          }
          &.idea__item_desc3 {
            background: url(/@/assets/images/website/zichan_bg.png) no-repeat center center;
            background-size: 100% 100%;
          }
          &.idea__item_desc4{
            background: url(/@/assets/images/website/caifu_bg.png) no-repeat center center;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
</style>
