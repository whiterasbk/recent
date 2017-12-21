var player_armor_0 = Player.getArmorSlot(0);				
var player_armor_1 = Player.getArmorSlot(1);
var player_armor_2 = Player.getArmorSlot(2);
var player_armor_3 = Player.getArmorSlot(3);

switch (Player.getArmorSlot(0))
{
	case IDs.ArmorItem.银头盔 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 10 , 2, false, false);
		break;
	case IDs.ArmorItem.铜头盔 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 10 , 2, false, false);
		break;
	case IDs.ArmorItem.黑金头盔 :
		Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 10 , 2, false, false);
		Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 10 , 2, false, false);
		Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 10 , 2, false, false);
		break;
	case IDs.ArmorItem.紫蓝晶头盔 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 10 , 2, false, false);
		Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 10 , 2, false, false);
		break;
}
switch (Player.getArmorSlot(1))
{
	case IDs.ArmorItem.银胸甲 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, 10 , 2, false, false);
		
		break;
	case IDs.ArmorItem.铜胸甲 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 10 , 2, false, false);
		
		break;
	case IDs.ArmorItem.黑金胸甲 :
		Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 10 , 2, false, false);
		Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 10 , 2, false, false);
		
		break;
	case IDs.ArmorItem.紫蓝晶胸甲 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, 10 , 2, false, false);
		Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 10 , 2, false, false);
		
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
		Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 10 , 2, false, false);
		
		break;
	case IDs.ArmorItem.铜靴 : 
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 10 , 2, false, false);
		
		break;
	case IDs.ArmorItem.黑金靴 :
		Entity.addEffect(getPlayerEnt(), MobEffect.jump, 10 , 2, false, false);
		
		break;
	case IDs.ArmorItem.紫蓝晶靴 :
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 10 , 2, false, false);
		
		break;
}


