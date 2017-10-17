// jQuery Document

$(function(){
	/* block name setup */
	var wrapId = "#contents";
	var secId01 = "#sec01";
	var secId02 = "#sec02";
	var secId03 = "#sec03";
	var secId04 = "#sec04";
	var secId05 = "#sec05";
	var naviId = "#mainMenu";
	/* /block name setup */
	var speed = 600; // smooth scroll speed

	/* variable setup */
	var boxWrap = $(wrapId),
		sec01 = $(secId01), sec02 = $(secId02), sec03 = $(secId03), sec04 = $(secId04), sec05 = $(secId05),
		navi = $(naviId),
		win = $(window);
	var winWidth = win.width(), winHeight = win.height(),
		pos1 = sec01.offset().top, pos2 = sec02.offset().top, pos3 = sec03.offset().top, pos4 = sec04.offset().top, pos5 = sec05.offset().top;
	
	/* load & resize */
	function reload(){
		winWidth = win.width(), winHeight = win.height(),
			pos1 = sec01.offset().top, pos2 = sec02.offset().top, pos3 = sec03.offset().top, pos4 = sec04.offset().top, pos5 = sec05.offset().top;
		var offsetY = 0;
		if(pos1<0){ offsetY = -pos1; }
		pos1 += offsetY; pos2 += offsetY; pos3 += offsetY; pos4 += offsetY; pos5 += offsetY;
    }
	win.load(function(){ reload(); });
	win.resize(function(){ reload(); });
	/* /load & resize */

	/* smooth scroll */
	$('a[href^="#"]').click(function(){
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var targetID = target.selector;
		var position;
		if(targetID == secId01){ position = pos1;
		} else if(targetID == secId02){ position = pos2;
		} else if(targetID == secId03){ position = pos3;
		} else if(targetID == secId04){ position = pos4;
		} else if(targetID == secId05){ position = pos5; } else { position = 0; }
		boxWrap.animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	/* /smooth scroll */
});
