<template>
  <div id="app">
    <top-bar></top-bar>
    <el-row :gutter="20">
      <el-col :span="5">
            <aside-menu id="asideMenu" name="mune"></aside-menu>
      </el-col>
      <el-col :span="19">
            <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped >
#app {
  font-family: '微软雅黑', "Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: calc(100% - 20px);
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
