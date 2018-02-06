/**
 * this file is called in input.jsp
 * @param val
 * @returns
 */
function intToFloat(val){
		return new Number(val).toFixed(2);
	}
	//修改供应商
	$(document).ready(function() {
		document.writeln("<script type='text/javascript' src='callFun.js'></script>");
		document.writeln("<script type='text/javascript' src='callFun2.js'></script>");

		callFun();
		callFun2();
		input1Part();
		
		
		input3Part(event, intToFloat);
		
		
		input2Part();
	});