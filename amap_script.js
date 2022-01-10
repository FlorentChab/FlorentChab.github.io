var numeric = [
	["11/11/21","OUI","NON","OUI","?","?","?"],
	["18/11/2021","OUI","OUI","NON","?","?","?"],
	["25/11/2021","OUI","NON","OUI","?","?","?"],
	["02/12/2021","OUI","OUI","NON","?","?","?"],
	["09/12/2021","OUI","NON","OUI","?","?","?"],
	["16/12/2021","OUI","OUI","NON","?","?","?"],
	["23/12/2021","OUI","NON","OUI","?","?","?"],
	["30/12/2021","OUI","OUI","NON","?","?","?"],
	["06/01/2022","OUI","non","OUI","OUI","?","?"],
	["13/01/2022","OUI","OUI","non","non","?","?"],
	["20/01/2022","OUI","non","OUI","OUI","?","?"],
	["27/01/2022","OUI","OUI","non","non","?","?"],
	["03/02/2022","OUI","NON","OUI","OUI","?","?"],
	["10/02/2022","OUI","OUI","non","non","?","?"],
	["17/02/2022","OUI","NON","OUI","OUI","?","?"],
	["24/02/2022","OUI","OUI","non","non","?","?"],
	["03/03/2022","OUI","NON","OUI","OUI","?","?"],
	["10/03/2022","OUI","OUI","non","non","?","?"],
	["17/03/2022","OUI","NON","OUI","OUI","?","?"],
	["24/03/2022","OUI","OUI","non","non","?","?"],
	["31/03/2022","OUI","NON","OUI","OUI","?","?"],
	["07/04/2022","OUI","OUI","non","non","?","?"],
	["14/04/2022","OUI","NON","OUI","OUI","?","?"],
	["21/04/2022","OUI","OUI","non","non","?","?"],
	["28/04/2022","OUI","NON","OUI","OUI","?","?"],
	["05/05/2022","OUI","OUI","non","non","?","?"],
	["12/05/2022","OUI","NON","OUI","OUI","?","?"],
	["19/05/2022","OUI","OUI","non","non","?","?"],
	["26/05/2022","OUI","NON","OUI","OUI","?","?"],
	["02/06/2022","OUI","OUI","non","non","?","?"]
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
