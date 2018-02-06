/**
 * this file is called in keyUpPrices.js
 * @returns
 */


function dollarThisMid(){
	//保证只有出现一个.而没有多个. 
    $(this).val($(this).val().replace(/\.{2,}/g,"."));
    //保证.只出现一次，而不能出现两次以上
    $(this).val($(this).val().replace(".","$#$").replace(/\./g,"").replace("$#$",".")); 
}