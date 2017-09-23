<template>
	<div>
      <div class="grid-content bg-purple-dark">
	    <el-row>
	      <el-col v-for="(mList, index) in mapList" :key="mList" :span="8">
	        <div v-if='mList.status == 0'  
	        	@click="switchAap(mList)" 
	        	:class="mList.bgc ? 'gr_bgmapinburl' : '' "  
	        	class="grid-content bg-purple gr_bgmap">
	        		<img style="margin:auto" v-bind:src="mList.bgurl">
	        		<span style="display:inline-block;text-indent: 5px;">{{ mList.name }}</span>
	        </div>
	      </el-col>
	    </el-row>
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
	    	mapList:[ ]
	    }
	  },
	  beforeMount (){
	  	var that = this;
    	that.router = that.$route.path.replace('/','');
    	// console.log(that.router);
	  	switch(that.router)
		{
		case 'centralAir':
		  	var mapN = [
	    		{name:'电子地图',value:'dzMap',status:'0',bgurl:require('../../assets/icon-book.png'),bgc:true},
	    		{name:'设备列表',value:'sbList',status:'0',bgurl:require('../../assets/icon-zllist.png'),bgc:false},
	    		{name:'结构图',value:'structMap',status:'0',bgurl:require('../../assets/icon-bs.png'),bgc:false}];	
		  that.mapList = mapN;
		  break;
		case 'dewateringSys':
		  var mapN = [
	    		{name:'电子地图',value:'dzMap',status:'1',bgurl:require('../../assets/icon-book.png'),bgc:false},
	    		{name:'设备列表',value:'sbList',status:'0',bgurl:require('../../assets/icon-zllist.png'),bgc:true},
	    		{name:'结构图',value:'structMap',status:'1',bgurl:require('../../assets/icon-bs.png'),bgc:false}];		
		  that.mapList = mapN;
		  break;
		case 'distributionSys':
		  var mapN = [
	    		{name:'电子地图',value:'dzMap',status:'1',bgurl:require('../../assets/icon-book.png'),bgc:false},
	    		{name:'设备列表',value:'sbList',status:'1',bgurl:require('../../assets/icon-zllist.png'),bgc:false},
	    		{name:'结构图',value:'structMap',status:'0',bgurl:require('../../assets/icon-bs.png'),bgc:true}];		
		  that.mapList = mapN;
		  break;
		case 'lightingSys':
		  var mapN = [
	    		{name:'电子地图',value:'dzMap',status:'0',bgurl:require('../../assets/icon-book.png'),bgc:true},
	    		{name:'设备列表',value:'sbList',status:'1',bgurl:require('../../assets/icon-zllist.png'),bgc:false},
	    		{name:'结构图',value:'structMap',status:'1',bgurl:require('../../assets/icon-bs.png'),bgc:false}];	
		  that.mapList = mapN;
		  break;   
		case 'monitoringSys':
		  var mapN = [
	    		{name:'电子地图',value:'dzMap',status:'0',bgurl:require('../../assets/icon-book.png'),bgc:true},
	    		{name:'设备列表',value:'sbList',status:'1',bgurl:require('../../assets/icon-zllist.png'),bgc:false},
	    		{name:'结构图',value:'structMap',status:'1',bgurl:require('../../assets/icon-bs.png'),bgc:false}];	
		  that.mapList = mapN;
		  break;
		case 'fireControlSys':
		  var mapN = [
		  		{name:'消防地图',value:'dzMap',status:'0',bgurl:require('../../assets/icon-book.png'),bgc:true},
	    		{name:'入侵警报',value:'rqbj',status:'0',bgurl:require('../../assets/icon-xfjb.png'),bgc:false},
	    		{name:'结构图',value:'structMap',status:'1',bgurl:require('../../assets/icon-bs.png'),bgc:false}];	
		  that.mapList = mapN;
		  break;    
		default:
		  var mapN = [
	    		{name:'电子地图',value:'dzMap',status:'0',bgurl:require('../../assets/icon-book.png'),bgc:true},
	    		{name:'设备列表',value:'sbList',status:'0',bgurl:require('../../assets/icon-zllist.png'),bgc:false},
	    		{name:'结构图',value:'structMap',status:'0',bgurl:require('../../assets/icon-bs.png'),bgc:false}];	
		  that.mapList = mapN;
		}
	  },
	  mounted(){

	  },
	  methods : {
	  	switchAap (value) {
	  		console.log(value);
	  		var that = this;
	  		for (var i = 0; i < that.mapList.length; i++) {
	  			that.mapList[i].bgc = false;
	  		}
	  		value.bgc =true;

	  		bus.$emit('message',value.value)
	  	}
	  }
	}
</script>
<style scoped>
	.grid-content{
		height: 40px;
		margin: auto;
		vertical-align: middle;
		line-height: 40px;
		cursor: pointer;
	}
	.gr_bgmap{
		border-top: 2px solid #fff;
		background-color: #575d80;
		opacity: 0.4;
		border-right: 1px solid #fff;
	}
	.gr_bgmap > img{
		vertical-align: middle;
	}
	.gr_bgmapinburl{
		background-color: #a5a9bd;
	}
</style>

