/**
 * this file is called in buyInput.js
 * @returns
 */

function sum(){
			//1.获取所有购买的数量
			var numArr = $(".num");
			//2.获取所有购买的价格
			var priceArr = $(".prices");
			var sums = 0;
			//4.合计求和
			for(var i = 0;i<numArr.length;i++){
				//3.计算合计
				sums += numArr[i].value*priceArr[i].value;
			}
			//5.设置总计值
			$(".all").html(intToFloat(sums)+" 元");
		}

function intToFloat(val){
	return new Number(val).toFixed(2);
}

function submitOrder() {
	//恢复被提交的不可用的select
	$("#supplier").attr("disabled",false);
	$(".goods").attr("disabled",false);
	//提交form
	$("form:first").submit();
}