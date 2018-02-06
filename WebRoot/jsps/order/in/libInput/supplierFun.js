/**
 * called in input.js
 * @returns
 */

function supplierFun(intToFloat){
				//修改产品类别select
	document.writeln("<script type='text/javascript' src='callIntFun.js'></script>");
	callIntFun();

				supplierForFun();
				//修改商品数量
				$(".order_num").val("1");
				//修改商品单价
				$("[name='prices']").val(intToFloat(300));
				//修改商品合计
				$(".total").text(intToFloat(300)+" 元");
				//修改商品总计
				total();
		}