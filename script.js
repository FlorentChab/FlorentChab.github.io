var numeric = [
    ["04/09/2021","TT le", "monde au", "travail"],
    ["11/09/2021","Antoine & Marjo","Kevin & aurel","Flo"],
	["18/09/2021","Kevin & Flo","Antoine & Marjo","Aurel"],
	["25/09/2021","Antoine;Aurel","Kevin & Flo","Marjo"],
	["","Kevin & Flo","Marjo & Aurel","Antoine"],
	["","Marjo & Aurel","Antoine & Flo","Kevin"],
	["","Antoine & Kevin","Marjo & Aurel","Flo"],
	["","Marjo & Flo","Antoine & Kevin","Aurel"],
	["","Antoine & Kevin","Aurel & Flo","Marjo"],
	["","Aurel & Flo","Marjo & Kevin","Antoine"],
	["","Marjo & Antoine","Aurel & Flo","Kevin"],
	["","Kevin & aurel","Marjo & Antoine","Flo"],
	["","Marjo & Antoine","Kevin & Flo","Aurel"],
	["","Kevin & Flo","Antoine;Aurel","Marjo"],
	["","Marjo;Aurel","Kevin & Flo","Antoine"],
	["","Antoine & Flo","Marjo & Aurel","Kevin"],
	["","Marjo;Aurel","Antoine & Kevin","Flo"],
	["","Antoine & Kevin","Marjo & Flo","Aurel"],
	["","Aurel & Flo","Antoine & Kevin","Marjo"],
	["","Marjo & Kevin","Aurel & Flo","Antoine"],
	["","Aurel & Flo","Marjo & Antoine","Kevin"],
	["","Antoine & Marjo","Kevin & aurel","Flo"],
	["","Kevin & Flo","Antoine & Marjo","Aurel"],
	["","Antoine;Aurel","Kevin & Flo","Marjo"],
	["","Kevin & Flo","Marjo & Aurel","Antoine"],
	["","Marjo & Aurel","Antoine & Flo","Kevin"]
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
	}
}