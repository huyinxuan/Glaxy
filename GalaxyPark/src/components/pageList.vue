<!-- 分页组件 -->
<template>
	<div class="text-center">	
		<button @click="goPage('-')" class="page rotate" v-if="page > 1">
			<img src="static/img/right.png" alt="">
		</button>
		<button class="page" v-if="page > 5" @click="toPage(lenArray[0], 1)">1</button>
		<button class="page" v-if="page > 5" @click="toPage(lenArray[1], 2)">2</button>
		<span v-if="page > 5"> ... </span>		
		<button v-if="page <= 5 && lenArray && i < 6 && len.show" @click="toPage(len,i + 1)" :class="page == i+1 ? 'page active' : 'page'" v-for="(len,i) in lenArray">{{i + 1}}</button>		

		<button v-for="p in pageList" @click="setPageNum(p.num)" v-if="page > 5 && p.num <= (pageLen)" :class="p.active ? 'active page' : 'page'">{{p.num}}</button>

		<span v-if="pageLen > 6 && page <= pageLen - 3"> ... </span>
		<button @click="goPage('+')" class="page" v-if="page < pageLen">
			<img style="vertical-align: top;" src="static/img/right.png" alt="">
		</button>
	</div>
</template>

<style scoped>
	.page{
		font-size: 16px;
		color: black;
		background: transparent;
		padding: 0px 5px;
	    vertical-align: top;
	}

	.page:hover{
		color: #009cff
	}

	.page.active{
		color: #009cff
	}

	.rotate{
		transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
	}
</style>

<script>	
	export default{
		props:['count','pageNum'],
		data(){
			return {
				// 页码列表
				page:1,
				//页码长度
				pageLen:0,
				// 页码长度列表
				lenArray: []
			}
		},
		watch:{
			'page':function(n,o){
				this.$emit('PAGE',n)
			},
			'count':function(n,o){
				this.pageActive()
			}
		},
		computed: {
			pageList() {
				return [{num: this.page - 2, active: false}, {num: this.page - 1, active: false}, {num: this.page, active: true}, {num: this.page + 1, active: false}, {num: this.page + 2, active: false}]
			}
		},
		mounted(){
			this.pageActive()
		},
		methods:{		
			setPageNum(num) {
				this.page = num
			},	
			pageActive(){		
				this.pageLen = Math.ceil(this.count / this.pageNum)
				this.lenArray = new Array(6).fill({active: false, show: true})
				this.lenArray.forEach((e, i)=>{
					if(i + 1 > this.pageLen) {
						e.show = false
					}
				})
				this.page = 1	
			},
			toPage(ele,num){
				for(let i = 0;i<6;i++){					
					this.lenArray[i].active = false
				}
				ele.active = true
				this.page = num
			},
			goPage(to){
				if(to == '-')
					this.page -= 1 
				else if(to == '+')
					this.page += 1 
			}
		}
	}
</script> 
