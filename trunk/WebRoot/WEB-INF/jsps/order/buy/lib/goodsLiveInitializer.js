/**
 * this file is called in goodsLiveChange.js
 * @returns
 */


function goodsLiveInitializer(){
	var $nowTr = $(this).parent().parent();
	var $num = $nowTr.children("td:eq(2)").children("input");
	var $price = $(this).parent().next().next().children("input");
	var $total = $nowTr.children("td:eq(4)");
	return $nowTr, $num, $price, $total;
}