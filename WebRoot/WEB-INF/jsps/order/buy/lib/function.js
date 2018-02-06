/**
 * this file is called in goodsFunction.js
 * @param data
 * @returns
 */

function gList(data){
				//获取商品类别信息组织成select
				var gtmList = data.gtmList;
				for(var i = 0;i<gtmList.length;i++){
					var gtm = gtmList[i];
				var	$op = $("<option value='"+gtm.uuid+"'>"+gtm.name+"</option>");
					$(".goodsType").append($op);
				}
				//获取商品信息组织成select
				var gmList = data.gmList;
				for(var i = 0;i<gmList.length;i++){
					var gm = gmList[i];
				var	$op = $("<option value='"+gm.uuid+"'>"+gm.name+"</option>");
					$(".goods").append($op);
				}
				//更新商品价格
				var gm = data.gm;
				//修改单价
				$(".prices").val(gm.inPriceView);
				//修改合计
				$(".total").html(gm.inPriceView+" 元");
				//总计(省略)
				sum();
			}