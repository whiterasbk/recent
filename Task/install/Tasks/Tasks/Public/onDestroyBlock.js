var X = X, Y = Y, Z = Z;//TEMP
var DestroyingBlockId = getTile(X, Y, Z);

if (game_mode == 0)
{
	if (DestroyingBlockId >= IDs.Block.紫红玻璃 && DestroyingBlockId <= IDs.Block.黑玻璃)
	{
		preventDefault();
		Level.destroyBlock(X, Y, Z, false);
		Level.playSound(X, Y, Z, "random.explode", 50, 250); 
	}
	else if (DestroyingBlockId >= IDs.Block.紫蓝晶体矿 && DestroyingBlockId <= IDs.Block. 铀矿)
	{
		var pickaxes = {紫蓝晶镐 : false, 黑金镐 : false, 银镐 : false, 铜镐 : false, 钻石镐 : false, 铁镐 : false, 金镐 : false, 石镐 : false};
		switch (getCarriedItem())
		{
			case IDs.Item.紫蓝晶镐 ://紫蓝晶镐
				pickaxes.紫蓝晶镐 = true;
				break;
			case IDs.Item.黑金镐 ://黑金镐
				pickaxes.黑金镐 = true;
				break;
			case IDs.Item.银镐 ://银镐
				pickaxes.银镐 = true;
				break;
			case IDs.Item.铜镐://铜镐
				pickaxes.铜镐 = true;
				break;
			case 257://铁镐
				pickaxes.铁镐 = true;
				break;
			case 274 ://钻石镐
				pickaxes.钻石镐 = true;
				break;
			case 278 ://石镐
				pickaxes.石镐 = true;
				break;
			case 285 ://金镐
				pickaxes.金镐 = true;
				break;
		}
		switch (DestroyingBlockId)
		{
			case IDs.Block.黄宝石矿://黄宝石矿
				if (pickaxes.黑金镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.黄宝石, 随机算法.范围(5, 10), 0);
				else if (pickaxes.紫蓝晶镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.黄宝石, 随机算法.范围(3, 9), 0);
				else if (pickaxes.钻石镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.黄宝石, 随机算法.范围(4, 7), 0);
				else if (pickaxes.金镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.黄宝石, 随机算法.范围(3, 6), 0);
				else if (pickaxes.银镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.黄宝石, 随机算法.范围(2, 5), 0);
				else if (pickaxes.铜镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.黄宝石, 随机算法.范围(2, 4), 0);
				else if (pickaxes.石镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.黄宝石, 随机算法.范围(0, 2), 0);
				break;
			case IDs.Block.蓝宝石矿://蓝宝石矿
				if (pickaxes.黑金镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.蓝宝石, 随机算法.范围(5, 10), 0);
				else if (pickaxes.紫蓝晶镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.蓝宝石, 随机算法.范围(3, 9), 0);
				else if (pickaxes.钻石镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.蓝宝石, 随机算法.范围(4, 7), 0);
				else if (pickaxes.金镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.蓝宝石, 随机算法.范围(3, 6), 0);
				else if (pickaxes.银镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.蓝宝石, 随机算法.范围(2, 5), 0);
				else if (pickaxes.铜镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.蓝宝石, 随机算法.范围(2, 4), 0);
				else if (pickaxes.石镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.蓝宝石, 随机算法.范围(0, 2), 0);
				break;
			case IDs.Block.红宝石矿://红宝石矿
				if (pickaxes.黑金镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.红宝石, 随机算法.范围(5, 10), 0);
				else if (pickaxes.紫蓝晶镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.红宝石, 随机算法.范围(3, 9), 0);
				else if (pickaxes.钻石镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.红宝石, 随机算法.范围(4, 7), 0);
				else if (pickaxes.金镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.红宝石, 随机算法.范围(3, 6), 0);
				else if (pickaxes.银镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.红宝石, 随机算法.范围(2, 5), 0);
				else if (pickaxes.铜镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.红宝石, 随机算法.范围(2, 4), 0);
				else if (pickaxes.石镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.红宝石, 随机算法.范围(0, 2), 0);
				break;
			case IDs.Block.金刚石矿://金刚石矿
				if (pickaxes.黑金镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.金刚石, 随机算法.范围(5, 10), 0);
				else if (pickaxes.紫蓝晶镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.金刚石, 随机算法.范围(3, 9), 0);
				else if (pickaxes.钻石镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.金刚石, 随机算法.范围(4, 7), 0);
				else if (pickaxes.金镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.金刚石, 随机算法.范围(3, 6), 0);
				else if (pickaxes.银镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.金刚石, 随机算法.范围(2, 5), 0);
				else if (pickaxes.铜镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.金刚石, 随机算法.范围(2, 4), 0);
				else if (pickaxes.石镐)
					Level.dropItem(X, Y, Z, 1, IDs.Item.金刚石, 随机算法.范围(0, 2), 0);
				break;
			default :
				if (pickaxes.石镐 || pickaxes.金镐 || pickaxes.钻石镐 || pickaxes.铁镐 || pickaxes.铜镐 | pickaxes.银镐)
					Level.destroyBlock(X, Y, Z, true);
				else if (pickaxes.黑金镐)
				{
					if (随机算法.boolean(0.3))
					{
						Level.dropItem(X, Y, Z, 1, DestroyingBlockId, 1, 0);
					}
					Level.destroyBlock(X, Y, Z, true);
				}
				else if (pickaxes.紫蓝晶镐)
				{
					if (随机算法.boolean(0.1))
					{
						Level.dropItem(X, Y, Z, 1, DestroyingBlockId, 1, 0);
					}
					Level.destroyBlock(X, Y, Z, true);
				}
				break;
		}
		pickaxes = null;
	}
	else if(1)
	{
		
	}
}

