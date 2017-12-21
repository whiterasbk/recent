var screen_width = ctx.getWindowManager().getDefaultDisplay().getWidth();
var screen_height = ctx.getWindowManager().getDefaultDisplay().getHeight();
var test_script_dir = android.os.Environment.getExternalStorageDirectory() + "/JavaScriptProjects/Library/";
var sdcard = android.os.Environment.getExternalStorageDirectory() + "/";
var sdcard1 = null;
var debug = !true;
var LogcatSwitch = false;
var StringType = (new java.lang.String("==").class);
var ByteType = java.lang.Byte.TYPE;

var LayoutParams =
{
	FillParent  :  android.view.ViewGroup.LayoutParams.FILL_PARENT,
	WrapContent : android.view.ViewGroup.LayoutParams.WRAP_CONTENT,
	MatchParent : android.view.ViewGroup.LayoutParams.MATCH_PARENT,
	getParams   : function(Width, Height) { 
		return new android.view.ViewGroup.LayoutParams(Width == null ? -2 : Width , Height == null ? -2 : Height);
	},
	getWeight : function(Width, Height, Weight) {
		return new android.widget.LinearLayout.LayoutParams(Width == null ? -2 : Width , Height == null ? -2 : Height, Weight);
	}
};
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
	Bounce    	         : new android.view.animation.BounceInterpolator(),
	Cycle                : function(FloatSin) {
		return new android.view.animation.CycleInterpolator(java.lang.Float(FloatSin.toString()));
	}
};
var AnimationRepeatMode = {
	reverse:android.view.animation.Animation.REVERSE
};
var AnimationRepeatCount = {
	infinite:android.view.animation.Animation.INFINITE
};
var Gravity = 
{
	Centre : android.view.Gravity.CENTER,
	Left : android.view.Gravity.LEFT,
	Right : android.view.Gravity.RIGHT,
	Bottom : android.view.Gravity.BOTTOM,
	Top : android.view.Gravity.TOP
};

var Adapters =
{
	Params :
	{
		full : LayoutParams.getParams(-1, -1),
		wider : LayoutParams.getParams(-1, -2),
		heighter : LayoutParams.getParams(-2, -1),
		warp : LayoutParams.getParams(-2, -2)
	}
};
var ScreenOrientation = {
	vertical:android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT,
	horizontal:android.content.pm.ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE
};
var Defaults =
{
	DialogTitleColor : "#ff0028",
	DialogTitleClick : function(v) {Toast({msg:"你点标题干嘛。。。"});},
	AlertDialogColor : "#ff0028",
	sdcard : "/sdcard",
	media_controller_Background : null,
	UnZipBufferSize:20 * 1024,
	ZipBufferSize:20 * 1024,
	DownloadBufferSize: 1024 * 20,
	ConnectionTimeout:10 * 1000,
	TTFTestText:Math.random() > 0.5 ? "这是个测试字符串" : " It's a test string",
	LogcatDir:sdcard + "whiter.js/logcat.db"
};
var XmlPullSign = 
{
	start_tag : org.xmlpull.v1.XmlPullParser.START_TAG,
	start_document : org.xmlpull.v1.XmlPullParser.START_DOCUMENT,
	end_document : org.xmlpull.v1.XmlPullParser.END_DOCUMENT,
	end_tag : org.xmlpull.v1.XmlPullParser.END_TAG
};
var Locale = {
	US:java.util.Locale.US,
    Canada:java.util.Locale.CANADA,
	Canada_French:java.util.Locale.CANADA_FRENCH,
	China:java.util.Locale.CHINA,
	Chinese:java.util.Locale.CHINESE,
	English:java.util.Locale.ENGLISH,
	France:java.util.Locale.FRANCE,
	French:java.util.Locale.FRENCH,
	German:java.util.Locale.GERMAN,
	Germany:java.util.Locale.GERMANY,
	Italian:java.util.Locale.ITALIAN,
	Italy:java.util.Locale.ITALY,
	Japan:java.util.Locale.JAPAN,
	Japanese:java.util.Locale.JAPANESE,
	Taiwan:java.util.Locale.TAIWAN,
	Simplified_Chinese:java.util.Locale.SIMPLIFIED_CHINESE,
	Traditional_Chinese:java.util.Locale.TRADITIONAL_CHINESE,
	UK:java.util.Locale.UK
};
var AudioStreamType = {
	Alarm:android.media.AudioManager.STREAM_ALARM,
	Dtmf:android.media.AudioManager.STREAM_DTMF,
	Music:android.media.AudioManager.STREAM_MUSIC,
	Notification:android.media.AudioManager.STREAM_NOTIFICATION,
	Ring:android.media.AudioManager.STREAM_RING,
	System:android.media.AudioManager.STREAM_SYSTEM,
	VoiceCall:android.media.AudioManager.STREAM_VOICE_CALL,
};
var AudioManagerFlags = {
	AllowRingModes:android.media.AudioManager.FLAG_ALLOW_RINGER_MODES,
	PlaySound:android.media.AudioManager.FLAG_PLAY_SOUND,
	RemoveSoundAndVibrate: android.media.AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE,
	ShowUI:android.media.AudioManager.FLAG_SHOW_UI,
	Vibrate:android.media.AudioManager.FLAG_VIBRATE
};
var TTSQueue = {
	flush:android.speech.tts.TextToSpeech.QUEUE_FLUSH,
	add:android.speech.tts.TextToSpeech.QUEUE_ADD
};
var ProgressStyle = {
	Horizontal:android.app.ProgressDialog.STYLE_HORIZONTAL,
	Spinner:android.app.ProgressDialog.STYLE_SPINNER
};
var ProgressAction = {
	setMessage:3,
	setProgress:2,
	Show:1,
	Dismiss:0
};
var TextUtilsTruncateAt = {
	End:android.text.TextUtils.TruncateAt.END,
	Middle:android.text.TextUtils.TruncateAt.MIDDLE,
	Start:android.text.TextUtils.TruncateAt.START,
	Marquee:android.text.TextUtils.TruncateAt.MARQUEE
};
var MediaMode = {
	Local:1,
	URL:2
};
var NumberMode = {
	Double:0,
	Integer:1,
	Float:2,
	Long:3,
	Short:4
};
var SimpleListItemResources = {
	1:android.R.layout.simple_list_item_1,
    2:android.R.layout.simple_list_item_2,
    activated1:android.R.layout.simple_list_item_activated_1,
    activated2:android.R.layout.simple_list_item_activated_2,
    checked:android.R.layout.simple_list_item_checked,
    multiple_choice:android.R.layout.simple_list_item_multiple_choice,
    single_choice:android.R.layout.simple_list_item_single_choice
};
var PropertiesINILoadMode = {
	TEXT : "text",
	XML : "xml"
};
var SearchMode = {
	File : "file",
	Dir : "dir",
	Both : "both"
};
var ERMarks = {
	large : "Large",
	small : "Small"
};
var FileType = {
	file : "file",
	dir : "dir"
};
var CursorType = {
	Blob:android.database.Cursor.FIELD_TYPE_BLOB,
    Float:android.database.Cursor.FIELD_TYPE_FLOAT,
    Int:android.database.Cursor.FIELD_TYPE_INTEGER,
    Null:android.database.Cursor.FIELD_TYPE_NULL,
    String:android.database.Cursor.FIELD_TYPE_STRING
};
var QQUrl = {
	base:{
		head:"mqqwpa://im/chat?chat_type=",
		connect:"&uin=",
		version:"&version=1"
	},
	type:{
		number:"wpa",
		group:"group"
	},
	getNumberUrl:function(number){
		return this.base.head + this.type.number + this.base.connect + number + this.base.version;
	},
	getGroupUrl:function(number){
		return this.base.head + this.type.group + this.base.connect + number + this.base.version;
	}
};
var ListAdapter = {
	array:function(list, layout){
		return new android.widget.ArrayAdapter(ctx, layout == null ? FormatId(SimpleListItemResources[1]) : layout, ToJavaArray(list, StringType));
	},
};

