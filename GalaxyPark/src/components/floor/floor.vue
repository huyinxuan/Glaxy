<template>
	<div class="floor">
      <ul>
        <li>楼层</li>
        <li :class='it.show ? "succse" : " "' v-for="it of iteme" @click="gtFloor(it)"><span class="floorI" v-if='it.show'>|</span>{{ it.floor }}F</li>
      </ul>  
	</div>
</template>
<script type="text/javascript">
	import bus from '../bus'
	export default {
		props:['router'],
		name: 'floor',
		data () {
		    return {
		      iteme:[{floor:4,show:true},
		      		{floor:3,show:false},
		      		{floor:2,show:false},
		      		{floor:1,show:false},
		      		{floor:-1,show:false},
		      		{floor:-2,show:false}
		      	],
		    }
	  	},
	  	beforeMount (){
		  	var that = this;
	    	that.router = that.$route.path.replace('/','');
	    	//console.log(that.router);
		  	switch(that.router)
			{
			case 'centralAir':
			  	var itemeL = [{floor:4,show:true},
			      		{floor:3,show:false},
			      		{floor:2,show:false},
			      		{floor:1,show:false},
			      		{floor:-1,show:false},
			      		{floor:-2,show:false}
			      	];	
			  that.iteme = itemeL;
			  break;
			case 'dewateringSys':
			  var itemeL = [{floor:'全部',show:true},
			      		{floor:'西区1#区域',show:false},
			      		{floor:'西区2#区域',show:false},
			      		{floor:'东区1#区域',show:false},
			      		{floor:'东区2#区域',show:false},
			      		{floor:'东区3#区域',show:false}
			      	];	
			  that.iteme = itemeL;
			  break;
			default:
			  var itemeL = [{floor:4,show:true},
			      		{floor:3,show:false},
			      		{floor:2,show:false},
			      		{floor:1,show:false},
			      		{floor:-1,show:false},
			      		{floor:-2,show:false}
			      	];	
			  that.iteme = itemeL;
			}
		},
	  	methods: {
	  		gtFloor (value){
	  			for (var i = 0; i < this.iteme.length; i++) {
	  				this.iteme[i].show=false;
	  			}
	  			value.show = true;
	  			bus.$emit('floorMeet',value)
	  		}
  		}
	}
</script>
<style type="text/css" scoped>
	ul{
		padding: 0;
		margin: 0;
	}
	.floor{
		min-height: 820px;
		border-right:solid 1px #698297;
	}
	.floorItem{
		background-color: red;
	}
	.floorI{
		font-size: 20px;
		position: relative;
		right: 10px;
	}
	ul li{
		height: 55px;
		line-height: 55px;
		cursor: pointer;
	}
	.succse{
		background-color: #4e5775;
		opacity: 0.8;
	}
</style>