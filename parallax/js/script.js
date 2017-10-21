// jQuery Document

$(function(){
	/* Section ID setting */
	var wrapId = "#contents";
	var secId = ["#sec01",
				 "#sec02",
				 "#sec03",
				 "#sec04",
				 "#sec05"];
	/* /Section ID setting */

	/* other variable setting */
	var navId = "mainMenu"; // navi block
	var speed = 600; // smooth scroll speed
	/* /other variable setting */
	
	var boxWrap = $(wrapId),
		navi = $(navId),
		win = $(window),
		winWidth, winHeight;
	var posArr = new Array();
	/* position check */
	function posCheck(posArr){
		winWidth = win.width(), winHeight = win.height();
		for(var i=0; i<secId.length; i++) {
			posArr[i] = $(secId[i]).offset().top;
		}
		var offsetY = 0;
		if(posArr[0]<0){ offsetY = -posArr[0]; }
		for(var i=0; i<secId.length; i++) {
			posArr[i] += offsetY;
			/*console.log(secId[i] + " : " + posArr[i]);*/
		}
		return winWidth, winHeight, posArr;
    }
	win.load(function(){ posCheck(posArr); });
	win.resize(function(){ posCheck(posArr); });
	/* /position check */

	/* smooth scroll */
	$('a[href^="#"]').click(function(){
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var targetID = target.selector;
		var position = 0;
		for(var i=0; i<secId.length; i++) {
			if(targetID == secId[i]){
				position = posArr[i];
				/*console.log(targetID + " : " + position);*/
				break;
			}
		}
		boxWrap.animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	/* /smooth scroll */
});
