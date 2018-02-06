/**
 * called in input.js
 * @param event
 * @param intToFloat
 * @returns
 */
function pricesFun(event, intToFloat){
	document.writeln("<script type='text/javascript' src='callIntFun.js'></script>");
			//先把非数字的都替换掉，除了数字和. 
			callIntFun();
			pricesReplaceFun1();
	        
	        pricesReplaceFun2();

	        var vars = pricesVar(intToFloat);
	        var price = vars[0];
	        var num = vars[1];
			//求总计
			total();
		}