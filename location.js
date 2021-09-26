var x,y = 1,newBGI,tt
var bgimgArr = ["1.jpg","2.png","3.jpg","4.jpg","5.jpg","6.jpg","7.png"]
$(document).ready(function(){
	$('#input-box').keydown(function(event){
		if(event.keyCode == 13){
			tt = $('#input-box').val()
			bark("来自输入框",tt,1)
		}
	})
	
    $("#baidu").click(function(){
        window.location.href="https://www.baidu.com";
    });
   $("#google").click(function(){
       window.location.href="https://www.google.com";
   });
   $("#pure").click(function(){
       window.location.href="http://gameing.top/live";
   });
    $("#github").click(function(){
        window.location.href="https://github.com";
    });
    $("#bilibili").click(function(){
        window.location.href="https://www.bilibili.com/account/history";
    });
	$("#woth").click(function(){
	    window.location.href="http://woth.top/";
	});
	$("#changeWall").click(function(){
	    changeWallpaper()
	});
	
	function changeWallpaper(){
		x = Math.round(Math.random()*6)
		//执行换壁纸时取一个从0到6随机数 保存为x
		if(y==x){
			console.log("重新随机")
			changeWallpaper()
		}else{
			newBGI = "url(https://cdn.jsdelivr.net/gh/pgidol/2021@main/imgs/"+bgimgArr[x]+")"
			$('body').css("background-image",newBGI)
			y = x
		}
		
	}
})