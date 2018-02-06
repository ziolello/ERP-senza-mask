/**
 * called in input.js
 * @param event
 * @param intToFloat
 * @returns
 */
function numFun(event, intToFloat){
	document.writeln("<script type='text/javascript' src='numFunPrice.js'></script>");

			//事件激活方式为任意键盘数字按钮，避免用户输入非法数字
			if(event.keyCode>=48 && event.keyCode<=57 || event.keyCode>=96 && event.keyCode<=105 || event.keyCode == 8){
				//获取当前输入数量值
				var num = $(this).val();
				//获取当前价格
				var price = numFunPrice();
				$(this).parent().next().next().text(intToFloat(num*price)+" 元");
				total();
				return true;
			}
			return false;
		}