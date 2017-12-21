var tmfk=[0,6,8,9,10,11,18,20,23,26,30,31,33,34,37,38,39,40,42,44,50,51,53,54,55,59,60,63,64,65,67,68,69,70,71,72,75,76,77,78,79,81,83,85,93,94,95,96,98,102,105,107,108,109,114,123,124,128,143,152,155,156,171,246,255]
var 铁块=42,发光黑曜石=246,红石块=152
//42是铁块，246是发光黑曜石，152是红石块
var 钻石块=57,故障石=255;
//57是钻石块，255是故障石
var 石制按钮=77,木质按钮=143
//77是石质按钮，143是木质按钮
var 石制压力板=70,木质压力板=72,on=false,p=[0,0,0]
//70是石质压力板，72是木质压力板
var 地狱砖楼梯=114,砖楼梯=108,rp2=93,rp3=94,rt1=109,rt=67
//114是地狱砖楼梯，108是砖楼梯,109是石砖楼梯，67是原石楼梯
var fs=61,fs1=86,fs2=91
//61是熔炉，86是南瓜,91是南瓜灯
var ps=128,sps=156,pse=20,cps=41
//128是沙石楼梯，156是石英楼梯，20是玻璃，41是金块
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()

var btnWindow=null

Block.defineBlock(93, "中继器2off", [["repeater_off",0], ["repeater_off",0], ["repeater_off",0], ["repeater_off",0], ["repeater_off",0], ["repeater_off",0]], 53, true, 10)
Block.setDestroyTime(93, 0.1)
Block.setRenderLayer(93, 2)

Block.defineBlock(94, "中继器2on", [["repeater_on",0], ["repeater_on",0], ["repeater_on",0], ["repeater_on",0], ["repeater_on",0], ["repeater_on",0]], 53, true, 10)
Block.setDestroyTime(94, 0.1)
Block.setRenderLayer(94, 2)

Block.defineBlock(77, "石质按钮", [["stone",0], ["stone",0], ["stone",0], ["stone",0], ["stone",0], ["stone",0]], 50, true, 7)
Block.setDestroyTime(77, 0.1)
Block.setShape(77, 1 / 3, 0, 1 / 3, 2 / 3, 1 / 8, 2 / 3)
Block.setRenderLayer(77, 2)

Block.defineBlock(143, "木质按钮",
				  [["planks",0], ["planks",0], ["planks",0], ["planks",0], ["planks",0], ["planks",0]], 50, true, 7)
Block.setDestroyTime(143, 0.1)
Block.setShape(143, 1 / 3, 0, 1 / 3, 2 / 3, 1 / 8, 2 / 3)
Block.setRenderLayer(143, 2)

Block.defineBlock(123, "红石灯", [["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0]], 50, false, 0)
Block.setDestroyTime(123, 0.1)

Block.defineBlock(124, "红石灯on", [["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0]], 50, false, 0)
Block.setDestroyTime(124, 0.1)
Block.setLightLevel(124, 30)

Block.defineBlock(70, "石质压力板", [["stone",0], ["stone",0], ["stone",0], ["stone",0], ["stone",0], ["stone",0]], 50, true, 7)
Block.setDestroyTime(70, 0.1)
Block.setShape(70, 0, 0, 0, 1, 1 / 16, 1)
Block.setRenderLayer(70, 2)

Block.defineBlock(72, "木质压力板", [["planks",0], ["planks",0], ["planks",0], ["planks",0], ["planks",0], ["planks",0]], 50, true, 7)           
Block.setDestroyTime(72, 0.1)
Block.setShape(72, 0, 0, 0, 1, 1 / 16, 1)
Block.setRenderLayer(72, 2)

Block.defineBlock(152, "红石块", [["redstone_block",0],["redstone_block",0],["redstone_block",0],["redstone_block",0],["redstone_block",0],["redstone_block",0]], 41, false, 0)
Block.setDestroyTime(152, 10)

function openMenu() {
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
	try
	{
		var layout=new android.widget.LinearLayout(ctx)
		var menu=new android.widget.PopupWindow(layout)
		menu.setFocusable(true)
		mainMenu = menu
		layout.setOrientation(1)

		var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
		textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
		var title=new android.widget.TextView(ctx);
		title.setTextSize(25)
		title.setText("高仿真PE红石")
		title.setLayoutParams(textParams)
		layout.addView(title)
		var stitle=new android.widget.TextView(ctx)
		stitle.setTextSize(10)
		stitle.setText("yay制作")
		stitle.setLayoutParams(textParams)
		layout.addView(stitle)
		var button=new android.widget.Button(ctx)
		button.setText("红石线")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 铁块, 10);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("红石块")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 红石块, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("活塞")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), ps, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("粘性活塞")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), sps, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("中继器")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 地狱砖楼梯, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("红石灯")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 123, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("木质按钮")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 木质按钮, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("石质按钮")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 石制按钮, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("石质压力板")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 石制压力板, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("木质压力板")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 木质压力板, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("TNT发射器")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), fs, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("箭发射器")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), fs1, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("雪球发射器")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), fs2, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("铁门")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 330, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("红石火把")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), rt1, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("拉杆")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 钻石块, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("命令方块")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				Entity.setCarriedItem(getPlayerEnt(), 323, 1);

																			}}))
		layout.addView(button) 
		var button=new android.widget.Button(ctx)
		button.setText("模式切换")
		button.setOnClickListener(new android.view.View.OnClickListener({
																			onClick:function(viewarg) { 
																				if (Level.getGameMode() == 0)
																				{
																					Level.setGameMode(1);
																					print("已变为创造模式")
																				}
																				else
																				{
																					Level.setGameMode(0);
																					print("已变为生存模式")
																				} }}))
		layout.addView(button) 
		var mlayout=makeMenu(ctx, menu, layout)
		menu.setContentView(mlayout)
		menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4)
		menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
		menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
		menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0)
	}catch(err){
		print("错误: " + err + ".")
	}
}
function makeMenu(ctx, menu, layout) {
	var mlayout=new android.widget.RelativeLayout(ctx)
	var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
	var scrollview=new android.widget.ScrollView(ctx)
	var pad = dip2px(ctx, 5)
	scrollview.setPadding(pad, pad, pad, pad)
	scrollview.setLayoutParams(svParams)
	scrollview.addView(layout)
	mlayout.addView(scrollview)
	return mlayout
}
function leaveGame() {
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
	ctx.runOnUiThread(new java.lang.Runnable({run:function() {
													 if (btnWindow != null)
													 {
														 btnWindow.dismiss()
														 btnWindow = null
													 }
												 }}))
}


function modTick() {
//检测压力板
	var x=Math.round(getPlayerX() - 0.5)
	var y=Math.round(getPlayerY() - 1.6)
	var z=Math.round(getPlayerZ() - 0.5)
//round四舍五入到整数
	if (getTile(x, y, z) != 石制压力板 && getTile(x, y, z) != 木质压力板)
	{
		on = false
	}
	if (!on)
	{
		对周围六个方块使用函数power(p[0], p[1], p[2], false)
		cn(p[0], p[1] - 1, p[2], false)
		p = [0,0,0]
		if (getTile(x, y, z) == 石制压力板 || getTile(x, y, z) == 木质压力板)
		{
			对周围六个方块使用函数power(x, y, z, true)
			cn(x, y - 1, z, true)
			p = [x,y,z]
			on = true
		}}
}

function destroyBlock(x, y, z, side) {
	var g=getTile(x, y, z)
	var d=Level.getData(x, y, z)
	if (g == 故障石 || g == 发光黑曜石 || g == 红石块)
	{
		对周围六个方块使用函数power(x, y, z, false)
	}
	else if (g == 砖楼梯 || g == rt1 || g == rp3)
	{
		if (d == 0)
		{
			cn(x - 1, y, z, false)
			power(x - 1, y, z, 15, false, 5)
		}
		else if (d == 1)
		{
			cn(x + 1, y, z, false)
			power(x + 1, y, z, 15, false, 4)
		}
		else if (d == 2)
		{
			cn(x, y, z - 1, false)
			power(x, y, z - 1, 15, false, 3)
		}
		else if (d == 3)
		{
			cn(x, y, z + 1, false)
			power(x, y, z + 1, 15, false, 2)
		}}
}

function useItem(x, y, z, i, b, s) {
	if (b == 钻石块)
	{
		preventDefault()
//preventDefault是防止默认行为
		Level.setTile(x, y, z, 故障石)
//点击石英块换成故障石
		对周围六个方块使用函数power(x, y, z, true)
	}
	else if (b == 故障石)
	{
		preventDefault()
		Level.setTile(x, y, z, 钻石块)
//点击故障石换成石英块
		对周围六个方块使用函数power(x, y, z, false)
	}
	else if (b == 石制按钮 || b == 木质按钮)
	{
		preventDefault()
		clickbtn(x, y, z, b)
	}
	else if (b == 地狱砖楼梯 || b == rp2)
	{
		preventDefault()
		Level.setTile(x, y, z, b == 地狱砖楼梯 ?rp2: 地狱砖楼梯, Level.getData(x, y, z))
	}
	else if (b == 54)
	{
		对周围六个方块使用函数power(x, y, z, true)
		ctx.runOnUiThread(new java.lang.Runnable({
													 run: function() {
														 new android.os.Handler().postDelayed(new java.lang.Runnable({
																														 run: function() {
																															 对周围六个方块使用函数power(x, y, z, false)
																														 }}), 1000)}}))
	}
}

function power(x, y, z, l, a, s) {
	var g=getTile(x, y, z)
	var n=Level.getData(x, y, z)
	if (!a && (g == 故障石 || g == 红石块 || (checkcn(x, y, z) && checkfk(x, y, z))))
	{
		repower(x, y, z, s)
	}
	else if ((a == true & g == 铁块) || (a == false && g == 发光黑曜石))
	{
		Level.setTile(x, y, z, (a ?发光黑曜石: 铁块))
		l--
//用l来计激活红石的数量，至多15个
		if (l > 0)
		{
			if (s != 0)power(x, y - 1, z, l, a, 1)
			if (s != 1)power(x, y + 1, z, l, a, 0)
			if (s != 4)power(x - 1, y, z, l, a, 5)
			if (s != 5)power(x + 1, y, z, l, a, 4)
			if (s != 2)power(x, y, z - 1, l, a, 3)
			if (s != 3)power(x, y, z + 1, l, a, 2)
		}
	}
	else if (g == ps)
	{
		pis(x, y, z, a, false, s)
	}
	else if (g == sps)
	{
		pis(x, y, z, a, true, s)
	}
	else if (g == 46)
	{
		Level.setTile(x, y, z, 0);Level.spawnMob(x + 0.5, y + 0.5, z + 0.5, 65)
	}
	else if ((g == 地狱砖楼梯 || g == 砖楼梯 || g == rp2 || g == rp3) && ((n == 0 && s == 5) || (n == 1 && s == 4) || (n == 2 && s == 3) || (n == 3 && s == 2)))
	{
		rep(x, y, z, a, s)
	}
	else if ((g == rt || g == rt1) && ((n == 0 && s == 5) || (n == 1 && s == 4) || (n == 2 && s == 3) || (n == 3 && s == 2)))
	{
		rep(x, y, z, !a, s)
	}
	else if (g == fs && a)
	{
		fsa(x + 0.5, y + 0.5, z + 0.5)
	}
	else if (g == fs1 && a)
	{
		fsa1(x + 0.5, y + 0.5, z + 0.5)
	}
	else if (g == fs2 && a)
	{
		fsa2(x + 0.5, y + 0.5, z + 0.5)
	}
	else if (g == 64 || g == 71)
	{
		door(x, y - 1, z, a)
		door(x, y, z, a)
		if (getTile(x, y + 1, z) != 96)door(x, y + 1, z, a)
	}
	else if (g == 96)
	{
		door(x, y, z, a)
	}
	else if (g == 123 || g == 124)
	{
		light(x, y, z, a)
	}
	else if ((g == 63 || g == 68) && a)
	{
		comm(x, y, z)
	}
}

function repower(x, y, z, s) {
	ctx.runOnUiThread(new java.lang.Runnable({
												 run: function() {
													 new android.os.Handler().postDelayed(new java.lang.Runnable({
																													 run: function() {
																														 对周围六个方块使用函数power(x, y, z, true)
																													 }}), 10)}}))
}

function 对周围六个方块使用函数power(x, y, z, a) {
//对周围六个方块使用函数power
	power(x - 1, y, z, 15, a, 5)
	power(x + 1, y, z, 15, a, 4)
	power(x, y - 1, z, 15, a, 1)
	power(x, y + 1, z, 15, a, 0)
	power(x, y, z - 1, 15, a, 3)
	power(x, y, z + 1, 15, a, 2)
}

function pis(x, y, z, a, st, s) {
	var d=Level.getData(x, y, z)
//活塞
	if (a)
	{
		if (s != 1 && getTile(x, y - 1, z) == cps)
		{
//上
			if (getTile(x, y + 1, z) != pse)
			{
				for (var i=1;i < 15;i++)
				{
					if (getTile(x, y + i, z) == 0 || getTile(x, y + i, z) == 8 || getTile(x, y + i, z) == 9 || getTile(x, y + i, z) == 10 || getTile(x, y + i, z) == 11)
					{
						for (var j=i;j > 1;j--)
						{
							if (checkcn(x, y + j, z)) cn(x, y + j, z, false)
							Level.setTile(x, y + j, z, getTile(x, y + j - 1, z), Level.getData(x, y + j - 1, z))
							if (checkcn(x, y + j, z)) cn(x, y + j, z, true)
							else if (getTile(x, y + j, z) == 红石块) 对周围六个方块使用函数power(x, y + j, z, true)
						}
						if (checkcn(x, y + 1, z)) cn(x, y + 1, z, false)
						Level.setTile(x, y + 1, z, pse)
						break}}
			}
		}
		else if (s != 0 && getTile(x, y + 1, z) == cps)
		{
//下
			if (getTile(x, y - 1, z) != pse)
			{
				for (var i=1;i < 15;i++)
				{
					if (getTile(x, y - i, z) == 0 || getTile(x, y - i, z) == 8 || getTile(x, y - i, z) == 9 || getTile(x, y - i, z) == 10 || getTile(x, y - i, z) == 11)
					{
						for (var j=i;j > 1;j--)
						{
							if (checkcn(x, y - j, z)) cn(x, y - j, z, false)
							Level.setTile(x, y - j, z, getTile(x, y - j + 1, z), Level.getData(x, y - j + 1, z))
							if (checkcn(x, y - j, z)) cn(x, y - j, z, true)
							else if (getTile(x, y - j, z) == 红石块) 对周围六个方块使用函数power(x, y - j, z, true)
						}
						if (checkcn(x, y - 1, z)) cn(x, y - 1, z, false)
						Level.setTile(x, y - 1, z, pse)
						break}}
			}
		}
		else
		{
//四周
			if (d == 0 && s != 4 && getTile(x - 1, y, z) != pse)
			{
				for (var i=1;i < 15;i++)
				{
					if (getTile(x - i, y, z) == 0 || getTile(x - i, y, z) == 8 || getTile(x - i, y, z) == 9 || getTile(x - i, y, z) == 10 || getTile(x - i, y, z) == 11)
					{
						for (var j=i;j > 1;j--)
						{
							if (checkcn(x - j, y, z)) cn(x - j, y, z, false)
							Level.setTile(x - j, y, z, getTile(x - j + 1, y, z), Level.getData(x - j + 1, y, z))
							if (checkcn(x - j, y, z)) cn(x - j, y, z, true)
							else if (getTile(x - j, y, z) == 红石块) 对周围六个方块使用函数power(x - j, y, z, true)
						}
						if (checkcn(x - 1, y, z)) cn(x - 1, y, z, false)
						Level.setTile(x - 1, y, z, pse)
						break}}
			}
			else if (d == 1 && s != 5 && getTile(x + 1, y, z) != pse)
			{
				for (var i=1;i < 15;i++)
				{
					if (getTile(x + i, y, z) == 0 || getTile(x + i, y, z) == 8 || getTile(x + i, y, z) == 9 || getTile(x + i, y, z) == 10 || getTile(x + i, y, z) == 11)
					{
						for (var j=i;j > 1;j--)
						{
							if (checkcn(x + j, y, z)) cn(x + j, y, z, false)
							Level.setTile(x + j, y, z, getTile(x + j - 1, y, z), Level.getData(x + j - 1, y, z))
							if (checkcn(x + j, y, z)) cn(x + j, y, z, true)
							else if (getTile(x + j, y, z) == 红石块) 对周围六个方块使用函数power(x + j, y, z, true)
						}
						if (checkcn(x + 1, y, z)) cn(x + 1, y, z, false)
						Level.setTile(x + 1, y, z, pse)
						break}}
			}
			else if (d == 2 && s != 2 && getTile(x, y, z - 1) != pse)
			{
				for (var i=1;i < 15;i++)
				{
					if (getTile(x, y, z - i) == 0 || getTile(x, y, z - i) == 8 || getTile(x, y, z - i) == 9 || getTile(x, y, z - i) == 10 || getTile(x, y, z - i) == 11)
					{
						for (var j=i;j > 1;j--)
						{
							if (checkcn(x, y, z - j)) cn(x, y, z - j, false)
							Level.setTile(x, y, z - j, getTile(x, y, z - j + 1), Level.getData(x, y, z - j + 1))
							if (checkcn(x, y, z - j)) cn(x, y, z - j, true)
							else if (getTile(x, y, z - j) == 红石块) 对周围六个方块使用函数power(x, y, z - j, true)
						}
						if (checkcn(x, y, z - 1)) cn(x, y, z - 1, false)
						Level.setTile(x, y, z - 1, pse)
						break}}
			}
			else if (d == 3 && s != 3 && getTile(x, y, z + 1) != pse)
			{
				for (var i=1;i < 15;i++)
				{
					if (getTile(x, y, z + i) == 0 || getTile(x, y, z + i) == 8 || getTile(x, y, z + i) == 9 || getTile(x, y, z + i) == 10 || getTile(x, y, z + i) == 11)
					{
						for (var j=i;j > 1;j--)
						{
							if (checkcn(x, y, z + j)) cn(x, y, z + j, false)
							Level.setTile(x, y, z + j, getTile(x, y, z + j - 1), Level.getData(x, y, z + j - 1))
							if (checkcn(x, y, z + j)) cn(x, y, z + j, true)
							else if (getTile(x, y, z + j) == 红石块) 对周围六个方块使用函数power(x, y, z + j, true)
						}
						if (checkcn(x, y, z + 1)) cn(x, y, z + 1, false)
						Level.setTile(x, y, z + 1, pse)
						break}}
			}}
	}
	else
	{
		if (!st)
		{
//普通收回
			if (getTile(x, y - 1, z) == cps && getTile(x, y + 1, z) == pse)
				Level.setTile(x, y + 1, z, 0)
			else if (getTile(x, y + 1, z) == cps && getTile(x, y - 1, z) == pse)
				Level.setTile(x, y - 1, z, 0)
			else if (d == 0 && s != 4 && getTile(x - 1, y, z) == pse) Level.setTile(x - 1, y, z, 0)
			else if (d == 1 && s != 5 && getTile(x + 1, y, z) == pse) Level.setTile(x + 1, y, z, 0)
			else if (d == 2 && s != 2 && getTile(x, y, z - 1) == pse) Level.setTile(x, y, z - 1, 0)
			else if (d == 3 && s != 3 && getTile(x, y, z + 1) == pse) Level.setTile(x, y, z + 1, 0)
		}
		else
		{
//粘性收回
			if (getTile(x, y - 1, z) == cps && getTile(x, y + 1, z) == pse)
			{
				Level.setTile(x, y + 1, z, getTile(x, y + 2, z), Level.getData(x, y + 2, z))
				if (checkcn(x, y + 2, z)) cn(x, y + 2, z, false)
				if (checkcn(x, y + 1, z)) cn(x, y + 1, z, true)
				Level.setTile(x, y + 2, z, 0)
			}
			else if (getTile(x, y + 1, z) == cps && getTile(x, y - 1, z) == pse)
			{
				Level.setTile(x, y - 1, z, getTile(x, y - 2, z), Level.getData(x, y - 2, z))
				if (checkcn(x, y - 2, z)) cn(x, y - 2, z, false)
				if (checkcn(x, y - 1, z)) cn(x, y - 1, z, true)
				Level.setTile(x, y - 2, z, 0)
			}
			else if (d == 0 && s != 4 && getTile(x - 1, y, z) == pse)
			{
				Level.setTile(x - 1, y, z, getTile(x - 2, y, z), Level.getData(x - 2, y, z))
				if (checkcn(x - 2, y, z)) cn(x - 2, y, z, false)
				if (checkcn(x - 1, y, z)) cn(x - 1, y, z, true)
				Level.setTile(x - 2, y, z, 0)
			}
			else if (d == 1 && s != 5 && getTile(x + 1, y, z) == pse)
			{
				Level.setTile(x + 1, y, z, getTile(x + 2, y, z), Level.getData(x + 2, y, z))
				if (checkcn(x + 2, y, z)) cn(x + 2, y, z, false)
				if (checkcn(x + 1, y, z)) cn(x + 1, y, z, true)
				Level.setTile(x + 2, y, z, 0)
			}
			else if (d == 2 && s != 2 && getTile(x, y, z - 1) == pse)
			{
				Level.setTile(x, y, z - 1, getTile(x, y, z - 2), Level.getData(x, y, z - 2))
				if (checkcn(x, y, z - 2)) cn(x, y, z - 2, false)
				if (checkcn(x, y, z - 1)) cn(x, y, z - 1, true)
				Level.setTile(x, y, z - 2, 0)
			}
			else if (d == 3 && s != 3 && getTile(x, y, z + 1) == pse)
			{
				Level.setTile(x, y, z + 1, getTile(x, y, z + 2), Level.getData(x, y, z + 2))
				if (checkcn(x, y, z + 2)) cn(x, y, z + 2, false)
				if (checkcn(x, y, z + 1)) cn(x, y, z + 1, true)
				Level.setTile(x, y, z + 2, 0)
			}}
	}
}

function rep(x, y, z, a, s) {
	var d=Level.getData(x, y, z)
	var n=getTile(x, y, z)
	ctx.runOnUiThread(new java.lang.Runnable({
												 run: function() {
													 new android.os.Handler().postDelayed(new java.lang.Runnable({
																													 run: function() {
																														 if ((a && n == 地狱砖楼梯) || (!a && n == 砖楼梯))
																														 {
																															 Level.setTile(x, y, z, (a ?砖楼梯: 地狱砖楼梯), Level.getData(x, y, z))
																														 }
																														 else if ((a && n == rt) || (!a && n == rt1))
																														 {
																															 Level.setTile(x, y, z, (a ?rt1: rt), Level.getData(x, y, z))
																														 }
																														 else if
																														 ((a && n == rp2) || (!a && n == rp3))
																														 {
																															 Level.setTile(x, y, z, (a ?rp3: rp2), Level.getData(x, y, z))
																														 }
																														 if (d == 0)
																														 {
																															 cn(x - 1, y, z, a)
																															 power(x - 1, y, z, 15, a, 5)
																														 }
																														 else if (d == 1)
																														 {
																															 cn(x + 1, y, z, a)
																															 power(x + 1, y, z, 15, a, 4)
																														 }
																														 else if (d == 2)
																														 {
																															 cn(x, y, z - 1, a)
																															 power(x, y, z - 1, 15, a, 3)
																														 }
																														 else if (d == 3)
																														 {
																															 cn(x, y, z + 1, a)
																															 power(x, y, z + 1, 15, a, 2)
																														 }
																													 }}), (n == rp2 || n == rp3) ?1000: 250)}}))
}

function checkfk(x, y, z) {
	var k=true
	for (var i=0;i < 200;i++)
	{
		if (getTile(x, y, z) == tmfk[i])
		{
			k = false
		}}
	return k
}

function cn(x, y, z, a) {
	if (checkfk(x, y, z))
	{
		对周围六个方块使用函数power(x, y, z, a)
	}}

function checkcn(x, y, z) {
	var s1=getTile(x + 1, y, z)
	var s2=getTile(x - 1, y, z)
	var s3=getTile(x, y, z + 1)
	var s4=getTile(x, y, z - 1)
	var ss1=Level.getData(x + 1, y, z)
	var ss2=Level.getData(x - 1, y, z)
	var ss3=Level.getData(x, y, z + 1)
	var ss4=Level.getData(x, y, z - 1)
	if (((s1 == 砖楼梯 || s1 == rp3 || s1 == rt1) && ss1 == 0) || ((s2 == 砖楼梯 || s2 == rp3 || s2 == rt1) && ss2 == 1) || ((s3 == 砖楼梯 || s3 == rp3 || s3 == rt1) && ss3 == 2) || ((s4 == 砖楼梯 || s4 == rp3 || s4 == rt1) && ss4 == 3))
	{
		return true}
	else
	{return false}
}

function fsa(x, y, z) {
	var d=Level.getData(x, y, z)
	if (d == 4)
	{
		Level.spawnMob(x - 1, y, z, 65)
	}
	else if (d == 5)
	{
		Level.spawnMob(x + 1, y, z, 65)
	}
	else if (d == 2)
	{
		Level.spawnMob(x, y, z - 1, 65)
	}
	else if (d == 3)
	{
		Level.spawnMob(x, y, z + 1, 65)
	}
}
function fsa1(x, y, z) {
	var d=Level.getData(x, y, z)
	if (d == 1)
	{
		var m=Level.spawnMob(x - 1, y, z, 80)
		setVelX(m, Math.random() - 2.5)
	}
	else if (d == 0)
	{
		var m=Level.spawnMob(x, y, z + 1, 80)
		setVelZ(m, 2.5 - Math.random())
	}
	else if (d == 2)
	{
		var m=Level.spawnMob(x, y, z - 1, 80)
		setVelZ(m, Math.random() - 2.5)
	}
	else if (d == 3)
	{
		var m=Level.spawnMob(x + 1, y, z, 80)
		setVelX(m, 2.5 - Math.random())
	}
}

function fsa2(x, y, z) {
	var d=Level.getData(x, y, z)
	if (d == 1)
	{
		var m=Level.spawnMob(x - 1, y, z, 81)
		setVelX(m, Math.random() - 2.5)
	}
	else if (d == 0)
	{
		var m=Level.spawnMob(x, y, z + 1, 81)
		setVelZ(m, 2.5 - Math.random())
	}
	else if (d == 2)
	{
		var m=Level.spawnMob(x, y, z - 1, 81)
		setVelZ(m, Math.random() - 2.5)
	}
	else if (d == 3)
	{
		var m=Level.spawnMob(x + 1, y, z, 81)
		setVelX(m, 2.5 - Math.random())
	}
}

function clickbtn(x, y, z, a) {
	对周围六个方块使用函数power(x, y, z, true)
	cn(x, y - 1, z, true)
	ctx.runOnUiThread(new java.lang.Runnable({
												 run: function() {
													 new android.os.Handler().postDelayed(new java.lang.Runnable({
																													 run: function() {
																														 对周围六个方块使用函数power(x, y, z, false)
																														 cn(x, y - 1, z, false)
																													 }}), (a == 石制按钮 ?1000: 1500))}}))
}

function door(x, y, z, a) {
	var g=getTile(x, y, z)
	if (g == 64 || g == 71 || g == 96)
	{
		var d=Level.getData(x, y, z)
		if (d < 4 && a)
		{
			d += 4}
		else if (d > 3 && d < 8 && !a)
		{
			d -= 4}
		if (d < 8)Level.setTile(x, y, z, g, d)
	}
}

function light(x, y, z, a) {
	if (a && getTile(x, y, z) == 123)
	{
		Level.setTile(x, y, z, 124)
	}
	else if (!a && getTile(x, y, z) == 124)
	{
		Level.setTile(x, y, z, 123)
	}
}

function comm(x, y, z) {
	var s=Level.getSignText(x, y, z)
	if (s == "/gamemode 1")
	{
		Level.setGameMode(1)
	}
	else if (s == "/gamemode 0")
	{
		Level.setGameMode(0)
	}
	else if (s.indexOf("/tp ") == 0)
	{
		var zb=s.split(" ")
		setPosition(getPlayerEnt(), zb[1], zb[2], zb[3])
	}
	else if (s.indexOf("/time set ") == 0)
	{
		var t=s.split(" ")
		Level.setTime(t[2])
	}
	else if (s.indexOf("/time add ") == 0)
	{
		var t=s.split(" ")
		Level.setTime(Level.getTime() + t[2])
	}
	else if (s == "/time day")
	{
		Level.setTime(0)
	}
	else if (s == "/time night")
	{
		Level.setTime(3)
	}
	else if (s.indexOf("/spawnpoint ") == 0)
	{
		var sp=s.split(" ")
		Level.setSpawn(sp[1], sp[2], sp[3])
	}
	else if (s.indexOf("/say ") == 0)
	{
		var sp=s.split(" ")
		clientMessage(sp[1])
	}
	else if (s.indexOf("/spawnmob ") == 0)
	{
		var z=s.split(" ")
		Level.spawnMob(z[1], z[2], z[3], z[4])
	}
}

function dip2px(ctx, dips) {
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
} 
function newLevel() {
	Player.addItemCreativeInv(330, 1, 0)
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
	ctx.runOnUiThread(new java.lang.Runnable({run:function() {
													 try
													 {
														 var layout = new android.widget.RelativeLayout(ctx)
														 btnWindow = new android.widget.PopupWindow(layout)
														 var button = new android.widget.Button(ctx)
														 button.setText("红石")
														 button.setTextColor(android.graphics.Color.RED)
														 button.setOnClickListener(new android.view.View.OnClickListener({
																															 onClick: function(viewarg) {
																																 openMenu()
																															 }
																														 }))
														 layout.addView(button)
														 btnWindow.setContentView(layout)
														 btnWindow.setWidth(dip2px(ctx, 60))
														 btnWindow.setHeight(dip2px(ctx, 70))
														 btnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
														 btnWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 20, 60)
													 }
													 catch(err){
														 print("很抱歉，无法显示按钮")
													 }}
											 }))
}


