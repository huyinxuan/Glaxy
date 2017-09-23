<template>
    <div class="floorm_cont">
  		<div class="ligh_text">
  			<p>灯筒开</p>
  			<p>灯筒关</p>
  			<p>灯带开</p>
  			<p>灯带关</p>
  		</div>
  		<div class="hlo">
  			<p  class="wh20">回路2</p>
  		</div>
  		<div class="hlt">
  			<p class="wh20">回路1</p>
  		</div>  	
  	</div>
</template>
<style type="text/css" scoped>
	.floorm_cont{
	  width: 80%;
	  height: 100%;
	  margin-top: 70px;
	  margin-left: 10%;
	  background-image: url(../../assets/icon-lmap.png);
	  background-repeat: no-repeat;
	  background-size: 100% 100%;  
	  position: relative;
	}
	.floorm_cont > div{
		position: relative;
	}
	.floor-icon{
		position: absolute;
		width: 120px;
		top: -320px;
		left: 900px;
	}
	.floor-icon > div{
		width: 110px;
		margin-top: 20px;
		position: relative;
		overflow: hidden;
		white-space:nowrap;
	}
	.ligh_text{
		position: relative;
		left:910px;
		top: 38px;
		width: 160px;
	}
	p{
		margin: 30px;
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
	.hlo{
		position: relative;
		right: 290px;
		bottom: -100px;
	}
	.hlt{
		position: relative;
		right: 200px;
		bottom: -100px;
	}
</style>
<script type="text/javascript">
export default {
	name: 'lighMap',
	props:['floorMe'],
	data () {
	    return {
	    	floorItem:[{
	    		name:'AHU-001',
	    		status:0,       //0停用   1正常 2故障
	    		x:'20',       //决定定位坐标
	    		y:'-180'
	    	},{
	    		name:'AHU-002',
	    		status:0,
	    		x:'130',
	    		y:'-350'
	    	},{
	    		name:'AHU-003',
	    		status:1,
	    		x:'80',
	    		y:'140'
	    	},{
	    		name:'AHU-004',
	    		status:0,
	    		x:'50',
	    		y:'-170'
	    	},{
	    		name:'AHU-005',
	    		status:0,
	    		x:'30',
	    		y:'10'
	    	},{
	    		name:'AHU-006',
	    		status:0,
	    		x:'150',
	    		y:'0'
	    	}]
	    }
  	},
  	// computed () {
 
        		
  	// },
	watch:{
		'floorMe':function(n,o){
			console.log(this.floorMe);
				// this.$http.get('/api/activity/catelist?type=' + floorMe).then(response => {
		        //   let res = response.body
		        //   if (res.error_code === 0) {
		        //     that.activities = res.data
		        //     this.loaded = true
		        //   } else {
		        //     that.activities = []
		        //     console.log(res.error_msg)
		        //   }
		        // }, () => {
		        //   console.log('请求数据错误')
		        // })
		}
	},
  	mounted (){
		//console.log(this.floorMe); 
  	},
  	methods: {

	}
}
</script>