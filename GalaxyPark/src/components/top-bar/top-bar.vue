<!-- 头部模块 -->
<template>
	<div id="topStyle">
		<div class="top_logo">
			<img src="../../assets/icon-logo.png">
		</div>
		<div class="top_fun">
			<div class="top_qt">
				<img src="../../assets/icon-qt.png">
			</div>
			<div class="tb_line"></div>
			<div class="top_admin">
				<img src="../../assets/icon-tx.png">
				<span class="top_ad_name">系统管理员</span>
			</div>
			<div class="tb_line"></div>
			<div class="top_time">
				<div class="top_hour">11:45</div>
				<div class="top_data">
					<div>2017-07-01</div>
					<div>星期三</div>					
				</div>
			</div>
			<div class="tb_line"></div>
			<div class="top_sun">
				<div class="top_sun_img">
					<img src="../../assets/icon-sun.png">
				</div>
				<div class="top_sun_text">
					<div>晴天</div>
					<div>24~35℃</div>
				</div>
			</div>
		</div>
		<div class="top_line">
			<img src="../../assets/icon-line.png">
		</div>
	</div>
</template>

<script type="text/javascript">
export default{
	data () {
		    // return {
		    //   msg: '欢迎来到家'
		    // }
		}
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#topStyle{
	height: 140px;
	color: #fff;
}
.top_logo{
	width: 40%;
}
.top_logo > img{
	float: left;
	margin-left: 50px;
}
.top_lg_img{
	width: auto;
	height: auto;
	background-image: url(../../assets/icon-logo.png);
	background-repeat: no-repeat;
}
.top_fun{
	width: 60%;
}
.top_logo, .top_fun{
	height: 100px;
	float: left;
	margin-top: 20px;
}
.top_line{
	height: 30px;
	width: 100%;
	float: left;
}
.top_line > img{
	padding-left: 10px;
	width: 100%;
}
.top_fun > div{
	height: 60px;
	margin-top: 15px;
	float: right;
}
.top_qt{
	width: 60px;
	margin-left: 30px;
	cursor: pointer;
}
.top_qt > img{
	margin-top: 10px;
}
.top_admin{
	width: 185px;
}
.top_admin > img{
	position: relative;
	top: 13px;
	right: 2px;
}
.top_admin > span{
	position: relative;
	top: 5px;
}
.top_time{
	width: 280px;
}
.top_sun{
	width: 195px;
}
.top_ad_name{
	height: 100%;
	line-height: 40px;
	font-size: 20px; 
}
.top_hour{
	height: 100%;
	width: 50%;
	float: left;
	font-size: 36px;
	line-height: 60px;	
} 
.top_data{
	text-align: left;
	height: 100%;
	width: 50%;
	float: left;
	font-size: 20px;
}
.top_sun_img{
	width: 40%;
	height: 100%;
	float: left;
}
.top_sun_text{
	width: 60%;
	height: 100%;
	float: left;
}
.top_sun_text > div{
	height: 50%;
	line-height: 30px;
	text-align: left;
	text-indent: 10px;
}
#topStyle .tb_line{
	height: 30px;
	width: 1px;
	background-color: #fff;
	margin: 10px;
	margin-top: 30px;
}
</style>