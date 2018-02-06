
function goodsTypeFinal(){
	
	$price.val(intToFloat(400));
	//修改商品合计
	$total.text(intToFloat(400)+" 元");
	//修改商品总计
	total();
	function intToFloat(val){
		return new Number(val).toFixed(2);
	}
}