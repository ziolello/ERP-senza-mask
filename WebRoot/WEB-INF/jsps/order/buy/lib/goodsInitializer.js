/**
 * this file is called in goodsChange.js
 * @returns
 */

function initializer(){
			var $nowTr = $(this).parent().parent();
			var $goodsSelect = $nowTr.children("td:eq(1)").children("select");
			var $num = $nowTr.children("td:eq(2)").children("input");
			var $price = $nowTr.children("td:eq(3)").children("input");
			var $total = $nowTr.children("td:eq(4)");
			return $nowTr, $goodsSelect, $num, $price, $total;
}