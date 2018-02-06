/**
 * called in addFun.js
 * @returns
 */
function forAddFun(hasUuids, goodsTypeObjs, goodsObjs){
	var i;
	for(i = 0;i<goodsTypeObjs.length;i++){
		hasUuids = hasUuids + $(goodsTypeObjs[i]).val();
		hasUuids = hasUuids + ":";
		hasUuids = hasUuids + $(goodsObjs[i]).val();
		if(i != goodsTypeObjs.length -1){
			hasUuids = hasUuids + ",";
		}
	}
}