var mark = 1;
function power(X, Y, Z, XBoolean, YBoolean, ZBoolean) {
	var Top = 		getTile(X, Y + 1, Z);
	var Bottom = 	getTile(X, Y - 1, Z);
	var Left =   	getTile(X - 1, Y, Z);
	var Right = 	getTile(X + 1, Y, Z);
	var Front = 	getTile(X, Y, Z - 1);
	var Behind = 	getTile(X, Y, Z + 1);
	if(Top == mark && YBoolean == false)
	{
		power(X, Y + 1, Z, true, false, true);
	}
	if(Bottom == mark && YBoolean)
	{
		power(X, Y - 1, Z, true, false, true);
	}
}
