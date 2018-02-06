/**
 * called in pricesFun.js
 * @param intToFloat
 * @returns
 */

function pricesVar(intToFloat){
	document.writeln("<script type='text/javascript' src='pricesJquery.js'></script>");

	//获取当前输入价格
	var price = $(this).val();
	//获取当前数量
	var num = $($(this).parent().prev().children()[0]).val();
	//求合计
	pricesJquery();
	
	return [price, num];
}