/**
 * this file is called in goodsChange.js
 * @param data
 * @returns
 */

function gTypeList(data){
				//获取商品信息组织成select
				var gmList = data.gmList;
				for(var i = 0;i<gmList.length;i++){
					var gm = gmList[i];
				var	$op = $("<option value='"+gm.uuid+"'>"+gm.name+"</option>");
					$goodsSelect.append($op);
				}
				//更新商品价格
				var gm = data.gm;
				
				$num.val(1);
				//修改单价
				$price.val(gm.inPriceView);
				//修改合计
				$total.html(gm.inPriceView+" 元");
				
				//总计(省略)
				sum();
			}