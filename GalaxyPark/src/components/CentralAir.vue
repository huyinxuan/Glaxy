<template>
  <div class="certer-air">
    <div class="ca_toolbar">
      <el-row>
        <el-col :span="11">
          <Menucard></Menucard>
        </el-col>
        <el-col :span="13">
          <div class="grid-content bg-purple-light">
            <Switchmode  @newNodeEvent="parentLisen"></Switchmode>
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
                  <floorCont :floorMe="floorMe"></floorCont>
                </div>
              </div>
            </el-col>
          </el-row>          
        </div>
        <div v-if="iteme== 'sbList'">
            <div class="floorList">
              <floorList></floorList>
            </div>
        </div>
        <div v-if="iteme=='structMap'">
          <div class="floorjgmap">
            <el-row >
              <el-col  :span="3">
                <div class="grid-content bg-purple">
                     <floor></floor> 
                </div>
              </el-col>
              <el-col  :span="21">
                <div class="grid-content bg-purple-light">
                  <div class="foolrmapt">
                  <structMap></structMap>
                  </div>
                </div>
              </el-col>
            </el-row>             
          </div>    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switchmode from './switch-mode/Switch-mode'
import Menucard from './menu-card/Menu-card'
import floor from './floor/floor'
import floorCont from './floor-cont/floor-cont'
import floorList from './floor-list/floor-list'
import structMap from './struct-map/Struct-map'

import page from './pageList'
// console.log(Cardbanner);

import bus from './bus'
export default {
  name: 'centralAir',
  data () {
    return {
      iteme:'dzMap', //分类选项
      floorMe:0,   //楼层控制
      zlmode:0 //制冷模式
    }
  },
  components:{
     Switchmode,
     Menucard,
     page,
     floor,
     floorCont,
     floorList,
     structMap
  },
  mounted () {
    var that = this;
    bus.$on('message',function(msg){
      that.iteme = msg;

    });

    bus.$on('floorMeet',function(msg){
      that.floorMe = msg.floor;
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
