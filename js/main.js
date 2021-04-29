//进度条动画
var progress = 0;
var orientation = 0;
var percent;
var handFlag = true;
var t;
var ishow = true;
var isPlay = true;
var scale = 100;
var isRotate = true;
var scalePercent;
var scanTimeout;
var firstInterval, sencondInterval, thirdInterval, fourthInterval;
var scanmeAnim;
var gameShow = false;
var frameTop,frameLeft,frameWidth,frameHeight;

// 首先，定义一个摇动的阀值
var SHAKE_THRESHOLD = 1000;
// 定义一个变量保存上次更新的时间
var last_update = 0;
// 紧接着定义x、y、z记录三个轴的数据以及上一次出发的时间
var x;
var y;
var z;
var last_x;
var last_y;
var last_z;

// 为了增加这个例子的一点无聊趣味性，增加一个计数器
var count = 0;
//var randomNum;
var drinkType = ['可乐','雪碧','美年达','芬达','阿萨姆','恒大冰泉','营养快线','格瓦斯','花生奶'];
var drinkTypeImg = ['coco.png','xuebi.png','meinianda.png','fenda.png','ashamu.png','bingquan.png','yinyangkuaixian.png','gewasi.png','huashengnai.png'];
var imgArray = [
		'images/logo.png',
		'images/btn_start.png',
		'images/coco.gif',
		'images/doupeng.gif',
		'images/hand.png',
		'images/huoyansan.png',
		'images/getTorken.png',
		'images/open_icon.png',
		'images/scanflash.png',
		'images/scanme1.png',
		'images/scanme2.png',
		'images/scanme3.png',
		'images/scantext.gif',
		'images/secondPeopleChat.png',
		'images/screen1Chat.png',
		'images/screen1dawang1.png',
		'images/screen1dawang2.png',
		'images/screen1dawang3.png',
		'images/screen1dawang4.png',
		'images/screen4Plus.jpg',
		'images/red_hand.png',
		'images/scan.gif',
		'images/screen1.jpg',
		'images/screen2.jpg',
		'images/screen3.jpg',
		'images/screen4.jpg',
		'images/screen5.jpg',
		'images/secondGif.gif',
		'images/youbao.gif',
		'images/youbao_shadow.png',
		'images/youbaoChat.png',
		'images/text_logo.png',
		'images/tip.png',
		'images/walk.gif',
		'images/wo.gif',
		'images/walk_and_wo.gif',
		'images/wo_and_walk.gif',
		'images/meto.png',
		'images/yaoyiyao.png',
		'images/screen6Duang.png',
		'images/drinkImg/ashamu.png',
		'images/drinkImg/bingquan.png',
		'images/drinkImg/coco.png',
		'images/drinkImg/fenda.png',
		'images/drinkImg/gewasi.png',
		'images/drinkImg/huashengnai.png',
		'images/drinkImg/meinianda.png',
		'images/drinkImg/xuebi.png',
		'images/drinkImg/yinyangkuaixian.png',
		'feidegenggao/skj/cs_jmp.png',
	]
	//window.onload = function(){
	//	document.addEventListener('touchmove',function(event){
	//      event.preventDefault();
	//  },false);
	//
	//}

$(function() {
	selectDrink();
	clickDrink();
//	scrollFromRight();
	$('#closeDrinkWindow').click(function(){
		$('#selectDrink').css('display','none');
		setTimeout("testAnim('bounceIn','#scanme1'),showSomething('#scanme1')", 1000)
		setTimeout("testAnim('bounceIn','#scanme2'),showSomething('#scanme2')", 3000)
		setTimeout("testAnim('bounceIn','#scanme3'),showSomething('#scanme3')", 5000)
		setTimeout("$('#thirdBtn').animate({'opacity':1},{duration:1000})", 6000)
		scanmeAnim = setInterval('scanme()', 1500);
	})
	//禁用右键
	$(document).bind('contextmenu', function() {
		return false;
	});
	$('#secondPeople').children('img')[0].src = 'images/secondGif.gif?' + dateStr();
	//禁用touchmove
	document.addEventListener('touchmove', function(event) {
		event.preventDefault();
	}, false);
	//获取屏幕高度
	var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	//		alert(screenWidth+":"+screenHeight);
	var loadContainerHeight = $('#loadContainer').height();
	
	
	var loadContainerTop = screenHeight / 2 - loadContainerHeight / 2 + "px";
	var rotateScreenTop = screenHeight / 2 - 75 + "px";
	$('#loadContainer').css("top", loadContainerTop);
	$('#rotateScreen').css("top", rotateScreenTop);
	
	$('#start_btn').children("img").click(function() {
		//			btnSound();
		
		testAnim('zoomOutUp', '#start_btn');
		testAnim('zoomOutUp', '#huoyansan');
		testAnim('bounceOutRight', '#text_logo');
		setTimeout("$('#dawangSound')[0].play()", 2500)
		setTimeout("hideSomething('#startScreen')", 1000);
		setTimeout("testAnim('bounceIn','#dawang1'),showSomething('#dawang1')", 2500);
		setTimeout("testAnim('bounceIn','#dawang2'),showSomething('#dawang2')", 4000);
		setTimeout("testAnim('bounceIn','#dawang3'),showSomething('#dawang3')", 4500);
		setTimeout("testAnim('bounceIn','#dawang4'),showSomething('#dawang4')", 6000);
		setTimeout("testAnim('zoomOut','#dawangXunsan'),hideSomething('#dawangXunsan')", 10000);
		setTimeout("visibleShow('#dawang1')", 5000);
		setTimeout("visibleShow('#dawang2')", 6000);
		setTimeout("visibleShow('#dawang3')", 7000);
		setTimeout("firstScreenAnim(),chatKuangMove()", 1500);
		//			setTimeout('')
		//			setTimeout("testAnim('bounceOutRight','#text_logo')",1000);
		//			var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		//			var styleHeight = $('.style').height();
		//			var styleMarginTop = h / 2 - styleHeight / 2 + "px";
		//			$('.style').css('margin-top', styleMarginTop);
		clearTimeout(t);
		//			$('#startScreen').hide({
		//				duration: 1,
		//				easing: "linear",
		//				complete: function() {
		//					setTimeout("firstScreenAnim()", 100);
		//					print("complete");
		//				}
		//			})

	})

	$('#thirdBtn').children('img').click(function() {
		//			btnSound();
		clearInterval(scanmeAnim);
		fadeOutAnim('#thirdScreen');
		setTimeout("hideSomething('#thirdScreen')", 1100);
		setTimeout("fadeInAnim('#fourthScreen')", 1100);
		//			showAndHide('#thirdScreen', '#fourthScreen');
		setTimeout("init()", 0);

	})
	startProgress();



})

//开始进度条

function startProgress() {
	for (var i = 0; i < imgArray.length; i++) {
		preLoadImg(imgArray[i]);
	}
}
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//监控屏幕旋转
function rotateScreenEvent() {
		var iw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var ih = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		
		if(gameShow){
			handlergame();
		}
		if (iw < ih) {
			showSomething('#rotateBg');
			musicPause();
			$('#fireSound')[0].pause();
			$('#bg_music').css('display', 'none');
			isRotate = true;
			



		} else {
			if (isRotate) {
				hideSomething('#rotateBg');
				musicPlay();
				$('#fireSound')[0].play();
				$('#bg_music').css('display', 'block');
				isRotate = false;
				
			}

		}
		setTimeout('rotateScreenEvent()', 1);
	}
//gameshowOrnot
function handlergame(){
	var iw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var ih = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	frameWidth = $('#flyHigh').width();
	frameHeight = $('#flyHigh').height();
	frameWidth = $('#flyHigh').width();
	frameLeft = iw / 2 - frameWidth/2 + "px";
	frameTop = ih/2-frameHeight/2+"px";
	$('#flyHigh').css("left", frameLeft);
	$('#flyHigh').css("top", frameTop);
	if(iw<ih){
		$('#flyHigh').css('display','block')
	}else{
		$('#flyHigh').css('display','none')
	}
}

	//判断屏幕状态

function screenOrientationListener() {

		try {
			var iw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			var ih = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			//		if(iw!=screenWidth){
			if (iw > ih) {
				hideSomething('#loadContainer');
				//				hideSomething('#rotateScreen');
				testAnim('zoomInDown', '#firstScreen');
				showSomething('#firstScreen');
				setTimeout("testAnim('rubberBand', '#huoyansan')", 1000);
				setTimeout("$('#duangSound')[0].play()", 1000);
				setTimeout("testAnim('swing', '#start_btn')", 2000);
				$('#fireSound')[0].play();
				setTimeout("showSomething('#walk')", 1000);



				//				testAnim('zoomInDown','#start_btn');
				//				testAnim('zoomInDown','#huoyansan');
				startMusic();
				//				loadCss( "css/loading.css" ); 
				rotateScreenEvent();
				isRotate = false;
			} else {
				if (ishow) {
					showAndHide('#loadContainer', '#rotateBg');
					console.log("show");
					ishow = false;
				}

				t = setTimeout('screenOrientationListener()', 1);
			}
			//		}
		} catch (e) {
			//TODO handle the exception
			alert("网络错误，请刷新" + e);
		}
		//	console.log(iw+ih);

	}
	//播放音乐

function startMusic() {
		musicPlay();
		$(function() {
			$('#controlBgMusic').click(function() {
				//			btnSound();
				if (isPlay) {
					musicPlay();
				} else {
					musicPause();
				}


			})
		})
	}
	//play

function musicPlay() {
		$('#myMusic').trigger('play');
		$('#myMusic')[0].volume = 1;
		$('#myMusic')[0].loop = true;
		$('#bg_music').css('display', 'block');
		$('#controlBgMusic').addClass('rotate');
		isPlay = false;
	}
	//pause

function musicPause() {
		$('#myMusic').trigger('pause');
		$('#controlBgMusic').removeClass('rotate');
		isPlay = true
	}
	//按钮音乐

function btnSound() {
		$('#btn_sound').load();
		$('#btn_sound').trigger('play');
	}
	//预加载图片方法

function progressPlus() {
	progress += 2;
	percent = progress + "%";
	//	console.log(percent)
	$(function() {
		$('#bar').css("width", percent);
		$('#percentNum')[0].innerHTML = progress + "%"
			//		var start = setTimeout("startProgress()", 100);
		if (progress == 100) {
			//			clearTimeout(start);
			screenOrientationListener();
		}

	})
}

//function vw(iw) {
//	$('#text_logo').css('padding-left', 0.78 * iw);
//	$('#text_logoImg').css('width', 0.7 * iw);
//	$('#huoyansanImg').css('width', 0.5 * iw);
//	$('#start_btnImg').css('width', 0.15 * iw);
//	$('#loadingBar').css('width', 0.6 * iw);
//	$('#loadingBar').css('width', 0.6 * iw);
//	$('#loadingBar').css('width', 0.6 * iw);
//	$('#loadingBar').css('width', 0.6 * iw);
//}

function preLoadImg(url, callback) {
		var img = new Image();
		img.src = url;
		if (img.complete) {
			console.log("已经加载");
			progressPlus()
			return;
		}
		img.onload = function() {
			console.log("加载完成");
			progressPlus()
				//		location.href="http://www.baidu.com";
		}
	}
	//第一屏人物动画

function chatKuangMove() {
	$(function() {
		$('#dawangXunsan').animate({
			"left": "30vw"
		}, {
			duration: 15000
		})
	})
}

function firstScreenAnim() {
		$(function() {
			$('#footSound')[0].play();
			$('#walk').animate({
				"left": "50vw"
			}, {
				duration: 14000,
				complete: function() {
					$('#footSound')[0].pause();
					showAndHide('#ce_walk', '#wakl_and_wo_people');
					setTimeout("showAndHide('#wakl_and_wo_people','#stayPeople')", 200);
					setTimeout("showSomething('#chatKuang')", 600);
					setTimeout("testAnim('bounceIn','#chatKuang')", 500);
					setTimeout("showSomething('#hand')", 2000);
					var handFlash = setInterval("opacityFlash('#hand')", 3000);
					$('#hand').click(function() {
						//						btnSound();
						clearInterval(handFlash);
						hideSomething("#hand");
						//hideSomething("#chatKuang");
						testAnim('zoomOut', '#chatKuang')
							//hideSomething(this);
						hideSomething("#stayPeople");
						showSomething("#zheng_zhuan_ce");
						setTimeout("showAndHide('#zheng_zhuan_ce','#ce_walk')", 400);
						setTimeout("move('#walk','70vw',3000,'#firstScreen','#secondScreen')", 500);




					})

				}
			});
		})
	}
	//占位显示

function visibleShow(arg) {
	$(arg).css('visibility', 'hidden');
}

//隐藏显示

function showAndHide(hideObj, showObj) {
		$(hideObj).hide();
		$(showObj).show();
	}
	//显示something

function showSomething(id) {
		$(id).show(1);
	}
	//移动方法

function move(obj, x, time, thisScreen, nextScreen) {
		$('#footSound')[0].play();
		$(function() {
			$(obj).animate({
				'left': x
			}, {
				duration: time,

			})
			setTimeout("firstAnimComplete()", 2000);
		})
	}
	//第一镜人物动画完成执行函数

function firstAnimComplete() {
		$('#walk').css('display', 'none');
		//	fadeOutAnim(thisScreen);
		testAnim('fadeOutLeft', '#firstScreen')
		setTimeout("hideSomething('#firstScreen')", 400);
		//					setTimeout("fadeInAnim('#secondScreen')",2100);
		setTimeout("testAnim('fadeInRight','#secondScreen')", 200);
		setTimeout("showSomething('#secondScreen')", 200);
		setTimeout("secondSreen()", 1500);
		setTimeout("showSomething('#secondPeople')", 1000);
	}
	//第二镜动画

function secondSreen() {
		$(function() {
			$('#secondPeople').animate({
				'left': '15vw'
			}, {
				duration: 1800,
				complete: function() {
					$('#footSound')[0].pause();
					setTimeout("testAnim('bounceInDown','#youbao'),showSomething('#youbao')", 0);
					setTimeout("$('#duangSound')[0].play(),showSomething('#youbao_shadow')", 500);
					setTimeout("showSomething('#secondPeopleChat'),testAnim('bounceIn','#secondPeopleChat')", 1000);
					setTimeout("testAnim('bounceIn','#youbao_chat'),showSomething('#youbao_chat')", 3500);
					setTimeout("testAnim('tada','#youbao'),testAnim('tada','#youbao_shadow')", 2000);
					$(function() {
						$('#youbao').children('img').click(function() {
							//							btnSound();
							//showAndHide('#secondScreen', '#thirdScreen')
							//fadeOutAnim('#secondScreen');
							setTimeout("hideSomething('#secondScreen')", 0);
							setTimeout("fadeInAnim('#thirdScreen')", 100);
							setTimeout("testAnim('bounceIn','#torken'),showSomething('#torken')", 1000)
							setTimeout("testAnim('zoomIn','#selectDrink'),showSomething('#selectDrink')", 1800)
							
							//							scaleHide('#secondScreen');
							//							clearInterval(secondInter);
						})
					})
				}
			})
		})
	}
	//扫我动画

function scanme() {
		testAnim('tada', '#scanme1');
		testAnim('tada', '#scanme2');
		testAnim('tada', '#scanme3');
		setTimeout('removeClassEvent(scanme1),removeClassEvent(scanme2),removeClassEvent(scanme3)', 1000);

	}
	//remove class

function removeClassEvent(arg) {
		$(arg).removeClass('tada animated');
	}
	//人物跳起

function jump(arg, top) {
		$(arg).animate({
				'top': top
			}, {
				duration: 100,
			})
			//testAnim('bounceInDown', '#secondPeople');

	}
	//
	//第四加动画

function fourthScreenPlusFun() {
		removeEventListener('devicemotion',deviceMotionHandler);
		var iw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		showAndHide('#fourthScreen', '#fourthScreenPlus');
		if (iw == 480) scanAnim2();
		if (iw == 568) scanAnim3();
		scanAnim();
		setTimeout('fiveScreen()', 4000)
		setTimeout("$('#scanSound')[0].play()", 3000);
		setTimeout("$('#cocoFallSound')[0].play()", 4000);
		//	setInterval('scanAnim()',11000);
	}
	//扫描器动画

function scanAnim() {
	$('#scanFlash').animate({
			'padding-top': '27vw'
		}, {
			duration: 2000,
			complete: function() {
				$('#scanFlash').animate({
					'padding-top': '16vw'
				}, {
					duration: 2000
				})
			}
		})
		//	scanTimeout=setTimeout('scanAnim()',4000);
}

function scanAnim2() {
	$('#scanFlash').animate({
			'padding-top': '27vw'
		}, {
			duration: 2000,
			complete: function() {
				$('#scanFlash').animate({
					'padding-top': '40vw'
				}, {
					duration: 2000
				})
			}
		})
		//	scanTimeout=setTimeout('scanAnim()',4000);
}

function scanAnim3() {
		$('#scanFlash').animate({
				'padding-top': '27vw'
			}, {
				duration: 2000,
				complete: function() {
					$('#scanFlash').animate({
						'padding-top': '20vw'
					}, {
						duration: 2000
					})
				}
			})
			//	scanTimeout=setTimeout('scanAnim()',4000);
	}
	//第五镜画面

function fiveScreen() {
		//		showAndHide('#fourthScreenPlus', '#fiveScreen');
		//		fadeOutAnim('#fourthScreenPlus');
		//		clearTimeout(scanTimeout);
		testAnim('slideOutUp', '#fourthScreenPlus');
		testAnim('slideInUp', '#fiveScreen');
		setTimeout("hideSomething('#fourthScreenPlus')", 1000);
		//		setTimeout("testAnim('slideInUp','#fiveScreen')", 1100);
		setTimeout("fadeInAnim('#fiveScreen')", 400);
		setTimeout("testAnim('bounceIn', '#duangCoco'),showSomething('#duangCoco')", 1500);
		setTimeout("$('#duangSound')[0].play()", 1500);
		setTimeout("testAnim('bounceOut', '#duangCoco'),hideSomething('#duangCoco')", 4000);
		var fiveCancelInter = setInterval("flash('#five_red_hand')", 1000);
		$(function() {
			$('#five_click_area').children('img').click(function() {
				gameShow=true;
				//				btnSound();
				setTimeout("testAnim('bounceIn', '#meto'),showSomething('#meto')");
				setTimeout("$('#duangSound')[0].play()");
				hideSomething('#five_red_hand');
				clearInterval(fiveCancelInter);
			})
			$('#btnMetoImg').click(function(){
				testAnim('zoomIn', '#sixScreen');
				showSomething('#sixScreen');
				
			})
		})
	}
	//隐藏something

function hideSomething(id) {
	$(id).css("display", "none");
	//	console.log(id);
}

function dateStr() {
	var date = new Date();
	var time = date.getMinutes() + ':' + date.getSeconds();
	return time;
	//	print(time);
}

//显示和隐藏交替
function flash(arg) {
		if (handFlag) {
			$(arg).css("display", "block");
			handFlag = false;
		} else {
			$(arg).css("display", "none");
			handFlag = true;
		}
		//	setTimeout("flash(arg)"，100);
	}
	//动态加载css

function loadCss(url) {
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = url;
	document.getElementsByTagName("head")[0].appendChild(link);
};
//背景缩小隐藏
function scaleHide(arg, interval) {
		scale--;
		scalePercent = scale + '%';

		$(arg).css({
			'background-size': scalePercent
		});
		//	setTimeout('scaleHide()',1000);
		console.log(scalePercent);
		if (scale == 0) {
			clearInterval(interval);
		}

	}
	//fade

function fadeOutAnim(arg) {
	$(arg).animate({
		'opacity': 0
	}, {
		'duration': 1000
	})
}

function fadeInAnim(arg) {
		$(arg).animate({
			'opacity': 0
		})
		showSomething(arg);
		$(arg).animate({
			'opacity': 1
		}, {
			'duration': 1000
		})

	}
	//点击按钮闪动

function opacityFlash(arg) {
		$(arg).animate({
			'opacity': 0
		})

		$(arg).delay(1000).animate({
			'opacity': 1
		}, {
			'duration': 1000
		})
	}
	//动画效果

function testAnim(x, id) {
	$(id).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//		    $(this).removeClass();
	});
};

// 首先在页面上要监听运动传感事件 
function init() {　　
	if (window.DeviceMotionEvent&&handerDevice()||handerDevice()==1) {　　　　 // 移动浏览器支持运动传感事件
		　　　　
		window.addEventListener('devicemotion', deviceMotionHandler, false);　　
		$("#yaoTip").show();　
		
	} else {　　　　 // 移动浏览器不支持运动传感事件
		　　　　
		setTimeout("fourthScreenPlusFun()", 3000);
//		alert("404");
		console.log(handerDevice());　
	}
}

function deviceMotionHandler(eventData) {　　 // 获取含重力的加速度
	　　
	var acceleration = eventData.accelerationIncludingGravity;

	　　 // 获取当前时间
	　　
	var curTime = new Date().getTime();　　
	var diffTime = curTime - last_update;　　 // 固定时间段
	　　
	if (diffTime > 100) {　　　　
		last_update = curTime;

		　　　　
		x = acceleration.x;　　　　
		y = acceleration.y;　　　　
		z = acceleration.z;

		　　　　
		var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

		　　　　
		if (speed > SHAKE_THRESHOLD) {　　　　　　 // TODO:在此处可以实现摇一摇之后所要进行的数据逻辑操作
			　　　　　　
//			count++;　　　　　　
			setTimeout("fourthScreenPlusFun()", 100);
			
			
		}

		　　　　
		last_x = x;　　　　
		last_y = y;　　　　
		last_z = z;　　
	}
}
//选择饮料
function selectDrink(){
	var r = Math.round(Math.random()*255);
	var g = Math.round(Math.random()*255);
	var b = Math.round(Math.random()*255);
	var a = Math.random();
	$('.row1,.row2,.row3').children().css('background-color','rgba('+r+','+g+','+b+','+a+')')
	setTimeout('selectDrink()',randomNumFun());
}
function randomNumFun(){
	var randomNum = Math.round(Math.random()*500);
	return randomNum;
}
function clickDrink(){
	$('.row1,.row2,.row3').children().click(function(){
		var name = $(this).children('img').attr('name');
//		print(name);
		switch(name){
			case drinkType[0]:$('.imageShowImg').attr('src','images/drinkImg/'+drinkTypeImg[0]);break;
			case drinkType[1]:$('.imageShowImg').attr('src','images/drinkImg/'+drinkTypeImg[1]);break;
			case drinkType[2]:$('.imageShowImg').attr('src','images/drinkImg/'+drinkTypeImg[2]);break;
			case drinkType[3]:$('.imageShowImg').attr('src','images/drinkImg/'+drinkTypeImg[3]);break;
			case drinkType[4]:$('.imageShowImg').attr('src','images/drinkImg/'+drinkTypeImg[4]);break;
			case drinkType[5]:$('.imageShowImg').attr('src','images/drinkImg/'+drinkTypeImg[5]);break;
			case drinkType[6]:$('.imageShowImg').attr('src','images/drinkImg/'+drinkTypeImg[6]);break;
			case drinkType[7]:$('.imageShowImg').attr('src','images/drinkImg/'+drinkTypeImg[7]);break;
			case drinkType[8]:$('.imageShowImg').attr('src','images/drinkImg/'+drinkTypeImg[8]);break;
		}
		drinkAnim('lightSpeedIn','#imageShow');
		showSomething('.imageShowImg');
		
	})
	
}

function drinkAnim(x, id) {
	$(id).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		    $(this).removeClass();
	});
};

//打印函数

function print(arg) {
	console.log(arg);
}