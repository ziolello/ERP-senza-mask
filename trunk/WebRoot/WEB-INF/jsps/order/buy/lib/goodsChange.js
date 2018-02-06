/**
 * this file is called in buyInput.js
 * @returns
 */
function goodsTypeChange(){
			//由当前激活事件的select查找
	document.writeln("<script type='text/javascript' src='goodsTypeChFunction.js'></script>");
	document.writeln("<script type='text/javascript' src='goodsChange.js'></script>");
	var temp = initializer();
		var	$nowTr = temp[0];
		var	$goodsSelect = temp[1];
		var	$num = temp[2];
		var	$price = temp[3];
		var	$total = temp[4];
			//将goodsTypeUuid传递到后台
			var goodsTypeUuid = $(this).val();
			$goodsSelect.empty();
			//发送请求
			$.post("order_ajaxGetGm.action",{"goodsTypeUuid":goodsTypeUuid}, gTypeList(data));
		}