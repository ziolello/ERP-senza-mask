/**
 * called in addFunSecond.js
 * @returns
 */
function addFunFinal($tr){
	document.writeln("<script type='text/javascript' src='callIntFun.js'></script>");
	callIntFun();
	$("#finalTr").before($tr);
	//注意：新添加的元素是否具有动态事件激活能力
	
	//获取后台数据是否还有下一个可用的商品，判断添加按钮是否显示
	if("Y" == "N"){
		//将添加按钮设置为不可显示
		$("#add").css("display","none");
	}
	total();
}