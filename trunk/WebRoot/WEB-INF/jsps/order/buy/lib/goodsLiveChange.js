/**
 * this file is called in buyInput.js
 * @returns
 */

function goodsLive(){
	document.writeln("<script type='text/javascript' src='goodsLiveInitializer.js'></script>");
	var temp = goodsLiveInitializer();
	var $nowTr = temp[0];
	var $num =temp[1];
	var $price = temp[2]; 
	var $total = temp[3];
		
			var goodsUuid = $(this).val();
			$.post("order_ajaxGetOne.action",{"goodsUuid":goodsUuid},function(data){
				//更新商品价格
				//修改数量为1
				$num.val(1);				
				//修改单价
				$price.val(data.inPriceView);
				//修改合计
				$total.html(data.inPriceView+" 元");
				
				//总计(省略)
				sum();
			});
		}