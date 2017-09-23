<!-- 能耗分析系统 -->
<template>
  <div class="certer-air">
    <div class="floorCent">
      <div>
        <div v-if="iteme=='structMap'">
          <div class="floorjgmap">
            <el-row >
              <el-col  :span="24">
                <div class="grid-content bg-purple-light">
                  <div class="foolrmapt">
                    <Energy></Energy>
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

import Energy from './energy-mode/energy'
// console.log(Cardbanner);

import bus from './bus'
export default {
  name: 'centralAir',
  data () {
    return {
      iteme:'structMap', //分类选项
      floorMe:0,   //楼层控制
      zlmode:0 //制冷模式
    }
  },
  components:{
    Energy
  },
  mounted () {
    var that = this;
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
  min-height: 590px;
}
.foolrmapt{
  height: 880px;
}
.floorCent{
  background-image: url(../assets/icon-flbg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
