<!-- 菜单组件 -->
<template>
    <el-col :span="8">
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" >
	    <el-menu-item v-for ='(item, key) in muneList' :key="item" :index="item.value" :class="item.select ? 'el-menu-hover' : '' " @click="getMune(item)"><router-link :to="item.url">{{item.text}}</router-link></el-menu-item>
    </el-menu>
  </el-col>
</template>
 

<script type="text/javascript">
export default{
	data () {
		    return {
		      muneList:[
            {text:'首页',value:1,url:'/home',select:true},
            {text:'中央空调系统',url:'/centralAir',value:2,select:false},
            {text:'冷机群控系统',url:'/coldMachine',value:3,select:false},
            {text:'用户VRV空调',url:'/uservav',value:4,select:false},
            {text:'新风系统',url:'/freshAirSys',value:5,select:false},
            {text:'给排水系统',url:'/dewateringSys',value:6,select:false},
            {text:'变配电系统',url:'/distributionSys',value:7,select:false},
            {text:'智能照明系统',url:'/lightingSys',value:8,select:false},
            {text:'视频监控系统',url:'/monitoringSys',value:9,select:false},
            {text:'消防报警系统',url:'/fireControlSys',value:10,select:false},
            {text:'能耗分析系统',url:'/energyConSys',value:11,select:false},
            {text:'电梯系统',url:'/elevatorSys',value:12,select:false},
          ]
		    }
		},
    methods: {
      getMune (value) {
         var that = this;
         for (var i = 0; i < that.muneList.length; i++) {
           that.muneList[i].select = false;
         }
         value.select = !value.select;
      }
    }
}
</script>
<style scoped>
#asideMenu{
  width: 100%;
  background-image: url(../../assets/icon-menu.png);
  min-height: 880px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
  display: inline-block;
}
.el-menu{
  margin-top: 35px;
}
.el-menu, .el-menu li {
  background-color:rgba(0,0,0,0);
  list-style: none;
}
.el-menu li{
  width: 80%;
}
.el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title {
    color: #bfcbd9;
}
.el-menu-item.is-active {
    color: #20a0ff;
}
.el-menu-vertical-demo {
  text-align: left;
}
.el-submenu__title {
  position: relative;
}
.el-menu-item, .el-submenu__title {
  height: 68px;
  line-height: 68px;
  font-size: 20px;
  font-weight: 800;
  padding: 0 20px;
  padding-left: 35px !important;
  cursor: pointer;
  position: relative;
  transition: border-color .3s,background-color .3s,color .3s;
  box-sizing: border-box;
  white-space: nowrap;
  margin-left: 10%;
}
#asideMenu a{
  color: #8190be;
}
#asideMenu .el-menu-hover a {
  color: #12214a !important;
}
#asideMenu .el-menu-hover{
  background-image: url(../../assets/icon-hover.png);
  background-size: 100% 100%;
  
  background-repeat: no-repeat;
}

</style>