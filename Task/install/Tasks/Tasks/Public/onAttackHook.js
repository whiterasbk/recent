//var Play = Play,Ent = Ent;
var X = Entity.getX(Ent), Y = Entity.getY(Ent),  Z = Entity.getZ(Ent);
if (game_mode == 0 || true)
{
	var player_item = getCarriedItem();
	switch (player_item)
	{
			//紫蓝晶剑
		case IDs.Item.紫蓝晶剑 : 
			Entity.setHealth(Ent, Entity.getHealth(Ent) - 9);
			particles.circle(X, Y, Z, 1, ParticleType.cloud);
			
			break;
			//紫晶剑
		case IDs.Item.紫晶剑 : 
			Entity.setHealth(Ent, Entity.getHealth(Ent) - 9);
			particles.circle(X, Y, Z, 1, ParticleType.lava);
			break;
			//纳米剑
		case IDs.Item.纳米剑 : 
			Entity.setHealth(Ent, Entity.getHealth(Ent) + 5);
			particles.circle(X, Y, Z, 1, ParticleType.dripWater);
			
			break;
			//黑金剑
		case IDs.Item.黑金剑 :
			if (which_entity([32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45], Ent))
			{
				Entity.setHealth(Ent, Entity.getHealth(Ent) - 8);
				if (Entity.getHealth(Play) < 20)
				{
					Entity.setHealth(Play, Entity.getHealth(Play) + 8);
				}
				if (Player.getHunger() < 20)
				{
					Player.setHunger(Player.getHunger() + 1);
				}
				
				particles.circle(X, Y, Z, 1, ParticleType.flame);
			}
			break;
			//虹剑
		case IDs.Item.虹剑 : 
			Entity.setHealth(Ent, Entity.getHealth(Ent) - 15);
			particles.circle(X, Y, Z, 1, ParticleType.smoke);
			break;
			//铜剑
		case IDs.Item.铜剑 : 
			Entity.setHealth(Ent, Entity.getHealth(Ent) - 4);
			particles.circle(X, Y, Z, 1, ParticleType.dripLava);
			break;
			//银剑
		case IDs.Item.银剑 : 
			Entity.setPosition(Ent, Entity.getX(Ent), Entity.getY(Ent) + 50, Entity.getZ(Ent));
			particles.circle(X, Y, Z, 1, ParticleType.cloud);
			break;
			//钻石小刀
		case IDs.Item.钻石小刀 : 
			Entity.addEffect(Ent, MobEffect.wither, 3 * 60 * 20, 2, false, false);
			Entity.setHealth(Ent, Entity.getHealth(Ent) - 8);
			break;
			//黑金古刀
		case IDs.Item.黑金古刀 : 
			Entity.addEffect(Ent, MobEffect.poison, 3 * 60 * 20, 2, false, false);
			Entity.setHealth(Ent, Entity.getHealth(Ent) - 19);
			break;
			//紫蓝晶刀
		case IDs.Item.紫蓝晶刀 : 
			Entity.addEffect(Ent, MobEffect.poison, 3 * 60 * 20, 2, false, false);
			Entity.setHealth(Ent, Entity.getHealth(Ent) - 12);
			break;
			//小银刀
		case IDs.Item.小银刀 : 
			Entity.addEffect(Ent, MobEffect.weakness, 3 * 60 * 20, 2, false, false);
			Entity.setHealth(Ent, Entity.getHealth(Ent) - 6);
			break;
			//虹刀
		case IDs.Item.虹刀 : 
			Entity.addEffect(Ent, MobEffect.poison, 3 * 60 * 20, 2, false, false);
			Entity.addEffect(Ent, MobEffect.wither, 3 * 60 * 20, 2, false, false);
			Entity.setHealth(Ent, Entity.getHealth(Ent) - 20);
			break;
			//阳尺
		case IDs.Item.阳尺: 
			if (which_entity([32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45], Ent))
			{
				particles.circle(X, Y, Z, 1, ParticleType.portal);
				for (var i = 0; i < 25; i++)
					Level.addParticle(ParticleType.flame ,X, Y + i, Z, 0, 0, 0, 1);
				Entity.setPosition(Ent, X, Y + 2, Z);
				dumpSthShouldDump(Ent);
				Entity.remove(Ent);
			}
			break;
			//阴尺
		case IDs.Item.阴尺 : 
			if (!which_entity([32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45], Ent))
			{
				particles.circle(X, Y, Z, 1, ParticleType.flame);
				for (var i = 0; i < 25; i++)
					Level.addParticle(ParticleType.portal ,X, Y + i, Z, 0, 0, 0, 1);
				Entity.setPosition(Ent, X, Y + 2, Z);
				dumpSthShouldDump(Ent);
				Entity.remove(Ent);
			}
			break;
	}
}
if(getCarriedItem() == IDs.Item.金币)
{
	clientMessage("§aEntityTypeId-->§b" + Entity.getEntityTypeId(Ent));
}
/*
Entity.getItemEntityCount(par1Object);
获取掉落物的数量
参数一:Object类型 掉落物实体
返回值：int类型 数量

Entity.getItemEntityData(par1Object);
获取掉落物的特殊值
参数一：Object类型 掉落物实体
返回值：int类型 特殊值

Entity.getItemEntityId(par1Object);
获取掉落物的ID
参数一：Object类型 掉落物实体
返回值：int类型 ID
*/
