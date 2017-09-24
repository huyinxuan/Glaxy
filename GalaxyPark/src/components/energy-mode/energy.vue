<template>
	<div class="en_mode">
		<p class="en_title_one"><span style="font-weight:800;margin-right:10px">|</span><span>能耗趋势图</span></p>
		<div>
			<img src="../../assets/icon-linet.png">
		</div>
		<div class="en_text">
			<el-row>
			  <el-col :span="6">
			  	<div>
			  		<img src="../../assets/icon-rile1.png">
			  		<span style="color:#d94d4c">暖通空调</span>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div>
			  		<img src="../../assets/icon-rile2.png">
			  		<span style="color:#87aa66">动力用电</span>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div>
			  		<img src="../../assets/icon-line3.png">
			  		<span style="color:#4ab3d1">公共用电</span>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div>
			  		<img src="../../assets/icon-line4.png">
			  		<span style="color:#eba438">特殊用电</span>
			  	</div>
			  </el-col>
			</el-row>
		</div>
		<p class="en_title_two"><span style="font-weight:800;margin-right:10px">|</span><span>各项对比</span></p>
		<div id="homeChart">
			
		</div>
	</div>
</template>
<style type="text/css" scoped>
	.en_mode{
		overflow: hidden;
	}
	p{
		margin: 0;
		padding: 0;
		position: relative;
	}
	.en_title_one{
		text-align: left;
		margin: auto;
		width: 90%;
		text-indent: 50px;
		margin-bottom: 50px;
		margin-top: 100px;
	}
	.en_text{
		width: 60%;
		margin:50px auto; 
	}
	.en_text *{
		vertical-align: middle;
	}
	.en_title_two{
		text-align: left;
		margin: auto;
		width: 90%;
		text-indent: 50px;
		margin-top: 50px;
	}
	#homeChart{
		height:250px;
		width:1000px;
	}
</style>
<script>
var echarts = require('echarts');
export default {
  data () {
    return {
    //   msg: '欢迎来到家'
    }
  },
  mounted() {
    //echarts 实例化
    var myChart = echarts.init(document.getElementById('homeChart'));
    // 基于准备好的dom，初始化echarts实例
              myChart.setOption({
                // title: { text: 'ECharts 入门示例' },
                // tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
  }
}
</script>