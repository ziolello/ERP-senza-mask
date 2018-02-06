/**
 * called in fanOut.js
 * @param $td2
 * @param $tr
 * @returns
 */
function trtd2($td2, $tr){
$td2.append($select);
				$tr.append($td2);
			
				var $td3 = $("<td align='right'>入库量：</td>");
				$tr.append($td3);
			
				var surplus = data.surplus;
				var num = data.num;
			
				var $td4 = $("<td><input type='text' value='"+surplus+"'/></td>");
				$tr.append($td4);
			
				var $td5 = $('<td align="center"><img src="images/icon_3.gif" /><a href="javascript:void(0)" class="btn_ok xiu">确定</a></td>');
				$tr.append($td5);
			
				$nowTr.after($tr);
				
}