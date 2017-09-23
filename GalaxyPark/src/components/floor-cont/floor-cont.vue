<template>
    <div class="floorm_cont">
  		<div :style="{  top: key.x + 'px' ,left:key.y+'px' }" v-for="(key , value) in floorItem">
  			 <img v-if="key.status==0" class="foolr_imgf" src="../../assets/icon-fan.png" />
  			 <img v-if="key.status==1" class="foolr_imgf" src="../../assets/icon-fanr.png" />
  			 <img v-if="key.status==2" class="foolr_imgf" src="../../assets/icon-fan.png" />
  			<div :class="key.status==1 ? 'red_color' : '' ">{{ key.name }}</div>
  		</div>
  		<div class="floor-icon">
  			<div>
  				<img src="../../assets/icon-fan.png"><span>运行</span>
  			</div>
  			<div>
  				<img src="../../assets/icon-fan.png"><span>停止</span>
  			</div>
  			<div>
  				<img src="../../assets/icon-fanr.png"><span style="color:#ca391c;">故障</span>
  			</div>
  		</div>  	
  	</div>
</template>
<style type="text/css" scoped>
	.floorm_cont{
	  width: 80%;
	  height: 100%;
	  margin-top: 70px;
	  margin-left: 10%;
	  background-image: url(../../assets/icon-sbf.png);
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
	.floor-icon > div>*{
		float: left;		
	}
	.floor-icon > div > span{
		height:1em;
		line-height:1em;
		top:0;
		bottom:0;
		margin:auto 0;
		position:absolute;
		left: 4rem;
	}
	.red_color{
		color: #ca391c;
	}
</style>
<script type="text/javascript">
export default {
	name: 'floorCont',
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
		console.log(this.floorMe); 
  	},
  	methods: {

	}
}
</script>