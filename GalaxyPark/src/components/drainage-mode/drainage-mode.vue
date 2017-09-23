<!-- 排水系统组件 -->
<template>
	<div>
      <div class="grid-content bg-purple-dark">
	    <div style="margin-top:60px;margin-left:10px;">
	    	<div class="pstitle">1#电梯坑排水坑</div>
	    	<div>
	    		<img src="../../assets/icon-psk.png">
	    	</div>
	    	<div>
	    		<el-row>
        			<el-col :span="8">
        				<p>启停控制</p>
        				<el-switch
							v-model="value2"
				 			on-color="#13ce66"
				 			on-text="开"
				 			off-text="关"
				  			off-color="#ff4949">
						</el-switch>

        			</el-col>
        			<el-col :span="8">
        				<p>故障报警</p>
        				<p class="wh30 zcclor">正常</p>
        			</el-col>
        			<el-col :span="8">
        				<p>送风机手自动</p>
        				<p class="wh30">自动</p>
        			</el-col>
        		</el-row>
	    	</div>
	    </div>
	  </div> 
    </div>  
</template>
<script type="text/javascript">
	import bus from '../bus'
	export default {
	  props:['router'],
	  name: 'Menu-card',
	  data () {
	    return {
	    	router:'',
	    	mapIndex:0,
	    	mapList:[ ],
	    	value2:true
	    }
	  },
	  beforeMount (){
	  	var that = this;
    	that.router = that.$route.path.replace('/','');
    	console.log(that.router);
	  },
	  mounted(){

	  },
	  methods : {
	  	// switchAap (value) {
	  	// 	bus.$emit('message',value)
	  	// }
	  }
	}
</script>
<style scoped>
	.grid-content{
		height: 340px;
		width: 410px;
		display: inline-block;
		float: left;
	}
	.pstitle{
		width: 220px;
		height: 36px;
		line-height: 36px;
		border: 1px solid #8ba9cc;
		margin-left: 15%;
		background-color: #4e5b7e;
		border-left: 5px solid #cbced9;
	}
	p{
		padding: 0;
		margin:8px 0;
	}
	.wh30{
		height: 30px;
		width: 100px;
		background-color: #cbced9;
		border: 1px solid #94a6dd;
		padding: 0;
		margin: auto;
	}
	.zcclor{
		border:0;
		background-color: #13ce66;
	}
</style>

