/**
 * called in supplierFun.js
 * @returns
 */
function supplierForFun(){
	$(".goodsType").empty();
	for(var i = 0;i<4;i++){
		var $option = $("<option value='1'>商品类别"+i+"</option>");	//创建option对象(jQuery格式)
		$(".goodsType").append($option);				//将option对象添加到select组件中
	}
	//修改商品select
	$(".goods").empty();
	for(var i = 0;i<5;i++){
		var $option = $("<option value='1'>商品名"+i+"</option>");	//创建option对象(jQuery格式)
		$(".goods").append($option);				//将option对象添加到select组件中
	}
}