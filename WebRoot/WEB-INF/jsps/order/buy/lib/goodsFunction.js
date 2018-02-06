/**
 * this file is called in buyInput.js
 * @returns
 */

function goodsFuction(){
	document.writeln("<script type='text/javascript' src='function.js'></script>");

			//发送当前的供应商uuid到action
			//获取当前供应商对应的商品类别数据和商品数据
			$(".goodsType").empty();
			$(".goods").empty();
			$.post("order_ajaxGetGtmAndGm.action",{"supplierUuid":$(this).val()},gList(data));
		}