
function newLevel() {
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({run:function() {
//位置①
													 var win=new android.widget.PopupWindow();
//位置②
													 var layout=new android.widget.LinearLayout(ctx);
//位置③
													 var button=new android.widget.Button(ctx);
													 button.setText("ent");
													 button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v) {
																															 try
																															 {ModPE.setCamera(getPlayerEnt());}catch(e){print(e);}
																														 }}));
//位置④
													 layout.addView(button);
//位置⑤
													 win.setContentView(layout);
													 win.setWidth(100);
													 win.setHeight(80);
													 win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)));
													 win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
												 }}));

}
function procCmd(c){
	var s = c.split(" ");

switch (s[0])
{
	case "tp" :
		setPosition(getPlayerEnt(), Number(s[1]), Number(s[2]), Number(s[3]));
		print("tped");
		break;
	case "setGameMode" : 
		Level.setGameMode(Number(s[1]));
		break;
}

}
function attackHook(p, e) {
	ModPE.setCamera(e);
}

If java is discontinue;
