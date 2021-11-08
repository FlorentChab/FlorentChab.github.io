var numeric = [
	["11/11/21","OUI","NON","OUI","?","?","?"],
	["18/11/2021","OUI","OUI","NON","?","?","?"],
	["25/11/2021","OUI","NON","OUI","?","?","?"],
	["02/12/2021","OUI","OUI","NON","?","?","?"],
	["09/12/2021","OUI","NON","OUI","?","?","?"],
	["16/12/2021","OUI","OUI","NON","?","?","?"],
	["23/12/2021","OUI","NON","OUI","?","?","?"],
	["30/12/2021","OUI","OUI","NON","?","?","?"],
	["06/01/2022","OUI","NON","OUI","?","?","?"],
	["13/01/2022","OUI","OUI","NON","?","?","?"],
	["20/01/2022","OUI","NON","OUI","?","?","?"],
	["27/01/2022","OUI","OUI","NON","?","?","?"],
	["03/02/2022","OUI","NON","OUI","?","?","?"],
	["10/02/2022","OUI","OUI","NON","?","?","?"],
	["17/02/2022","OUI","NON","OUI","?","?","?"],
	["24/02/2022","OUI","OUI","NON","?","?","?"],
	["03/03/2022","OUI","NON","OUI","?","?","?"],
	["10/03/2022","OUI","OUI","NON","?","?","?"],
	["17/03/2022","OUI","NON","OUI","?","?","?"],
	["24/03/2022","OUI","OUI","NON","?","?","?"],
	["31/03/2022","OUI","NON","OUI","?","?","?"],
	["07/04/2022","OUI","OUI","NON","?","?","?"],
	["14/04/2022","OUI","NON","OUI","?","?","?"],
	["21/04/2022","OUI","OUI","NON","?","?","?"],
	["28/04/2022","OUI","NON","OUI","?","?","?"],
	["05/05/2022","OUI","OUI","NON","?","?","?"],
	["12/05/2022","OUI","NON","OUI","?","?","?"],
	["19/05/2022","OUI","OUI","NON","?","?","?"],
	["26/05/2022","OUI","NON","OUI","?","?","?"],
	["02/06/2022","OUI","OUI","NON","?","?","?"]
];

var i = 0;
var today = new Date();
var vDate = new Date();

for (i; i < numeric.length; i++) {
	
	vDate = new Date(numeric[i][0]);
	
	if (vDate > today){
		document.getElementById('kdate').innerHTML = "Jeudi :" + numeric[i][0];
		document.getElementById('kpain').innerHTML = numeric[i][2];
		document.getElementById('koeuf').innerHTML = numeric[i][3];
		document.getElementById('kfromage').innerHTML = numeric[i][4];
		document.getElementById('ktruite').innerHTML = numeric[i][5];
		document.getElementById('kvolaille').innerHTML = numeric[i][6]
		i = numeric.length;
	}
}
