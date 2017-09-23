<template>    
    <el-row>
      <el-col  v-for="(value , key) in lbList" :key="value"  :span="8">
        <div class="grid-content bg-purple fl_pd20">
         <div class="foolrlist"><span style="margin:10px;font-size:20px">|</span>{{ value.name }}</div>
         <div v-for="(val , k) in value.sblist" class="sbfl_list">
            <span>{{ val.name }}</span>
            
            <img v-if='val.status == 0' src='../../assets/icon-fan.png'>
            <img v-if='val.status == 1' src='../../assets/icon-fan.png'>
            <img v-if='val.status == 2' src='../../assets/icon-fanr.png'>
            <span>|</span>
            <span :class="[val.status == 0 ? 'notSend' : val.status == 1 ? 'send' : 'redsend']">{{ val.status == 0 ? '运行' : val.status == 1 ? '停止' : '故障'}}</span>
         </div>
        </div>
      </el-col>
    </el-row>
</template>
<style type="text/css">
  .foolrlist{
    text-align: left;
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 800;
  }
  .sbfl_list{
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: relative;
    overflow: hidden;
    white-space:nowrap;
    border-top: 1px solid #566a8b;
    border-right: 1px solid #566a8b;
    border-left: 1px solid #566a8b;
  }
  .sbfl_list:last-child{
    border-bottom: 1px solid #566a8b;
  }
  .sbfl_list> *{
    float: left;  
  }
  .sbfl_list> img{
    position:relative;
    left: 8rem;
    top: 1rem;
  }
  .sbfl_list> span{
    height:1em;
    line-height:1em;
    top:0;
    bottom:0;
    margin:auto 0;
    position:absolute;
    margin-left: 20px;
  } 
  .sbfl_list> span:nth-child(1){
    left: 0rem;
  }
  .sbfl_list> span:nth-child(3){
    left: 11rem;
  }
  .sbfl_list> span:nth-child(4){
    left: 13rem;
  }
  .fl_pd20{
    height: 60%;
    margin:0 20%;
    margin-top: 60px; 
  }
  .notSend{
    color: #2f856d;
  }
  .send{
    color: #fff;
  }
  .redsend{
    color: #ca391c;
  }
</style>
<script type="text/javascript">
export default {
  name: 'floorList',
  //props:['floorMe'],
  data () {
      return {
        pngn:'',
        lbList:[
          {
            name:'大楼1F',
            sblist:[
              {
                name:'AHU-007',
                status:0                    //0运行  1停止  2 故障
              },{
                name:'AHU-006',
                status:1
              },
              {
                name:'AHU-007',
                status:0                    //0运行  1停止  2 故障
              },{
                name:'AHU-006',
                status:1
              },
              {
                name:'AHU-007',
                status:0                    //0运行  1停止  2 故障
              },{
                name:'AHU-006',
                status:1
              }
            ]
            
          },{
            name:'大楼2F',
            sblist:[
              {
                name:'AHU-007',
                status:0
              },{
                name:'AHU-006',
                status:0
              },
              {
                name:'AHU-007',
                status:0
              },{
                name:'AHU-006',
                status:0
              },
              {
                name:'AHU-007',
                status:0
              },{
                name:'AHU-006',
                status:0
              }
            ]
          },{
              name:'大楼3F',
              sblist:[
                {
                  name:'AHU-007',
                  status:0
                },{
                  name:'AHU-006',
                  status:2
                },
                {
                  name:'AHU-007',
                  status:0
                },{
                  name:'AHU-006',
                  status:2
                },
                {
                  name:'AHU-007',
                  status:0
                },{
                  name:'AHU-006',
                  status:2
                }
              ]
            }
        ]
      }
    },
    // computed () {
 
            
    // },
  // watch:{
  //   'floorMe':function(n,o){
  //     console.log(this.floorMe);  
  //       //进来就发起请求
  //       // this.$http.get('/api/activity/catelist?type=' + floorMe).then(response => {
  //           //   let res = response.body
  //           //   if (res.error_code === 0) {
  //           //     that.activities = res.data
  //           //     this.loaded = true
  //           //   } else {
  //           //     that.activities = []
  //           //     console.log(res.error_msg)
  //           //   }
  //           // }, () => {
  //           //   console.log('请求数据错误')
  //           // })
  //   }
  // },
  mounted (){
    //console.log(this.floorMe); 
  },
  methods: {

  }
}
</script>   