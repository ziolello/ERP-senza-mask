/**
 * this file is called in buyInput.js
 * @returns
 */

function addClick(){

	//设置之前所有的select均处于不可操作状态
	document.writeln("<script type='text/javascript' src='dollarSet.js'></script>");
	dollarSet();

	//获取已经使用过的所有商品
	//页面读取已经使用的商品uuid
	var goodsArr = $(".goods");
	var used = "";
	for(var i = 0;i<goodsArr.length;i++){
		used += goodsArr[i].value;
		used += ",";
	}
	
	//发送ajax提交(暂定)
	var supplierUuid = $("#supplier").val();
	document.writeln("<script type='text/javascript' src='ajaxGet.js'></script>");
	$.post("order_ajaxGetGtmAndGm2.action",{"supplierUuid":supplierUuid,"used":used}, ajaxGet(data));

}