/**
 * called in mask.js
 * @returns
 */
function bindFun(){
	document.writeln("<script type='text/javascript' src='safeFun.js'></script>");

	bind(window, 'load', bindClick());
}