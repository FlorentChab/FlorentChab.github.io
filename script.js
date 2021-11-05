var numeric = [
    ["04/09/2021","TT le", "monde au", "travail"], //mettre au format 09/04/2021 et mettre la date dans le new date 
	"["9/11/21","Marjo & Aurel","Antoine & Flo","Kev]
	["9/18/21","Antoine & Marjo","Kev & Aurel","Flo]
	["9/25/21","Kev & Flo","Antoine & Marjo","Aurel]
	["10/2/21","Antoine & Aurel","Kev & Flo","Marjo]
	["10/9/21","Kev & Flo","Marjo & Aurel","Antoine]
	["10/16/21","Marjo & Aurel","Antoine & Flo","Kev]
	["10/23/21","Antoine & Kev","Marjo & Aurel","Flo]
	["10/30/21","Marjo & Flo","Antoine & Kev","Aurel]
	["11/6/21","Antoine & Kev","Aurel & Flo","Marjo]
	["11/13/21","Aurel & Flo","Marjo & Kev","Antoine]
	["11/20/21","Marjo & Antoine","Aurel & Flo","Kev]
	["11/27/21","Kev & Aurel","Marjo & Antoine","Flo]
	["12/4/21","Marjo & Antoine","Kev & Flo","Aurel]
	["12/11/21","Kev & Flo","Antoine & Aurel","Marjo]
	["12/18/21","Marjo & Aurel","Kev & Flo","Antoine]
	["12/25/21","Antoine & Flo","Marjo & Aurel","Kev]
	["1/1/22","Marjo & Aurel","Antoine & Kev","Flo]
	["1/8/22","Antoine & Kev","Marjo & Flo","Aurel]
	["1/15/22","Aurel & Flo","Antoine & Kev","Marjo]
	["1/22/22","Marjo & Kev","Aurel & Flo","Antoine]
	["1/29/22","Aurel & Flo","Marjo & Antoine","Kev]
	["2/5/22","Antoine & Marjo","Kev & Aurel","Flo]
	["2/12/22","Kev & Flo","Antoine & Marjo","Aurel]
	["2/19/22","Antoine & Aurel","Kev & Flo","Marjo]
	["2/26/22","Kev & Flo","Marjo & Aurel","Antoine]
	["3/5/22","Marjo & Aurel","Antoine & Flo","Kev] //nouvelle serie
];

var i = 0;
var today = new Date();
var ecartMax = new Date();
var ecartMin = new Date();

ecartMax.setDate(today.getDate()+3);
ecartMin.setDate(today.getDate()-3);

document.getElementById('aspi').innerHTML = ecartMin.toLocaleDateString();


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
		i = numeric.length;
	}
}
