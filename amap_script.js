var numeric = [
	["11/11/2021","OUI","NON","?","?","?","?"]
	["18/11/2021","OUI","OUI","?","?","?","?"]
	["25/11/2021","OUI","NON","?","?","?","?"]
	["02/12/2021","OUI","OUI","?","?","?","?"]
	["09/12/2021","OUI","NON","?","?","?","?"]
	["16/12/2021","OUI","OUI","?","?","?","?"]
	["23/12/2021","OUI","NON","?","?","?","?"]
	["30/12/2021","OUI","OUI","?","?","?","?"]
	["06/01/2022","OUI","NON","?","?","?","?"]
	["13/01/2022","OUI","OUI","?","?","?","?"]
	["20/01/2022","OUI","NON","?","?","?","?"]
	["27/01/2022","OUI","OUI","?","?","?","?"]
	["03/02/2022","OUI","NON","?","?","?","?"]
	["10/02/2022","OUI","OUI","?","?","?","?"]
	["17/02/2022","OUI","NON","?","?","?","?"]
	["24/02/2022","OUI","OUI","?","?","?","?"]
	["03/03/2022","OUI","NON","?","?","?","?"]
	["10/03/2022","OUI","OUI","?","?","?","?"]
	["17/03/2022","OUI","NON","?","?","?","?"]
	["24/03/2022","OUI","OUI","?","?","?","?"]
	["31/03/2022","OUI","NON","?","?","?","?"]
	["07/04/2022","OUI","OUI","?","?","?","?"]
	["14/04/2022","OUI","NON","?","?","?","?"]
	["21/04/2022","OUI","OUI","?","?","?","?"]
	["28/04/2022","OUI","NON","?","?","?","?"]
	["05/05/2022","OUI","OUI","?","?","?","?"]
	["12/05/2022","OUI","NON","?","?","?","?"]
	["19/05/2022","OUI","OUI","?","?","?","?"]
	["26/05/2022","OUI","NON","?","?","?","?"]
	["02/06/2022","OUI","OUI","?","?","?","?"]
];

//To be modified : date à checker uniquement sur la semaine à venir pas la passée (min <-4 ==> inutile)

var i = 0;
var today = new Date();
var vDate = new Date();

for (i; i < numeric.length; i++) {
	
	vDate = new Date(numeric[i][0]);
	
	if (vDate > today){
		document.getElementById('aspi').innerHTML = numeric[i][1];
		document.getElementById('sdb').innerHTML = numeric[i][2];
		document.getElementById('repos').innerHTML = numeric[i][3];
		// Elements de la n+1 semaine
		document.getElementById('Ndate').innerHTML = new Date(numeric[i+1][0]).toLocaleDateString();
		document.getElementById('Naspi').innerHTML = numeric[i+1][1];
		document.getElementById('Nsdb').innerHTML = numeric[i+1][2];
		document.getElementById('Nrepos').innerHTML = numeric[i+1][3];
		// Elements de la n+2 semaine
		document.getElementById('N2date').innerHTML = new Date(numeric[i+2][0]).toLocaleDateString();
		document.getElementById('N2aspi').innerHTML = numeric[i+2][1];
		document.getElementById('N2sdb').innerHTML = numeric[i+2][2];
		document.getElementById('N2repos').innerHTML = numeric[i+2][3];
		i = numeric.length;
	}
}

