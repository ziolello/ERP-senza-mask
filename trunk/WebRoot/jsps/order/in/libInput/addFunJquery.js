/**
 * called in addFunSecond.js
 * @param $tr
 * @returns
 */
function addFunJquery($tr){
	var $td5 = $("<td class='total' align='right'>"+222+" 元</td>");
	$tr.append($td5);
	
	var $td6 = $("<td>&nbsp;&nbsp;<a class='deleteBtn delete xiu' value='"+112+"'><img src='../../../images/icon_04.gif'/> 删除</a></td>");
	$tr.append($td6);
	
	return $tr;
}