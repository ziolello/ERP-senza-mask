/**
 * called in input.js
 * @returns
 */
function input2Part(){
	$(".deleteBtn").live("click", deleteBtn);
	
	//求总和的方法
	
	total();
	
	//提交按钮（设置不可修改的
	$("#submitOrder").click(submitOrderFun());
}