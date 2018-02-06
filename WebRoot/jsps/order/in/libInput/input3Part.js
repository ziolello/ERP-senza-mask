/**
 * called in input.js
 * @param intToFloat
 * @param event
 * @returns
 */
function input3Part(intToFloat, event){
	$("#add").click(addFun());
	//修改商品数量，事件绑定为点击任意键盘数字按钮
	
	
	$(".num").live("keyup", numFun(event, intToFloat));
	//修改商品价格，事件绑定为点击任意键盘数字按钮
	
	
	$(".prices").live("keyup", pricesFun(event, intToFloat));
}