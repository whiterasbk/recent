var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var isshow=false;
var poppicture=null;
var popbutton=null;
var showmode="1";
var showpath="/sdcard/image.jpg";
function newLevel() 
{
   poppicture=new android.widget.PopupWindow(ctx);
   popbutton=new android.widget.PopupWindow(ctx);
   if(read("/storage/sdcard0/games/com.mojang/minecraftpe/musicpath.ini"))
   {
	   if(read("/storage/sdcard0/games/com.mojang/minecraftpe/musicsetting.ini"))
	   {
		   showmode=read("/storage/sdcard0/games/com.mojang/minecraftpe/musicsetting.ini");
		   showpath=read("/storage/sdcard0/games/com.mojang/minecraftpe/musicpath.ini");
	   }
   }
   start();
   print("长按关闭图片窗口关闭,长按\"查看乐谱\"弹出设置————————————查看乐谱");
}
function showpicture(gravity,path)
{
  isshow=true;
  ctx.runOnUiThread(new java.lang.Runnable({run:function(){
    try
    {
      
      var image=new android.widget.ImageView(ctx);
      var Scroll=new android.widget.ScrollView(ctx);
      var HorizontalScroll=new android.widget.HorizontalScrollView(ctx);
      var line2=new android.widget.LinearLayout(ctx);
      Scroll.addView(image);
      HorizontalScroll.addView(Scroll);
      line2.addView(HorizontalScroll);
      
      /*————————核心代码——————*/
      var b=new android.graphics.BitmapFactory.Options();
      b.inSampleSize=0;  //缩放倍数
      var ob=new android.graphics.BitmapFactory.decodeFile(path,b);
      image.setImageBitmap(ob);
      /*————————核心代码——————*/
      
      
      var line=new android.widget.LinearLayout(ctx);
      line.setOrientation(1);
      line.addView(line2);
      
      image.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick:function(v){
         try
         {
           poppicture.dismiss();
           isshow=false;
         }
         catch(error)
         {
           var listener={OnClick:function(){}};
		   dialog("error",error,null,"yes",listener);
         }
         return true;
      }}));
      poppicture.setContentView(line);
      poppicture.setWidth(310);
      poppicture.setHeight(225);
	  poppicture.showAtLocation(ctx.getWindow().getDecorView(),gravity,0,0);
    }
    catch(error)
    {
        var listener={OnClick:function(){}};
		dialog("error",error,null,"yes",listener);
    }
  }}));
}
function start()
{   
    ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
    
    var button=new android.widget.Button(ctx);
    button.setText("查看乐谱");
    button.setTextSize(7);
    button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
      if(isshow)
      {
        print("已显示GUI");
      }
      else
      {
        showpicture(showmodetest(showmode),showpath);
      }
    }}));
    button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick:function(v){try{
      var dialog=new android.app.AlertDialog.Builder(ctx);
      dialog.setTitle("设置-Settings");
      var layout=new android.widget.LinearLayout(ctx);
   
      var radiogroup=new android.widget.RadioGroup(ctx);
      var radio1=new android.widget.RadioButton(ctx);
      radio1.setText("模式1-无焦点");
      radio1.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
        
        showmode="1";
        print("设置成功");
		
      }}));
      radiogroup.addView(radio1);
      var radio2=new android.widget.RadioButton(ctx);
      radio2.setText("模式2-居中");
      radio2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
        
        showmode="2";
        print("设置成功");
		
      }}));
      radiogroup.addView(radio2);
      
      var scroll=new android.widget.ScrollView(ctx);
	  var linearlayout=new android.widget.LinearLayout(ctx);
	  linearlayout.setOrientation(1);
	  scroll.addView(linearlayout);
	  linearlayout.addView(radiogroup);
	  var information=new android.widget.TextView(ctx);
	  information.setText("本Js由关小契制作,未经允\n许请勿转载,或者盗版本Js,\n作者QQ:2980725051\n百度贴吧ID:关小契\n盒子名:关小契\n作者工作室:末影工作室\n\n欢迎加入ShadowStudio末影工作室，群号码：541801126\n\n\n末影工作室出品");
	  linearlayout.addView(information);
      var text1=new android.widget.TextView(ctx);
      text1.setText("图片路径"); 
      layout.addView(text1);
      var edit=new android.widget.EditText(ctx);
      edit.setHint("在此输入图片路径，默认目录是/sdcard/image.jpg");
      layout.addView(edit);
      
      var text2=new android.widget.TextView(ctx);
      text2.setText("显示模式");
      layout.addView(text2);
      layout.addView(scroll);
      layout.setOrientation(1);
      dialog.setView(layout);
      dialog.setNegativeButton("保存设置",new android.content.DialogInterface.OnClickListener({onClick:function(){
		try
		{
			var picturepath=edit.getText().toString()==null||edit.getText().toString()==""?"/sdcard/image.jpg":edit.getText().toString();
			save(picturepath,"/storage/sdcard0/games/com.mojang/minecraftpe/musicpath.ini");
			save(showmode,"/storage/sdcard0/games/com.mojang/minecraftpe/musicsetting.ini");
			print("done--保存成功，重启后生效");
		}
		catch(err)
		{
			var listener={OnClick:function(){}};
		    dialog("error",err,null,"yes",listener);
		}
	  }}));
      dialog.setPositiveButton("取消",new android.content.DialogInterface.OnClickListener({onClick:function(){}}));
      dialog.create().show();
      return true;
    }catch(error){var listener={OnClick:function(){}};dialog("error",error,null,"yes",listener);}}}));
    popbutton.setContentView(button);
    popbutton.setHeight(70);
    popbutton.setWidth(70);
    popbutton.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,0);
  }catch(error){var listener={OnClick:function(){}};dialog("error",error,null,"yes",listener);}}}));
  return popbutton;
}
function showmodetest(mode)
{
	switch(mode)
	{
		case "1":
			return android.view.Gravity.LEFT|android.view.Gravity.TOP;
	    break;
	    case "2":
			return android.view.Gravity.CENTER;
		break;
	}
}
function save(string,path)
{
  new java.io.FileOutputStream(path).write(new java.lang.String(string).getBytes());
}
function read(path)
{
	try
	{
    var result="";
    var iO=java.io.BufferedReader( new java.io.FileReader(path));
    var str=iO.readLine();
    while(str)
	{
      result+=str;
      str=iO.readLine();
    }
    return result;
	}
	catch(err)
	{
		return false;
	}
}
function dialog(title,message,view,NBT,listener)
{
	var dialog=new android.app.AlertDialog.Builder(ctx);
	if(message)
	{
		dialog.setMessage(message.toString());
	}
	else
    {
		dialog.setView(view);
	}
	if(NBT)
	{
		dialog.setNegativeButton(NBT,new android.content.DialogInterface.OnClickListener(listener));
	}
	if(title)
	{
		dialog.setTitle(title.toString());
	}
	dialog.create().show();
	return dialog;
}
function leaveGame()
{
   ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
       if(poppicture!=null)
	   {
           poppicture.dismiss();
       }
	   if(popbutton!=null)
	   {
		   popbutton.dismiss();
	   }
   }}));
}
/*
        var radio3=new android.widget.RadioButton(ctx);
        radio3.setText("自定义");
        radio3.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
        var showmodetmp="ShowModeLeftUp";
        var dialogchoose=new android.app.AlertDialog.Builder(ctx);
        dialogchoose.setTitle("选择显示模式");
        
        var choosebutton1=new android.widget.Button(ctx);
        var choosebutton2=new android.widget.Button(ctx);
        var choosebutton3=new android.widget.Button(ctx);
        var choosebutton4=new android.widget.Button(ctx);
        choosebutton1.setText("左上");
        choosebutton2.setText("左下");
        choosebutton3.setText("右上");
        choosebutton4.setText("右下");
       
        choosebutton1.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
          showmodetmp="ShowModeLeftUp";
		  print("已设置为左上");
          }}));
        choosebutton2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
          showmodetmp="ShowModeLeftDown";
		  print("已设置为左下");
          }}));
        choosebutton3.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
          showmodetmp="ShowModeRightUp";
		  print("已设置为右上");
          }}));
        choosebutton1.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
          showmodetmp="ShowModeRightDown";
		  print("已设置为右下");
          }}));
        
        var chooselayout=new android.widget.LinearLayout(ctx);
        chooselayout.addView(choosebutton1);
        chooselayout.addView(choosebutton2);
        chooselayout.addView(choosebutton3);
        chooselayout.addView(choosebutton4);
        dialogchoose.setView(chooselayout);
        dialogchoose.setNegativeButton("退出",new android.content.DialogInterface.OnClickListener({onClick:function(){}}));
        dialogchoose.create().show();
        showmode=showmodetmp;
		print("保存设置成功");
      }}));
      radiogroup.addView(radio3);
*/
/*
作者关小契
末影工作室出品
未经允许，不得转载
*/
