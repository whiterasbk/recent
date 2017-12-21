var block_destroy_time = null;
		var block_explosion_resistance = null;
		var block_friction = null;
		var block_is_1_alpha = null;
		var block_light_level = null;
		var block_light_opacity = null;
		var block_model = null;
		var block_redstone_consumer = null;
		var block_re_id = null;
		
		
		for(var entry in (Blocks[i][2] == null ? BlockAdapter() : Blocks[i][2]))
		{
			print((Blocks[i][2] == null ? BlockAdapter() : Blocks[i][2])[entry]);
			switch (entry) 
			{
				case "destroyTime": 
					block_destroy_time = adapter[entry];
					break;
				case "explosionResistance": 
					block_explosion_resistance = adapter[entry];
					break;
				case "friction": 
					block_friction = adapter[entry];
					break;
				case "is1Alpha": 
					block_is_1_alpha = adapter[entry];
					break;
				case "lightLevel": 
					block_light_level = adapter[entry];
					break;
				case "lightOpacity": 
					block_light_opacity = adapter[entry];
					break;
				case "model": 
					block_model = adapter[entry];
					break;
				case "redstoneConsumer": 
					block_redstone_consumer = adapter[entry];
					break;
				case "reId": 
					block_re_id = adapter[entry];
					break;
			}
		}
		
		
		block_destroy_time = null;
		block_explosion_resistance = null;
		block_friction = null;
		block_is_1_alpha = null;
		block_light_level = null;
		block_light_opacity = null;
		block_model = null;
		block_redstone_consumer = null;
		block_re_id = null;
		
		
		
		
		var block_destroy_time = adapter_map.get("destroyTime");
		var block_explosion_resistance = adapter_map.get("explosionResistance");
		var block_friction = adapter_map.get("friction");
		var block_light_level = adapter_map.get("lightLevel");
		var block_light_opacity = adapter_map.get("lightOpacity");
		var block_redstone_consumer = adapter_map.get("redstoneConsumer");
		var block_is_1_alpha = adapter_map.get("is1Alpha");
		var block_model = adapter_map.get("model");
		var block_re_id = adapter_map.get("reId");
		var block_shape = adapter_map.get("shape");
		var block_recipe = adapter_map.get("recipe");
		
		
		
		
		
		var iou = function() {
	this.destroyTime = null; /*初始化破坏方块的时间*/	
	this.explosionResistance = null; /*初始化方块的抗爆能力*/	
	this.friction = null; /*初始化方块的摩擦力*/	
	this.lightLevel = null; /*初始化方块的亮度*/
	this.lightOpacity = null; /*初始化方块的不透明度*/
	this.redstoneConsumer = null; /*初始化方块是否接受红石*/
	this.is1Alpha = false; /*初始化方块是否透明*/
	this.model = 0; /*初始化方块模型*/
	this.reId = 1; /*初始化方块原ID*/
	return this;
};
		/*glass
 紫红玻璃片
 天蓝玻璃片
 灰蓝玻璃片
 粉玻璃片
 橙玻璃片
 白玻璃片
 棕玻璃片
 紫玻璃片
 银玻璃片
 青玻璃片
 绿玻璃片
 蓝玻璃片
 灰玻璃片
 红玻璃片
 黄玻璃片
 黑玻璃片

 紫红玻璃
 天蓝玻璃
 灰蓝玻璃
 粉玻璃
 橙玻璃
 白玻璃
 棕玻璃
 紫玻璃
 银玻璃
 青玻璃
 绿玻璃
 蓝玻璃
 灰玻璃
 红玻璃
 黄玻璃
 黑玻璃
 */

