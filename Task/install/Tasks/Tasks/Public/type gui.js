var root = android.os.Environment.getExternalStorageDirectory() + "/Tasks/Tasks-Resource/";
function Menu() {
	var pop = new android.widget.PopupWindow(ctx);
	pop.setWidth(dip2px(ctx, 500));
	pop.setHeight(dip2px(ctx, 300));
	
	var linearlayout_for_main = new android.widget.LinearLayout(ctx);
	linearlayout_for_main.setOrientational(1);
	linearlayout_for_main.setBackgroundDrawable(new BitmapDrawable.createFromPath("table-background.png"));
	
	var linearlayout_for_top = new android.widget.LinearLayout(ctx);
	linearlayout_for_top.setLayoutParams(new android.view.ViewGroup.LayoutParams());
	
	ctx.runOnUiThread(
		new java.lang.Thread(
			{
				run:function() {try
					{
						pop.setContentView(linearlayout_for_main);
						pop.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CNTER, 0, 0);
					}catch(err){print(err);}}}));
	
}
