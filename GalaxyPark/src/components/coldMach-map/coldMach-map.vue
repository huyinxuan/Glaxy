<template>
	<div style="height:820px;">
		<div class="structMap" style="height:90%; position:relative">
			<div class="snwd">
				<p>室内温度( ℃ )</p>
				<p class="spWH">28.6</p>
			</div>
			<div class="swwd">
				<p>室内温度( % )</p>
				<p class="spWH">68.2</p>
			</div>
			<div class="ldswd" style="height:180px;width:630px;">
				<div style="width:46%; height:100%; float:left">
					<p>冷冻水供水温度( ℃ )<span class="spWH">31.6</span></p>
					<p>冷冻水供水温度( ℃ )<span class="spWH">31.6</span></p>
					<p>冷冻水供水温度( ℃ )<span class="spWH">31.6</span></p>
				</div>
				<div style="width:46%; height:100%; float:right">
					<p>冷冻水供水温度( ℃ )<span class="spWH">31.6</span></p>
					<p>冷冻水供水温度( ℃ )<span class="spWH">31.6</span></p>
					<p>冷冻水供水温度( ℃ )<span class="spWH">31.6</span></p>
				</div>
			</div>
			<div style="height:100%;">
				<img style="height:70%; margin-top:50px; width:80% " src="../../assets/icon-cool.png">
			</div>
	    </div>
	    <div class="structList" style="height:10%;">
	    	<div style="width:100%; height:100%;  float:left;">
	    		<div style="width:100%; height:50%;">
	    			<el-row>
	    				<el-col :span="12">
				    		<el-row>
							  <el-col :span="11">
							  	<p><span>分水器压力</span><span class="spWH">88.88</span><span>( bar )</span></p>
							  </el-col>
							  <el-col :span="10">
							  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>( ℃ )</span></p>
							  </el-col>
							  <el-col :span="3">
							  	<button class="besure">确定</button>
							  </el-col>
							</el-row>	    					
	    				</el-col>
	    				<el-col :span="12">
				    		<el-row>
							  <el-col :span="11">
							  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>( bar )</span></p>
							  </el-col>
							  <el-col :span="10">
							  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>( ℃ )</span></p>
							  </el-col>
							  <el-col :span="3">
							  	<button class="besure">确定</button>
							  </el-col>
							</el-row>	    					
	    				</el-col>
	    			</el-row>
			
	    		</div>
	    	</div>
	    </div> 
	</div>
</template>
<script type="text/javascript">
	export default {
		data (){
			return {
 				structMap:{
 					jixing:'AU007-1',
 					hxwd:28.6,
 					dxc:true,          //冬夏转换 true 冬  false 夏
 					eyht:0.08,
 					glwyc:0,
 					lsfkd:66.8,
 					rsfkd:88.6,
 					sfztj:0,
 					sfgzj:0,
 					sfsdj:true,          //送风手动机 true 自动 false 手动
 					sfjml:true,          //送风命令 true 开 false 关 
 					sfwd:25.0
 				},
 				structList:{

 				}
			}
		},
		methods: {

		}
	}
</script>
<style type="text/css" scoped>
	p{
		padding: 0;
		margin: 0;
	}
	.spWH{
		display: inline-block;
		height: 30px;
		line-height: 30px;
		width: 80px;
		border:solid 1px #586a8d;
		background-color: #3e496b;
		margin-left: 10px;
		margin-right: 10px;
	}
	.sflist > p > span{
		text-align: center;
	}
	.grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	 }
	 .addblue{
	 	background-color: #20ad6a;
	 	border:0;
	 }
	 .addhui{
	 	background-color: #394566;
	 	border:0;
	 }
	 .snwd{
	 	position: absolute;
	 	left: 50px;
	 	top: 50px;
	 }
	 .swwd{
	 	position: absolute;
	 	left: 180px;
	 	top: 50px;
	 }
	 .snwd>p{
	 	margin-bottom: 10px;
	 }
	 .swwd>p{
	 	margin-bottom: 10px;
	 }
	 .ldswd{
	 	position: absolute;
	 	right: 70px;
	 	bottom: 70px;
	 }
	 .ldswd>div>p{
	 	margin-top: 20px;
	 }
</style>