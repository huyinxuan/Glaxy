<!-- 视频监控系统 -->
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
        <div v-if="iteme== 'dzMap'">
          <el-row >
            <el-col   :span="3">
              <div class="grid-content bg-purple">
                <floor></floor> 
              </div>
            </el-col>
            <el-col  :span="21">
              <div class="grid-content bg-purple-light">
                <div class="foolrmap">
                  <Monity></Monity>
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
import Switchmode from './switch-mode/Switch-mode'
import Menucard from './menu-card/Menu-card'
import floor from './floor/floor'
import Monity from './monity-mode/monity-mode'


// console.log(Cardbanner);

import bus from './bus'
export default {
  name: 'centralAir',
  data () {
    return {
      iteme:'dzMap', //分类选项
      floorMe:0,   //楼层控制
      zlmode:0, //制冷模式
      router:''
    }
  },
  components:{
     Switchmode,
     Menucard,
     floor,
     Monity,
  },
  mounted () {
    var that = this;
    that.router = that.$route.path.replace('/','');
    bus.$on('message',function(msg){
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
  height: 620px;
}

.foolrmapt{
  height: 820px;
}
.floorCent{
  margin-top: 20px;
  background-image: url(../assets/icon-flbg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.floorList{
  height: 820px;
}
</style>
