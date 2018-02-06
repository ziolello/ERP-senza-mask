/**
 * called in pricesFun.js
 * @returns
 */
function pricesReplaceFun(){
	$(this).val($(this).val().replace(/\.{2,}/g,"."));
    //保证.只出现一次，而不能出现两次以上
    $(this).val($(this).val().replace(".","$#$").replace(/\./g,"").replace("$#$",".")); 
}