/**
 * this file is called in buyInput.js
 * @returns
 */

function deleteB(){
			//0.如果只剩余一个就不让删除，只剩余一个时，不执行下面的操作
			if( $(".deleteBtn").length == 1){
				return;
			}
			
			$(".goodsType").attr("disabled",true);
			$(".goods").attr("disabled",true);
			
			//1.获取当前行对象
			var $nowTr = $(this).parent().parent();
			//2.删除行对象
			//表格删除行
			//行自己删除
			$nowTr.remove();
			//3.设置添加按钮出现
			$("#add").css("display","inline");
			sum();
		}