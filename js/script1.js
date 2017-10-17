// jQuery Document

$(function(){
	// ID setup
	var win = $(window);
	var boxWrap = $('#wrap');
	var sec01 = $('#sec01');
	var sec02 = $('#sec02');
	var sec03 = $('#sec03');
	var sec04 = $('#sec04');
	var sec05 = $('#sec05');
	var navi  = $("#mainMenu");
	var info  = $("#info01");
	var body  = $('#contents');
	// click scroll
	var offsetY = -10;
	var speed = 500; // roll speed
	/*$('a[href^="#"]').click(function(){
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});*/
	$('a[href^="#"]').click(function() {
		var target = $(this.hash);
		console.log(target);
		if (!target.length) return ;
		var targetY = target.offset().top+offsetY;
		console.log(targetY);
		body.animate({scrollTop: targetY}, speed, 'swing');
		console.log(body.offset().top);
		return false;
	});

	win.load(function() {
		var winWidth = win.width();
		var winHeight = win.height();
		var pos1 = sec01.offset().top;
		var pos2 = sec02.offset().top;
		var pos3 = sec03.offset().top;
		var pos4 = sec04.offset().top;
		var pos5 = sec05.offset().top;
		console.log(pos1);
		console.log(pos2);
		console.log(pos3);
		console.log(pos4);
		console.log(pos5);
	});
	// scroll
	win.scroll(function(){
		var value = $(this).scrollTop();
		/*var value = win.scrollTop();*/
		/*sec01.css('top', boxWrapSet.top + value / 2);
		sec02.css('top', boxWrapSet.top + value / 4);
		sec03.css('top', boxWrapSet.top - value / 2);
		sec04.css('top', boxWrapSet.top - value);
		sec04.css('top', boxWrapSet.top - value);*/
		/*var msg = value + "px";*/
		navi.prop("checked", false);
		info.html(value);
		console.log(value);
	});
});
