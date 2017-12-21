var DestroyingBlockId = getTile(X, Y, Z);
if (game_mode == 0)
{
	if (DestroyingBlockId == 14 || DestroyingBlockId == 15 || DestroyingBlockId == 73 || DestroyingBlockId == 74)
	{
		var pi = getCarriedItem();
		switch (pi)
		{
			case IDs.Item.紫蓝晶镐 ://紫蓝晶镐
				Level.destroyBlock(X, Y, Z, true);
				if (随机算法.boolean(0.1))
					Level.dropItem(X, Y, Z, 1, DestroyingBlockId, 1, 0);
				break;
			case IDs.Item.黑金镐 ://黑金镐
				Level.destroyBlock(X, Y, Z, true);
				if (随机算法.boolean(0.3))
					Level.dropItem(X, Y, Z, 1, DestroyingBlockId, 1, 0);
				break;
			case IDs.Item.银镐 ://银镐
				Level.destroyBlock(X, Y, Z, true);
				break;
			case IDs.Item.铜镐://铜镐
				Level.destroyBlock(X, Y, Z, true);
				break;
			case 257://铁镐
				Level.destroyBlock(X, Y, Z, true);
				break;
			case 274 ://钻石镐
				Level.destroyBlock(X, Y, Z, true);
				break;
			case 278 ://石镐
				if (随机算法.boolean())
					Level.destroyBlock(X, Y, Z, true);
				break;
			case 285 ://金镐
				Level.destroyBlock(X, Y, Z, true);
				break;
		}
	}
	else if (DestroyingBlockId == 21 || DestroyingBlockId == 56 || DestroyingBlockId == 16 || DestroyingBlockId == 89 || DestroyingBlockId == 129 || DestroyingBlockId == 153 || DestroyingBlockId == 1)
	{
		var pi = getCarriedItem();
		switch (pi)
		{
			case IDs.Item.紫蓝晶镐 ://紫蓝晶镐
				Level.destroyBlock(X, Y, Z, false);
				Level.dropItem(X, Y, Z, 1, 对应宝石(DestroyingBlockId).id, 随机算法.范围(3, 5), 对应宝石(DestroyingBlockId).data);
				break;
			case IDs.Item.黑金镐 ://黑金镐
				Level.destroyBlock(X, Y, Z, false);
				Level.dropItem(X, Y, Z, 1, 对应宝石(DestroyingBlockId).id, 随机算法.范围(2, 4), 对应宝石(DestroyingBlockId).data);
				break;
			case IDs.Item.银镐 ://银镐
				Level.destroyBlock(X, Y, Z, false);
				Level.dropItem(X, Y, Z, 1, 对应宝石(DestroyingBlockId).id, 随机算法.范围(1, 3), 对应宝石(DestroyingBlockId).data);
				break;
			case IDs.Item.铜镐://铜镐
				Level.destroyBlock(X, Y, Z, false);
				Level.dropItem(X, Y, Z, 1, 对应宝石(DestroyingBlockId).id, 随机算法.范围(0, 2), 对应宝石(DestroyingBlockId).data);
				break;
		}
	}
	else if (switch_onstart_destory_block([4, 22, 24, 41, 42, 43, 44, 45, 48, 49, 52, 57, 61, 62, 67, 71, 90, 98, 108, 109, 112, 113, 114, 116, 117, 118, 120, 121, 133, 139, 145, 154, 155, 156, 159, 179, 180, 181, 182, 246], DestroyingBlockId))
	{
		var pi = getCarriedItem();
		switch (pi)
		{
			case IDs.Item.紫蓝晶镐 ://紫蓝晶镐
				if (随机算法.boolean(0.3))
					Level.destroyBlock(X, Y, Z, true);
				else
					Level.destroyBlock(X, Y, Z, false);
				break;
			case IDs.Item.黑金镐 ://黑金镐
				if (随机算法.boolean(0.2))
					Level.destroyBlock(X, Y, Z, true);
				else
					Level.destroyBlock(X, Y, Z, false);
				break;
			case IDs.Item.银镐 ://银镐
				if (随机算法.boolean())
					Level.destroyBlock(X, Y, Z, true);
				else
					Level.destroyBlock(X, Y, Z, false);
				break;
			case IDs.Item.铜镐://铜镐
				if (随机算法.boolean(0.8))
					Level.destroyBlock(X, Y, Z, true);
				else
					Level.destroyBlock(X, Y, Z, false);
				break;
		}
	}
	else if(switch_onstart_destory_block([5, 17, 47, 53, 157, 158, 162, 163, 164, 183, 184, 185, 186, 187, 193, 194, 195, 196, 197], DestroyingBlockId))
	{
		var pi = getCarriedItem();
		switch(pi)
		{
			case IDs.Item.紫蓝晶斧 :
//				Level.destroyBlock(X, Y, Z, true);
//				if(随机算法.boolean(0.1))
//					Level.dropItem(X, Y, Z, 1, DestroyingBlockId, 1, 0);
				quite_cut_tree_simply(X, Y, Z);
				break;
			case IDs.Item.黑金斧 : 
//				Level.destroyBlock(X, Y, Z, true);
//				if(随机算法.boolean(0.2))
//					Level.dropItem(X, Y, Z, 1, DestroyingBlockId, 1, 0);
				quite_cut_tree(X, Y, Z);
				break;
			case IDs.Item.银斧 : 
				Level.destroyBlock(X, Y, Z, true);
				break;
			case IDs.Item.铜斧 : 
				Level.destroyBlock(X, Y, Z, true);
				break;
		}
	}
	else if(switch_onstart_destory_block([2, 3, 12, 13, 60, 88], DestroyingBlockId))
	{
		var pi = getCarriedItem();
		switch(pi)
		{
			case IDs.Item.紫蓝晶铲 :
				Level.destroyBlock(X, Y, Z, true);
				break;
			case IDs.Item.黑金铲 :
				Level.destroyBlock(X, Y, Z, true);
				break;
			case IDs.Item.银铲 : 
				Level.destroyBlock(X, Y, Z, true);
				break;
			case IDs.Item.铜铲 : 
				Level.destroyBlock(X, Y, Z, true);
				break;
		}
	}
}

