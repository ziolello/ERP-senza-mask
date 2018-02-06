/**
 * called in goodsType.js
 * @returns
 */
function goodsTypeVar2(){
	document.writeln("<script type='text/javascript' src='goodsTypePrice.js'></script>");

	var $price = goodsTypePrice();
	var $total = $(this).parent().next().next().next().next();
	//发送的请求要将当前已经使用的过滤掉，否则每次出现的集合会重复
	var jsonParam = {"gm.goodsType.uuid":$(this).val()};
	
	return [$price, $total, jsonParam];
}