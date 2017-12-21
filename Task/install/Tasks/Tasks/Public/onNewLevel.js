//矿物生成
set_ore_is_in_game = true;
is_in_game = true;
game_mode = Level.getGameMode();
if (随机算法.boolean())
{
	wait_for_running(15000, {run : function(){
		var was_mark = 1;
		if(set_ore_is_in_game)
		{
			for(var i = 0; i < 5 * was_mark; i ++)
			{
				//黑金矿 y : 10~12 
		   		矿物生成(随机算法.范围(10, 12), 0.10, IDs.Block.黑金矿, 4, 8);
				//紫蓝晶体矿 y : 10~15
				矿物生成(随机算法.范围(10, 15), 0.15, IDs.Block.紫蓝晶体矿, 5, 10);
				//紫晶体矿 y : 10~20
				矿物生成(随机算法.范围(10, 20), 0.20, IDs.Block.紫晶体矿, 5, 10);
				//铱矿 y : 11~12
				矿物生成(随机算法.范围(11, 12), 0.21, IDs.Block.铱矿, 2, 5);
				//金刚石矿 y : 11~15
				矿物生成(随机算法.范围(10, 20), 0.27, IDs.Block.金刚石矿, 3, 10);
				//铀矿 y : 20~40
				矿物生成(随机算法.范围(20, 40), 0.30, IDs.Block.铀矿, 2, 10);
				//虹矿 y : 20~50
				矿物生成(随机算法.范围(20, 50), 0.30, IDs.Block.虹矿, 5, 9);
				//蓝宝石矿 y : 20~50
				矿物生成(随机算法.范围(20, 50), 0.40, IDs.Block.蓝宝石矿, 5, 15);
				//黄宝石矿 y : 20~50
		    	矿物生成(随机算法.范围(20, 50), 0.40, IDs.Block.黄宝石矿, 5, 15);
				//红宝石矿 y : 20~50
				矿物生成(随机算法.范围(20, 50), 0.40, IDs.Block.红宝石矿, 5, 15);
				for(var t = 0; t < 3; t++) //银矿 y : 5~80
				矿物生成(随机算法.范围(5, 80), 0.50, IDs.Block.银矿, 3, 15);
				for(var t = 0; t < 3; t++) //铝矿 y : 5~90
				矿物生成(随机算法.范围(5, 90), 0.60, IDs.Block.铝矿, 5, 20);
				for(var t = 0; t < 3; t++) //锡矿 y : 5~100
				矿物生成(随机算法.范围(5, 100), 0.70, IDs.Block.锡矿, 5, 15);
				for(var t = 0; t < 4; t++) //铜矿 y : 2~125
				矿物生成(随机算法.范围(2, 125), 0.80, IDs.Block.铜矿, 5, 20);
				for(var t = 0; t < 5; t++) //硫磺矿 y : 2~125
				矿物生成(随机算法.范围(2, 125), 0.90, IDs.Block.硫磺矿, 5, 30);
			}
		}
		
	}});
    
}
/*
algorithm
var tu = 50 * 4;
for(var i = 0; i < tu; i ++)
{
	setTile(getPlayerX() + i, getPlayerY(), getPlayerZ() + tu - i, IDs.Block.橙玻璃, 0);
	setTile(getPlayerX() + i, getPlayerY(), getPlayerZ() - tu + i, IDs.Block.橙玻璃, 0);
	setTile(getPlayerX() - i, getPlayerY(), getPlayerZ() + tu - i, IDs.Block.橙玻璃, 0);
	setTile(getPlayerX() - i, getPlayerY(), getPlayerZ() - tu + i, IDs.Block.橙玻璃, 0);
			
}
*/
