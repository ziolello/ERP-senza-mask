/**
 * this file is called in keyUpPrices.js
 * @returns
 */

function dollarThisIn (){
	//先把非数字的都替换掉，除了数字和. 
	$(this).val($(this).val().replace(/[^\d.]/g,""));
    //必须保证第一个为数字而不是. 
    $(this).val($(this).val().replace(/^\./g,"0."));
}