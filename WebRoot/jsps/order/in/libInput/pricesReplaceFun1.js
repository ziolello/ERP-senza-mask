/**
 * called in pricesFun.js
 * @returns
 */
function pricesReplaceFun1(){
	$(this).val($(this).val().replace(/[^\d.]/g,""));
    //必须保证第一个为数字而不是. 
    $(this).val($(this).val().replace(/^\./g,"0."));
    //保证只有出现一个.而没有多个. 
}