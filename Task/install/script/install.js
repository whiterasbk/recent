var sdcard = android.os.Environment.getExternalStorageDirectory();
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var pro1;

try
{
	var screen_height = ctx.getWindowManager().getDefaultDisplay().getHeight();
	var screen_width = ctx.getWindowManager().getDefaultDisplay().getWidth();
	
	var pop_window = new android.widget.PopupWindow(ctx);
	pop_window.setHeight(screen_height);
    pop_window.setWidth(screen_width);
	pop_window.setFocusable(false);
    pop_window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#00FFFFFF")));
	
	var logo_layout = new android.widget.LinearLayout(ctx);
	logo_layout.setGravity(android.view.Gravity.CENTER);
	
	var logo_sub_layout_left = new android.widget.LinearLayout(ctx);
	logo_sub_layout_left.setOrientation(android.widget.LinearLayout.VERTICAL);
	logo_sub_layout_left.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1, 1.0));
	logo_sub_layout_left.setGravity(android.view.Gravity.CENTER | android.view.Gravity.RIGHT);
	
	var logo_left = new android.widget.ImageView(ctx);
	logo_left.setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("logo_left.jpg")));
	var layout_params1 = new android.widget.LinearLayout.LayoutParams(-2, -2);
	//layout_params1.gravity = android.view.Gravity.CENTER | android.view.Gravity.RIGHT;
	logo_left.setLayoutParams(layout_params1);
	logo_sub_layout_left.addView(logo_left);
	
	
	
	var logo_sub_layout_right = new android.widget.LinearLayout(ctx);
	logo_sub_layout_right.setOrientation(android.widget.LinearLayout.VERTICAL);
	logo_sub_layout_right.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1, 1.0));
	logo_sub_layout_right.setGravity(android.view.Gravity.CENTER | android.view.Gravity.LEFT);
	
	var logo_right = new android.widget.ImageView(ctx);
	logo_right.setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("logo_right.jpg")));
	var layout_params2 = new android.widget.LinearLayout.LayoutParams(-2, -2);
	//layout_params2.gravity = android.view.Gravity.CENTER | android.view.Gravity.LEFT;
	logo_left.setLayoutParams(layout_params2);
	logo_sub_layout_right.addView(logo_right);
	
	logo_layout.addView(logo_sub_layout_left);
	logo_layout.addView(logo_sub_layout_right);
	
	ctx.runOnUiThread(new java.lang.Runnable({run:
		function() {
			try
			{
				pop_window.setContentView(logo_layout);
				pop_window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
            	
				var right_anim = new android.view.animation.TranslateAnimation(1500, 0, 0, 0);
                right_anim.setDuration(5000);
                right_anim.setFillAfter(true);
                right_anim.setInterpolator(new android.view.animation.LinearInterpolator());
            
				var left_anim = new android.view.animation.TranslateAnimation(-1500, 0, 0, 0);
                left_anim.setDuration(5000);
                left_anim.setFillAfter(true);
                left_anim.setInterpolator(new android.view.animation.LinearInterpolator());
            
				logo_right.startAnimation(right_anim);
				logo_left.startAnimation(left_anim);
				
				new android.os.Handler().postDelayed(new java.lang.Runnable({ 
					run: function(){ 
 						pop_window.dismiss();
						install_dialog();
				}}), 7000);
		}catch(err){alert(err);}}}));
}catch(err){alert(err);}

function install_dialog() {
	var package_name = ctx.getPackageName() + "";
	
	if( package_name == "net.zhuoweizhang.mcpelauncher.pro")
	{
		for_launcher();
	}
	else if (package_name == "com.duowan.groundhog.mctools")
	{
		for_box();
	}
	else if (package_name == "com.huluxia.mctool")
	{
		java.lang.System.exit(0);
	}
}

function for_launcher(){
	var pop = new android.widget.PopupWindow(ctx);
	pop.setHeight(parseInt(screen_height * 0.75));
	pop.setWidth(parseInt(screen_width * 0.75));
	pop.setFocusable(false);
	pop.setBackgroundDrawable(android.graphics.drawable.BitmapDrawable.createFromStream(ModPE.openInputStreamFromTexturePack("pop_background.jpg"), ""));

	var main_layout = new android.widget.LinearLayout(ctx);
	main_layout.setGravity(android.view.Gravity.CENTER);
	main_layout.setOrientation(android.widget.LinearLayout.VERTICAL);
	
	var temp_layout1 = new android.widget.LinearLayout(ctx);
	temp_layout1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1.0));
	var title = new android.widget.TextView(ctx);
	title.setText("Tasks安装向导");
	title.setTextColor(android.graphics.Color.parseColor("#42F93D"));
	var params1 = new android.widget.LinearLayout.LayoutParams(-2, -2);
    params1.gravity = android.view.Gravity.TOP | android.view.Gravity.LEFT;
	title.setLayoutParams(layout_params2);
	temp_layout1.addView(title);
	main_layout.addView(temp_layout1);
	
	var scroll = new android.widget.ScrollView(ctx);
	scroll.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 4.0));
	var content = new android.widget.TextView(ctx);
	content.setText("欢迎使用task安装向导\n本mod由白客编写，未经允许请勿转载。\n此mod为安装程序(不过也就是创建几个文件罢了)，主程序需要安装之后才能正常使用安装目录:" + sdcard + "。安装完成以后会提示导入一个新的主程序mod请到指定目录下导入mod到启动器即可，导入完成以后此安装程序即可删除");
	content.setTextColor(android.graphics.Color.parseColor("#FF4938"));
	scroll.addView(content);
	main_layout.addView(scroll);
	
	pro1 = new android.widget.TextView(ctx);
	pro1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1.0));
	pro1.setText("");
	pro1.setTextColor(android.graphics.Color.parseColor("#3265F3"));
	main_layout.addView(pro1);
	
	var buts = new android.widget.LinearLayout(ctx);
	buts.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1.5));
	var but1 = new android.widget.Button(ctx);
	but1.setText("开始");
	but1.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){try{
		content.setText("正在解压请稍等。。。。。。");
		newThread(function()
		{
			install_launcher();
		});
		content.setText("配置文件安装完毕，请至" + sdcard + "/task-file/下寻找Tasks-v1.modpkg并导入至启动器方可游戏，此安装程序最好删除");
		v.setText("完成");
		v.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
			pop.dismiss();
		}}));
	}catch(e){alert(1);}}}));
	but1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1.0));
	but1.getBackground().setAlpha(100);
	var but2 = new android.widget.Button(ctx);
	but2.setText("取消");
	but2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
		pop.dismiss();
	}}));
	but2.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1.0));
	but2.getBackground().setAlpha(100);
	buts.addView(but1);
	buts.addView(but2);
	main_layout.addView(buts);
	
	pop.setContentView(main_layout);
	pop.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
}

function for_box(){
	var pop = new android.widget.PopupWindow(ctx);
	pop.setHeight(parseInt(screen_height * 0.75));
	pop.setWidth(parseInt(screen_width * 0.75));
	pop.setFocusable(false);
	pop.setBackgroundDrawable(android.graphics.drawable.BitmapDrawable.createFromStream(ModPE.openInputStreamFromTexturePack("pop_background.jpg"), ""));

	var main_layout = new android.widget.LinearLayout(ctx);
	main_layout.setGravity(android.view.Gravity.CENTER);
	main_layout.setOrientation(android.widget.LinearLayout.VERTICAL);
	
	var temp_layout1 = new android.widget.LinearLayout(ctx);
	temp_layout1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1.0));
	var title = new android.widget.TextView(ctx);
	title.setText("Tasks安装向导");
	title.setTextColor(android.graphics.Color.parseColor("#42F93D"));
	var params1 = new android.widget.LinearLayout.LayoutParams(-2, -2);
    params1.gravity = android.view.Gravity.TOP | android.view.Gravity.LEFT;
	title.setLayoutParams(layout_params2);
	temp_layout1.addView(title);
	main_layout.addView(temp_layout1);
	
	var scroll = new android.widget.ScrollView(ctx);
	scroll.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 4.0));
	var content = new android.widget.TextView(ctx);
	content.setText("欢迎使用task安装向导\n本mod由白客编写，未经允许请勿转载。\n此mod为安装程序(不过也就是创建几个文件罢了)，主程序需要安装之后才能正常使用安装目录:" + sdcard + "/Tasks。安装完成以后如果提示导入一个新的主程序mod请到指定目录下导入mod到启动器即可，导入完成以后此安装程序即可删除，如果不提示，则重启游戏即可");
	content.setTextColor(android.graphics.Color.parseColor("#FF4938"));
	scroll.addView(content);
	main_layout.addView(scroll);
	
	pro1 = new android.widget.TextView(ctx);
	pro1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1.0));
	pro1.setText("");
	pro1.setTextColor(android.graphics.Color.parseColor("#3265F3"));
	main_layout.addView(pro1);
	
	var buts = new android.widget.LinearLayout(ctx);
	buts.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1.5));
	var but1 = new android.widget.Button(ctx);
	but1.setText("开始");
	but1.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){try{
		content.setText("正在解压请稍等。。。。。。");
		v.setText("请等待");
		v.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){print("请等待");}}));
		newThread(function()
		{
			var text = "配置文件安装完毕，请至" + sdcard + "/task-file/下寻找Tasks-v1.modpkg并导入至盒子方可游戏，此安装程序最好删除";
			if(install_box())
				text = "配置文件安装完毕，请重新启动游戏，祝您游戏愉快";
			ctx.runOnUiThread(new java.lang.Thread({run:function(){
				content.setText(text);
				v.setText("完成");
				v.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
					pop.dismiss();
					java.lang.System.exit(0);
			}}));
		}}));
		});
		
	}catch(e){alert(e);}}}));
	but1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1.0));
	but1.getBackground().setAlpha(100);
	var but2 = new android.widget.Button(ctx);
	but2.setText("取消");
	but2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
		pop.dismiss();
	}}));
	but2.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1.0));
	but2.getBackground().setAlpha(100);
	buts.addView(but1);
	buts.addView(but2);
	main_layout.addView(buts);
	
	pop.setContentView(main_layout);
	pop.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
}

function install_launcher() {
	try
	{
		var tasks_zip = ModPE.openInputStreamFromTexturePack("Tasks.zip");
		var modpkg = ModPE.openInputStreamFromTexturePack("Tasks-v1.modpkg");

		StreamToFile(sdcard + "/task-file/tasks.zip", tasks_zip);
		StreamToFile(sdcard + "/task-file/Tasks-v1.modpkg", modpkg);
		
		unZip(sdcard + "/task-file/Tasks.zip", sdcard + "/");
		var tasks_zip_file = new java.io.File(sdcard + "/task-file/Tasks.zip");
		tasks_zip_file.delete();
	}catch(error){alert(error);}
}

function install_box() {
	var boolean;
	try
	{
		var tasks_zip = ModPE.openInputStreamFromTexturePack("Tasks.zip");
		var modpkg = ModPE.openInputStreamFromTexturePack("Tasks-v1.modpkg");
		var sd = new java.io.File(sdcard + "/mctools/scripts/Tasks-v1.modpkg");
		StreamToFile(sdcard + "/task-file/tasks.zip", tasks_zip);
		
		unZip(sdcard + "/task-file/Tasks.zip", sdcard + "/");
		var tasks_zip_file = new java.io.File(sdcard + "/task-file/Tasks.zip");
		tasks_zip_file.delete();
		
		if(sd.exists())
		{
			//StreamToFile(sdcard + "/mctools/scripts/Tasks-v1.modpkg", modpkg);
			var task_bytes = ModPE.getBytesFromTexturePack("Tasks-v1.modpkg");
			sd.delete();
			var fos = new java.io.FileOutputStream(sdcard +  "/mctools/scripts/Tasks-v1.modpkg");
			fos.write(task_bytes);
			fos.close();
			boolean = true;
		}
		else
		{
			StreamToFile(sdcard + "/task-file/Tasks-v1.modpkg", modpkg);
			boolean = false;
		}
		
		
		return boolean;
	}catch(error){alert(error);}
}

function alert(error){
	ctx.runOnUiThread(new java.lang.Runnable({run:
			function() {
				try
				{
					var dialog = new android.app.AlertDialog.Builder(ctx);
					dialog.setMessage(error + "\n" + "line:" + error.lineNumber);
					dialog.setTitle("错误");
					dialog.create().show();
				}catch(err){print(err);}}}));
}


function unZip(zipPath, descDir) {
	unZipFiles(new java.io.File(zipPath), descDir);
}
function unZipFiles(zipFile,  descDir) {
	var pathFile = new java.io.File(descDir);
	if (!pathFile.exists())
	{
		pathFile.mkdirs();
	}
	var zip = new java.util.zip.ZipFile(zipFile);

	for (var entries = zip.entries(); entries.hasMoreElements();)
	{
		var entry = entries.nextElement();
		var zipEntryName = entry.getName();
		var zin = zip.getInputStream(entry);
		var outPath = new java.lang.String(descDir + zipEntryName).replaceAll("\\*", "/");
		//判断路径是否存在,不存在则创建文件路径
		var file = new java.io.File(outPath.substring(0, outPath.lastIndexOf('/')));
		if (!file.exists())
		{
			file.mkdirs();
		}
		//判断文件全路径是否为文件夹,如果是上面已经上传,不需要解压
		if (new java.io.File(outPath).isDirectory())
		{
			continue;
		}
		//输出文件路径信息

		unZipLog(outPath);

		var out = new java.io.FileOutputStream(outPath);
		//byte[] buf1 = new byte[1024 * 2];
		var buf1 = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024 * 2);
		var len;
		while ((len = zin.read(buf1)) > 0)
		{
			out.write(buf1, 0, len);
		}
		zin.close();
		out.close();
	}
	unZipLog("解压完毕");
}
function unZipLog(string) {
	ctx.runOnUiThread(java.lang.Runnable({run:function(){try{
		pro1.setText("正在解压:" + string);
	}catch(e){alert(e);}}}));
}

function StreamToFile(Path, Stream) {						
	var file = new java.io.File(Path);
	if (file.exists())
		return false;
	file.getParentFile().mkdirs();
	file.createNewFile();

	var fos = new java.io.FileOutputStream(file);
	var buf = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024 * 20);
	var sign = 0, count = 0;
	while ((sign = Stream.read(buf)) != -1)
	{
		count ++;
		fos.write(buf, 0, sign);
	}
	fos.close();
	return true;
}
function newThread(Function){
	var t = new java.lang.Thread({run:Function});
	t.start();
}
