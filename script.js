var numeric = [
    ["04/09/2021","TT le", "monde au", "travail"],
    ["11/09/2021","Antoine & Marjo","Kev & Aurel","Flo"],
	["18/09/2021","Kev & Flo","Antoine & Marjo","Aurel"],
	["25/09/2021","Antoine;Aurel","Kev & Flo","Marjo"],
	["","Kev & Flo","Marjo & Aurel","Antoine"],
	["","Marjo & Aurel","Antoine & Flo","Kev"],
	["","Antoine & Kev","Marjo & Aurel","Flo"],
	["","Marjo & Flo","Antoine & Kev","Aurel"],
	["","Antoine & Kev","Aurel & Flo","Marjo"],
	["","Aurel & Flo","Marjo & Kev","Antoine"],
	["","Marjo & Antoine","Aurel & Flo","Kev"],
	["","Kev & Aurel","Marjo & Antoine","Flo"],
	["","Marjo & Antoine","Kev & Flo","Aurel"],
	["","Kev & Flo","Antoine;Aurel","Marjo"],
	["","Marjo;Aurel","Kev & Flo","Antoine"],
	["","Antoine & Flo","Marjo & Aurel","Kev"],
	["","Marjo;Aurel","Antoine & Kev","Flo"],
	["","Antoine & Kev","Marjo & Flo","Aurel"],
	["","Aurel & Flo","Antoine & Kev","Marjo"],
	["","Marjo & Kev","Aurel & Flo","Antoine"],
	["","Aurel & Flo","Marjo & Antoine","Kev"],
	["","Antoine & Marjo","Kev & Aurel","Flo"],
	["","Kev & Flo","Antoine & Marjo","Aurel"],
	["","Antoine;Aurel","Kev & Flo","Marjo"],
	["","Kev & Flo","Marjo & Aurel","Antoine"],
	["","Marjo & Aurel","Antoine & Flo","Kev"]
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
		// Elements de la prochaine semaine
		document.getElementById('Ndate').innerHTML = numeric[i+1][0];
		document.getElementById('Naspi').innerHTML = numeric[i+1][1];
		document.getElementById('Nsdb').innerHTML = numeric[i+1][2];
		document.getElementById('Nrepos').innerHTML = numeric[i+1][3];
	}
}