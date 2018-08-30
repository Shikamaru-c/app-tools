<template>
  <div class="my">

    <div class="user-info">
      <div class="user-avatar">
        <img width="50" height="50" src="../assets/avatar.png" alt="">
      </div>
      <div class="user-data">
        <div class="user-name">TEST-NAME</div>
        <div class="user-id">TEST-ID</div>
      </div>
    </div>

    <div class="user-options">
      <div>button1</div>
      <div>button2</div>
      <div>button3</div>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .my {
    margin: 0 10px;
    .user-info {
      display: flex;
      padding: 25px 10px;
      border-bottom: 1px solid #ccc;
      .user-avatar img {
        height: 50px;
        width: 50px;
        margin-right: 30px;
      }
      .user-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 3px 0;
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
