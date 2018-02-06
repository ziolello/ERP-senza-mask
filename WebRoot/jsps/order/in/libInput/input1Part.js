/**
 * called input.js
 * @returns
 */
function input1Part(){
		$("#supplier").change(supplierFun(intToFloat));
		//修改商品类别
		
		$(".goodsType").live("change", goodsType());
		//修改商品
		
		$(".goods").live("change", goods(intToFloat));
		//添加新商品
}
