<template>
  <div class="team">
    <div class="website__banner team__header"> 
      <div class="website__banner_main"><h3>我们的团队</h3> <span>OUR TEAM</span></div>
    </div>

    <div class="team__content">
      <div class="team__content_user">
        <div class="user__img">
          <img src="https://lioner.com/wp-content/uploads/2021/09/Picture1-e1631452483365.jpg" alt="">
        </div>
        <div class="user__info">
          <div class="user__info_title"><span>David</span><span>陳大偉</span><span>创始管理合伙人</span></div>
          <div class="user__info_content">
            <p>陈大伟先生拥有新加坡国立大学工商管理硕士学位，有超过20年丰富的企业创建、运营管理、资本运作经验。2010年采用境外并购基金模</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
  .team {
    min-height: 100vh;
    background: #fff;
    .team__header {
      background: url(/@/assets/images/website/banner_7.png) no-repeat center center;
    }
    .team__content {
      width: 1000px;
      margin: 0 auto;
      padding: 88px 0 50px;
    }
    .team__content_user {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      .user__img {
        width: 260px;
        height: 260px;
        background: url(/@/assets/images/website/touxiang.png) no-repeat center center;
        background-size: 100% 100%;
        margin-right: 60px;
        img {
          width: 215px;
          height: 242px;
          margin-left: 17px;
          object-fit: cover;
        }
      }
      .user__info_title {
        position: relative;
        padding-left: 30px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        > span {
          margin-right: 20px;
          &:nth-of-type(1) {
            font-size: 48px;
            color: #000000;
          }
          &:nth-of-type(2) {
            font-weight: 500;
            font-size: 29px;
            color: #7A0808;
          }
          &:nth-of-type(3) {
            color: #FFFFFF;
            font-weight: 500;
            font-size: 17px;
            background: #7a0808;
            display: inline-block;
            padding: 6px 16px;
          }
        }
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 13px;
          height: 32px;
          background: #7a0808;
          transform: translateY(-50%);
        }
      }
      .user__info_content {
        font-size: 14px;
        color: #000000;
      }
    }
  }
</style>
