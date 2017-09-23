<template>
	<div>
		<div  v-for="item in cardAll">
			<div class="card_baner" v-bind:class="{ active: item.gzNum > 0 }">
			    <p>{{ item.title }}</p>
			    <div class="cart_main">
			      <el-row>
			        <el-col :span="12">
			        	<div class="grid-content bg-purple">
			        		<div>冷机开启模式：</div>
			        		<div>开启台数：</div>
			        		<div v-bind:class="{ activebg: item.gzNum > 0 }">故障台数：</div>
			        		<div>室内温度：</div>
			        		<div>能耗(kwh)：</div>
			        	</div>
			        </el-col>
			        <el-col :span="12">
			        	<div class="grid-content bg-purple-light">
			        		<div> {{ item.cardms }}</div>
			        		<div> {{ item.openNum }} </div>
			        		<div v-bind:class="{ activebg: item.gzNum > 0 }"> {{ item.gzNum }} </div>
			        		<div> {{ item.slwd }} ℃</div>
			        		<div> {{ item.nh }} </div>
			        	</div>
			        </el-col>
			      </el-row>
			    </div>
		    </div>
		</div>
	</div>    
</template>
<script type="text/javascript">
	export default {
	  name: 'Cardbanner',
	  data () {
	    return {
	      	cardAll:[{
		      	title:"中央空调",
		      	cardms:'平日制冷模式',
		      	openNum:0,
		      	gzNum:0,
		      	slwd:22.8,
		      	nh:1200
		      },{
		      	title:"中央空调",
		      	cardms:'平日制冷模式',
		      	openNum:0,
		      	gzNum:2,
		      	slwd:22.8,
		      	nh:1400
		      }]
	    }
	  }
	}
</script>
<style type="text/css" scoped>
	p{
		padding: 0;
		margin: 0;
	}
	.cart_main{
		margin-top: 25px;
	}
	.card_baner{
		height: 280px;
		margin-bottom:20px; 
		margin-right:20px; 
		width: 336px;
		color: #dddddd;
		background-image: url(../../assets/icon-cardb.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		float: left;
	}
	.active{
		background-image: url(../../assets/icon-cardr.png);
	}
	.activebg{
		color: #c23922;
	}
	.card_baner > p{
		line-height: 40px;
		height: 40px;
		font-size: 20px;
	}
	 .el-row {
	    margin-bottom: 25px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	  	text-align: right;
	  }
	  .bg-purple-light {
	  	text-align: left;
	  	text-indent: 10px;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
  	}
  	.bg-purple > div {
  		font-size: 18px;
  		margin-bottom: 15px;
  	}
  	.bg-purple-light > div {
  		font-size: 18px;
  		margin-bottom: 15px;	
  	}
</style>