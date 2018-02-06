/**
 * this file is called in buyInput.js
 * @param event
 * @returns
 */

function keyUpPrices(event){
			document.writeln("<script type='text/javascript' src='dollarThisIn.js'></script>");
			dollarThisIn();
			document.writeln("<script type='text/javascript' src='dollarThisMid.js'></script>");
			dollarThisMid();
	        
			//获取数量
			var num = $(this).parent().parent().children("td:eq(2)").children("input").val();
			//获取价格
			document.writeln("<script type='text/javascript' src='dollarThisFin.js'></script>");
			dollarThisFin();
		}