$(function(){
	// 顶部收藏区域点击关闭效果
	$("#top_bg #top_box #top_a").add("#top_bg #top_box #close").click(function(){
		$("#top_bg").hide();
	});
	
})

$(function(){
	// 顶部左侧菜单隐藏和显示
	$("#logo_search_box #u_center").hover(function(){ 
		// 个人中心
		$(this).addClass("hover");
		$(this).siblings(" #ucenter_hide").slideDown(100);
	},function(){
		$(this).removeClass("hover");
		$(this).siblings(" #ucenter_hide").hide();
	});
	$("#logo_search_box #ucenter_hide").hover(function(){
		$(this).show();
		$(this).siblings(" #u_center").addClass("hover");
	},function(){
		$(this).hide();
		$(this).siblings(" #u_center").removeClass("hover");		
	});
	$("#logo_search_box #top_left_menu #history").click(function(){
	    //浏览历史
		if($(this).siblings(".hide_box").is(":hidden")){
			$(this).addClass("hover");
			$(this).siblings(".hide_box").show();
		}else{
			$(this).removeClass("hover");
			$(this).siblings(".hide_box").hide();
		}
	});
	// 顶部右侧菜单隐藏和显示
	// 顶部搜索区域
	$("#logo_search_box #search_box #btn").hover(function(){
         $(this).css("background","url(images/bg_content.png)no-repeat -353px -51px");
	},function(){
         $(this).css("background","none");
	});

	// 每日新鲜优惠包邮送到家效果
	 $('#menu_box #menu li #everyday').hover(function(){
	 	$(this).find('#cover').css('background','none');
	 },function(){
	 	$(this).find('#cover').css('background','#FEFBEA');
	 })

	 $('#menu_box #menu li #everyday #cover').click(function(){
	 	$('#menu_box #menu li #everyday').hide();
	 })

	 // 左侧菜单鼠标滑过效果
	 $("#main #left_menu_flash #left_menu #left_ul li").hover(function(){
	 	$("#main #left_menu_flash #left_menu #left_ul li").removeClass("li_hover");
	 	$("#main #left_menu_flash #left_menu .hide_box").hide();
	 	$(this).addClass("li_hover");
	 	var index = $(this).index();
	 	$("#main #left_menu_flash #left_menu .hide_box").eq(index).show();
	 },function(){
 		$(this).removeClass("li_hover");
 		var index = $(this).index();//获得鼠标移入了第几个li
	 	$('#main #left_menu_flash #left_menu .hide_box').eq(index).hide();
	 })
    $('#main #left_menu_flash #left_menu .hide_box').hover(function(){
	 	$(this).show();
	 	$('#main #left_menu_flash #left_menu #left_ul li').eq($(this).index('#main #left_menu_flash #left_menu .hide_box')).addClass('li_hover');
	 },function(){
	 	$(this).hide();
	 	$('#main #left_menu_flash #left_menu #left_ul li').eq($(this).index('#main #left_menu_flash #left_menu .hide_box')).removeClass('li_hover');
	 });

});

// 图片轮播区域
$(function(){
var paixu=0;
var tingzhi=setInterval(lunbo,2500);	
function lunbo(){
	paixu++;
	if(paixu==7){
      paixu=0;
	}
	$("#main #left_menu_flash #flash_box img").eq(paixu).fadeIn().siblings("#main #left_menu_flash #flash_box img").hide();
	$("#main #left_menu_flash #flash_box ul li").eq(paixu).addClass("hover").siblings("#main #left_menu_flash #flash_box ul li").removeClass("hover");
};
$("#main #left_menu_flash #flash_box ul li").mouseover(function(){
	clearInterval(tingzhi);
	paixu=$(this).index();
	$("#main #left_menu_flash #flash_box img").eq(paixu).fadeIn().siblings("#main #left_menu_flash #flash_box img").hide();
	$("#main #left_menu_flash #flash_box ul li").eq(paixu).addClass("hover").siblings("#main #left_menu_flash #flash_box ul li").removeClass("hover");
});
$("#main #left_menu_flash #flash_box ul li").mouseout(function(){
	tingzhi=setInterval(lunbo,2500);
});
});
/*小图轮换区域*/
$(function(){
     setInterval(lit_autoRun,2000);//设立定时器
	 var lit_sta = 0;
	 function lit_autoRun(){//自动切换小图片
	 	lit_sta++;//自增1
	 	lit_sta = (lit_sta == 5)?0:lit_sta;//判断是否到最后一张
	 	var new_left = -lit_sta*230;//计算pic_box的新left值
	 	$('#main #left_menu_flash #litter_pic #pic_box').animate({'left':new_left+'px'},100);
	 }

	 $('#main #left_menu_flash #litter_pic p a').click(function(){
	 	if($(this).index() == 0){
	 		if(lit_sta != 0){
	 			lit_sta--;
	 		}
	 		
	 	}else{
	 		if(lit_sta != 4){
	 			lit_sta++;
	 		}
	 	}

	 	var new_left = -lit_sta*230;//计算pic_box的新left值
	 	$('#main #left_menu_flash #litter_pic #pic_box').animate({'left':new_left+'px'},100);
	 })
})
//团购网+商城名站区域效果
$(function(){
	$('#main #tgw_box ul li').hover(function(){
          $(this).find('.hide_box').show();
	},function(){
          $(this).find('.hide_box').hide();
	})

})
// <!-- 商品区块展示 -->隐藏效果
$(function(){
	$("#main .l_list_box .shop_list .shop").hover(function(){
		// 倒计时效果
	 	setInterval(daojishi,1000);//定义倒计时的定时器
	 	var shopObj = $(this);
	 	daojishi();
	 	function daojishi(){
	 		var end_time = shopObj.attr('time');
		 	var timeObj = new Date();
		 	var now_time = timeObj.getTime();
		 	var differ_time = end_time - now_time;//计算结束时间和现在时间的差距
		 	var day = Math.floor(differ_time/(24*60*60*1000));//计算还剩多少天
		 	differ_time = differ_time%(24*60*60*1000);//获得计算天数之后还剩多少毫秒
		 	var hour = Math.floor(differ_time/(60*60*1000));//计算还剩多少小时
		 	differ_time = differ_time%(60*60*1000);//获得计算小时数之后还剩多少毫秒
		 	var min = Math.floor(differ_time/(60*1000));//计算还剩多少分钟
		 	differ_time = differ_time%(60*1000);//获得计算分钟数之后还剩多少毫秒
		 	var sec = Math.floor(differ_time/(1000));//计算还剩多少秒
		 	shopObj.find('.day').html(day);
		 	shopObj.find('.hour').html(hour);
		 	shopObj.find('.min').html(min);
		 	shopObj.find('.sec').html(sec);
	 	}
	 	
	 	//倒计时效果结束
        $(this).addClass("bg_color");
        $(this).find(".place").addClass("place_hover");
        $(this).find(".cover").add($(this).find(".shop_name")).add($(this).find(".count_down")).add($(this).find(".shop_hide_box")).show();
	},function(){
        $(this).removeClass("bg_color");
    	$(this).find(".place").removeClass("place_hover");
    	$(this).find(".cover").add($(this).find(".shop_name")).add($(this).find(".count_down")).add($(this).find(".shop_hide_box")).hide();
	});

	
	//查看更多鼠标悬停效果
	$('#main .look_more').hover(function(){
		$(this).addClass('more_hover');
	},function(){
		$(this).removeClass('more_hover');
	});

	//左侧跳转区域效果
	function window_change(){//用来计算top和left值的函数
		var jump_box_top = parseInt(($(window).height()-$('#jump_box').height())/2);//计算top值
		var jump_box_left = parseInt(($(window).width()-$('#main').width())/2 - $('#jump_box').width() - 10);//计算left值
	 	$('#jump_box').css({'top':jump_box_top+'px','left':jump_box_left + 'px'})
	}
	window_change();
	$(window).resize(window_change)
})

	
	