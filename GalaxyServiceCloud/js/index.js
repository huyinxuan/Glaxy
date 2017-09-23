$(document).ready(function($) {
	function init(){ //初始化操作
		$('.model').css('display','none');
		$('.cover').css('display','none');
		forImg();
	}
	init();

	//迭代图片
	function forImg(){
		var html= "";
		for (var i = 0; i < 10; i++) {
			html +='<li data-value="'+i+'">\
                        <a href="javascript:void(0)">\
                            <img class="getHtml" data-value="'+i+'" style="width: 100%" src="./img/icon-page'+i+'.jpg">\
                        </a>\
                    </li>';
		}
		$('.md_img ul').append(html);
	}

	//展示mode 
	$(document).on('click','.sc_main_right ul li',  function(event) {
		$('.cover').show();
		$('.model').show();
		var index = $(this).attr('data-value');
		showMode(index);
	});


	//图片切换操作
	$('.md_img ul li').on('click', function(event) {
		var index = $(this).attr('data-value');
		console.log(index);
		showMode(index);
	});


	//关闭事件
	$(document).on('click', '.md_close', function(event) {
		$('.cover').hide();
		$('.model').hide();
	});
	$(document).on('click', '.cover', function(event) {
		$('.cover').hide();
		$('.model').hide();
	});

	//控制模板的显示	
	function showMode(value){
		var title = '';
		var ct_kj = '';
		var ct_tx1 = '';
		var ct_tx2 = '';
		switch (value ) {
		  case '0' :
		    $('.md_left').css('background-image','url(./img/icon-page'+value+'.jpg)')
		  	title = 'SPACE EXPLOITATION <br/> SERVICES';
		  	ct_kj = '空间开发服务';
		  	ct_tx1 = '依据企业发展的不同阶段，为企业提供多业态 组合的载体服务，同时依据企业需求，为企业 定制符合其自身特性及需求的空间载体。';
		  	ct_tx2 = '某外资金融企业原办公地址位于福田区车公庙，由于对办公环境及用电需求有特殊需求，一直难以找到合适的写字楼。2013年底星河WORLD园区二号地块D座写字楼设计工作启动，星河产业服务团队主动对接该企业进行物业需求调研，最终满足了该企业24小时持续电力供应要求，定制开发了企业所需的办公环境，大大提高了企业运营效率。 '
			$('.md_cont_title').empty().append(title);
			$('.md_ct_kj').empty().append(ct_kj);
			$('.md_ct_tx1').empty().append(ct_tx1);
			$('.md_ct_tx2').empty().append(ct_tx2);
			$(".md_Cont").mCustomScrollbar();
			break;
		  case '1' :
		  	$('.md_left').css('background-image','url(./img/icon-page'+value+'.jpg)')
		  	title = 'INNOVATIVE FINANCIAL <br/> SERVICES';
		  	ct_kj = '创新金融服务';
		  	ct_tx1 = '为入驻企业提供投融资服务、投资管理服务以及产业配套金融服务等多元金融服务。\
投融资服务包括但不限于VC/PE投资（龙岗星河红土创业投资引导基金、深圳市智慧城市产业基金等）、互联网金融、小额贷款、融资租赁、债权/保理融资等服务。\
投资管理服务包括但不限于租金/服务/产权换股权、资产运营增值、资产证券化等。\
产业配套金融服务包括但不限于优质企业数据库、产业资讯服务、投资风险评估、财务咨询服务、舆情监控、商业保险等服务。';
		  	ct_tx2 = '某科技型企业于2015年11月入驻星河WORLD，由于业务发展需要，大约需要600万元的流动资金贷款。该企业固定资产较少，但具有一定的应收账款，且拥有4项发明专利、30余项实用新型专利、外观设计专利。基于以上企业条件，星河产业服务团队对各大银行的信贷产品进行分析，主动对接交通银行龙岗支行，通过知识产权及应收账款的质押协助企业贷款500万元，再通过法人纯信用贷款100万元，帮助企业顺利解决紧急资金需求。';
			$('.md_cont_title').empty().append(title);
			$('.md_ct_kj').empty().append(ct_kj);
			$('.md_ct_tx1').empty().append(ct_tx1);
			$('.md_ct_tx2').empty().append(ct_tx2);
			break;
		  case '2' :
		  	$('.md_left').css('background-image','url(./img/icon-page'+value+'.jpg)')
		  	title = 'CONSULTING SERVICES';
		  	ct_kj = '咨询顾问服务';
		  	ct_tx1 = '为企业提供包括但不限于商业模式咨询、技术咨询、市场营销咨询、行政人事咨询、财税咨询、企业管理咨询，企业转型升级以及相关定制服务，帮助企业高效、便捷地获取战略指导及商业智慧。';
			ct_tx2 = '某科技型创业公司于2016年入驻星河WORLD，由于该企业的核心创始成员均为技术背景，缺乏市场营销人才，公司的销售业绩始终难以大幅提升。面临以上问题，星河产业服务团队联合外部战略合作机构（某市场营销公司）协助该企业搭建营销团队、进行营销培训、梳理销售渠道、建立营销激励机制，短短几个月内帮助企业的月销售额从10万元跃升至120万元。'
			$('.md_cont_title').empty().append(title);
			$('.md_ct_kj').empty().append(ct_kj);
			$('.md_ct_tx1').empty().append(ct_tx1);
			$('.md_ct_tx2').empty().append(ct_tx2);
			break;	
		  case '3' :
		  	$('.md_left').css('background-image','url(./img/icon-page'+value+'.jpg)')
		  	title = 'INDUSTRY POLICY <br/> SERVICES';
		  	ct_kj = '产业政策服务';
		  	ct_tx1 = '向入驻企业提供产业政策服务，包括但不限于依据政府现有政策，结合企业实际情况，帮助企业充分享受政府政策；依据企业所属行业及产业环境，通过与政府职能部门沟通，为企业量身定制促进企业发展的产业政策。';
		  	ct_tx2 = '某创业型企业于2015年9月入驻星河WORLD，产品正处于研发后期与市场早期之间。由于该企业拥有较为先进的技术，结合深圳市科创委创业资助项目，星河产业服务团队协助企业进行政策解读和申报规划，配合编制可研报告，收集项目材料，配合项目答辩和项目现场考察等，最终帮助企业成功获取创业资助100万元资金。';
			$('.md_cont_title').empty().append(title);
			$('.md_ct_kj').empty().append(ct_kj);
			$('.md_ct_tx1').empty().append(ct_tx1);
			$('.md_ct_tx2').empty().append(ct_tx2);
			break;
		  case '4' :
		  	$('.md_left').css('background-image','url(./img/icon-page'+value+'.jpg)')
		  	title = 'INTELLECTUAL <br/> PROPERTY RIGHTS <br/> PLANNING AND  <br/> QUALIFICATION <br/> MANAGEMENT SERVICES';
		  	ct_kj = '知识产权规划及资质管理服务';
		  	ct_tx1 = '依据企业技术及研发战略，提供知识产权规划服务，商标申报服务，国家高新企业认定、国家重点软件企业认定、国家驰名商标、广东省著名商标/驰名商标、深圳市软件企业认定、深圳市自主创新产品认定等各项资质认定服务。';
		  	ct_tx2 = '某科技型企业于2016年2月入驻星河WORLD，企业每年投入研发经费达千万余元，但每年申请的知识产权不超过10件，且偶尔发生知识产权诉讼。基于以上情况，星河产业服务团队协同外部战略合作机构，对企业进行知识产权培训和案例分享，协助其建立专利申报激励制度。该企业的知识产权意识迅速提升，截至目前，正在申请发明专利15项、其他专利60余项，极大提升了企业研发的核心竞争力，有效规避了知识产权诉讼纠纷。';
			$('.md_cont_title').empty().append(title);
			$('.md_ct_kj').empty().append(ct_kj);
			$('.md_ct_tx1').empty().append(ct_tx1);
			$('.md_ct_tx2').empty().append(ct_tx2);
			break;
		  case '5' :
		  	$('.md_left').css('background-image','url(./img/icon-page'+value+'.jpg)')
		  	title = 'GOVERNMENT AFFAIRS <br/> SERVICES';
		  	ct_kj = '高级政务服务';
		  	ct_tx1 = '基于企业管理需要，通过整合政府及专业机构资源，为企业提供工商注册及变更代办、财务记账、税务申报、环评检测、消防验收等各项政务服务及各项前置审批服务。';
		  	ct_tx2 = '某企业于2015年10月签约星河WORLD，2016年1月入驻过程中遇到注册地变更、税务申报、社保及公积金缴纳等实际问题。针对上述问题，星河产业服务团队及时响应，通过深圳市行政服务中心及政府官网了解办事流程及办理资料等，帮助企业顺利办理政务手续，快速适应了新的办公环境。';
			$('.md_cont_title').empty().append(title);
			$('.md_ct_kj').empty().append(ct_kj);
			$('.md_ct_tx1').empty().append(ct_tx1);
			$('.md_ct_tx2').empty().append(ct_tx2);
			break;	
		  case '6' :
		  	$('.md_left').css('background-image','url(./img/icon-page'+value+'.jpg)')
		  	title = 'TECHNICAL AND HUMAN  <br/> RESOURCES SERVICES';
		  	ct_kj = '技术及人才服务';
		  	ct_tx1 = '为入驻企业提供的技术服务主要是指不仅可为行业企业提供技术沙龙服务，同时可为企业提供技术转移服务，从而促进企业技术研发的发展。';
		  	ct_tx2 = '2016年3月园区首次举办大型人才专场招聘会，当日逾30家企业参与，现场面试人员近500人，达成录用意向的共计34人，极大地解决了园区企业的人才之急。为持续帮助企业提供更专业的人力资源支持，4月星河WORLD还邀请星河集团人力总监为园区企业HR开展“面试官工作坊”HR沙龙活动，培训满意度超过90%。';
			$('.md_cont_title').empty().append(title);
			$('.md_ct_kj').empty().append(ct_kj);
			$('.md_ct_tx1').empty().append(ct_tx1);
			$('.md_ct_tx2').empty().append(ct_tx2);
			break;
		case '7' :
			$('.md_left').css('background-image','url(./img/icon-page'+value+'.jpg)')
		  	title = 'TRAINING AND  <br/> EDUCATION SERVICES';
		  	ct_kj = '培训及教育服务';
		  	ct_tx1 = '依托专业培训机构及高校资源，结合企业基层、中层及高层需求，在园区内开展有针对性的、快速提高受训者综合技能的培训课程。同时，为受训者创造一个集交流、互动、资源共享的环境。';
		  	ct_tx2 = '“营改增”政策全面实施之后，2016年星河产业服务团队联合战略合作机构神州易桥公司，为园区入驻企业提供了一场“营改增”税收政策解读及税务实操培训活动，吸引了30余家企业50余人到场参与，及时为企业解答税务操作中的困惑，实现“营改增”完美过渡。\
联盟商学院精品课程：上市培育及投融资系列、资助政策解读系列、财税筹划系列、知识产权及法律系列、企业管理系列、人才服务系列。  ';
			$('.md_cont_title').empty().append(title);
			$('.md_ct_kj').empty().append(ct_kj);
			$('.md_ct_tx1').empty().append(ct_tx1);
			$('.md_ct_tx2').empty().append(ct_tx2);
			break;
		  case '8' :
		  	$('.md_left').css('background-image','url(./img/icon-page'+value+'.jpg)')
		  	title = 'MULTI-FUNCTIONAL   <br/> PUBLIC SERVICES';
		  	ct_kj = '多功能公共服务平台';
		  	ct_tx1 = '基于园区企业共性需求及资源整合，通过外部引进与内部共建的方式，提供六大战略新兴产业及未来五大产业领域内的重点实验室、工程中心、技术中心、检测平台、行业培训机构等专业服务平台。';
		  	ct_tx2 = '某入驻企业为上市公司，其研发设备原值达千万元，主要为其公司产品提供检测、试制服务。基于企业研发设备利用状况，星河产业服务团队联合龙岗区科技创新局采用科技研发券的方式，由政府购买服务，然后给同行企业提供产品检测、试制服务，切实整合了优质资源，实现了资源的有效利用，发挥了联盟商务价值。';
			$('.md_cont_title').empty().append(title);
			$('.md_ct_kj').empty().append(ct_kj);
			$('.md_ct_tx1').empty().append(ct_tx1);
			$('.md_ct_tx2').empty().append(ct_tx2);	
			break;
			case '9' :
			$('.md_left').css('background-image','url(./img/icon-page'+value+'.jpg)')
		  	title = '"O2O" SERVICES <br/> “O2O”服务平台';
		  	ct_kj = '多功能公共服务平台';
		  	ct_tx1 = '通过“互联网+”手段，将线下产业服务及商务服务等，通过PC、移动互联网等方式，实现传统线下服务的“线上化”。目前星河WORLD园区APP已上线。';
		  	ct_tx2 = '基于星河WORLD APP平台，星河产业服务团队牵手合作商家“本来生活”开启园区“早鸟计划”，针对每家注册并使用APP的企业，持续一周为企业最早打卡的员工提供一盒精品猕猴桃，为园区入驻企业送去夏日清凉和甜蜜。';
			$('.md_cont_title').empty().append(title);
			$('.md_ct_kj').empty().append(ct_kj);
			$('.md_ct_tx1').empty().append(ct_tx1);
			$('.md_ct_tx2').empty().append(ct_tx2);	
			break;																								
		}	
	}


});