/**
 * called in pricesVar.js
 * @returns
 */

function pricesJquery(){
	$(this).parent().next().text(intToFloat(num*price)+" 元");
}