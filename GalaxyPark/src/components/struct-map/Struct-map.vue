<template>
	<div style="height:820px;">
		<div class="structMap" style="height:80%">
			<div class="hfsd">
				<p>回风湿度 ( ℃ )</p>
				<p class="allbgColor">{{structMap.hxwd}}</p>
			</div>
			<div class="dxChange">
				<p class="dxTitle">{{structMap.jixing}}</p>
				<span style="position:relative; top:3px;">冬夏季转换</span>
				<el-switch  style="margin-left:10px"
					v-model="structMap.dxc" 
					on-color="#13ce66"  
					off-color="#ff4949"  
					on-text="冬季" 
					off-text="夏季">
				</el-switch>
				<p>室内CO₂检测<span class="spWH">{{structMap.eyht}}</span></p>
			</div>
			<div class="sfsd">
				<p>送风湿度 ( ℃ )</p>
				<p class="allbgColor">{{structMap.sfwd}}</p>
			</div>
			<div class="glwyc">
				<p>过滤网压差</p>
				<p class="allbgColor" :class="structMap.glwyc == 0 ? 'addblue' : 'addhui'">{{ structMap.glwyc == 0 ? '正常' : '异常' }}</p>
			</div>
			<div class="lsfkd">
				<p>冷水阀开度 ( % )</p>
				<p class="allbgColor">{{ structMap.lsfkd }}</p>
			</div>
			<div class="rsfkd">
				<p>热水阀开度 ( % )</p>
				<p class="allbgColor">{{ structMap.rsfkd }}</p>
			</div>
			<div class="sflist">
				<p><span>送风机状态</span><span :class="structMap.glwyc == 0 ? 'addblue' : 'addhui'" class="spWH">{{ structMap.sfztj == 0 ? '正常' : '异常' }}</span></p>
				<p><span>送风机故障</span><span :class="structMap.glwyc == 0 ? 'addblue' : 'addhui'" class="spWH">{{ structMap.sfgzj == 0 ? '正常' : '异常' }}</span></p>
				<p><span>送风机手动</span><span :class="structMap.glwyc == 0 ? 'addblue' : 'addhui'" class="spWH">{{ structMap.sfsdj ? '自动' : '手动' }}</span></p>
				<p><span style="position:relative; top:1px;">送风机命令</span>
					<el-switch style="margin-left:10px" 
						v-model="structMap.sfjml" 
						on-color="#13ce66"  
						off-color="#ff4949"  
						on-text="开" 
						off-text="关">
					</el-switch>
				</p>
			</div>
			<div class="mappng">
				<img src="../../assets/icon-strcut.png">
			</div>
	    </div>
	    <div class="structList" style="height:20%;">
	    	<div style="width:49%; height:100%;  float:left;">
	    		<div style="width:100%; height:50%;">
		    		<el-row>
					  <el-col :span="10">
					  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>(%)</span></p>
					  </el-col>
					  <el-col :span="10">
					  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>(%)</span></p>
					  </el-col>
					  <el-col :span="3">
					  	<button class="besure">确定</button>
					  </el-col>
					</el-row>			
	    		</div>
	    		<div style="width:100%; height:50%;">
		    		<el-row>
					  <el-col :span="10">
					  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>(%)</span></p>
					  </el-col>
					  <el-col :span="10">
					  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>(%)</span></p>
					  </el-col>
					  <el-col :span="3">
					  	<button class="besure">确定</button>
					  	<!-- <button class="besure">确定</button> -->
					  </el-col>
					</el-row>		    			
	    		</div>
	    	</div>
	    	<div style="width:2%; height:100%; float:left;"></div>
	    	<div style="width:49%; height:100%;  float:left; ">
	    		<div style="width:100%; height:50%;">
		    		<el-row>
					  <el-col :span="10">
					  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>(%)</span></p>
					  </el-col>
					  <el-col :span="10">
					  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>(%)</span></p>
					  </el-col>
					  <el-col :span="3">
					  	<button class="besure">确定</button>
					  </el-col>
					</el-row>	    			
	    		</div>
	    		<div style="width:100%; height:50%;">
		    		<el-row>
					  <el-col :span="10">
					  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>(%)</span></p>
					  </el-col>
					  <el-col :span="10">
					  	<p><span>回风阀开度</span><span class="spWH">88.88</span><span>(%)</span></p>
					  </el-col>
					  <el-col :span="3">
					  	<button class="besure">确定</button>
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
	.structMap{
		position: relative;
	}
	.structList{
		margin: 0 30px;
	}
	.mappng{
		padding-top:120px; 
	}
	.hfsd{
		position: absolute;
		left: 85px;
		top: 110px;

	}
	.dxChange{
		position: absolute;
		right: 60px;
		top: 40px;
	}
	.sfsd{
		position: absolute;
		right: 10px;
		top: 320px;
	}
	.glwyc{
		position: absolute;
		left: 350px;
		top: 380px;
	}
	.lsfkd{
		position: absolute;
		left: 465px;
		top: 430px;
	}
	.rsfkd{
		position: absolute;
		left: 640px;
		top: 430px;
	}
	.sflist{
		text-align: left;
		position: absolute;
		left: 830px;
		top: 400px;
	}
	.sflist > p{
		position: relative;
		margin-top: 10px;
	}
	.allbgColor{
		margin-top: 8px;
		height:30px;line-height:30px; width:110px; border:1px solid #586a8d; background-color:#3e496b
	}
	.dxTitle{
		height: 30px;
		line-height: 30px;
		border: 1px solid #586a8d;
		border-left: 3px #cbced9 solid;
		background-color: #3e496b;
	}
	.dxChange > p{
		margin-bottom: 10px;
	}
	.dxChange > p:last-child{
		margin-top: 10px;
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
</style>