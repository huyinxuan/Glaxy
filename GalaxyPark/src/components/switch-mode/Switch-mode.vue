<template>
	<div class="zl-mode">
		<div class="zl_message"  @click="zlmode()">
			<span style="margin-right:20px;">{{message}}</span><img src="../../assets/icon-zlmb.png">
		</div>
		<div class="zl_num" v-if="isShow">
			<ul>
				<li v-for = "zl of zlList"  @click="getmode(zl)">{{ zl }}</li>
			</ul>
		</div>
	</div>    
</template>
<script type="text/javascript">
	export default {
	  //props:['newNode'],
	  name: 'Switch-mode',
	  data () {
	    return {
	    	message:'',
	    	isShow: false,
	    	zlList:[]
	    }
	  },
	  beforeMount () {
	  	var that = this;
    	that.router = that.$route.path.replace('/','');
    	console.log(that.router);
    	switch(that.router)
		{
		case 'centralAir':
		  	var zlList =[
	    		'平日制冷模式',
	    		'平日过渡季制冷模式',
	    		'节假日制冷模式',
	    		'节假日过渡季制冷模式',
	    		'平日供热模式',
	    		'平日过渡季供热模式',
	    		'节假日供热模式',
	    		'节假日过渡季供热模式',
	    		'平日过渡季模式'
	    	];	
		  	that.zlList = zlList;
		  	that.message ='平日制冷模式';
		  break;
		case 'lightingSys' :
		  	var sunlist = [
	    		'晴天日常',
	    		'晴天节假日',
	    		'夜间日常',
	    		'夜间节假日',
	    		'保洁',
	    		'保安'
	    	];	
		  	that.zlList = sunlist;
		  	that.message ='晴天日常';			
			break;
		case 'fireControlSys' :
		  	var sunlist = [
	    		'正常模式',
	    		'火灾模式',
	    		'演习模式'
	    	];	
		  	that.zlList = sunlist;
		  	that.message ='正常模式';			
			break;
		case 'elevatorSys' :
		  	var sunlist = [
	    		'平日模式',
	    		'节假日模式'
	    	];	
		  	that.zlList = sunlist;
		  	that.message ='平日模式';			
			break;	 	  
		  default :
		  	var zlList =[
	    		'平日制冷模式',
	    		'平日过渡季制冷模式',
	    		'节假日制冷模式',
	    		'节假日过渡季制冷模式',
	    		'平日供热模式',
	    		'平日过渡季供热模式',
	    		'节假日供热模式',
	    		'节假日过渡季供热模式',
	    		'平日过渡季模式'
	    	];	
		  	that.zlList = zlList;
		  	that.message ='平日制冷模式';
		}
	  },
	  methods : {
	  	zlmode () {
	  		let that = this;
	  		if(that.isShow){
	  			that.isShow = false;
	  		}else{
	  			that.isShow = true;
	  		}
	  	},
	  	getmode (value){
	  		let that = this 
	  		that.message = value
	  		that.isShow = false
	  	}
	  }
	}
</script>
<style type="text/css" scoped>
	.zl-mode{
		float: right;
		position: relative;
		background-image: url(../../assets/icon-zlm.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.zl_num{
		position: absolute;
		right: 10px;
		width: 300px;
		z-index: 10;
	}
	.zl_message{
		height: 40px;
		width: auto;
		line-height: 40px;
		text-align: right;
		cursor: pointer;
		margin: 0 50px;
	}
	.zl_num ul{
		margin: 0;
		padding: 0;
	}
	.zl_num ul li:first-child{
		border-top: #9698a8 solid 1px;
	}
	.zl_num ul li{
		cursor: pointer;
		height: 60px;
		line-height: 60px;
		width: 310px;
		background-color: #686d8c;
		border-left: #9698a8 solid 1px;
		border-right: #9698a8 solid 1px;
		border-bottom: #9698a8 solid 1px;
	}
</style>