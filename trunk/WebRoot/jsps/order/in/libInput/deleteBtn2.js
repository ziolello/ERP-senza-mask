/**
 * called in deleteBtn
 * @returns
 */
function deleteBtn2(){
	document.writeln("<script type='text/javascript' src='totalFun.js'></script>");
	$(".goodsType").attr("disabled","disabled");
	$(".goods").attr("disabled","disabled");
	total();
}