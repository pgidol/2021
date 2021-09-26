/*镜无缘:
http://175.24.233.53:8080/BSDzeWLMXLWosiCom6FQaN/推送标题/这里改成你自己的推送内容
镜无缘:
http://175.24.233.53:8080/BSDzeWLMXLWosiCom6FQaN/自动复制推送内容到剪切板?autoCopy=1&copy=optional
镜无缘:
http://175.24.233.53:8080/BSDzeWLMXLWosiCom6FQaN/自定义推送图标?icon=https://day.app/assets/images/avatar.jpg
*/
function bark(a,b,auto){
	if(auto){
		var postMsg = "http://175.24.233.53:8080/BSDzeWLMXLWosiCom6FQaN/" + a + "/" + b +"?autoCopy=1&copy="+b
		console.log(postMsg)
		const xhr = new XMLHttpRequest();
			//2. 初始化 设置请求方法和 url
		xhr.open('GET', postMsg);
		//3. 发送
		xhr.send();
	}else{
		var postMsg = "http://175.24.233.53:8080/BSDzeWLMXLWosiCom6FQaN/" + a + "/" + b
		console.log(postMsg)
		const xhr = new XMLHttpRequest();
			//2. 初始化 设置请求方法和 url
		xhr.open('GET', postMsg);
		//3. 发送
		xhr.send();
	}
	
}

