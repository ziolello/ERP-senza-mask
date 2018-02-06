/**
 * this file is called in keyUpPrices.js
 * @returns
 */

function dollarThisFin(){
	var price = $(this).val();
	//计算合计
	var total = num * price ;
	//修改显示合计
	$(this).parent().parent().children("td:eq(4)").html(intToFloat(total)+" 元");
	//修改总计
	sum();
}