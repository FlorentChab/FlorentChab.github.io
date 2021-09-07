var numeric = [
    ["04/09/2021","TT le", "monde au", "travail"],
	["11/09/2021","Marjo & Aurel","Antoine & Flo","Kev"],
    ["18/09/2021","Antoine & Marjo","Kev & Aurel","Flo"],
	["25/09/2021","Kev & Flo","Antoine & Marjo","Aurel"],
	["02/10/2021","Antoine;Aurel","Kev & Flo","Marjo"],
	["09/10/2021","Kev & Flo","Marjo & Aurel","Antoine"],
	["16/10/2021","Marjo & Aurel","Antoine & Flo","Kev"],
	["23/10/2021","Antoine & Kev","Marjo & Aurel","Flo"],
	["30/10/2021","Marjo & Flo","Antoine & Kev","Aurel"],
	["06/11/2021","Antoine & Kev","Aurel & Flo","Marjo"],
	["13/11/2021","Aurel & Flo","Marjo & Kev","Antoine"],
	["20/11/2021","Marjo & Antoine","Aurel & Flo","Kev"],
	["27/11/2021","Kev & Aurel","Marjo & Antoine","Flo"],
	["04/12/2021","Marjo & Antoine","Kev & Flo","Aurel"],
	["11/12/2021","Kev & Flo","Antoine;Aurel","Marjo"],
	["18/12/2021","Marjo;Aurel","Kev & Flo","Antoine"],
	["25/12/2021","Antoine & Flo","Marjo & Aurel","Kev"],
	["01/01/2022","Marjo;Aurel","Antoine & Kev","Flo"],
	["08/01/2022","Antoine & Kev","Marjo & Flo","Aurel"],
	["15/01/2022","Aurel & Flo","Antoine & Kev","Marjo"],
	["22/01/2022","Marjo & Kev","Aurel & Flo","Antoine"],
	["29/01/2022","Aurel & Flo","Marjo & Antoine","Kev"],
	["05/02/2022","Antoine & Marjo","Kev & Aurel","Flo"],
	["12/02/2022","Kev & Flo","Antoine & Marjo","Aurel"],
	["19/02/2022","Antoine;Aurel","Kev & Flo","Marjo"],
	["26/02/2022","Kev & Flo","Marjo & Aurel","Antoine"],
	["05/03/2022","Marjo & Aurel","Antoine & Flo","Kev"]
];

var i = 0;
var today = new Date();
var ecartMax = new Date();
var ecartMin = new Date();

ecartMax.setDate(today.getDate()+3);
ecartMin.setDate(today.getDate()-3);

for (i; i < numeric.length; i++) {
	if (numeric[i][0] < ecartMax.toLocaleDateString() && numeric[i][0] >= ecartMin.toLocaleDateString()){
		document.getElementById('aspi').innerHTML = numeric[i][1];
		document.getElementById('sdb').innerHTML = numeric[i][2];
		document.getElementById('repos').innerHTML = numeric[i][3];
		// Elements de la n+1 semaine
		document.getElementById('Ndate').innerHTML = numeric[i+1][0];
		document.getElementById('Naspi').innerHTML = numeric[i+1][1];
		document.getElementById('Nsdb').innerHTML = numeric[i+1][2];
		document.getElementById('Nrepos').innerHTML = numeric[i+1][3];
		// Elements de la n+2 semaine
		document.getElementById('N2date').innerHTML = numeric[i+2][0];
		document.getElementById('N2aspi').innerHTML = numeric[i+2][1];
		document.getElementById('N2sdb').innerHTML = numeric[i+2][2];
		document.getElementById('N2repos').innerHTML = numeric[i+2][3];
	}
}