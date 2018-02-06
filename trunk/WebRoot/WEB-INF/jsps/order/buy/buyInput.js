/**
 * this file is called in buyInput.jsp
 * @returns
 */
$(function(){
		//修改供应商（暂定）
	document.writeln("<script type='text/javascript' src='lib/documentOpener.js'></script>");

		$("#supplier").change(goodsFunction);
		
		//修改商品类别（暂定）
		$(".goodsType").live("change",goodsTypeChange);
		
		//修改商品（暂定）
		$(".goods").live("change",goodsLive);
		
		//添加新商品项
		$("#add").click(addClick);
		
		delNumPriceSub();	
	});
	