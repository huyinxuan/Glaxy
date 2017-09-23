<template>
    <div class="floorm_cont">
  		<div class="modi_wd120"  :style="{  top: key.x + 'px' ,left:key.y+'px' }" v-for="(key , value) in floorItem">
  			<img  class="foolr_imgf" src="../../assets/icon-moty.png" />
  			<div class="wh20">{{ key.name }}</div>
  			<div v-if="key.status==1" class="hideMode">
				<div style="position:absolute;top:0px; left:200px; z-index: 500; background-color: #fff">
					<video src="../../video/movie.ogg" controls="controls">
						your browser does not support the video tag
					</video>
				</div>
			</div>
  		</div>	
  	</div>
</template>
<style type="text/css" scoped>
	.floorm_cont{
	  width: 80%;
	  height: 620px;
	  margin-top: 100px;
	  margin-left: 10%;
	  background-image: url(../../assets/icon-sbf.png);
	  background-repeat: no-repeat;
	  background-size: 100% 100%;  
	  position: relative;
	}
	.floorm_cont > div{
		position: relative;
	}

	.modi_wd120{
		width: 120px;
	}
	.floorm_cont .fire_mune{
		vertical-align: middle;
		position: absolute;
		top:0px;
		left: 830px;
	}
	.fire_mune>div{
		margin-bottom: 20px;
	}
	.fire_mune>div>span{
		margin-left: 10px;
	}
	.fire_mune *{
		vertical-align: middle;
	}
</style>
<script type="text/javascript">
export default {
	name: 'floorCont',
	props:['floorMe'],
	data () {
	    return {
	    	floorItem:[{
	    		name:'A-1F-03',
	    		status:0,       //0停用   1正常 2故障
	    		x:'20',       //决定定位坐标
	    		y:'150'
	    	},{
	    		name:'A-1F-03',
	    		status:0,
	    		x:'100',
	    		y:'100'
	    	},{
	    		name:'A-2F-03',
	    		status:1,
	    		x:'-150',
	    		y:'450'
	    	},{
	    		name:'A-1F-02',
	    		status:0,
	    		x:'-100',
	    		y:'450'
	    	},{
	    		name:'A-1F-04',
	    		status:2,
	    		x:'-20',
	    		y:'240'
	    	}]
	    }
  	},
  	// computed () {
 
        		
  	// },
	watch:{
		// 'floorMe':function(n,o){
		// 	console.log(this.floorMe);
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
		//}
	},
  	mounted (){
		//console.log(this.floorMe); 
  	},
  	methods: {

	}
}
</script>