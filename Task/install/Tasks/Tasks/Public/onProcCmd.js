var s = Cmd.split(" ");

switch (s[0])
{
	case "tp" :
		setPosition(getPlayerEnt(), Number(s[1]), Number(s[2]), Number(s[3]));
		print("tped");
		break;
	case "setGameMode" : 
		Level.setGameMode(Number(s[1]));
		break;
}

