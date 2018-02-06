/**
 * this file is called in buyInput.js
 * @returns
 */

function delNumPriceSub(){
	//删除
	$(".deleteBtn").live("click",deleteB);
	
	//修改订单项数量
	$(".num").live("keyup", keyUpNum(event));
	
	//修改订单项数量
	$(".prices").live("keyup",keyUpPrices(event));
	//求总计
	
	$("#submitOrder").click(submitOrder);	
}