/**
 * this file is called in keyUpNum.js
 * @returns
 */

function priceTotal(){
	var price = $(this).parent().parent().children("td:eq(3)").children("input").val();
	//计算合计
	var total = num * price ;
	//修改显示合计
	$(this).parent().parent().children("td:eq(4)").html(intToFloat(total)+" 元");
}