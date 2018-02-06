/**
 * this file is called in ajaxGet.js
 * @returns
 */

function tdFinal(){
	var $td4 = $('<td><input name="prices" class="prices order_num" style="width:93px;border:1px solid black;text-align:right;padding:2px" type="text" value="'+data.gm.inPriceView+'"/> 元</td>');
	$tr.append($td4);
	
	var $td5 = $('<td class="total" align="right">'+data.gm.inPriceView+'&nbsp;元</td>');
	$tr.append($td5);
	
	var $td6 = $('<td><a class="deleteBtn delete xiu" value="4"><img src="images/icon_04.gif" />删除</a></td>');
	$tr.append($td6);
	
	$("#finalTr").before($tr);
	
	//判断是否还有商品可用，如果没有，设置添加按钮隐藏起来
	if(gtmList.length == 1 && gmList.length == 1){
		//隐藏按钮
		$("#add").css("display","none");
	}
	sum();
}