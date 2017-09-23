<template>
	<div style="position:relative">
		<div v-for="(itme , index) in fireItem" :key="itme" style="width:310px; height:238px;margin-left:90px;margin-top:60px;float:left">
			<p class="firct_title"><span style="margin-right:10px;">|</span><span>{{ index+1 }}F</span></p>
			<div class="mode_cont" style="width:310px;height:200px">
				<div class="md_ct ct_left">
					<img v-if="itme.ygstatus==0" src="../../assets/icon-ygzc.png">
					<img v-if="itme.ygstatus==1" src="../../assets/icon-yggz.png">
					<img 
						v-if="itme.ygstatus==2" 
						style="cursor:pointer" 
						@click="dialog()"
						src="../../assets/icon-ygbj.png">
					<p class="wh120">{{ itme.ygname }}</p>
				</div>
				<div class="md_ct ct_right">
					<img v-if="itme.wgstatus==0" src="../../assets/icon-wgzc.png">
					<img v-if="itme.wgstatus==1" src="../../assets/icon-wggz.png">
					<img v-if="itme.wgstatus==2" 
						@click="dialog(index )"   
						style="cursor:pointer" 
						src="../../assets/icon-ygbj.png">
					<p class="wh120">{{ itme.wgname }}</p>
				</div>
			</div>
			<div v-if="itme.active" class="hideMode">
				<div style="width:360px;height:100%;float:left;box-sizing:border-box;border:2px solid red; opacity:1">
					
				</div>
				<div style="width:280px;height:100%;float:left; background-color: #fff">
					<video src="../../video/movie.ogg" controls="controls">
						your browser does not support the video tag
					</video>
					<div style="height:36px; line-height:36px; text-align:left; background-color: #bab8b8 ; margin:0px 8px;">
						<img style="margin:0px 10px;" src="../../assets/icon-mfire.png"><span>火灾报警信息</span>
					</div>
					<div class="md_fire_cont" >
						<el-row>
						  <el-col :span="12">
						  	<p>报警信息</p>
						  	<p>火源发生区域</p>
						  	<p>报警器类别</p>
						  	<p>报警时间</p>
						  	<p></p>
						  	<p>建议</p>
						  </el-col>
						  <el-col :span="12">
						  	<p>发现重大火宅</p>
						  	<p class="md_red">1F 办公室</p>
						  	<p class="md_red">烟感报警</p>
						  	<p class="md_red">2017年09月15日11:55:26</p>
						  	<p class="md_red"></p>
						  	<p class="md_red">立即拨打119</p>
						  </el-col>
						</el-row>
					</div>	
				</div>
			</div>
		</div>
		<div class="clear"></div> 
		<div class="fire_foot" style="width:100%; height:200px;margin-top:22px;">
			<el-row>
			  <el-col :span="12">
			  	<div class="fire_left">
				  	<img src="../../assets/icon-ygzc.png">
				  	<span>烟感正常</span>
				  	<img src="../../assets/icon-yggz.png">
				  	<span>烟感故障</span>
				  	<img src="../../assets/icon-ygbj.png">
				  	<span>烟感报警</span>			  		
			  	</div>
			  </el-col>
			  <el-col :span="12">
				  <div class="fire_right">
				  	<img src="../../assets/icon-wgzc.png">
				  	<span>温感正常</span>
				  	<img src="../../assets/icon-wggz.png">
				  	<span>温感故障</span>
				  	<img src="../../assets/icon-ygbj.png">
				  	<span>温感报警</span>			  	
				  </div>
			  </el-col>
			</el-row>
		</div>
		<div class="cover" @click="hideCover" v-if="show">

		</div>
	</div>
</template>
<style type="text/css" scoped>
	p{
		margin: 0;
		padding: 0;
	}
	video{
		width: 260px;
		height: 150px;
		margin-top: 10px;
	}
	.firct_title{
		height: 30px;
		line-height: 30px;
		text-align: left;
		font-weight: 800;
		margin-bottom: 8px;
	}
	.fire_left{
		margin-top: 70px;
		margin-left: 50px;	
	}
	.fire_right{
		margin-top: 70px;
		margin-right: 50px;	
	}
	.fire_foot  *{
		vertical-align: middle;
	}
	.fire_foot span{
		margin-left: 5px;
		margin-right: 10px;
	}
	.mode_cont{
		background-image: url(../../assets/icon-firebg.png);
	  	background-repeat: no-repeat;
	  	background-size: 100% 100%;
	}
	.clear{
		clear: both;
	}
	.md_ct{
		width: 100px;
	}
	.ct_left{
		position: relative;
		top: 20px;
		left: 20px;
	}
	.ct_right{
		position: relative;
		left: 130px;
		top: -20px;
	}
	.hideMode{
		z-index: 100;
		width: 640px;
		height: 375px;
		position: absolute;
		top: 20px;
	}
	.md_fire_cont{
		margin: 10px;
		color:#333; text-align:left;font-size:16px;
	}
	p{
		margin: 0;
		padding: 0;
	}
	.md_fire_cont p{
		height: 24px;
		line-height: 24px;
	}
	.md_red{
		color: red;
	}
</style>
<script type="text/javascript">
	export default {
		data () {
			return {
				fireItem:[
					{ygname:'F-1F-01',wgname:'F-1F-25',ygstatus:0 ,wgstatus:0 , active:false},
					{ygname:'F-1F-02',wgname:'F-1F-25',ygstatus:0 ,wgstatus:2,active:false},
					{ygname:'F-1F-03',wgname:'F-1F-25',ygstatus:0 ,wgstatus:0,active:false},
					{ygname:'F-1F-04',wgname:'F-1F-25',ygstatus:0 ,wgstatus:0,active:false},
					{ygname:'F-1F-01',wgname:'F-1F-25',ygstatus:0 ,wgstatus:0,active:false},
					{ygname:'F-1F-01',wgname:'F-1F-25',ygstatus:0 ,wgstatus:0,active:false}
				],
				show:false
			}
		},
		methods: {
		  dialog(index){
		  	this.fireItem[index].active = true;
		  	this.show = true;
		  },
		  hideCover () {
		  	this.show = false;
		  	for (var i = 0; i < this.fireItem.length; i++) {
		  		this.fireItem[i].active =false;
		  	}
		  }
	    }
	}
</script>