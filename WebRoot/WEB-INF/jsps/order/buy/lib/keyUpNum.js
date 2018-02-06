/**
 * this file is called in buyInput.js
 * @param event
 * @returns
 */


function keyUpNum(event){
			//1.设置键盘不能点击数字之外的按键
			//event.code
			//2.使用过滤————正则
			$(this).val($(this).val().replace(/[^\d]/g,""));
			//获取数量
			var num = $(this).val();
			//获取价格
			document.writeln("<script type='text/javascript' src='lib/priceTotal.js'></script>");
			priceTotal();
			//修改总计
			sum();
		}