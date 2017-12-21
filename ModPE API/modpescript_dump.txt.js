/*
 *verson : 1.0
 *for mcpe : 0.14.x
 */
//no class
function addItemInventory(par1int, par2int, par3int) {/*native code*/}
function bl_setMobSkin(par1Object, par2String) {/*native code*/}
function bl_spawnMob(par1double, par2double, par3double, par4int, par5String) {/*native code*/}
function clientMessage(par1String) {/*native code*/}
function explode(par1double, par2double, par3double, par4double, par5boolean) {/*native code*/}
function getCarriedItem() {/*native code*/}
function getLevel() {/*native code*/}
function getPitch(par1Object) {/*native code*/}
function getPlayerEnt() {/*native code*/}
function getPlayerX() {/*native code*/}
function getPlayerY() {/*native code*/}
function getPlayerZ() {/*native code*/}
function getTile(par1int, par2int, par3int) {/*native code*/}
function getYaw(par1Object) {/*native code*/}
function preventDefault() {/*native code*/}
function print(par1String) {/*native code*/}
function rideAnimal(par1Object, par2Object) {/*native code*/}
function setNightMode(par1boolean) {/*native code*/}
function setPosition(par1Object, par2double, par3double, par4double) {/*native code*/}
function setPositionRelative(par1Object, par2double, par3double, par4double) {/*native code*/}
function setRot(par1Object, par2double, par3double) {/*native code*/}
function setTile(par1int, par2int, par3int, par4int, par5int) {/*native code*/}
function setVelX(par1Object, par2double) {/*native code*/}
function setVelY(par1Object, par2double) {/*native code*/}
function setVelZ(par1Object, par2double) {/*native code*/}
function spawnChicken(par1double, par2double, par3double, par4String) {/*native code*/}
function spawnCow(par1double, par2double, par3double, par4String) {/*native code*/}
function spawnPigZombie(par1double, par2double, par3double, par4int, par5String) {/*native code*/}

//hooks
function attackHook(attacker, victim) {}
function chatHook(str) {}
function destroyBlock(x, y, z, side) {}
function projectileHitEntityHook(projectile, targetEntity) {}
function eatHook(hearts, saturationRatio) {}
function entityAddedHook(entity) {}
function entityRemovedHook(entity) {}
function explodeHook(entity, x, y, z, power, onFire) {}
function serverMessageReceiveHook(str) {}
function chatReceiveHook(str, sender) {}
function leaveGame() {}
function deathHook(attacker, victim) {}
function redstoneUpdateHook(x, y, z, newCurrent, someBooleanIDontKnow, blockId, blockData) {}
function selectLevelHook() {}
function newLevel() {}
function startDestroyBlock(x, y, z, side) {}
function projectileHitBlockHook(projectile, blockX, blockY, blockZ, side) {}
function modTick() {}
function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {}

//ModPE
var ModPE = {};
ModPE.dumpVtable = function(par1String, par2int) {/*native code*/};
ModPE.getBytesFromTexturePack = function(par1String) {/*native code*/};
ModPE.getI18n = function(par1String) {/*native code*/};
ModPE.getLanguage = function() {/*native code*/}
ModPE.getMinecraftVersion = function() {/*native code*/}
ModPE.langEdit = function(par1String, par2String) {/*native code*/}
ModPE.leaveGame = function() {/*native code*/}
ModPE.log = function(par1String) {/*native code*/}
ModPE.openInputStreamFromTexturePack = function(par1String) {/*native code*/}
ModPE.overrideTexture = function(par1String, par2String) {/*native code*/}
ModPE.readData = function(par1String) {/*native code*/}
ModPE.removeData = function(par1String) {/*native code*/}
ModPE.resetFov = function() {/*native code*/}
ModPE.resetImages = function() {/*native code*/}
ModPE.saveData = function(par1String, par2String) {/*native code*/}
ModPE.selectLevel = function(par1String) {/*native code*/}
ModPE.setCamera = function(par1Object) {/*native code*/}
ModPE.setFoodItem = function(par1int, par2String, par3int, par4int, par5String, par6int) {/*native code*/}
ModPE.setFov = function(par1double) {/*native code*/}
ModPE.setGameSpeed = function(par1double) {/*native code*/}
ModPE.setGuiBlocks = function(par1String) {/*native code*/}
ModPE.setItem = function(par1int, par2String, par3int, par4String, par5int) {/*native code*/}
ModPE.setItems = function(par1String) {/*native code*/}
ModPE.setTerrain = function(par1String) {/*native code*/}
ModPE.showTipMessage = function(par1String) {/*native code*/}
ModPE.takeScreenshot = function(par1String) {/*native code*/}

//Level
var Level = {};
Level.addParticle = function(par1int, par2double, par3double, par4double, par5double, par6double, par7double, par8int) {/*native code*/}
Level.biomeIdToName = function(par1int) {/*native code*/}
Level.canSeeSky = function(par1int, par2int, par3int) {/*native code*/}
Level.destroyBlock = function(par1int, par2int, par3int, par4boolean) {/*native code*/}
Level.dropItem = function(par1double, par2double, par3double, par4double, par5int, par6int, par7int) {/*native code*/}
Level.explode = function(par1double, par2double, par3double, par4double, par5boolean) {/*native code*/}
Level.getAddress = function() {/*native code*/}
Level.getBiome = function(par1int, par2int) {/*native code*/}
Level.getBiomeName = function(par1int, par2int) {/*native code*/}
Level.getBrightness = function(par1int, par2int, par3int) {/*native code*/}
Level.getChestSlot = function(par1int, par2int, par3int, par4int) {/*native code*/}
Level.getChestSlotCount = function(par1int, par2int, par3int, par4int) {/*native code*/}
Level.getChestSlotData = function(par1int, par2int, par3int, par4int) {/*native code*/}
Level.getData = function(par1int, par2int, par3int) {/*native code*/}
Level.getDifficulty = function() {/*native code*/}
Level.getFurnaceSlot = function(par1int, par2int, par3int, par4int) {/*native code*/}
Level.getFurnaceSlotCount = function(par1int, par2int, par3int, par4int) {/*native code*/}
Level.getFurnaceSlotData = function(par1int, par2int, par3int, par4int) {/*native code*/}
Level.getGameMode = function() {/*native code*/}
Level.getGrassColor = function(par1int, par2int) {/*native code*/}
Level.getLightningLevel = function() {/*native code*/}
Level.getRainLevel = function() {/*native code*/}
Level.getSignText = function(par1int, par2int, par3int, par4int) {/*native code*/}
Level.getSpawnerEntityType = function(par1int, par2int, par3int) {/*native code*/}
Level.getTile = function(par1int, par2int, par3int) {/*native code*/}
Level.getTime = function() {/*native code*/}
Level.getWorldDir = function() {/*native code*/}
Level.getWorldName = function() {/*native code*/}
Level.playSound = function(par1double, par2double, par3double, par4String, par5double, par6double) {/*native code*/}
Level.playSoundEnt = function(par1Object, par2String, par3double, par4double) {/*native code*/}
Level.setChestSlot = function(par1int, par2int, par3int, par4int, par5int, par6int, par7int) {/*native code*/}
Level.setDifficulty = function(par1int) {/*native code*/}
Level.setFurnaceSlot = function(par1int, par2int, par3int, par4int, par5int, par6int, par7int) {/*native code*/}
Level.setGameMode = function(par1int) {/*native code*/}
Level.setGrassColor = function(par1int, par2int, par3int) {/*native code*/}
Level.setLightningLevel = function(par1double) {/*native code*/}
Level.setNightMode = function(par1boolean) {/*native code*/}
Level.setRainLevel = function(par1double) {/*native code*/}
Level.setSignText = function(par1int, par2int, par3int, par4int, par5String) {/*native code*/}
Level.setSpawn = function(par1int, par2int, par3int) {/*native code*/}
Level.setSpawnerEntityType = function(par1int, par2int, par3int, par4int) {/*native code*/}
Level.setTile = function(par1int, par2int, par3int, par4int, par5int) {/*native code*/}
Level.setTime = function(par1int) {/*native code*/}
Level.spawnChicken = function(par1double, par2double, par3double, par4String) {/*native code*/}
Level.spawnCow = function(par1double, par2double, par3double, par4String) {/*native code*/}
Level.spawnMob = function(par1double, par2double, par3double, par4int, par5String) {/*native code*/}

//Player
var Player = {};
Player.addExp = function(par1int) {/*native code*/}
Player.addItemCreativeInv = function(par1int, par2int, par3int) {/*native code*/}
Player.addItemInventory = function(par1int, par2int, par3int) {/*native code*/}
Player.canFly = function() {/*native code*/}
Player.clearInventorySlot = function(par1int) {/*native code*/}
Player.enchant = function(par1int, par2int, par3int) {/*native code*/}
Player.getArmorSlot = function(par1int) {/*native code*/}
Player.getArmorSlotDamage = function(par1int) {/*native code*/}
Player.getCarriedItem = function() {/*native code*/}
Player.getCarriedItemCount = function() {/*native code*/}
Player.getCarriedItemData = function() {/*native code*/}
Player.getDimension = function() {/*native code*/}
Player.getEnchantments = function(par1int) {/*native code*/}
Player.getEntity = function() {/*native code*/}
Player.getExhaustion = function() {/*native code*/}
Player.getExp = function() {/*native code*/}
Player.getHunger = function() {/*native code*/}
Player.getInventorySlot = function(par1int) {/*native code*/}
Player.getInventorySlotCount = function(par1int) {/*native code*/}
Player.getInventorySlotData = function(par1int) {/*native code*/}
Player.getItemCustomName = function(par1int) {/*native code*/}
Player.getLevel = function() {/*native code*/}
Player.getName = function(par1Object) {/*native code*/}
Player.getPointedBlockData = function() {/*native code*/}
Player.getPointedBlockId = function() {/*native code*/}
Player.getPointedBlockSide = function() {/*native code*/}
Player.getPointedBlockX = function() {/*native code*/}
Player.getPointedBlockY = function() {/*native code*/}
Player.getPointedBlockZ = function() {/*native code*/}
Player.getPointedEntity = function() {/*native code*/}
Player.getPointedVecX = function() {/*native code*/}
Player.getPointedVecY = function() {/*native code*/}
Player.getPointedVecZ = function() {/*native code*/}
Player.getSaturation = function() {/*native code*/}
Player.getSelectedSlotId = function() {/*native code*/}
Player.getX = function() {/*native code*/}
Player.getY = function() {/*native code*/}
Player.getZ = function() {/*native code*/}
Player.isFlying = function() {/*native code*/}
Player.isPlayer = function(par1Object) {/*native code*/}
Player.setArmorSlot = function(par1int, par2int, par3int) {/*native code*/}
Player.setCanFly = function(par1boolean) {/*native code*/}
Player.setExhaustion = function(par1double) {/*native code*/}
Player.setExp = function(par1double) {/*native code*/}
Player.setFlying = function(par1boolean) {/*native code*/}
Player.setHealth = function(par1int) {/*native code*/}
Player.setHunger = function(par1double) {/*native code*/}
Player.setInventorySlot = function(par1int, par2int, par3int, par4int) {/*native code*/}
Player.setItemCustomName = function(par1int, par2String) {/*native code*/}
Player.setLevel = function(par1int) {/*native code*/}
Player.setSaturation = function(par1double) {/*native code*/}
Player.setSelectedSlotId = function(par1int) {/*native code*/}

//Entity
var Entity = {};
Entity.addEffect = function(par1Object, par2int, par3int, par4int, par5boolean, par6boolean) {/*native code*/}
Entity.getAll = function() {/*native code*/}
Entity.getAnimalAge = function(par1Object) {/*native code*/}
Entity.getArmor = function(par1Object, par2int) {/*native code*/}
Entity.getArmorDamage = function(par1Object, par2int) {/*native code*/}
Entity.getEntityTypeId = function(par1Object) {/*native code*/}
Entity.getExtraData = function(par1Object, par2String) {/*native code*/}
Entity.getHealth = function(par1Object) {/*native code*/}
Entity.getItemEntityCount = function(par1Object) {/*native code*/}
Entity.getItemEntityData = function(par1Object) {/*native code*/}
Entity.getItemEntityId = function(par1Object) {/*native code*/}
Entity.getMaxHealth = function(par1Object) {/*native code*/}
Entity.getMobSkin = function(par1Object) {/*native code*/}
Entity.getNameTag = function(par1Object) {/*native code*/}
Entity.getPitch = function(par1Object) {/*native code*/}
Entity.getRenderType = function(par1Object) {/*native code*/}
Entity.getRider = function(par1Object) {/*native code*/}
Entity.getRiding = function(par1Object) {/*native code*/}
Entity.getUniqueId = function(par1Object) {/*native code*/}
Entity.getVelX = function(par1Object) {/*native code*/}
Entity.getVelY = function(par1Object) {/*native code*/}
Entity.getVelZ = function(par1Object) {/*native code*/}
Entity.getX = function(par1Object) {/*native code*/}
Entity.getY = function(par1Object) {/*native code*/}
Entity.getYaw = function(par1Object) {/*native code*/}
Entity.getZ = function(par1Object) {/*native code*/}
Entity.isSneaking = function(par1Object) {/*native code*/}
Entity.remove = function(par1Object) {/*native code*/}
Entity.removeAllEffects = function(par1Object) {/*native code*/}
Entity.removeEffect = function(par1Object, par2int) {/*native code*/}
Entity.rideAnimal = function(par1Object, par2Object) {/*native code*/}
Entity.setAnimalAge = function(par1Object, par2int) {/*native code*/}
Entity.setArmor = function(par1Object, par2int, par3int, par4int) {/*native code*/}
Entity.setCape = function(par1Object, par2String) {/*native code*/}
Entity.setCarriedItem = function(par1Object, par2int, par3int, par4int) {/*native code*/}
Entity.setCollisionSize = function(par1Object, par2double, par3double) {/*native code*/}
Entity.setExtraData = function(par1Object, par2String, par3String) {/*native code*/}
Entity.setFireTicks = function(par1Object, par2int) {/*native code*/}
Entity.setHealth = function(par1Object, par2int) {/*native code*/}
Entity.setMaxHealth = function(par1Object, par2int) {/*native code*/}
Entity.setMobSkin = function(par1Object, par2String) {/*native code*/}
Entity.setNameTag = function(par1Object, par2String) {/*native code*/}
Entity.setPosition = function(par1Object, par2double, par3double, par4double) {/*native code*/}
Entity.setPositionRelative = function(par1Object, par2double, par3double, par4double) {/*native code*/}
Entity.setRenderType = function(par1Object, par2Object) {/*native code*/}
Entity.setRot = function(par1Object, par2double, par3double) {/*native code*/}
Entity.setSneaking = function(par1Object, par2boolean) {/*native code*/}
Entity.setVelX = function(par1Object, par2double) {/*native code*/}
Entity.setVelY = function(par1Object, par2double) {/*native code*/}
Entity.setVelZ = function(par1Object, par2double) {/*native code*/}
Entity.spawnMob = function(par1double, par2double, par3double, par4int, par5String) {/*native code*/}

//Item
var Item = {};
Item.addCraftRecipe = function(par1int, par2int, par3int, par4Scriptable) {/*native code*/}
Item.addFurnaceRecipe = function(par1int, par2int, par3int) {/*native code*/}
Item.addShapedRecipe = function(par1int, par2int, par3int, par4Scriptable, par5Scriptable) {/*native code*/}
Item.defineArmor = function(par1int, par2String, par3int, par4String, par5String, par6int, par7int, par8int) {/*native code*/}
Item.getName = function(par1int, par2int, par3boolean) {/*native code*/}
Item.getUseAnimation = function(par1int) {/*native code*/}
Item.isValidItem = function(par1int) {/*native code*/}
Item.setCategory = function(par1int, par2int) {/*native code*/}
Item.setEnchantType = function(par1int, par2int, par3int) {/*native code*/}
Item.setHandEquipped = function(par1int, par2boolean) {/*native code*/}
Item.setMaxDamage = function(par1int, par2int) {/*native code*/}
Item.setProperties = function(par1int, par2Object) {/*native code*/}
Item.setStackedByData = function(par1int, par2boolean) {/*native code*/}
Item.setUseAnimation = function(par1int, par2int) {/*native code*/}

//Block
var Block = {};
Block.defineBlock = function(par1int, par2String, par3Object, par4Object, par5Object, par6Object) {/*native code*/}
Block.defineLiquidBlock = function(par1int, par2String, par3Object, par4Object) {/*native code*/}
Block.getAllBlockIds = function() {/*native code*/}
Block.getDestroyTime = function(par1int, par2int) {/*native code*/}
Block.getFriction = function(par1int, par2int) {/*native code*/}
Block.getRenderType = function(par1int) {/*native code*/}
Block.setColor = function(par1int, par2Scriptable) {/*native code*/}
Block.setDestroyTime = function(par1int, par2double) {/*native code*/}
Block.setExplosionResistance = function(par1int, par2double) {/*native code*/}
Block.setFriction = function(par1int, par2double) {/*native code*/}
Block.setLightLevel = function(par1int, par2int) {/*native code*/}
Block.setLightOpacity = function(par1int, par2int) {/*native code*/}
Block.setRedstoneConsumer = function(par1int, par2boolean) {/*native code*/}
Block.setRenderLayer = function(par1int, par2int) {/*native code*/}
Block.setRenderType = function(par1int, par2int) {/*native code*/}
Block.setShape = function(par1int, par2double, par3double, par4double, par5double, par6double, par7double, par8int) {/*native code*/}

//Server
var Server = {};
Server.getAddress = function() {/*native code*/}
Server.getAllPlayerNames = function() {/*native code*/}
Server.getAllPlayers = function() {/*native code*/}
Server.getPort = function() {/*native code*/}
Server.joinServer = function(par1String, par2int) {/*native code*/}
Server.sendChat = function(par1String) {/*native code*/}

//properties
var ChatColor =
{
	AQUA : null,
	BEGIN : null,
	BLACK : null,
	BLUE : null,
	BOLD : null,
	DARK_AQUA : null,
	DARK_BLUE : null,
	DARK_GRAY : null,
	DARK_GREEN : null,
	DARK_PURPLE : null,
	DARK_RED : null,
	GOLD : null,
	GRAY : null,
	GREEN : null,
	LIGHT_PURPLE : null,
	RED : null,
	RESET : null,
	WHITE : null,
	YELLOW : null
};

var ItemCategory =
{
	DECORATION : null,
	FOOD : null,
	INTERNAL : null,
	MATERIAL : null,
	TOOL : null
};

var ParticleType =
{
	angryVillager : null,
	bubble : null,
	cloud : null,
	crit : null,
	dripLava : null,
	dripWater : null,
	enchantmenttable : null,
	fallingDust : null,
	flame : null,
	happyVillager : null,
	heart : null,
	hugeexplosion : null,
	hugeexplosionSeed : null,
	ink : null,
	itemBreak : null,
	largeexplode : null,
	lava : null,
	mobFlame : null,
	note : null,
	portal : null,
	rainSplash : null,
	redstone : null,
	slime : null,
	smoke : null,
	smoke2 : null,
	snowballpoof : null,
	spell : null,
	spell2 : null,
	spell3 : null,
	splash : null,
	suspendedTown : null,
	terrain : null,
	waterWake : null
};

var EntityType =
{
	ARROW : null,
	BAT : null,
	BLAZE : null,
	BOAT : null,
	CAVE_SPIDER : null,
	CHICKEN : null,
	COW : null,
	CREEPER : null,
	EGG : null,
	ENDERMAN : null,
	EXPERIENCE_ORB : null,
	EXPERIENCE_POTION : null,
	FALLING_BLOCK : null,
	FIREBALL : null,
	FISHING_HOOK : null,
	GHAST : null,
	IRON_GOLEM : null,
	ITEM : null,
	LAVA_SLIME : null,
	LIGHTNING_BOLT : null,
	MINECART : null,
	MUSHROOM_COW : null,
	OCELOT : null,
	PAINTING : null,
	PIG : null,
	PIG_ZOMBIE : null,
	PLAYER : null,
	PRIMED_TNT : null,
	RABBIT : null,
	SHEEP : null,
	SILVERFISH : null,
	SKELETON : null,
	SLIME : null,
	SMALL_FIREBALL : null,
	SNOWBALL : null,
	SNOW_GOLEM : null,
	SPIDER : null,
	SQUID : null,
	THROWN_POTION : null,
	VILLAGER : null,
	WOLF : null,
	ZOMBIE : null,
	ZOMBIE_VILLAGER : null
};
var EntityRenderType =
{
	arrow : null,
	bat : null,
	blaze : null,
	boat : null,
	camera : null,
	chicken : null,
	cow : null,
	creeper : null,
	egg : null,
	enderman : null,
	expPotion : null,
	experienceOrb : null,
	fallingTile : null,
	fireball : null,
	fishHook : null,
	ghast : null,
	human : null,
	ironGolem : null,
	item : null,
	lavaSlime : null,
	lightningBolt : null,
	map : null,
	minecart : null,
	mushroomCow : null,
	ocelot : null,
	painting : null,
	pig : null,
	player : null,
	rabbit : null,
	sheep : null,
	silverfish : null,
	skeleton : null,
	slime : null,
	smallFireball : null,
	snowGolem : null,
	snowball : null,
	spider : null,
	squid : null,
	thrownPotion : null,
	tnt : null,
	unknownItem : null,
	villager : null,
	villagerZombie : null,
	witch : null,
	wolf : null,
	zombie : null,
	zombiePigman : null
};

var ArmorType =
{
	boots : null,
	chestplate : null,
	helmet : null,
	leggings : null
};

var MobEffect =
{
	absorption : null,
	blindness : null,
	confusion : null,
	damageBoost : null,
	damageResistance : null,
	digSlowdown : null,
	digSpeed : null,
	effectIds : null,
	fireResistance : null,
	harm : null,
	heal : null,
	healthBoost : null,
	hunger : null,
	invisibility : null,
	jump : null,
	movementSlowdown : null,
	movementSpeed : null,
	nightVision : null,
	poison : null,
	regeneration : null,
	saturation : null,
	waterBreathing : null,
	weakness : null,
	wither : null
};

var DimensionId =
{
	NETHER : null,
	NORMAL : null
};
var BlockFace =
{
	DOWN : null,
	EAST : null,
	NORTH : null,
	SOUTH : null,
	UP : null,
	WEST : null
};

var UseAnimation =
{
	bow : null,
	normal : null
};

var Enchantment =
{
	AQUA_AFFINITY : null,
	BANE_OF_ARTHROPODS : null,
	BLAST_PROTECTION : null,
	DEPTH_STRIDER : null,
	EFFICIENCY : null,
	FEATHER_FALLING : null,
	FIRE_ASPECT : null,
	FIRE_PROTECTION : null,
	FLAME : null,
	FORTUNE : null,
	INFINITY : null,
	KNOCKBACK : null,
	LOOTING : null,
	LUCK_OF_THE_SEA : null,
	LURE : null,
	POWER : null,
	PROJECTILE_PROTECTION : null,
	PROTECTION : null,
	PUNCH : null,
	RESPIRATION : null,
	SHARPNESS : null,
	SILK_TOUCH : null,
	SMITE : null,
	THORNS : null,
	UNBREAKING : null
};

var EnchantType =
{
	all : null,
	axe : null,
	book : null,
	bow : null,
	fishingRod : null,
	flintAndSteel : null,
	hoe : null,
	pickaxe : null,
	shears : null,
	shovel : null,
	weapon : null
};

