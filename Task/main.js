/******
 function SaveMessages() {
 for (var i = 0; i < MessageViews.length; i++)
 {
 var msg = String(MessageViews[i][1].Msg);
 var title = String(MessageViews[i][1].Title);
 var icon = String(MessageViews[i][1].Icon);
 var buttontext = String(MessageViews[i][1].ButtonText);
 var onclick = String(MessageViews[i][1].onClick.onClick);

 var input = new java.io.FileOutputStream("/sdcard/Tasks/Messages/" + rom("lgbd", "msg"));

 var res = java.lang.String(
 "message :" + msg + "\n" +
 "type :" + title + "\n" +
 "logo :" + icon + "\n" +
 "button :" + buttontext + "\n" +
 "button_click :" + onclick + "\n");
 input.write(res.getBytes());
 input.close();
 }
 function rom(g, c) {
 var tmp = String(g);
 for (var i = 0; i < 10; i ++)
 {
 var i = Math.round(Math.random() * 10);
 tmp += i;
 }
 return tmp + "." + c;
 }
 }


 function MessagePusher() {try
 {

 var msgrootfile = new java.io.File("/sdcard/Tasks/Messages");
 var msgfiles = msgrootfile.listFiles();
 for (var i = 0; i < msgfiles.length; i++)
 {
 if (msgfiles[i].isFile())
 {
 var bufread = new java.io.BufferedReader(new java.io.FileReader(msgfiles[i]));
 var contentline = "";
 while ((contentline = bufread.readLine()) != null)
 {
 regexp(contentline);

 }
 }
 }
 }
 catch(error){Alert(error + error.lineNumber);}
 function regexp(string) {
 var res = 
 [
 //[/^message[\s]:[\w\W]*///i, 'message'],
//[/^type[\s]:[\w\W]*/i, 'type'],
//[/^logo[\s]:[\w\W]*/i, 'logo'],
//[/^button[\s]:[\w\W]*/i, 'button'],
//[/^button_click[\s]:[\w\W]*/i, 'button_click'],
//];
/*
 for (var i = 0; i < res.length; i++)
 {
 if (res[i][0].test(string))
 {
 var mode = res[i][1];
 switch (mode)
 {
 case 'message':
 var tmpm = string.replaceAll("^message[\\s]:", "");
 Message.setText(tmpm);
 break;
 case 'type':
 var tmpt = string.replaceAll("^type[\\s]:", "");
 Title.setText(tmpt);
 break;
 case 'logo':
 var tmpl = string.replaceAll("^logo[\\s]:", "");
 logo.setImageBitmap(android.graphics.BitmapFactory.decodeStream(getInputStream(tmpl)));
 break;
 case 'button':
 var tmpb = string.replaceAll("^button[\\s]:", "");
 button.setText(tmpb);
 break;
 case 'button_click':
 var tmpbc = string.replaceAll("^button_click[\\s]:", "");
 //button.setOnClickListener(new android.view.View.OnClickListener({onClick : function(v) {try															{eval(tmpbc);}catch(e){print(e);}}}));
 break;
 }
 }
 }
 } 

 }

 */
 
