if (game_mode == 0)
{
	if (BlockId == 2 || BlockId == 3)
	{
		switch (ItemId)
		{
			case IDs.Item.黑金锄 : 
				center_square_filter(X, Y, Z, 5, 60, 0, [2, 3], [0, 0]);
				break;
			case IDs.Item.紫蓝晶锄 :
				center_square_filter(X, Y, Z, 3, 60, 0, [2, 3], [0, 0]);
				break;
			case IDs.Item.银锄 : 
				setTile(X, Y, Z, 60, 0);
				break;
			case IDs.Item.铜锄 : 
				setTile(X, Y, Z, 60, 0);
				break;
		}
	}
}
if(getCarriedItem() == IDs.Item.金币)
{
	clientMessage("§aMessage:§bBlockid -- >" + BlockId + "§cBlockDamage -- >" + BlockDamage);
}
