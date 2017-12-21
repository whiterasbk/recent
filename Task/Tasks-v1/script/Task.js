/******************************************************************************************************************************************************/
var InputType = 
{
    DataTime          : android.text.InputType.TYPE_CLASS_DATETIME,
	Text              : android.text.InputType.TYPE_CLASS_TEXT,
	Number            : android.text.InputType.TYPE_CLASS_NUMBER,
	VariationPassWord : android.text.InputType.TYPE_TEXT_VARIATION_PASSWORD,
	EmailAddress      : android.text.InputType.TYPE_TEXT_VARIATION_EMAIL_ADDRESS
};
var Interpolator = 
{
	Linear               : new android.view.animation.LinearInterpolator(),
	Accelerate           : new android.view.animation.AccelerateInterpolator(),
	AccelerateDecelerate : new android.view.animation.AccelerateDecelerateInterpolator(),
	Decelerate           : new android.view.animation.DecelerateInterpolator(),
	Cycle                : function(FloatSin) {
		return new android.view.animation.CycleInterpolator(java.lang.Float(FloatSin.toString()));
	}
};
var LayoutParams =
{
	FillParent  :  android.view.ViewGroup.LayoutParams.FILL_PARENT,
	WrapContent : android.view.ViewGroup.LayoutParams.WRAP_CONTENT,
	MatchParent : android.view.ViewGroup.LayoutParams.MATCH_PARENT,
	getParams   : function(Width, Height) { 
		return new android.view.ViewGroup.LayoutParams(Width == null ? -2 : Width , Height == null ? -2 : Height);
	}
};

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var icon = null, Menu = null, MainLayout = null;
var Vertical = android.widget.LinearLayout.VERTICAL, Horizontal = android.widget.LinearLayout.HORIZONTAL;
var onRun_per_500 = "", onRun_per_1000 = "", onEntityRemoved = "", onModTick = "", onProcCmd = "", onChatHook = "", onAttackHook = "", onEntityAddedHook = "", onDeathHook = "", onDestroyBlock = "", onUseItem = "", onBlockEventHook = "", onStartDestroyBlock = "", onSelectLevelHook = "", onExplodeHook = "", onLevelEventHook = "", onEatHook = "", onProjectileHitBlockHook = "", onProjectileHitEntityHook = "", onServerMessageReceiveHook = "", onRedstoneUpdateHook = "", onNewLevel = "", onLeaveGame = "", onDay = "", onNight = "", onPublic = "";
var MessageViews = [];
var DebugMessages = "";
var thread_count = 0;
var Sdcard_Tasks = android.os.Environment.getExternalStorageDirectory() + "/Tasks/";
var debug_mode = DebugMode();

load();
eval(onPublic);

//var Thread4TypeModTickPer500 = new java.lang.Thread(new java.lang.Runnable({run : function(){try{
//	while(true)
//	{
//		RunPer500();
//		Thread4TypeModTickPer500.sleep(500);
//	}
//}catch(err){Run({run:function(){Alert(err);}});}}}));
//
//var Thread4TypeModTickPer1000 = new java.lang.Thread(new java.lang.Runnable({run : function(){try{
//	while(true)
//	{
//		RunPer1000();
//		Thread4TypeModTickPer1000.sleep(1000);
//	}
//}catch(err){Run({run:function(){Alert(err);}});}}}));
//
//RuntimeEcexption

try
{
	if(bgm_and_font_setting("background_music") == "on")
	{
		var bgm = new android.media.MediaPlayer();
		bgm.setDataSource(Sdcard_Tasks + "bgm.ogg");
		bgm.setLooping(true);
		bgm.prepare();
		bgm.start();
	}
}
catch(err)
{
	Run({run : function(){Alert(err);}});
}
/******************************************************************************************************************************************************/
function SubMenuInterface(index) {try
	{
		switch (index)
		{
			case 1: //"说明以及版权"
				ExplainMod();
				break;
			case 2: //"消息中心"
			    MessageCenter();
				break;
			case 3: //"任务中心"
			    TaskCenter();
				break;
			case 4: //"设置"
			    Settings();
				break;
			case 5: //"关于作者"
			    MakerAbout();
				break;
			case 6: //"末影工作室"
			    NothingStudio();
				break;
			case 7: //"debug"
			    debug();
			    break;
			default:
				Toast_U("该菜单未启用，敬请期待");
				break;
		}}
	catch(error){Alert(error + error.lineNumber);}
}
/******************************************************************************************************************************************************/
function SendMessage(Msg, Title, ButtonText, onClick, Icon) {try
	{
		var layout = new android.widget.LinearLayout(ctx);

		var image = ImageView(Icon == null ? "images/icon.jpg" : Icon);
		image.setLayoutParams(LayoutParams.getParams(150, 150));
		layout.addView(image);

		var sublayout = new android.widget.LinearLayout(ctx);
		sublayout.setOrientation(Vertical);
		sublayout.addView(TextView(Title == null ? "Task" : Title , "#4CFF34"));
		sublayout.addView(TextView(Msg == null ? "空消息" : Msg , "#F52C14"));
		var button = Button(ButtonText == null ? "确定" : ButtonText, onClick);
		button.setLayoutParams(LayoutParams.getParams(LayoutParams.WrapContent, LayoutParams.WrapContent));
		var subsub = new android.widget.LinearLayout(ctx);
		subsub.setOrientation(Horizontal);
		subsub.addView(TextView("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"));
		subsub.addView(button);
		sublayout.addView(subsub);

		layout.setOrientation(Horizontal);
		layout.setLayoutParams(new android.view.ViewGroup.LayoutParams(LayoutParams.MatchParent, LayoutParams.WrapContent));
		layout.addView(sublayout);

		MessageViews.push([layout, {Msg : Msg == null ? "空消息" : Msg, Title : Title == null ? "Task" : Title, ButtonText : ButtonText == null ? "确定" : ButtonText, onClick : onClick == null ? {onClick : function(v) {}} : onClick , Icon : Icon == null ? "images/icon.jpg" : Icon }]);
		if(icon != null)
		{
			Run({run : function(){
				var Anim = new android.view.animation.TranslateAnimation(0, 0, 0, 10);   
                Anim.setDuration(50);
                Anim.setFillAfter(false);
                Anim.setRepeatCount(40);
                Anim.setInterpolator(new android.view.animation.LinearInterpolator());
				icon.getContentView().startAnimation(Anim);
				var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
				vibrator.vibrate(100);
			}});
		}
	}
	catch(error){Run({run : function() {Alert(error + error.lineNumber);}});}
}

function MessageCenter() {
	if (Menu != null) Menu.dismiss();

    var PopMessage = new android.widget.PopupWindow(ctx);

	var head = LinearLayout(null, "images/bule.jpeg");
	head.setLayoutParams(new android.view.ViewGroup.LayoutParams(LayoutParams.MatchParent, 120));

	var body = new android.widget.LinearLayout(ctx);
	body.setLayoutParams(new android.view.ViewGroup.LayoutParams(LayoutParams.MatchParent, LayoutParams.WrapContent));
    body.setOrientation(Vertical);

	var tmp = LinearLayout(null, "images/Alpha.png", Horizontal);
	var image = ImageView("images/studio_logo.jpeg");
	image.setLayoutParams(LayoutParams.getParams(100, 100));
	image.setOnClickListener(new android.view.View.OnClickListener({onClick : function(v) {PopMessage.dismiss(); body.removeAllViews();}}));
	image.setClickable(true);
	tmp.addView(image);
	var poptitle = TextView("消息中心\n。。。。。。。。\n点击logo即可关闭");
	tmp.addView(poptitle);
//	var onthing = TextView("																										");
//	tmp.addView(onthing);
//	var exit = Button("", {onClick:function(v) { PopMessage.dismiss(); body.removeAllViews();}}, null, "images/close.jpg");
//  exit.setLayoutParams(LayoutParams.getParams(100, 100));
//	tmp.addView(exit);

	head.addView(tmp);
//	head.addView(TextView("这里是消息中心"));

    if (MessageViews.length == 0) Toast_U("还没有任何消息。。。。");
	for (var i = 0; i < MessageViews.length; i++)
	{
		body.addView(MessageViews[i][0]);
	}

	var scroll = new android.widget.ScrollView(ctx);
    scroll.addView(body);

	var layout = LinearLayout();//new android.widget.LinearLayout(ctx);
	layout.addView(head);
	layout.addView(scroll);


	PopMessage.setContentView(layout);
	PopMessage.setHeight(ScreenDip_Height(500));
	PopMessage.setWidth(ScreenDip_Width(800));
	var color = new android.graphics.drawable.ColorDrawable();
	color.setColor(getColor("#00FFFFFF"));
	PopMessage.setBackgroundDrawable(color);
	PopMessage.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);

	layout.startAnimation(AlphaAnimator(4000, true, Interpolator.Decelerate, 0, 1));
	image.startAnimation(RotateAnimation(3000, true, Interpolator.Accelerate, [true, true], 0, 360, 50, 50));
//	exit.startAnimation(AlphaAnimator(10000, true, Interpolator.AccelerateDecelerate, 0, 1, [true, true]));
	head.startAnimation(BounceAnimator(3000));
	body.startAnimation(BounceAnimator(3000));
}
function RemoveMessage(v){try{
	var rootView = v.getParent().getParent().getParent().getParent();
	var r2 = v.getParent().getParent().getParent();
	//-------------subsub--------sulayout----layout
	var subroot =  v.getParent().getParent().getParent();
	subroot.startAnimation(TranslateAnimation(1000, Interpolator.Linear, true, null, 0, 500, 0, 0));
		new android.os.Handler().postDelayed(new java.lang.Runnable({ 
			run: function() { try{
				rootView.removeView(subroot);
	}catch(e){Alert(e);}}}), 1000);
		
	for(var i = 0; i < MessageViews.length; i++)
	{
		if(MessageViews[i][0] == r2)
			MessageViews.splice(i, 1);
	}
}catch(err){Run({run : function(){Alert(err + "\nline At:" + err.lineNumber);}});}}
/******************************************************************************************************************************************************/
function TaskCenter() {
	var names = [],information = [], progresses = [], icons = [];
	var PopTasks = new android.widget.PopupWindow(ctx);

	var head = LinearLayout(null, "images/bule.jpeg");
	head.setLayoutParams(new android.view.ViewGroup.LayoutParams(LayoutParams.MatchParent, 120));

	var body = new android.widget.LinearLayout(ctx);
	body.setLayoutParams(new android.view.ViewGroup.LayoutParams(LayoutParams.MatchParent, LayoutParams.WrapContent));
    body.setOrientation(Vertical);

	var tmp = LinearLayout(null, "images/Alpha.png", Horizontal);
	var image = ImageView("images/studio_logo.jpeg");
	image.setLayoutParams(LayoutParams.getParams(100, 100));
	tmp.addView(image);
	var poptitle = TextView("任务中心\n。。。。。。。。");
	tmp.addView(poptitle);

	head.addView(tmp);
	head.addView(TextView("这里是任务中心"));

    var FatherPath = android.os.Environment.getExternalStorageDirectory() + "/Tasks";
	var FatherFile = new java.io.File(FatherPath);
	if (!FatherFile.exists())
	{
		FatherFile.mkdirs();
	}
	var subfile = FatherFile.listFiles();
	for (var i = 0; i < subfile.length; i ++)
	{
		if (subfile[i].isDirectory())
		{
			if (subfile[i].getName().toString() == "Messages" || subfile[i].getName().toString() == "Public" || subfile[i].getName().toString() == "Task-Resource")
				continue;
			names.push(subfile[i].getName().toString());
            information.push("");
			progresses.push("");
			icons.push("");
			var subsubfile = subfile[i].listFiles();

			for (var si = 0; si < subsubfile.length; si++)
			{
				var filename = subsubfile[si].getName();
                if (filename == "information.ini")
					information[names.length - 1] = Read(subsubfile[si]);
			    if (filename == "progress.progress")
					progresses[names.length - 1] = Read(subsubfile[si]);
				if (filename == "icon.png" || filename == "icon.jpg" || filename == "icon.jpeg")
				{
					var iu = new java.io.FileInputStream(subsubfile[si]);
					icons[names.length - 1] = iu;
				}
			}
		}
	}

    for (var i = 0; i < names.length; i++)
	{   
		var task = new android.widget.LinearLayout(ctx);
		task.setOrientation(Horizontal);
		task.setLayoutParams(LayoutParams.getParams(LayoutParams.MatchParent, LayoutParams.WrapContent));

		var ic = new android.widget.ImageView(ctx);
		ic.setImageBitmap(android.graphics.BitmapFactory.decodeStream(icons[i] == null || icons[i] == "" ? getInputStream("images/icon.jpg") : icons[i]));  
		ic.setLayoutParams(LayoutParams.getParams(100, 100));
		task.addView(ic);

		var seci = new android.widget.LinearLayout(ctx);
        seci.setOrientation(Vertical);
		seci.setLayoutParams(LayoutParams.getParams(LayoutParams.MatchParent, LayoutParams.WrapContent));
		seci.addView(TextView("任务名称:" + names[i], "#3CFF51"));

		var check = Button("查看", {onClick : function(v) {try
								   {
									   var i = v.getId();
									   var linear = new android.widget.LinearLayout(ctx);
									   linear.setOrientation(Horizontal);
									   linear.setLayoutParams(LayoutParams.getParams(LayoutParams.MatchParent, LayoutParams.WrapContent));

									   var imageview = new android.widget.ImageView(ctx);

									   var ips = null;
									   var pathm = v.getParent().getChildAt(0).getText().toString();
									   pathm = Sdcard_Tasks + pathm.replaceAll("^任务名称:", "") + "/icon.png"; 
									   var icf = new java.io.File(pathm);
									   if (icf.exists())
										   ips = new java.io.FileInputStream(pathm);
									   else
										   ips = getInputStream("images/icon.jpg");

									   imageview.setImageBitmap(android.graphics.BitmapFactory.decodeStream(ips));  
									   imageview.setLayoutParams(LayoutParams.getParams(225, 225));
									   linear.addView(imageview);

									   var sub = new android.widget.LinearLayout(ctx);
									   sub.setOrientation(Vertical);
									   sub.addView(TextView("任务名称:" + names[i], "#3CFF51"));
									   sub.addView(TextView("任务信息:" + information[i], "#F52C14"));
									   sub.addView(TextView("进度:" + progresses[i], "#D17A0F"));
									   var subbb = new android.widget.LinearLayout(ctx);
									   subbb.setOrientation(Horizontal);
									   subbb.addView(TextView("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"));
									   subbb.addView(Button("执行任务", {onClick: function(v) {try
																	{var path = v.getParent().getParent().getChildAt(0).getText().toString(); path = path.replaceAll("^任务名称:", ""); var content = Read("sdcard/Tasks/" + path + "/click.js");  eval(content);}catch(e){Alert(e);}}}));
									   sub.addView(subbb);
									   var sb = new android.widget.ScrollView(ctx);
									   sb.setLayoutParams(LayoutParams.getParams(LayoutParams.WrapContent, LayoutParams.MatchParent));
									   sb.addView(sub);

									   linear.addView(sb);
										
									   SubMenu(800, 255, LinearLayoutGroup([TextView("任务详情"), linear]));
								   }catch(upo){Alert(upo);}}});
	    check.setId(i);
		check.setLayoutParams(LayoutParams.getParams(LayoutParams.WrapContent, LayoutParams.WrapContent));
		seci.addView(check);
		task.addView(seci);

		body.addView(task);
	}


	var scroll = new android.widget.ScrollView(ctx);
    scroll.addView(body);

	var layout = LinearLayout();//new android.widget.LinearLayout(ctx);
	layout.addView(head);
	layout.addView(scroll);


	PopTasks.setContentView(layout);
	PopTasks.setHeight(ScreenDip_Height(300));
	PopTasks.setWidth(ScreenDip_Width(400));
	PopTasks.setFocusable(true);
	var color = new android.graphics.drawable.ColorDrawable();
	color.setColor(getColor("#00FFFFFF"));
	PopTasks.setBackgroundDrawable(color);
	PopTasks.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);

	layout.startAnimation(AlphaAnimator(4000, true, Interpolator.Decelerate, 0, 1));
	image.startAnimation(RotateAnimation(3000, true, Interpolator.Accelerate, [true, true], 0, 360, 50, 50));
	head.startAnimation(BounceAnimator(3000));
	body.startAnimation(BounceAnimator(3000));

	function Read(InputFile) {
		var InputStream = new java.io.FileInputStream(InputFile);
		var bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, InputStream.available());
		InputStream.read(bytes);
		InputStream.close();
		return new java.lang.String(bytes) + "\n";
	}
}
/******************************************************************************************************************************************************/
function MakerAbout() {
	var text =
		"应该来说，不应该出现“关于作者”这个按钮的，因为前面已经有作者信息了，但是为了“高端大气上档次”，还是凑合着加上这个按钮吧\n" + 
		"既然如此那我就再把我的信息再copy一下。。。。。。。\n" +
		"首先，此插件的作者是:白客(关小契)，未经允许不得擅自修改发布。。。。这个是版权问题，当然，如果你对此mod的算法感兴趣，欢迎查看，本mod的算法均为原创，如果要使用或者转载请注明作者。。。。\n" +
		"作者QQ:2980725051\n加好友请注明来源。\n差不多也就这样。有bug欢迎反应";
	var layout = LinearLayout(null, "images/background.jpg");
	var headic = ImageView("images/whiter_head.png");
	headic.setLayoutParams(LayoutParams.getParams(50, 50));
	layout.addView(headic);
	layout.addView(TextView("\n\n关于作者"));
	layout.addView(TextView(text, "#004EFF"));
	layout.addView(TextView("\t\t\t\t\t\t\t\t"));

	var show = ImageView(rom_path(["circle_1.jpg", "circle_2.jpg", "EnderDragon.jpg", "whiter.jpg", "亮瞎双眼.jpg",  "我差点信了你这个逗逼的话.jpg", "icon.jpg", "image1.jpg", "image2.jpg", "studio_logo.jpeg", "studio_logo.jpeg", "studio_logo.jpeg"]));
	show.setLayoutParams(LayoutParams.getParams(500, 300));
    layout.addView(show);

	var window = new android.widget.PopupWindow(ctx);
	window.setHeight(ScreenDip_Height(500));
	window.setWidth(ScreenDip_Width(500));
	window.setContentView(ScrollView(layout, "images/Alpha.png"));
	var color = new android.graphics.drawable.ColorDrawable();
	color.setColor(getColor("#00FFFFFF"));
	window.setBackgroundDrawable(color);
	window.setFocusable(true);
	window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);

	layout.startAnimation(RotateAnimation(2000, true, Interpolator.Linear, null, 0, 360, 250, 250));
	headic.startAnimation(RotateAnimation(3000, true, Interpolator.Linear, [true, android.view.animation.Animation.RESTART], 0, 360, 50, 50));
	show.startAnimation(TranslateAnimation(4000, Interpolator.Accelerate, true, null, -500, 0, 0, 0));
}
/******************************************************************************************************************************************************/
function NothingStudio() {
	var text = 
		"末影工作室是一个欢乐的集体，工作室里不仅解密，跑酷，PVP等地图作者，还有建筑师，材质作者，js作者等等\n" + 
		"你可以加群学习js,(有时候可能会讨论别的语言，比如Java)，讨论js，学习制作地图，学习材质。。。。。\n非常欢迎各位加入末影工作室，与各路mc玩家一起讨论游戏，讨论人生。。。。。。\n" + 
		"另外，也希望工作室可以蒸蒸日上，越来越出名。";
	var layout = LinearLayout(null, "images/background.jpg");
	var headic = ImageView("images/studio_logo.jpeg");
	headic.setLayoutParams(LayoutParams.getParams(50, 50));
	layout.addView(headic);
	layout.addView(TextView("\n\末影工作室"));
	layout.addView(TextView(text, "#004EFF"));

	var show = ImageView(rom_path(["studio_about.jpeg", "studio_about.jpeg", "EnderDragon.jpg", "studio_logo.jpeg", "studio_QQ.jpeg"]));
	show.setLayoutParams(LayoutParams.getParams(500, 300));
    layout.addView(show);

	var window = new android.widget.PopupWindow(ctx);
	window.setHeight(ScreenDip_Height(500));
	window.setWidth(ScreenDip_Width(500));
	window.setContentView(ScrollView(layout, "images/Alpha.png"));
	var color = new android.graphics.drawable.ColorDrawable();
	color.setColor(getColor("#00FFFFFF"));
	window.setBackgroundDrawable(color);
	window.setFocusable(true);
	window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);

	layout.startAnimation(RotateAnimation(2000, true, Interpolator.Linear, null, 0, 360, 250, 250));
	headic.startAnimation(RotateAnimation(3000, true, Interpolator.Linear, [true, android.view.animation.Animation.RESTART], 0, 360, 50, 50));
	show.startAnimation(TranslateAnimation(4000, Interpolator.Accelerate, true, null, -500, 0, 0, 0));
}
/******************************************************************************************************************************************************/
function Settings() {

	var settings = ["on", "on"];
	var layout = LinearLayout();
	layout.addView(TextView("设置(其实也没有什么好设置的)", "#FD1405"));

	var background_music = null, default_font = null;
 	background_music = new android.widget.CheckBox(ctx);
	background_music.setText("是否开启背景音乐");
    background_music.setChecked(ReadSettings()[0] == "on" ? true : false);
    background_music.setOnCheckedChangeListener(
		new android.widget.CompoundButton.OnCheckedChangeListener(
			{onCheckedChanged : 
				function(CompoundButton, boolean) {
					if (boolean == true)
						settings[0] = "on";
					else if (boolean == false)
						settings[0] = "off";
					CompoundButton.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -500, 0, 0, 0)); 
				}}));
	layout.addView(background_music);

	default_font = new android.widget.CheckBox(ctx);
	default_font.setText("是否使用js默认字体");
    default_font.setChecked(ReadSettings()[1] == "on" ? true : false);
    default_font.setOnCheckedChangeListener(
		new android.widget.CompoundButton.OnCheckedChangeListener(
			{onCheckedChanged : 
				function(CompoundButton, boolean) {
					if (boolean == true)
						settings[1] = "on";
					else if (boolean == false)
						settings[1] = "off";
					CompoundButton.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -500, 0, 0, 0)); 
				}}));
	layout.addView(default_font);

	layout.addView(Button("保存设置", {onClick : function(v) {try 
								  {
									  var out = new java.io.FileOutputStream( Sdcard_Tasks + "Settings.ini");
									  out.write(new java.lang.String("background_music=" + settings[0] + "\n" + "default_font=" + settings[1]).getBytes());
									  out.close();
//									  WriteTasksStringFile("background_music.ini", settings[0]);
//									  WriteTasksStringFile("default_font.ini", settings[1]);
//									  
									  v.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -500, 0, 0, 0)); 
									  Toast_U("保存成功");
								  }catch(err){Alert(err + err.lineNumber);}}}));

	layout.addView(TextView("重启游戏后生效\n设置有毒，小心使用", "#FD1405"));

	SubMenu(370, 300, layout);
	layout.startAnimation(BounceAnimator());
}
function ReadSettings() {try
	{
		var tmp = [];
		var ini_file = new java.io.File(Sdcard_Tasks + "Settings.ini");
		var bufread = new java.io.BufferedReader(new java.io.FileReader(ini_file));
		var contentline = "";
		while ((contentline = bufread.readLine()) != null)
		{
			tmp.push(IniRegexp(contentline));
		}
		return tmp;
	}
	catch(error){Run({run : function() { Alert(error + error.lineNumber);}});}
}
function IniRegexp(string) {
	var result = "";
	var regexps = 
	[
		[/^background_music=[\w\W]*/i, "background_music"],
		[/^default_font=[\w\W]*/i, "default_font"]
	];
	for (var i = 0; i < regexps.length; i++)
	{
		if (regexps[i][0].test(string))
		{
			switch (regexps[i][1])
			{
				case regexps[0][1] :
					result = string.replaceAll("^background_music=", "");
					break;
				case regexps[1][1] :
					result = string.replaceAll("^default_font=", "");
					break;
			}
		}
	}
	return result;
} 
/******************************************************************************************************************************************************/
function ExplainMod() {
	var layout = LinearLayout(null, "images/quartz_block_chiseled.png"), msg = TextView("说明以及版权");
	layout.addView(msg);
	var text = "  首先，此插件的作者是:白客(关小契)，未经允许不得擅自修改发布。。。。这个是版权问题，当然，如果你对此mod的算法感兴趣，欢迎查看，本mod的算法均为原创，如果要使用或者转载请注明作者。。。。\n" +
		"  然后就是如何使用这个mod了，其实很简单，点击菜单上的“任务中心”，就可以去选择任务了，选择一个你喜欢的任务，再去“消息中心”，你就会发现多了你刚刚选择的任务，然后你就可以去按照任务内容去完成任务了。\n" +
		"  当你完成任务的时候，系统会告知你去领取任务奖励，每一个任务由于难度不同，类别不同，所以对应的奖励也不同，难度越大，奖励就越多。\n  任务分为Daily Task 和 Common Task，其中Daily Task是日常任务，" +
		"就是每天都可以一次做的任务，这种任务的奖励比较少，而 Common Task是普通的任务，什么时候都可以做，这种任务的奖励相对来说多一点。\n  你还可以自定义任务，关于这个，请阅读/sdcard/Task/TypeTask.txt。\n剩下的自己去探索探索吧\n\n\n" +
		"对了差点忘了，作者QQ:2980725051,\n欢迎加入交流群-末影工作室②，群号码：541801126\n欢迎加入交流群-末影工作室①，群号码：334253477。\n本mod由末影工作室出品";
	layout.addView(TextView(text));
	var logo = ImageView("images/studio_logo.jpeg");
	var anim = RotateAnimation(4000, true, Interpolator.AccelerateDecelerate, [true, true], 0, 360, 50, 50);
	layout.addView(logo);
	var pop = SubMenu(350, 350, ScrollView(layout, "images/Alpha.png"));
	var color = new android.graphics.drawable.ColorDrawable();
	color.setColor(getColor("#00FFFFFF"));
	pop.setBackgroundDrawable(color);
	logo.startAnimation(anim);
	layout.startAnimation(BounceAnimator());
}

function rom_path(pathes) {
	var tmp = "";
	var i = Math.round(Math.random() * pathes.length);
	tmp = pathes[i];
	if (tmp == null)
		return "images/circle_1.jpg";
	else 
		return "images/" + tmp;
}

function intent_activity(u) {try
	{
		print("mod的 深深的恶意");
		com.mojang.minecraftpe.MainActivity.currentMainActivity.get().startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(u)));}
	catch(err){Alert(err + "\nLineNuber:" + err.lineNumber);}
}
/******************************************************************************************************************************************************/
/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
/******************************************************************************************************************************************************/
function Icon() {

	Run({run : 
			function () {try
				{
					icon = new android.widget.PopupWindow(ctx);
					icon.setHeight(ScreenDip_Height(70));
					icon.setWidth(ScreenDip_Width(70));
					var button = Button("", {onClick:function(v) {try
												{v.startAnimation(RotateAnimation(1000, false, Interpolator.AccelerateDecelerate, null, 0, 360, 50, 50));  Main();}catch(error){Alert(error);}}}, null, "images/icon.jpg");
					icon.setContentView(button);
					var color = new android.graphics.drawable.ColorDrawable();
					color.setColor(getColor("#00FFFFFF"));
					icon.setBackgroundDrawable(color);
					icon.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
					button.startAnimation(BounceAnimator());
				}catch(error){new android.app.AlertDialog.Builder(ctx).setTitle("Error").setMessage(error.toString()).create().show();}}});

}
function SubMenu(Width, Height, ContentView, Location, X, Y, Focusable, isShow) {
	var pop = new android.widget.PopupWindow(ctx);
	pop.setWidth(Width == null ? ScreenDip_Width(100) : ScreenDip_Width(Width));
	pop.setHeight(Height == null ? ScreenDip_Height(100) : ScreenDip_Height(Height));
	pop.setContentView(ContentView);
	pop.setFocusable(Focusable == null ? true : Focusable);
	if (isShow == true || isShow == null) pop.showAtLocation(ctx.getWindow().getDecorView(), Location == null ? android.view.Gravity.CENTER : Location, X == null ? 0 : X, Y == null ? 0 : Y);
	return pop;
}
function Main() {try
	{
		var List = ["说明以及版权", "消息中心", "任务中心", "设置", "关于作者", "末影工作室"];
		if (DebugMode())
			List.push("debug");
		else
		{
			var n = Math.round(Math.random() * 1000);
			if (n == 378)
				List.push("debug");
		}
		var click = 
		[
			{onClick : function (v) {v.startAnimation(AlphaAnimator(1000, false, Interpolator.Accelerate, 1.0, 0.0)); SubMenuInterface(1);}},
			{onClick : function (v) {v.startAnimation(AlphaAnimator(1000, false, Interpolator.Accelerate, 1.0, 0.0)); SubMenuInterface(2);}},
			{onClick : function (v) {v.startAnimation(AlphaAnimator(1000, false, Interpolator.Accelerate, 1.0, 0.0)); SubMenuInterface(3);}},
			{onClick : function (v) {v.startAnimation(AlphaAnimator(1000, false, Interpolator.Accelerate, 1.0, 0.0)); SubMenuInterface(4);}},
			{onClick : function (v) {v.startAnimation(AlphaAnimator(1000, false, Interpolator.Accelerate, 1.0, 0.0)); SubMenuInterface(5);}},
			{onClick : function (v) {v.startAnimation(AlphaAnimator(1000, false, Interpolator.Accelerate, 1.0, 0.0)); SubMenuInterface(6);}},
			{onClick : function (v) {v.startAnimation(AlphaAnimator(1000, false, Interpolator.Accelerate, 1.0, 0.0)); SubMenuInterface(7);}}
		];

		var MainView = ScrollView();
		MainLayout = LinearLayout();
		MainView.addView(MainLayout);

		for (var i = 0; i < List.length; i++)
			MainLayout.addView(Button(List[i], click[i], null, null, 250));
		Menu = new android.widget.PopupWindow(ctx);
		Menu.setHeight(ScreenDip_Height(200));
		Menu.setWidth(ScreenDip_Width(250));
		Menu.setFocusable(true);
		Menu.setContentView(MainView);
		Menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, 5, -50);
		MainLayout.startAnimation(BounceAnimator());
		return Menu;
	}catch(error){new android.app.AlertDialog.Builder(ctx).setTitle("Error").setMessage(error.toString()).create().show();}
}

//var ver = ModPE.getMinecraftVerson();
//var re = /\b0\.1\d\.\d\b/;
//print(ver.match(re));
//540  960
function bgm_and_font_setting(type){
	var p = new java.util.Properties();
	p.load(new java.io.FileInputStream(Sdcard_Tasks + "Settings.ini"));
    return p.getProperty(new java.lang.String(type)) + "";
}
function TextView(Text, Color, Padding) {
	var text = new android.widget.TextView(ctx);
	text.setText(String(Text));
	text.setTextColor(Color == null ? getColor("#511b00") : getColor(Color));
	if (Padding != null) text.setPadding(Padding[0], Padding[1], Padding[2], Padding[3]);
	if (bgm_and_font_setting("default_font") == "on") text.setTypeface(android.graphics.Typeface.createFromFile(Sdcard_Tasks + "font.ttf"));
	return text;
}
function Button(Text, OnClick, TextColor, Background, Width, Height) {
	var button = new android.widget.Button(ctx);
	button.setText("" + Text);
	if (OnClick != null) button.setOnClickListener(new android.view.View.OnClickListener(OnClick));
	button.setTextColor(TextColor == null ? getColor("#864200") : getColor(TextColor));
	button.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(getInputStream(Background == null ? "images/gold_block.png" : Background)));
	if (Width != null) button.setWidth(Width);
	if (Height != null) button.setHeight(Height);
	return button;
}
function ImageView(Resource) {
	var image = new android.widget.ImageView(ctx);
	if (Resource != null) image.setImageBitmap(android.graphics.BitmapFactory.decodeStream(getInputStream(Resource)));
	return image;
}
function EditText(Input, Hint) {
	var edit = new android.widget.EditText(ctx);
	edit.setInputType(Input == null ? InputType.Text : Input);
	if (Hint != null) edit.setHint(String(Hint));
	return edit;
}
function LinearLayout(View, Background, Orientation) {
	var line = new android.widget.LinearLayout(ctx);
	if (View != null) line.addView(View);
	line.setOrientation(Orientation == null ? Vertical : Orientation);
	line.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(getInputStream(Background == null ? "images/portal.png" : Background)));
	return line;
}
function LinearLayoutGroup(Views, Background, Orientation) {
	var layout = LinearLayout(null, Background, Orientation);
	for (var i = 0 ;i < Views.length ; i++)
	{
		layout.addView(Views[i]);
	}
	return layout;
}
function ScrollView(View, Background, Orientation) {
	var scroll = (Orientation == null ? vs() : hs());
	if (View != null) scroll.addView(View);
	scroll.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(getInputStream(Background == null ? "images/portal.png" : Background)));
	function vs() {
		return new android.widget.ScrollView(ctx);
	}
	function hs() {
		return new android.widget.HorizontalScrollView(ctx);
	}
	return scroll;
}
function Run (json) {
	ctx.runOnUiThread(new java.lang.Runnable(json));
}
function getInputStream(input) {
	//return ModPE.openInputStreamFromTexturePack(input);
	return new java.io.FileInputStream(Sdcard_Tasks + "Task-Resource/" + input);
}
function getColor (string) {
	return new android.graphics.Color().parseColor(string);
}
function Verson(Min, Max) {
	var verson = ModPE.getMinecraftVerson().split(".");
	if ((Number(verson[1]) <= (Max == null ? 20 : Max)) && (Number(verson[1]) >= (Min == null ? 11 : Min)))
		return true;
	else
		return false;
}
function/**透明度动画*/ AlphaAnimator(Duration, FillAfter, Interpolator, FromAlpha, ToAlpha, IsFor) {

	var Anim = new android.view.animation.AlphaAnimation(java.lang.Float.parseFloat(FromAlpha.toString()), java.lang.Float.parseFloat(ToAlpha.toString()));
	Anim.setDuration(Duration == null ? 1000 : Duration);
	Anim.setFillAfter(FillAfter == null ? true : FillAfter);
	Anim.setInterpolator(Interpolator);
	if (IsFor != null)//[true,true]
    {
		if (IsFor[0] != false || IsFor[0] != null)
		    Anim.setRepeatCount(IsFor[0] == true ? android.view.animation.Animation.INFINITE : IsFor[0]);
		if (IsFor[1] != false || IsFor[1] != null)
		    Anim.setRepeatMode(IsFor[1] == true ? android.view.animation.Animation.REVERSE : IsFor[1]);
	}
	return Anim;
}
function/**缩放动画*/ ScaleAnimation(Duration, FillAfter, Interpolator, IsFor, FromX, ToX, FromY, ToY, PivotX, PivotY) {

	var Anim = new android.view.animation.ScaleAnimation(java.lang.Float.parseFloat(FromX.toString()), java.lang.Float.parseFloat(ToX.toString()), java.lang.Float.parseFloat(FromY.toString()), java.lang.Float.parseFloat(ToY.toString()), PivotX == null ? java.lang.Float.parseFloat("0.5") : java.lang.Float.parseFloat(PivotX.toString()), PivotY == null ? java.lang.Float.parseFloat("0.5") : java.lang.Float.parseFloat(PivotY.toString()));
	Anim.setDuration(Duration == null ? 1000 : Duration);
	Anim.setFillAfter(FillAfter == null ? true : FillAfter);
	Anim.setInterpolator(Interpolator);
	if (IsFor != null)//[true,true]
    {
		if (IsFor[0] != false || IsFor[0] != null)
		    Anim.setRepeatCount(IsFor[0] == true ? android.view.animation.Animation.INFINITE : IsFor[0]);
		if (IsFor[1] != false || IsFor[1] != null)
		    Anim.setRepeatMode(IsFor[1] == true ? android.view.animation.Animation.REVERSE : IsFor[1]);
	}
	return Anim;
}
function /**旋转动画*/ RotateAnimation(Duration, FillAfter, Interpolator, IsFor, FromDegrees, ToDegress, PivotX, PivotY) {

	var Anim = new android.view.animation.RotateAnimation(java.lang.Float.parseFloat(FromDegrees.toString()), java.lang.Float.parseFloat(ToDegress.toString()), java.lang.Float.parseFloat(PivotX.toString()), java.lang.Float.parseFloat(PivotY.toString()));
	Anim.setDuration(Duration == null ? 1000 : Duration);
	Anim.setFillAfter(FillAfter == null ? true : FillAfter);
	Anim.setInterpolator(Interpolator);
	if (IsFor != null)
    {
		if (IsFor[0] != false || IsFor[0] != null)
		    Anim.setRepeatCount(IsFor[0] == true ? android.view.animation.Animation.INFINITE : IsFor[0]);
		if (IsFor[1] != false || IsFor[1] != null)
		    Anim.setRepeatMode(IsFor[1] == true ? android.view.animation.Animation.REVERSE : IsFor[1]);
	}
	return Anim;
}
function/**下拉动画*/ BounceAnimator (Duration, FillAfter, Interpolator, IsFor, FromX, ToX, FromY, ToY, PivotX, PivotY) {
    return ScaleAnimation(Duration, FillAfter, new android.view.animation.BounceInterpolator(), IsFor, FromX == null ? 1 : FromX, ToX == null ? 1 : ToX, FromY == null ? 0 : FromY, ToY == null ? 1 : ToY, PivotX, PivotY);
}
function/**位移动画*/ TranslateAnimation(Duration, Interpolator, FillAfter, IsFor, FromXDelta, ToXDelta, FromYDelta, ToYDelta) {

	var Anim = new android.view.animation.TranslateAnimation(java.lang.Float.parseFloat(FromXDelta.toString()), java.lang.Float.parseFloat(ToXDelta.toString()), java.lang.Float.parseFloat(FromYDelta.toString()), java.lang.Float.parseFloat(ToYDelta.toString()));
	Anim.setDuration(Duration == null ? 1000 : Duration);
	Anim.setFillAfter(FillAfter == null ? true : FillAfter);
	Anim.setInterpolator(Interpolator);
	if (IsFor != null)
    {
		if (IsFor[0] != false || IsFor[0] != null)
		    Anim.setRepeatCount(IsFor[0] == true ? android.view.animation.Animation.INFINITE : IsFor[0]);
		if (IsFor[1] != false || IsFor[1] != null)
		    Anim.setRepeatMode(IsFor[1] == true ? android.view.animation.Animation.REVERSE : IsFor[1]);
	}
	return Anim;
}

/******************************************************************************************************************************************************/
function debug() {

    var tmp = false;
	var debugtext = TextView(DebugMessages, "#FDC81B");
	var ed = EditText();
	ed.setLayoutParams(LayoutParams.getParams(LayoutParams.MatchParent, LayoutParams.WrapContent));
	var run = Button("run", {onClick : function(v) {try
							 {eval(ed.getText().toString() + "");Toast_U("code:\n" + ed.getText().toString() + "\nfinished running");v.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -500, 0, 0, 0));}catch(ett){Alert(ett + '\nline at :' + ett.lineNuber);}}});
	run.setWidth(450);
    var close = Button("焦点:" + tmp, {onClick : function(v) {v.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -500, 0, 0, 0)); if (tmp)
							   {Popdebug.setFocusable(tmp); tmp = !tmp; v.setText("焦点:" + tmp);Popdebug.update(parseInt(tpopx), parseInt(tpopy), -1, -1);}
							   else
							   {Popdebug.setFocusable(tmp); tmp = !tmp; v.setText("焦点:" + tmp);Popdebug.update(parseInt(tpopx), parseInt(tpopy), -1, -1);} }});
	close.setWidth(450);
	var num = Button("线程数", {onClick : function(v) {bug("当前线程数:" + thread_count, "system"); v.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -500, 0, 0, 0));  }});
	num.setWidth(450);

	var clear = Button("清空", {onClick : function(v) { debugtext = ""; v.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -500, 0, 0, 0));  }});
	clear.setWidth(450);

	var hv = LinearLayout(null, null, Horizontal);

	var tpopx = 0, tpopy = 0, mX, mY, Popdebug = null, downa = false;

	var move = Button("长按移动", {onClick : function(v) {v.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -500, 0, 0, 0));}});
	move.setOnLongClickListener(
		new android.view.View.OnLongClickListener({onLongClick: 
													  function(v, t) {
														  downa = true;
														  var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
														  vibrator.vibrate(100);
														  v.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -500, 0, 0, 0)); 
														  return true;
													  }}));
	move.setOnTouchListener(
		new android.view.View.OnTouchListener({onTouch :
												  function(v, e) {
													  v.startAnimation(BounceAnimator());
													  if (!downa)
													  {
														  mX = e.getX();
														  mY = e.getY();
													  }
													  if (downa)
													  {
														  var a = e.getAction();
														  if (a == 2)
														  {
															  var delX = parseInt(e.getX() - mX) * -1 / 10;
															  var delY = parseInt(e.getY() - mY) * -1 / 10;
															  tpopx = tpopx - delX;
															  tpopy = tpopy - delY;
															  Popdebug.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
														  }
														  if (a == 1) downa = false;
													  } 
													  return false;
												  }}));

	var view = LinearLayout();
	view.addView(ed);
	hv.addView(run);
	hv.addView(close);
	hv.addView(num);
	hv.addView(clear);
	view.addView(ScrollView(hv, null, Horizontal));
	view.addView(move);
	view.addView(TextView("Message:", "#FD1405"));
	view.addView(ScrollView(debugtext, "images/Alpha.png"));

	Popdebug = new android.widget.PopupWindow(ctx); //layout, dip2px(ctx, 45), dip2px(ctx, 45)
	Popdebug.setContentView(view); 
	Popdebug.setFocusable(true);
	Popdebug.setWidth(ScreenDip_Width(450)); 
	Popdebug.setHeight(ScreenDip_Height(350));
	Popdebug.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER , tpopx, tpopy);

	view.startAnimation(BounceAnimator());

	var update = new java.lang.Thread(new java.lang.Runnable(
										  {run : function() {try
												  {
													  while (true)
													  {
														  if (debugtext != null)
														  {
															  Run({run : function() {
																		  debugtext.setText(DebugMessages);
																	  }});
															  update.sleep(3000);
														  }
													  }
												  }
												  catch(err)
												  {
													  Run({run : function() {Alert(err);}});
												  }
											  }}));
	update.start();
	thread_count ++;
}

function bug(Msg, From) {
	From = (From == null ? "unknow" : From);
	if (Msg == null)
	{
		DebugMessages = "";
		return;
	}
	DebugMessages += From + " : " + Msg + "\n";
}

function load() {
	try
	{
		var FatherPath = android.os.Environment.getExternalStorageDirectory() + "/Tasks";
		var FatherFile = new java.io.File(FatherPath);
		if (!FatherFile.exists())
		{
			FatherFile.mkdirs();
		}
		var subfile = FatherFile.listFiles();
		for (var i = 0; i < subfile.length; i ++)
		{
			if (subfile[i].isDirectory())
			{
				if (subfile[i].getName().toString() == "Messages" || subfile[i].getName().toString() == "Task-Resource")
					continue;
				var subsubfile = subfile[i].listFiles();

				for (var si = 0; si < subsubfile.length; si++)
				{
					LoadFunctions(subsubfile[si]);
				}
			}
		}
	}
	catch(error)
	{
		print(error);
	}
}
function LoadFunctions(File) {
	var name = File.getName();
	if (name == "onAttackHook.js")
		onAttackHook += Read(File);
	if (name == "onBlockEventHook.js")
		onBlockEventHook += Read(File);
	if (name == "onChatHook.js")
		onChatHook += Read(File);
	if (name == "onDeathHook.js")
		onDeathHook += Read(File);
	if (name == "onDestroyBlock.js")
		onDestroyBlock += Read(File);
	if (name == "onEntityAddedHook.js")
		onEntityAddedHook += Read(File);
	if (name == "onEntityRemoved.js")
		onEntityRemoved += Read(File);
	if (name == "onExplodeHook.js")
		onExplodeHook += Read(File);
	if (name == "onLevelEventHook.js")
		onLevelEventHook += Read(File);
	if (name == "onModTick.js")
		onModTick += Read(File);
	if (name == "onProcCmd.js")
		onProcCmd += Read(File);
	if (name == "onSelectLevelHook.js")
		onSelectLevelHook += Read(File);
	if (name == "onStartDestroyBlock.js")
		onStartDestroyBlock += Read(File);
	if (name ==  "onUseItem.js")
		onUseItem += Read(File);
    if (name == "onServerMessageReceiveHook.js")
		onServerMessageReceiveHook += Read(File);
	if (name == "onProjectileHitBlockHook.js")
		onProjectileHitBlockHook += Read(File);
	if (name == "onProjectileHitEntityHook.js")
		onProjectileHitEntityHook += Read(File);
	if (name == "onEatHook.js")
		onEatHook += Read(File);
	if (name == "onRedstoneUpdateHook.js")
		onRedstoneUpdateHook += Read(File);
    if (name == "onNewLevel.js")
		onNewLevel += Read(File);
	if (name == "onLeaveGame.js")
		onLeaveGame += Read(File);
	if (name == "onDay.js")
		onDay += Read(File);
	if (name == "onNight.js")
		onNight += Read(File);
	if (name == "onPublic.js")
		onPublic += Read(File);
	if (name == "onRun_per_500.js")
		onRun_per_500 += Read(File);
	if (name == "onRun_per_1000.js")
		onRun_per_1000 += Read(File);
	
    function Read(InputFile) {
		var InputStream = new java.io.FileInputStream(InputFile);
		var bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, InputStream.available());
		InputStream.read(bytes);
		InputStream.close();
		return new java.lang.String(bytes) + "\n";
	}
}
/******************************************************************************************************************************************************/
//钩子函数列表
function newLevel() {
    Icon();
	Run({run : function() {
				Toast_U("Welcome Play This Script");
			}});
	try
	{
		eval(onNewLevel);
//		Thread4TypeModTickPer500.start();
//		Thread4TypeModTickPer1000.start();
	}
	catch(err){
		Run({run:function() {Alert(err);}});}
}
function leaveGame() {
	Run({run : 
			function () {try
				{
					if (icon != null) icon.dismiss();
					if (Menu != null) Menu.dismiss();
					Toast_U("Welcome Play Again!");
					//SaveMessages();
				}catch(error){new android.app.AlertDialog.Builder(ctx).setTitle("Error").setMessage(error.toString()).create().show();}}});
	try
	{
		eval(onLeaveGame);
//		Thread4TypeModTickPer500.stop();
//		Thread4TypeModTickPer1000.stop();
	}
	catch(err)
	{
		Run({run:function() {
					Alert(err);}});
	}
}
function Night() {try
	{
		eval(onNight);
    }catch(error){Run({run:function() {Alert(error);}});}}
function Day() {try
	{
		eval(onDay);
	}catch(error){Run({run:function() {Alert(error);}});}}
function serverMessageReceiveHook(Msg) {try
	{
		eval(onServerMessageReceiveHook);
	}catch(error){Alert(error);}}
function projectileHitEntityHook(Projectile, TargetEntity) {try
	{
		eval(onProjectileHitEntityHook);
	}catch(error){Run({run:function() {Alert(error);}});}}
function eatHook(Hearts, SaturationRatio) {try
	{
		eval(onEatHook);
		client_bug("Eat-Hook: Hearts:" + Hearts + " " + "SaturationRatio:" + SaturationRatio);
	}catch(error){Run({run:function() {Alert(error);}});}}
function redstoneUpdateHook(X, Y, Z, NewCurrent, WorldLoading, BlockId, BlockDamage) {try
	{
		eval(onRedstoneUpdateHook);
	}catch(error){Run({run:function() {Alert(error);}});}}
function projectileHitBlockHook(Projectile, BlockX, BlockY, BlockZ, Side) {try
	{
		eval(onProjectileHitBlockHook);
	}catch(error){Run({run:function() {Alert(error);}});}}
function entityRemoved(Ent) {try
	{
		eval(onEntityRemoved);
		client_bug("EntityRemove-Hook:" + "实体:" + Ent);
	}catch(error){Run({run:function() {Alert(error);}});}}
function modTick() {try
	{
		if (Level.getTime() == 23261)
		{
			Day();
		}
		if (Level.getTime() == 13080)
		{
			Night();
		}
		eval(onModTick);
	}catch(error){Run({run:function() {Alert(error);}});}}
function procCmd(Cmd) {try
	{
		eval(onProcCmd);
		var cmd = Cmd.split(":");
		if (cmd[0] == "debug")
			Run({onClick:function() {try
						{eval(cmd[1]);clientMessage("§5[运行代码:]§d" + cmd[1] + "\n§a[执行完成]");}catch(err){clientMessage("§c[错误:]§b" + err);}}});
	}catch(error){Run({run:function() {Alert(error);}});}}
function chatHook(Chat) {try
	{
		eval(onChatHook);
	}catch(error){Run({run:function() {Alert(error);}});}}
function attackHook(Play/*攻击方*/, Ent) {try
	{
		eval(onAttackHook);
		client_bug("Attack-Hook:" + "攻击方:" + Play + " " + "实体:" + Ent);
	}catch(error){Run({run:function() {Alert(error);}});}}
function entityAddedHook(Ent) {try
	{
		eval(onEntityAddedHook);
		client_bug("EntityAdd-Hook:" + "实体:" + Ent);
	}catch(error){Run({run:function() {Alert(error);}});}}
function deathHook(Play/*凶手*/, Ent) {try
	{
		eval(onDeathHook);
		client_bug("Deat-Hook:" + "凶手:" + Play + " " + "实体:" + Ent);
	}catch(error){Run({run:function() {Alert(error);}});}}
function destroyBlock(X, Y, Z, Side) {try
	{
		eval(onDestroyBlock);
		client_bug("DestrorBlock-Hook:" + "X:" + X + " " + "Y:" + Y + " " + "Z:" + Z + " " + "Side:" + Side);
	}catch(error){Run({run:function() {Alert(error);}});}}
function useItem(X, Y, Z, ItemId/*手持物品ID*/, BlockId/*点击方块ID*/, Side/*点击面*/, ItemDamage/*手持物品特殊值*/, BlockDamage) {try
	{
		eval(onUseItem);
		client_bug("UseItem-Hook:" + "X:" + X + " " + "Y:" + Y + " " + "Z:" + Z + " " + "Side:" + Side + "Block-Id" + BlockId + " Item-Id" + ItemId + " ItemDamage" + ItemDamage + " BlockDamage" + BlockDamage);
	}catch(error){Run({run:function() {Alert(error);}});}}
function blockEventHook(X, Y, Z, Event/*事件类型*/, Data) {try
	{
		eval(onBlockEventHook);
	}catch(error){Run({run:function() {Alert(error);}});}}
function startDestroyBlock(X, Y, Z, Side) {try
	{
		eval(onStartDestroyBlock);
	}catch(error){Run({run:function() {Alert(error);}});}}
function selectLevelHook() {try
	{
		eval(onSelectLevelHook);
	}catch(error){Run({run:function() {Alert(error);}});}}
function explodeHook(Ent/*爆炸的实体*/, X, Y, Z, Power/*威力*/, O) {try
	{
		eval(onExplodeHook);
		client_bug("Explode-Hook:" + "Entity:" + Ent + " X:" + X + " Y:" + Y + " Z" + Z);
	}catch(error){Run({run:function() {Alert(error);}});}}
function levelEventHook(Ent/*动作的实体*/, Event/*事件类型*/, X, Y, Z, Data) {try
	{
		eval(onLevelEventHook);
	}catch(error){Run({run:function() {Alert(error);}});}}
function client_bug(msg) {try
	{
		if (debug_mode)
		{
			bug(msg, "Debug");
			clientMessage("§a<[Debug]>:§b" + "[" + msg + "]");
		}}
	catch(er){Run({run : function() {Alert(er + er.lineNumber);}});}
}
function RunPer500(){try
	{
		eval(onRun_per_500);
	}
	catch(err){Run({run:function(){Alert(err);}});}
}
function RunPer1000(){try
	{
		eval(onRun_per_1000);
	}
	catch(err){Run({run:function(){Alert(err);}});}
}



function DebugMode() {try
	{
//		var file = new java.io.FileInputStream("sdcard/Tasks/DebugMode");
//		var buf = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, file.available());
//		file.read(buf);
//		file.close();
//		buf = new java.lang.String(buf);
		var content = ReadTasksStringFile("DebugMode");
		if (content == "on")
			return true;
		else if (content == "off")
			return false;
	}
	catch(err){Run({run:function() {Alert(err);}});}}

function ReadTasksStringFile(SubPath) {try
	{
		var input = new java.io.FileInputStream(Sdcard_Tasks + SubPath);
		var bufferd = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, input.available());
		input.read(bufferd);
		input.close();
		return new java.lang.String(bufferd);
	}catch(err){Run({run : function() {Alert(err + "\nline:" + err.lineNumber);}});}}
function WriteTasksStringFile(SubFile, Content, isOverride) {try
	{
		var output = new java.io.FileOutputStream(Sdcard_Tasks + SubFile);
		output.write(new java.lang.String(Content).getBytes()/*,new java.lang.Boolean(isOverride == true)*/);
		output.close();
	}catch(err){Run({run : function() {Alert(err + "\nline:" + err.lineNumber);}});}}
function ReadTasksDataFile(SubPath) {try
	{
		var input = new java.io.FileInputStream(Sdcard_Tasks + SubPath);
		var bufferd = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, input.available());
		input.read(bufferd);
		input.close();
		return bufferd;
	}catch(err){Run({run : function() {Alert(err + "\nline:" + err.lineNumber);}});}}
function WriteTasksDataFile(SubFile, Data, isOverride) {try
	{
		var output = new java.io.FileOutputStream(Sdcard_Tasks + SubFile);
		output.write(Data/*,new java.lang.Boolean(isOverride == true)*/);
		output.close();
	}catch(err){Run({run : function() {Alert(err + "\nline:" + err.lineNumber);}});}}

/******************************************************************************************************************************************************/
//提示函数
function TestError(err, ps){
	Run({run : function(){
		Alert("Error:\n" + err + "\n" + ps + "\nline at:" + err.lineNumber);
	}});
}
function Alert(Msg) {
	new android.app.AlertDialog.Builder(ctx).setTitle("message").setMessage(Msg.toString()).create().show();
}
function Toast_U(Text, Duration, is) {try
	{
		var toast = new android.widget.Toast(ctx);
		var Linear = new android.widget.LinearLayout(ctx);
		Linear.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(getInputStream("images/wool_colored_silver.png")));
		Linear.addView(TextView(Text, null, [30, 30, 30, 30]));
		toast.setView(Linear);
		toast.setDuration(Duration == null ? 5000 : Duration);
		if (is == null || is == true) 
		{
			toast.show();
		}
		return toast;
	}
	catch(error){new android.app.AlertDialog.Builder(ctx).setTitle("Error").setMessage(error.toString()).create().show();}
}
function Toast_A(Duration, Background) {try
	{
		var toast = new android.widget.Toast(ctx);
		var Linear = new android.widget.LinearLayout(ctx);
		toast.setGravity(android.view.Gravity.CENTER, 0, 0);
		var LeftAndRight = (ctx.getWindow().getDecorView().getWidth() - Linear.getWidth()) / 2;
		var TopAndBottom = (ctx.getWindow().getDecorView().getHeight() - Linear.getHeight()) / 2;
		Linear.setPadding(LeftAndRight, TopAndBottom, LeftAndRight, TopAndBottom);
		Linear.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(getInputStream(Background == null ? "images/quartz_block_top.png" : Background)));
		toast.setView(Linear);
		toast.setDuration(Duration == null ? 3000 : Duration);
		toast.show();
		return toast;
	}
	catch(error){new android.app.AlertDialog.Builder(ctx).setTitle("Error").setMessage(error.toString()).create().show();}
}
function dip2px(ctx, dips) { 
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density); 
}
function ScreenDip_Width(num){
	return Math.round(num * (ctx.getWindowManager().getDefaultDisplay().getWidth() / 960));
}
function ScreenDip_Height(num){
	return Math.round(num * (ctx.getWindowManager().getDefaultDisplay().getHeight() / 540));
}
/******************************************************************************************************************************************************/
