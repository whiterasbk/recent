var player_item = Player.getCarriedItem();

if (player_item == IDs.Item.阴尺)
{
	for(var i = 0; i < 35; i ++)
	{
		if (Player.getInventorySlot(i) == IDs.Item.阳尺)
			Player.clearInventorySlot(i);
	}
}
else if (player_item == IDs.Item.阳尺)
{
	for(var i = 0; i < 35; i ++)
	{
		if (Player.getInventorySlot(i) == IDs.Item.阴尺)
			Player.clearInventorySlot(i);
	}
}

switch (Player.getArmorSlot(0))
{
	case IDs.ArmorItem.银头盔 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 22 * 2 , 2, false, false);
		break;
	case IDs.ArmorItem.铜头盔 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 22 * 2 , 2, false, false);
		break;
	case IDs.ArmorItem.黑金头盔 :
		Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 22 * 2 , 2, false, false);
		Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 22 * 2 , 2, false, false);
		Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 22 * 2, 2, false, false);
		break;
	case IDs.ArmorItem.紫蓝晶头盔 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 22 * 2 , 2, false, false);
		Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 22 * 2 , 2, false, false);
		break;
}
switch (Player.getArmorSlot(1))
{
	case IDs.ArmorItem.银胸甲 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, 22 * 2, 2, false, false);
		
		break;
	case IDs.ArmorItem.铜胸甲 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 22 * 2 , 2, false, false);
		
		break;
	case IDs.ArmorItem.黑金胸甲 :
		Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 22 * 2, 2, false, false);
		Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 22 * 2, 2, false, false);
		
		break;
	case IDs.ArmorItem.紫蓝晶胸甲 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, 22 * 2, 2, false, false);
		Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 22 * 2, 2, false, false);
		
		break;
}
switch (Player.getArmorSlot(2))
{
	case IDs.ArmorItem.银护腿 : break;
	case IDs.ArmorItem.铜护腿 : break;
	case IDs.ArmorItem.黑金护腿 : break;
	case IDs.ArmorItem.紫蓝晶护腿 : break;
}
switch (Player.getArmorSlot(3))
{
	case IDs.ArmorItem.银靴 :
		Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 22 * 2, 2, false, false);
		
		break;
	case IDs.ArmorItem.铜靴 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 22 * 2, 2, false, false);
		
		break;
	case IDs.ArmorItem.黑金靴 :
		Entity.addEffect(getPlayerEnt(), MobEffect.jump, 22 * 2, 2, false, false);
		
		break;
	case IDs.ArmorItem.紫蓝晶靴 :
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 22 * 2 , 2, false, false);
		
		break;
}

