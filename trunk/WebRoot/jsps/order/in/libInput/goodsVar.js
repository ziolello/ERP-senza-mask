/**
 * called in goods.js
 * @returns
 */
function goodsVar(){
	document.writeln("<script type='text/javascript' src='goodsVarPrice.js'></script>");	

	var $num = $($(this).parent().next().children()[0]);
	var $price = goodsVarPrice();
	var $total = $(this).parent().next().next().next();
	
	return [$num, $price, $total];
}