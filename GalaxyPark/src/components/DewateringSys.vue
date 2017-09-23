<!-- 排水系统 -->
<template>
  <div class="certer-air">
    <div class="ca_toolbar">
      <el-row>
        <el-col :span="9">
          <Menucard :router="router"></Menucard>
        </el-col>
        <el-col :span="15">
          <div class="grid-content bg-purple-light">
            <!-- <Switchmode  @newNodeEvent="parentLisen"></Switchmode> -->
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="floorCent">
      <div>
        <div v-if="iteme=='sbList'">
          <el-row >
            <el-col   :span="3">
              <div class="grid-content bg-purple">
                <floor :router="router"></floor> 
              </div>
            </el-col>
            <el-col  :span="21">
              <div class="grid-content bg-purple-light">
                <div class="foolrmap">
                  <!-- 引入新的排水系统组件 -->
                  <drainageMode v-for='dr in drainage' :key='dr'></drainageMode>
                </div>
                <div>
                  <div class="dwstatus">
                    <img src="../assets/icon-psfs.png"><span style="margin-right:30px;position:relative;left:5px;top:-10px">运行</span> 
                    <img src="../assets/icon-psfs.png"><span style="margin-right:30px;position:relative;left:5px;top:-10px">停止</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menucard from './menu-card/Menu-card'
import floor from './floor/floor'
import drainageMode from './drainage-mode/drainage-mode'

import bus from './bus'
export default {
  name: 'centralAir',
  data () {
    return {
      iteme:'sbList', //分类选项
      floorMe:0,   //楼层控制
      zlmode:0 ,//制冷模式
      router :'',
      drainage:['1','2','3','4','5','6']
    }
  },
  components:{
     Menucard,
     floor,
     drainageMode
  },
  created (){
    
  },
  mounted () {
    var that = this;
    that.router = that.$route.path.replace('/','');
    console.log(that.router);
    bus.$on('message',function(msg){
      console.log(msg);
      that.iteme = msg;

    });

    bus.$on('floorMeet',function(msg){
      that.floorMe = msg.floor;
      console.log(msg);
      // that.iteme = msg;
    });

  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-size: 20px;
}
.certer-air{
  color: #fff;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.zl_right{
  float: right;
}
.foolrmap{
  height: auto;
}

.floorCent{
  margin-top: 20px;
  background-image: url(../assets/icon-flbg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.floorList{
  height: 690px;
}
.floorjgmap{

}
.dwstatus{
  float: left;
  width: 240px;
  height: 34px;
  margin-top: 50px;
  line-height: 34px;
  border: 1px solid #8ba9cc;
  margin-left: 50%;
  background-color: #4e5b7e;
  border-left: 5px solid #cbced9;
  transform: translate(-50%);
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  -moz-transform: translate(-50%);
}
</style>
