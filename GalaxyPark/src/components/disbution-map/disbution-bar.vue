<template>
	<div>
		<div style="height:400px;">
			<div style="margin-top:60px;">
				<el-row>
				  <el-col :span="21">
				  	<div><img src="../../assets/icon-disc.png"></div>
				  	<div style="margin:20px 0; color:#fff;">
				  		<span class="dis_t_shot">1AA11</span>
				  		<span class="dis_t_shot">1AA12</span>
				  		<span class="dis_t_shot">1AA13</span>
				  		<span class="dis_t_lang">1AA14</span>
				  		<span class="dis_t_lang">1AA15</span>
				  		<span class="dis_t_lang">1AA16</span>
				  		<span class="dis_t_lang">1AA17</span>
				  		<span class="dis_t_lang">1AA18</span>
				  	</div>
				  	<div style="margin-top:30px;"><img src="../../assets/icon-dist.png"></div>
				  </el-col>
				  <el-col :span="3">
				  	<div style="text-align:left; padding-top:60%;">
				  		<p><span style="color:#a52037;">Ua</span><span class="wh20">220.0</span></p>
				  		<p><span style="color:#0dd737;">Ub</span><span class="wh20">220.0</span></p>
				  		<p><span style="color:#eaf501;">Uc</span><span class="wh20">220.0</span></p>
				  	</div>
				  </el-col>
				</el-row>
			</div>
		</div>
		<div style="padding:0px 60px 0px 80px;">
			<p class="dis_g_mesg" style="text-align:left"><span>|</span><span>配电柜信息</span></p>
			<el-row>
				<el-col :span="8">
					<div class="dis_msgb" style="height:240px;">
						<p class="dis_ms_title">01AA14</p>
						<el-row>
							<el-col :span="6"> <div style="height:1px"></div> </el-col>
							<el-col :span="6"><div style="height:50px;line-height:80px;">A</div></el-col>
							<el-col :span="6"><div style="height:50px;line-height:80px;">B</div></el-col>
							<el-col :span="6"><div style="height:50px;line-height:80px;">C</div></el-col>
						</el-row>
						<el-row>
							<el-col :span="6">电流 ( A )</el-col>
							<el-col :span="6"><div class="dis_why">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whb">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whr">0.00</div></el-col>
						</el-row>
						<el-row>
							<el-col :span="6">电压 ( V )</el-col>
							<el-col :span="6"><div class="dis_why">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whb">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whr">0.00</div></el-col>
						</el-row>
						<el-row>
							<el-col :span="12"><div style="text-align:left">有功功率( Kw )</div></el-col>
							<el-col :span="12"><div class="dis_wh120">0.00</div></el-col>
						</el-row>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="dis_msgb" style="height:240px;">
						<p class="dis_ms_title">01AA15</p>
						<el-row>
							<el-col :span="6"> <div style="height:1px"></div> </el-col>
							<el-col :span="6"><div style="height:50px;line-height:80px;">A</div></el-col>
							<el-col :span="6"><div style="height:50px;line-height:80px;">B</div></el-col>
							<el-col :span="6"><div style="height:50px;line-height:80px;">C</div></el-col>
						</el-row>
						<el-row>
							<el-col :span="6">电流 ( A )</el-col>
							<el-col :span="6"><div class="dis_why">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whb">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whr">0.00</div></el-col>
						</el-row>
						<el-row>
							<el-col :span="6">电压 ( V )</el-col>
							<el-col :span="6"><div class="dis_why">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whb">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whr">0.00</div></el-col>
						</el-row>
						<el-row>
							<el-col :span="12"><div style="text-align:left">有功功率( Kw )</div></el-col>
							<el-col :span="12"><div class="dis_wh120">0.00</div></el-col>
						</el-row>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="dis_msgb" style="height:240px;">
						<p class="dis_ms_title">01AA16</p>
						<el-row>
							<el-col :span="6"> <div style="height:1px"></div> </el-col>
							<el-col :span="6"><div style="height:50px;line-height:80px;">A</div></el-col>
							<el-col :span="6"><div style="height:50px;line-height:80px;">B</div></el-col>
							<el-col :span="6"><div style="height:50px;line-height:80px;">C</div></el-col>
						</el-row>
						<el-row>
							<el-col :span="6">电流 ( A )</el-col>
							<el-col :span="6"><div class="dis_why">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whb">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whr">0.00</div></el-col>
						</el-row>
						<el-row>
							<el-col :span="6">电压 ( V )</el-col>
							<el-col :span="6"><div class="dis_why">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whb">0.00</div></el-col>
							<el-col :span="6"><div class="dis_whr">0.00</div></el-col>
						</el-row>
						<el-row>
							<el-col :span="12"><div style="text-align:left">有功功率( Kw )</div></el-col>
							<el-col :span="12"><div class="dis_wh120">0.00</div></el-col>
						</el-row>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<style type="text/css" scoped>
	p{
		margin: 0;
		padding: 0;
	}
	.dis_t_shot{
		margin: 5px 2px;
		padding: 2px 5px;
		background-color: #1fad6a;
	}
	.dis_t_lang{
		margin: 5px 2px;
		padding: 2px 40px;
		background-color: #1fad6a;
	}
	.wh20{
		text-align: center;
		display: inline-block;
		height: 30px;
		line-height: 30px;
		width: 80px;
		background-color: #394466;
		margin-left: 8px;
		margin-bottom: 10px;
		border:1px #536888 solid;
	}
	.dis_g_mesg>span{
		font-weight: 800;
		margin-left: 5px;
	}
	.dis_msgb{
		border:1px solid #536888;
		margin-top: 20px;
		margin-right: 40px;
		padding: 20px;
	}
	.dis_ms_title{
		height: 36px;
		line-height: 36px;
		border:1px solid #536888;
		border-left: 5px solid #cbcfda;
		text-align: center;
	}
	.dis_msgb  .el-col{
		min-height: 50px;
		line-height: 50px;
	}
	.dis_why{
		height: 30px;
		line-height: 30px;
		width: 60px;
		margin: auto;
		margin-top: 10px;
		border: 1px solid #536888;
		background-color: #394466;
		color: yellow;
	}
	.dis_whb{
		height: 30px;
		line-height: 30px;
		width: 60px;
		margin: auto;
		margin-top: 10px;
		border: 1px solid #536888;
		background-color: #394466;
		color: green;
	}
	.dis_whr{
		height: 30px;
		line-height: 30px;
		width: 60px;
		margin: auto;
		margin-top: 10px;
		border: 1px solid #536888;
		background-color: #394466;
		color: red;
	}
	.dis_wh120{
		height: 30px;
		line-height: 30px;
		width: 160px;
		margin: auto;
		margin-top: 10px;
		border: 1px solid #536888;
		background-color: #394466;
	}
</style>