<template>
  <div class="login_container">
    <div class="login_content">
      <div class="title">Login</div>
      <!-- <el-select v-model="areaValue" placeholder="请选择">
        <el-option
          v-for="item in areaCodes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areaValue: 'CN',
      // 电话地域信息
      areaCodes: [
        {
          value: 'CN',
          label: '中国 +86',
        },
        {
          value: 'RU',
          label: '俄罗斯 +7',
        },
        {
          value: 'JP',
          label: '日本 +81',
        },
        {
          value: 'US',
          label: '美国 +1',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dedede;

  .login_content {
    width: 500px;
    height: 600px;
    border-radius: 20px;
    padding: 20px 30px;
    border-radius: 15px;
    box-shadow: 23px 23px 46px #bdbdbd, -23px -23px 46px #ffffff;

    .title {
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>
