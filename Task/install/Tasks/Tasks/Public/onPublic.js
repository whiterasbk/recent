/*****************Item*****************/
var Items = [];
var Armor = [];
var Food =  [];
//Item.defineThrowable(445, "金蛋", 0, "金蛋", 1);

//food
Food.push(["伸腿瞪眼丸", 8]);

//armor
Armor.push(["银头盔", "银_1", 0]);
Armor.push(["银胸甲", "银_1", 1]);
Armor.push(["银护腿", "银_2", 2]);
Armor.push(["银靴", "银_1", 3]);
Armor.push(["紫蓝晶头盔", "紫蓝晶_1", 0]);
Armor.push(["紫蓝晶胸甲", "紫蓝晶_1", 1]);
Armor.push(["紫蓝晶护腿", "紫蓝晶_2", 2]);
Armor.push(["紫蓝晶靴", "紫蓝晶_1", 3]);
Armor.push(["铜头盔", "铜_1", 0]);
Armor.push(["铜胸甲", "铜_1", 1]);
Armor.push(["铜护腿", "铜_2", 2]);
Armor.push(["铜靴", "铜_1", 3]);
Armor.push(["黑金头盔", "黑金_1", 0]);
Armor.push(["黑金胸甲", "黑金_1", 1]);
Armor.push(["黑金护腿", "黑金_2", 2]);
Armor.push(["黑金靴", "黑金_1", 3]);

//bottles
Items.push(["集气瓶", 64]);
Items.push(["二氧化硫瓶", 1]);
Items.push(["二氧化碳瓶", 1]);
Items.push(["氢气瓶", 1]);
Items.push(["氧气瓶", 1]);
Items.push(["氦气瓶", 1]);
Items.push(["氮气瓶", 1]);

//others
Items.push(["金币", 99]);
Items.push(["金蛋", 16]);
Items.push(["尸毒", 64]);
Items.push(["房子", 1]);
Items.push(["试管", 64]);
Items.push(["僵尸皮", 64]);
Items.push(["注射器", 16]);
Items.push(["僵尸遗物", 64]);
Items.push(["女巫遗物", 64]);
Items.push(["火焰之星", 64]);
Items.push(["骷髅遗物", 64]);
Items.push(["女巫的喉咙", 64]);
Items.push(["女巫的魔法书", 64]);

//stones
Items.push(["黄宝石", 64]);
Items.push(["金刚石", 64]);
Items.push(["红宝石", 64]);
Items.push(["蓝宝石", 64]);
Items.push(["紫晶粒", 64]);
Items.push(["钻石粒", 64]);

//'Dims'
Items.push(["黑金锭", 64]);
Items.push(["紫蓝锭", 64]);
Items.push(["紫晶锭", 64]);
Items.push(["硫磺锭", 64]);
Items.push(["锡锭", 64]);
Items.push(["银锭", 64]);
Items.push(["铜锭", 64]);
Items.push(["铝锭", 64]);
Items.push(["铱锭", 64]);
Items.push(["铀锭", 64]);
Items.push(["虹锭", 64]);

//tools
Items.push(["紫蓝晶斧", 1]);
Items.push(["紫蓝晶锄", 1]);
Items.push(["紫蓝晶铲", 1]);
Items.push(["紫蓝晶镐", 1]);
Items.push(["黑金镐", 1]);
Items.push(["黑金锄", 1]);
Items.push(["黑金斧", 1]);
Items.push(["黑金铲", 1]);
Items.push(["银镐", 1]);
Items.push(["银锄", 1]);
Items.push(["银铲", 1]);
Items.push(["银斧", 1]);
Items.push(["铜镐", 1]);
Items.push(["铜锄", 1]);
Items.push(["铜斧", 1]);
Items.push(["铜铲", 1]);

//such as sword and so on
Items.push(["紫蓝晶剑", 1]);
Items.push(["紫晶剑", 1]);
Items.push(["纳米剑", 1]);
Items.push(["黑金剑", 1]);
Items.push(["虹剑", 1]);
Items.push(["铜剑", 1]);
Items.push(["银剑", 1]);
Items.push(["钻石小刀", 1]);
Items.push(["黑金古刀", 1]);
Items.push(["紫蓝晶刀", 1]);
Items.push(["小银刀", 1]);
Items.push(["虹刀", 1]);
Items.push(["阳尺", 1]);
Items.push(["阴尺", 1]);

try
{
	var food_index_id = 550;
	for (var i = 0; i < Food.length; i++)
	{
		ModPE.setFoodItem(food_index_id + i, Food[i][0], 0, Food[i][1] == null ? 2 : Food[i][1], Food[i][0], Food[i][2] == null ? 64 : Food[i][2]);
		Player.addItemCreativeInv(food_index_id + i, 1, 0);
		Food[i].push({id : food_index_id + i, name : Food[i][0]});
	}
}
catch(e)
{
	Run({run : function() {Alert(e + e.lineNumber);}});
}

try
{
	var armor_index_id = 500;
	for (var i = 0; i < Armor.length; i++)
	{
		Item.defineArmor
		(
			armor_index_id + i,
			Armor[i][0], 
			0, 
			Armor[i][0], 
			"armor/" + Armor[i][1] + ".png",
			Armor[i][3] == null ? 2 : Armor[i][3],
			Armor[i][4] == null ? 100 : Armor[i][4],
			Armor[i][2]
		);
		Player.addItemCreativeInv(armor_index_id + i, 1, 0);
		Item.setCategory(armor_index_id + i, ItemCategory.TOOL);
		Armor[i].push({id : i + armor_index_id, name : Armor[i][0]});
	}
}
catch(e)
{
	Run({run : function() {Alert(e);}});
}

try
{
	var item_index_id = 600;
	for (var i = 0; i < Items.length; i++)
	{
		//Add Items
		ModPE.setItem(item_index_id + i, Items[i][0] + "", 0, Items[i][0], Items[i][1] == null ? 64 : Items[i][1]);
		if (Items[2] != null) Item.setMaxDamage(item_index_id + i, Items[i][2]);
		//if (/刀|剑|镐|锄|斧|铲|尺/.test(Items[i][0])) Item.setHandEquipped(item_index_id + i, true);
		Player.addItemCreativeInv(item_index_id + i, 1, 0);
		Items[i].push({id : item_index_id + i, name : Items[i][0]});
	}
}
catch(err)
{
	Run({run:function() {Alert(err);}});
}

/*****************Block*****************/
var Blocks = [];
var LiquidBlock = [];
//方块材质顺序:上下前后左右

/*****************BlockAdapter*****************/
var BlockAdapter = function() {
	var map = new java.util.HashMap();
	map.put("destroyTime", null);//方块破坏时间
	map.put("explosionResistance", null);//方块抗暴能力
	map.put("friction", null);//方块摩擦力
	map.put("lightLevel", null);//方块发光等级
	map.put("lightOpacity", null);//方块不透明度
	map.put("redstoneConsumer", null);//是否接受红石更新
	map.put("is1Alpha", false);//是否透明
	map.put("model", 0);//方块模型
	map.put("reId", 1);//方块原ID
	map.put("shape", null);//方块形状
	map.put("recipe", null);//合成方式
	map.put("renderLayer", null);//方块属性
	return map;
};

var GlassBlockAdapter = BlockAdapter();
GlassBlockAdapter.put("reId", 20);
GlassBlockAdapter.put("is1Alpha", true);
GlassBlockAdapter.put("redstoneConsumer", false);
GlassBlockAdapter.put("lightOpacity", 0);
GlassBlockAdapter.put("renderLayer", 1);
/*****************BlockAdapter*****************/

//ores
Blocks.push(["紫蓝晶体矿", [0, 0, 0, 0, 0, 0]]);
Blocks.push(["黄宝石矿", [0, 0, 0, 0, 0, 0]]);
Blocks.push(["蓝宝石矿", [0, 0, 0, 0, 0, 0]]);
Blocks.push(["红宝石矿", [0, 0, 0, 0, 0, 0]]);
Blocks.push(["金刚石矿", [0, 0, 0, 0, 0, 0]]);
Blocks.push(["紫晶体矿", [0, 0, 0, 0, 0, 0]]);
Blocks.push(["黑金矿", 	[0, 0, 0, 0, 0, 0]]);
Blocks.push(["硫磺矿", 	[0, 0, 0, 0, 0, 0]]);
Blocks.push(["铝矿", 	[0, 0, 0, 0, 0, 0]]);
Blocks.push(["铱矿", 	[0, 0, 0, 0, 0, 0]]);
Blocks.push(["锡矿", 	[0, 0, 0, 0, 0, 0]]);
Blocks.push(["银矿", 	[0, 0, 0, 0, 0, 0]]);
Blocks.push(["虹矿", 	[0, 0, 0, 0, 0, 0]]);
Blocks.push(["铜矿", 	[0, 0, 0, 0, 0, 0]]);
Blocks.push(["铀矿", 	[0, 0, 0, 0, 0, 0]]);

//common blocks
Blocks.push(["交易方块", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["紫红玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["天蓝玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["灰蓝玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["粉玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["橙玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["白玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["棕玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["紫玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["银玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["青玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["绿玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["蓝玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["灰玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["红玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["黄玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);
Blocks.push(["黑玻璃", [0, 0, 0, 0, 0, 0], GlassBlockAdapter]);

//machines
Blocks.push(["自动种植农作物机", [1, 0, 2, 2, 2, 2]]);
Blocks.push(["气体收集器", [0, 1, 2, 2, 2, 2]]);
Blocks.push(["时间机器", [0, 1, 1, 1, 1, 1]]);
Blocks.push(["压缩机", [0, 2, 1, 1, 1, 1]]);
Blocks.push(["采矿厂", [0, 1, 1, 1, 1, 1]]);
Blocks.push(["捐款箱", [0, 1, 2, 2, 2, 2]]);
Blocks.push(["提取机", [0, 1, 2, 2, 2, 2]]);
Blocks.push(["炼金炉", [0, 1, 2, 2, 2, 2]]);
Blocks.push(["祭台", [0, 1, 2, 2, 2, 2]]);
Blocks.push(["矿井", [0, 0, 0, 0, 0, 0]]);

try
{
	var block_index_id = 200;
	for (var i = 0; i < Blocks.length; i++)
	{   

		var adapter_map = Blocks[i][2] == null ? BlockAdapter() : Blocks[i][2];
		var map_array = [];

		/*0 */map_array.push(adapter_map.get("destroyTime"));
		/*1 */map_array.push(adapter_map.get("explosionResistance"));
		/*2 */map_array.push(adapter_map.get("friction"));
		/*3 */map_array.push(adapter_map.get("lightLevel"));
		/*4 */map_array.push(adapter_map.get("lightOpacity"));
		/*5 */map_array.push(adapter_map.get("redstoneConsumer"));
		/*6 */map_array.push(adapter_map.get("is1Alpha"));
		/*7 */map_array.push(adapter_map.get("model"));
		/*8 */map_array.push(adapter_map.get("reId"));
		/*9 */map_array.push(adapter_map.get("shape"));
		/*10*/map_array.push(adapter_map.get("recipe"));
		/*11*/map_array.push(adapter_map.get("renderLayer"));

		Block.defineBlock
		(
			i + block_index_id, 
			Blocks[i][0], 
			[
				[Blocks[i][0], Blocks[i][1][1]],
				[Blocks[i][0], Blocks[i][1][0]],
				[Blocks[i][0], Blocks[i][1][3]],
				[Blocks[i][0], Blocks[i][1][2]],
				[Blocks[i][0], Blocks[i][1][4]],
				[Blocks[i][0], Blocks[i][1][5]],
			], 
			parseInt(map_array[8]) == null ? 1 : parseInt(map_array[8]), 
			map_array[6], 
			map_array[7]
		);

		if (map_array[0] != null) Block.setDestroyTime(i + block_index_id, map_array[0]);
		if (map_array[1]  != null) Block.setExplosionResistance(i + block_index_id, map_array[1]);
		if (map_array[2]  != null) Block.setFriction(i + block_index_id, map_array[2]);
		if (map_array[3]  != null) Block.setLightLevel(i + block_index_id, map_array[3]);
        if (map_array[4]  != null) Block.setLightOpacity(i + block_index_id, map_array[4]);
		if (map_array[5]  != null) Block.setRedstoneConsumer(i + block_index_id, map_array[5]);
		if (map_array[11] != null) Block.setRenderLayer(block_index_id + i, map_array[11]);

		Player.addItemCreativeInv(i + block_index_id, 1, 0);
		adapter_map = null;
		map_array = [];

		Blocks[i].push({id : block_index_id + i, name : Blocks[i][0]});
	}

	for (var i = 0; i < LiquidBlock.length; i++)
	{
		Block.defineLiquidBlock(i + 1000, LiquidBlock[i][0], LiquidBlock[i][1], LiquidBlock[i][2] == null ? 8 : LiquidBlock[i][2]);
		Player.addItemCreativeInv(i + 1000, 1, 0);
	}
}
catch(err)
{
	Run({run:function() {Alert(err);}});
}

/*
 Block.defineLiquidBlock(par1int, par2String, par3Object, par4Object);
 自定义液体方块
 参数一：int类型 方块ID
 参数二：String类型 方块名称
 参数三：Object类型 方块材质名称(在terrain.meta里的名字引用)(格式：[[材质名],[材质名]]  一为静态时材质，二为流动时材质)
 参数四：Object类型 原材料ID 岩浆ID OR 水ID 会将原材料性质移至本方块
 */

//Id List
var IDs = 
{
	Block : {},
	Item :  {},
	FoodItem : 	 {},
	ArmorItem :  {}
};
try
{
	for (var i = 0 ; i < Blocks.length; i++)
	{
		eval("IDs.Block." + Blocks[i][Blocks[i].length - 1].name + " = " + Blocks[i][Blocks[i].length - 1].id);
	}
	for (var i = 0; i < Food.length; i++)
	{
		eval("IDs.FoodItem." + Food[i][Food[i].length - 1].name + " = " + Food[i][Food[i].length - 1].id);
	}
	for (var i = 0; i < Armor.length; i++)
	{
		eval("IDs.ArmorItem." + Armor[i][Armor[i].length - 1].name + " = " + Armor[i][Armor[i].length - 1].id);
	}
	for (var i = 0; i < Items.length; i++)
	{
		eval("IDs.Item." + Items[i][Items[i].length - 1].name + " = " + Items[i][Items[i].length - 1].id);
	}
}
catch(err)
{
	Run({run : function() {Alert(err);}});
}
/********************//********************/
var set_ore_is_in_game;
var game_mode;
var is_in_game = false;
/*******************//********************/

Item.addShapedRecipe(IDs.Item.阳尺, 1, 0, ["a  ", " b ", "  c"], ["a", IDs.Item.红宝石, 0, "b", IDs.Item.虹锭, 0, "c", IDs.Item.金刚石, 0]);
Item.addShapedRecipe(IDs.Item.阴尺, 1, 0, ["a  ", " b ", "  c"], ["a", IDs.Item.蓝宝石, 0, "b", IDs.Item.黑金锭, 0, "c", IDs.Item.紫晶锭, 0]);
Item.addShapedRecipe(IDs.Item.紫晶锭, 1, 0, ["aaa", "aaa", "aaa"], ["a", IDs.Item.紫晶粒, 0]);
Item.addShapedRecipe(IDs.Item.紫晶粒, 9, 0, ["   ", " a ", "   "], ["a", IDs.Item.紫晶锭, 0]);
Item.addShapedRecipe(264, 1, 0, ["aaa", "aaa", "aaa"], ["a", IDs.Item.钻石粒, 0]);
Item.addShapedRecipe(IDs.Item.钻石粒, 9, 0, ["aaa", "aaa", "aaa"], ["a", 264, 0]);
Item.addShapedRecipe(IDs.Item.伸腿瞪眼丸, 1, 0, ["   ", " a ", "b c"], ["a", 372, 0, "b", 376, 0, "c", 377, 0]);

熔炉合成(IDs.Block.紫蓝晶体矿, IDs.Item.紫蓝锭);
熔炉合成(IDs.Block.黄宝石矿, IDs.Item.黄宝石);
熔炉合成(IDs.Block.蓝宝石矿, IDs.Item.蓝宝石);
熔炉合成(IDs.Block.红宝石矿, IDs.Item.红宝石);
熔炉合成(IDs.Block.金刚石矿, IDs.Item.金刚石);
熔炉合成(IDs.Block.紫晶体矿, IDs.Item.紫晶锭);
熔炉合成(IDs.Block.黑金矿, IDs.Item.黑金锭);
熔炉合成(IDs.Block.硫磺矿, IDs.Item.硫磺锭);
熔炉合成(IDs.Block.铝矿, IDs.Item.铝锭);
熔炉合成(IDs.Block.铱矿, IDs.Item.铱锭);
熔炉合成(IDs.Block.锡矿, IDs.Item.锡锭);
熔炉合成(IDs.Block.银矿, IDs.Item.银锭);
熔炉合成(IDs.Block.铜矿, IDs.Item.铜锭);
熔炉合成(IDs.Block.铀矿, IDs.Item.铀锭);
熔炉合成(IDs.Block.虹矿, IDs.Item.虹锭);

addShapedRecipeFor剑([
						[IDs.Item.黑金剑, IDs.Item.黑金锭],
						[IDs.Item.紫晶剑, IDs.Item.紫晶锭],
						[IDs.Item.紫蓝晶剑, IDs.Item.紫蓝锭],
						[IDs.Item.虹剑, IDs.Item.虹锭],
						[IDs.Item.铜剑, IDs.Item.铜锭],
						[IDs.Item.银剑, IDs.Item.银锭]
					]);

addShapedRecipeFor刀([
						[IDs.Item.钻石小刀, 264],
						[IDs.Item.黑金古刀, IDs.Item.黑金锭],
						[IDs.Item.紫蓝晶刀, IDs.Item.紫蓝锭],
						[IDs.Item.小银刀, IDs.Item.银锭],
						[IDs.Item.虹刀, IDs.Item.虹锭]
					]);

addShapedRecipeFor斧([
						[IDs.Item.紫蓝晶斧, IDs.Item.紫蓝锭],
						[IDs.Item.黑金斧, IDs.Item.黑金锭],
						[IDs.Item.银斧, IDs.Item.银锭],
						[IDs.Item.铜斧, IDs.Item.铜锭]
					]);

addShapedRecipeFor镐([
						[IDs.Item.紫蓝晶镐, IDs.Item.紫蓝锭],
						[IDs.Item.黑金镐, IDs.Item.黑金锭],
						[IDs.Item.银镐, IDs.Item.银锭],
						[IDs.Item.铜镐, IDs.Item.铜锭]
					]);

addShapedRecipeFor锄([
						[IDs.Item.紫蓝晶锄, IDs.Item.紫蓝锭],
						[IDs.Item.黑金锄, IDs.Item.黑金锭],
						[IDs.Item.银锄, IDs.Item.银锭],
						[IDs.Item.铜锄, IDs.Item.铜锭]
					]);

addShapedRecipeFor铲([
						[IDs.Item.紫蓝晶铲, IDs.Item.紫蓝锭],
						[IDs.Item.黑金铲, IDs.Item.黑金锭],
						[IDs.Item.银铲, IDs.Item.银锭],
						[IDs.Item.铜铲, IDs.Item.铜锭]
					]);

addShapedRecipeFor头盔([
						 [IDs.ArmorItem.紫蓝晶头盔, IDs.Item.紫蓝锭],
						 [IDs.ArmorItem.黑金头盔, IDs.Item.黑金锭],
						 [IDs.ArmorItem.银头盔, IDs.Item.银锭],
						 [IDs.ArmorItem.铜头盔, IDs.Item.铜锭]
					 ]);

addShapedRecipeFor胸甲([
						 [IDs.ArmorItem.紫蓝晶胸甲, IDs.Item.紫蓝锭],
						 [IDs.ArmorItem.黑金胸甲, IDs.Item.黑金锭],
						 [IDs.ArmorItem.银胸甲, IDs.Item.银锭],
						 [IDs.ArmorItem.铜胸甲, IDs.Item.铜锭]
					 ]);

addShapedRecipeFor护腿([
						 [IDs.ArmorItem.紫蓝晶护腿, IDs.Item.紫蓝锭],
						 [IDs.ArmorItem.黑金护腿, IDs.Item.黑金锭],
						 [IDs.ArmorItem.银护腿, IDs.Item.银锭],
						 [IDs.ArmorItem.铜护腿, IDs.Item.铜锭]
					 ]);

addShapedRecipeFor靴子([
						 [IDs.ArmorItem.紫蓝晶靴, IDs.Item.紫蓝锭],
						 [IDs.ArmorItem.黑金靴, IDs.Item.黑金锭],
						 [IDs.ArmorItem.银靴, IDs.Item.银锭],
						 [IDs.ArmorItem.铜靴, IDs.Item.铜锭]
					 ]);

addShapedRecipeForGlass([
							[IDs.Block.紫红玻璃, IDs.Item.紫晶锭],
							[IDs.Block.天蓝玻璃, 79],
							[IDs.Block.灰蓝玻璃, IDs.Item.铝锭],
							[IDs.Block.粉玻璃, IDs.Item.红宝石],
							[IDs.Block.橙玻璃, IDs.Item.铜锭],
							[IDs.Block.白玻璃, 332],
							[IDs.Block.棕玻璃, 336],
							[IDs.Block.紫玻璃, IDs.Item.紫蓝锭],
							[IDs.Block.银玻璃, IDs.Item.银锭],
							[IDs.Block.青玻璃, 341],
							[IDs.Block.绿玻璃, 388],
							[IDs.Block.蓝玻璃, IDs.Item.蓝宝石],
							[IDs.Block.灰玻璃, 318],
							[IDs.Block.红玻璃, IDs.Item.虹锭],
							[IDs.Block.黄玻璃, IDs.Item.黄宝石],
							[IDs.Block.黑玻璃, 351] 
						]);

var TypeModTick = new java.lang.Thread(
	new java.lang.Runnable(
		{run : function() {try
				{
					while (true)
					{
						if (is_in_game)
						{
							eval(onRun_per_1000);
							TypeModTick.sleep(2000);
						}
					}
				}
				catch(err)
				{
					Run({run : function() {Alert(err);}});
				}
			}}));
TypeModTick.start();
/**********************functions******************************************************/

function getEncourageIndex(index) {
	try
	{
		switch (index)
		{
			case "打怪能手" :
				Player.addExp(3); 
				Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, IDs.Item.金币, 15, 0); 
				break;

			case "女巫杀手" :
				Player.addExp(5);
				Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, IDs.Item.金币, 25, 0); 

				break;
			case "我恨小白" :
				Player.addExp(5);
				Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, IDs.Item.伸腿瞪眼丸, 25, 0); 

				break;
			case "变态苦力怕" :
				Player.addExp(10);
				Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, IDs.Item.伸腿瞪眼丸, 25, 0); 

				break;
			case "黏宝宝" :
				Player.addExp(5);
				Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, IDs.Item.金币, 25, 0); 

				break;
			case "“截肢”杀手" :
				Player.addExp(5);
				Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, IDs.Item.伸腿瞪眼丸, 25, 0); 

				break;
			case "禁止恶魂" :
				Player.addExp(20);
				Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, IDs.Item.黑金锭, 1, 0); 

				break;
			case "“母鸡”" :
				Player.addExp(1);
				Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, IDs.Item.金币, 2, 0); 

				break;
			case "地狱勇士" :
				Player.addExp(10);
				Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, IDs.Item.火焰之星, 10, 0); 

				break;
			case "矿物收集" :
				if (ReadTasksStringFile(index + "/progress.progress") + "" != "任务已执行")
				{
					Player.addExp(25);
					Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, 264, 50, 0); 
					WriteTasksStringFile(index + "/progress.progress", "任务已执行");
				}
				else 
				{
					Run({run: function() {Toast_U("一次性任务不可以重复执行");}});
				}
				break;
			case "黑金套装" :
				if (ReadTasksStringFile(index + "/progress.progress") + "" != "任务已执行")
				{
					Player.addExp(20);
					Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, 264, 25, 0); 
					WriteTasksStringFile(index + "/progress.progress", "任务已执行");
				}
				else 
				{
					Run({run: function() {Toast_U("一次性任务不可以重复执行");}});
				}
				break;
			case "紫蓝套装" :
				if (ReadTasksStringFile(index + "/progress.progress") + "" != "任务已执行")
				{
					Player.addExp(20);
					Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, 264, 20, 0); 
					WriteTasksStringFile(index + "/progress.progress", "任务已执行");
				}
				else 
				{
					Run({run: function() {Toast_U("一次性任务不可以重复执行");}});
				}
				break;
			case "铜套装" :
				if (ReadTasksStringFile(index + "/progress.progress") + "" != "任务已执行")
				{
					Player.addExp(10);
					Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, 388, 25, 0); 
					WriteTasksStringFile(index + "/progress.progress", "任务已执行");
				}
				else 
				{
					Run({run: function() {Toast_U("一次性任务不可以重复执行");}});
				}
				break;
			case "银套装" :
				if (ReadTasksStringFile(index + "/progress.progress") + "" != "任务已执行")
				{
					Player.addExp(15);
					Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, 264, 15, 0); 
					WriteTasksStringFile(index + "/progress.progress", "任务已执行");
				}
				else 
				{
					Run({run: function() {Toast_U("一次性任务不可以重复执行");}});
				}
				break;
			case "玻璃收集" :
				if (ReadTasksStringFile(index + "/progress.progress") + "" != "任务已执行")
				{
					Player.addExp(10);
					Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, 264, 5, 0); 
					WriteTasksStringFile(index + "/progress.progress", "任务已执行");
				}
				else 
				{
					Run({run: function() {Toast_U("一次性任务不可以重复执行");}});
				}
				break;
			case "黑金装备" :
				if (ReadTasksStringFile(index + "/progress.progress") + "" != "任务已执行")
				{
					Player.addExp(15);
					Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, 369, 25, 0); 
					WriteTasksStringFile(index + "/progress.progress", "任务已执行");
				}
				else 
				{
					Run({run: function() {Toast_U("一次性任务不可以重复执行");}});
				}
				break;
			case "紫蓝装备" :
				if (ReadTasksStringFile(index + "/progress.progress") + "" != "任务已执行")
				{
					Player.addExp(15);
					Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, 466, 25, 0); 
					WriteTasksStringFile(index + "/progress.progress", "任务已执行");
				}
				else 
				{
					Run({run: function() {Toast_U("一次性任务不可以重复执行");}});
				}
				break;
			case "铜装备" :
				if (ReadTasksStringFile(index + "/progress.progress") + "" != "任务已执行")
				{
					Player.addExp(10);
					Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, 89, 25, 0); 
					WriteTasksStringFile(index + "/progress.progress", "任务已执行");
				}
				else 
				{
					Run({run: function() {Toast_U("一次性任务不可以重复执行");}});
				}
				break;
			case "银装备" :
				if (ReadTasksStringFile(index + "/progress.progress") + "" != "任务已执行")
				{
					Player.addExp(15);
					Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 2, 51, 25, 0); 
					WriteTasksStringFile(index + "/progress.progress", "任务已执行");
				}
				else 
				{
					Run({run: function() {Toast_U("一次性任务不可以重复执行");}});
				}
				break;
		}
	}
	catch(err)
	{
		Run({run : function() {Alert(err);}});
	}
}
/*
 +打怪能手+
 +女巫杀手+
 +我恨小白+
 +变态苦力怕+
 +黏宝宝+
 +“截肢”杀手+
 +禁止恶魂+
 +“母鸡”+
 +地狱勇士+
 +矿物收集+
 +黑金套装+
 +紫蓝套装+
 +铜套装+
 银套装+
 +玻璃收集+
 黑金装备+
 +紫蓝装备+
 +铜装备+
 +银装备+
 */

var 随机算法 =
{
	范围 : function(from, to) {
		return from + Math.round(Math.random() * (to - from));
	},
	boolean : function(概率_true) {
		return Math.random() < (概率_true == null ? 0.5 : 概率_true) ? true : false;
	}
};

function wait_for_running(time, content) {
	Run({run : function() {try
				{
					new android.os.Handler().postDelayed(new java.lang.Runnable(content), time);
				}catch(err){Run({run : function() {Alert(err);}});}}});
}


function 生成矿块_mine(x, y, z, id, min, max) {
	setTile(x, y, z, id, 0);
	var mark_count = 随机算法.范围(min, max) - 1;
	var inside_mark = 0;

	分支(x, y, z);
    function 分支(xx, yy, zz) {
		var sides =
		{
			top : 	 {x : xx, y : yy + 1, z : zz},
			bottom : {x : xx, y : yy - 1, z : zz},
			front :  {x : xx, y : yy, z : zz + 1},
			behind : {x : xx, y : yy, z : zz - 1},
			left :   {x : xx - 1, y : yy, z : zz},
			right :  {x : xx + 1, y : yy, z : zz},
			randon_side : function() {
				switch (随机算法.范围(1, 6))
				{
					case 1 : return this.top;break;
					case 2 : return this.bottom;break;
					case 3 : return this.front;break;
					case 4 : return this.behind;break;
					case 5 : return this.left;break;
					case 6 : return this.right;break;
				}
			}
		};
		if (inside_mark <= mark_count)
		{
			var which_side = sides.randon_side();

			setTile(which_side.x, which_side.y, which_side.z, id, 0);
			inside_mark ++;
			分支(which_side.x, which_side.y, which_side.z);

		}
	}
}

function 生成矿块_others(id, 几率, 高度) {
	//by 轮回
	var 矿石判断 = 0;
	var 生成判断 = Math.round(Math.random()) * 3;
	if (矿石判断 < 几率)
	{
		矿石x = getPlayerX() - Math.random() * 512;
		矿石y = Math.random() * 高度;
		矿石z = getPlayerZ() - Math.random() * 512;
		if (getTile(矿石x, 矿石y, 矿石z) == 1 && 矿石判断 < 几率)
		{
			setTile(矿石x, 矿石y, 矿石z, id);
			setTile(矿石x, 矿石y, 矿石z - 1, id);
			if (生成判断 == 0)
			{
				setTile(矿石x - 1, 矿石y - 1, 矿石z, id);
				setTile(矿石x - 1, 矿石y, 矿石z + 1, id);
				setTile(矿石x, 矿石y - 1, 矿石z, id);
 			}
			else if (生成判断 == 3)
			{
				setTile(矿石x + 1, 矿石y - 1, 矿石z, id);
				setTile(矿石x + 1, 矿石y, 矿石z, id);
				setTile(矿石x, 矿石y, 矿石z - 1, id);
			}
		}
	}
	矿石判断++;
}

function 矿物生成(y, 几率, id, min, max) {
	var x = getPlayerX() + (随机算法.boolean() ? 50 : -50) - 随机算法.范围(-50, 50);
	var z = getPlayerZ() + (随机算法.boolean() ? 50 : -50) - 随机算法.范围(-50, 50);

	if (!Level.canSeeSky(x, y, z) && 随机算法.boolean(几率))
	{
		生成矿块_mine(x, y, z, id, min, max);
	}

}
function 对应宝石(blockid) {
	switch (blockid)
	{
		case 21 : return {id : 351, data : 4};break;
		case 56 : return {id : 264, data : 0};break;
		case 16 : return {id : 263, data : 0};break;
		case 73 : return {id : 331, data : 0};break;
		case 74 : return {id : 331, data : 0};break;
		case 129 : return {id : 388, data : 0};break;
		case 153 : return {id : 406, data : 0};break;
		case 1 : return {id : 4, data : 0};break;
	}
}

function switch_onstart_destory_block(args, id) {
	var temp = "";
	for(var i in args)
	{
		temp += id + "==" + args[i] + "||";
	}
  	return(eval(temp.replace(/\|\|$/, "")));
}

function center_square(x, y, z, side_width, id, data) {
	var sw = Math.floor(side_width / 2);
	for (var t = -sw; t <= sw; t++)
	{
		for (var i = -sw; i <= sw; i++)
		{
			setTile(x + t, y, z + i, id, data);
		}
	}
}
function center_square_filter(x, y, z, side_width, id, data, filter_ids, filter_datas) {
	var sw = Math.floor(side_width / 2);
	var temp = "";
	for(var i in filter_ids)
	{
		temp += "(getTile(x + t, y, z + i) == " + filter_ids[i] + " && Level.getData(x + t, y, z + i) == " + filter_datas[i] + ")||";
	}

	for (var t = -sw; t <= sw; t++)
	{
		for (var i = -sw; i <= sw; i++)
		{
			if (eval(temp.replace(/\|\|$/, "")))
				setTile(x + t, y, z + i, id, data);
		}
	}
}

function quite_cut_tree_simply(x, y, z) {
	if (getTile(x, y, z) == 17 || getTile(x, y, z) == 162)
	{
		Level.destroyBlock(x, y, z, true);
		quite_cut_tree_simply(x, y - 1, z);
		quite_cut_tree_simply(x, y + 1, z);
	}
}
function quite_cut_tree(x, y, z) {
	if (getTile(x, y, z) == 17 || getTile(x, y, z) == 162)
	{
		Level.destroyBlock(x, y, z, true);
		quite_cut_tree(x, y - 1, z);
		quite_cut_tree(x, y + 1, z);
		quite_cut_tree(x - 1, y, z);
		quite_cut_tree(x + 1, y, z);
		quite_cut_tree(x, y, z - 1);
		quite_cut_tree(x, y, z + 1);
	}
}

function which_entity(ents, ent) {
	var temp = "";
	for(var i in ents)
	{
		temp += "Entity.getEntityTypeId(" + ent + ")==" + ents[i] + "||";
	}
    return(eval(temp.replace(/\|\|$/, "")));
}
/*
function dumpSthShouldDump(entity) {
	var ex = Entity.getX(entity), ey = Entity.getY(entity), ez = Entity.getZ(entity);
	var re_sth_id = Entity.getItemEntityId(entity);
	var re_sth_count = Entity.getItemEntityCount(entity);
	var re_sth_data = Entity.getItemEntityData(entity);
	Level.dropItem(ex, ey, ez, 1, re_sth_id, re_sth_count, re_sth_data);

	switch (Entity.getEntityTypeId(entity))
	{
		case EntityType.ZOMBIE : 
			if (随机算法.boolean(0.25))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.尸毒, 1, 0);
			else if (随机算法.boolean(0.3))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.僵尸遗物, 1, 0);
			else if (随机算法.boolean(0.001))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.钻石粒, 1, 0);
			else if (随机算法.boolean(0.02))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.僵尸皮, 1, 0);
			break;
		case EntityType.ZOMBIE_VILLAGER :
			if (随机算法.boolean(0.25))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.尸毒, 1, 0);
			else if (随机算法.boolean(0.3))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.僵尸遗物, 1, 0);
			else if (随机算法.boolean(0.001))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.钻石粒, 1, 0);
			else if (随机算法.boolean(0.02))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.僵尸皮, 1, 0);
			break;
		case EntityType.PIG_ZOMBIE :
			if (随机算法.boolean(0.25))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.尸毒, 1, 0);
			else if (随机算法.boolean(0.3))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.僵尸遗物, 1, 0);
			else if (随机算法.boolean(0.001))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.钻石粒, 1, 0);
			else if (随机算法.boolean(0.02))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.僵尸皮, 1, 0);
			break;
		case 45:
			if (随机算法.boolean(0.15))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.女巫遗物, 1, 0);
			else if (随机算法.boolean(0.002))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.钻石粒, 1, 0);
			else if (随机算法.boolean(0.05))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.女巫的魔法书, 1, 0);
			else if (随机算法.boolean(0.01))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.女巫的喉咙, 1, 0);
			else if (随机算法.boolean(0.04))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.伸腿瞪眼丸, 1, 0);
			else if (随机算法.boolean(0.1))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.火焰之星, 1, 0);
			else if (随机算法.boolean(0.03))
				Level.dropItem(ex , ey, ez, 1, IDs.Item.紫晶粒, 1, 0);
			break;
		case EntityType.SKELETON :
			if (随机算法.boolean(0.001))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.钻石粒, 1, 0);
			else if (随机算法.boolean(0.25))
				Level.dropItem(ex, ey, ez, 1, IDs.Item.骷髅遗物, 1, 0);
			break;
//		case EntityType: break;
	}
}
*/
//Item.addShapedRecipe(491, 1, 0, [" a ","aba"," c "], ["a",331,0,"b",301,0,"c",325,10]);
function 熔炉合成(id, ided) {try
	{
		Item.addFurnaceRecipe(id, ided, 0);
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeFor剑(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			Item.addShapedRecipe(array[i][0], 1, 0, [" a ", " a ", " b "], ["a", array[i][1], 0, "b", array[i][2] == null ? 280 : array[i][2], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeFor刀(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			//print("array[i][0]" + array[i][0] + "\n" + "array[i][1]" + array[i][1] + "\n" + "array[i][2]" + array[i][2]);
			Item.addShapedRecipe(array[i][0], 1, 0, ["   ", " a ", " b "], ["a", array[i][1], 0, "b", array[i][2] == null ? 280 : array[i][2], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeFor锄(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			Item.addShapedRecipe(array[i][0], 1, 0, ["aa ", " b ", " b "], ["a", array[i][1], 0, "b", array[i][2] == null ? 280 : array[i][2], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeFor镐(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			Item.addShapedRecipe(array[i][0], 1, 0, ["aaa", " b ", " b "], ["a", array[i][1], 0, "b", array[i][2] == null ? 280 : array[i][2], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeFor铲(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			Item.addShapedRecipe(array[i][0], 1, 0, [" a ", " b ", " b "], ["a", array[i][1], 0, "b", array[i][2] == null ? 280 : array[i][2], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeFor斧(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			Item.addShapedRecipe(array[i][0], 1, 0, ["aa ", "ab ", " b "], ["a", array[i][1], 0, "b", array[i][2] == null ? 280 : array[i][2], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeFor头盔(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			Item.addShapedRecipe(array[i][0], 1, 0, ["aaa", "a a", "   "], ["a", array[i][1], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeFor胸甲(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			Item.addShapedRecipe(array[i][0], 1, 0, ["a a", "aaa", "aaa"], ["a", array[i][1], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeFor护腿(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			Item.addShapedRecipe(array[i][0], 1, 0, ["aaa", "a a", "a a"], ["a", array[i][1], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeFor靴子(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			Item.addShapedRecipe(array[i][0], 1, 0, ["   ", "a a", "a a"], ["a", array[i][1], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}
function addShapedRecipeForGlass(array) {try
	{
		for (var i = 0; i < array.length; i++)
		{
			Item.addShapedRecipe(array[i][0], 1, 0, ["   ", " a ", " b "], ["b", array[i][1], 0, "a", array[i][2] == null ? 20 : array[i][2], 0]);
		}
	}catch(err){Run({run:function() {Alert(err + err.lineNumber);}});}}

var particles =
{
	circle : function(x, y, z, r, type) {
		for (var i = 0; i < 90; i ++)
		{
			var a = Math.sin(i * 4 * (Math.PI / 180)) * r;
			var b = Math.cos(i * 4 * (Math.PI / 180)) * r;
			Level.addParticle(type, x + a, y, z + b, 0, 0, 0, 1);
		}
	}
};

/****************************************************************************/
/*
get id from Id List
var entry="";
for(var u in IDs)
{
	for(var y in IDs[u])
	{
    	entry += y + "--->" + IDs[u][y] + "\n";
	}
}
Run({run:function() { Alert(entry);}});
*/

