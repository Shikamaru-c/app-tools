<template>
  <div class="my">

    <div class="user-info">
      <template v-if="login">
        <div class="user-avatar">
          <img width="50" height="50" src="@/assets/avatar.png" alt="">
        </div>
        <div class="user-data">
          <div class="user-name">TEST-NAME</div>
          <div class="user-id">TEST-ID</div>
        </div>
      </template>

      <template v-else>
        <div class="user-avatar">
          <img width="50" height="50" src="@/assets/avatar.png" alt="">
        </div>
        <div class="user-data">
          <router-link to="/user/login" class="login" tag="div">登陆</router-link>
          <router-link to="/user/signin" class="signin" tag="div">注册</router-link>
        </div>
      </template>
    </div>

    <div class="user-options">
      <router-link to="/my/suggest" tag="div">建议</router-link>
      <router-link to="/my/about" tag="div">关于</router-link>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      login: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .my {
    margin: 0 10px;
    .user-info {
      display: flex;
      padding: 25px 10px;
      border-bottom: 1px solid #ccc;
      .user-avatar {
        font-size: 0;
        img {
          height: 60px;
          width: 60px;
          margin-right: 30px;
        }
      }
      .user-data {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 3px 0;
        .login, .signin {
          position: relative;
          width: 100%;
          line-height: 25px;
          font-size: 9px;
          text-align: center;
          border-radius: 3px;
          background: #f0f0f0;
        }
      }
    }
    .user-options {
      margin-top: 30px;
      div {
        padding-left: 10px;
        margin-bottom: 10px;
        line-height: 40px;
        border-radius: 3px;
        background: #f0f0f0;
      }
    }
  }
</style>
