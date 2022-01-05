var numeric = [
	["11/6/21","Antoine & Kev","Marjo & Aurel","Flo"],
	["11/13/21","Marjo & Aurel","Antoine & Flo","Kev"],
	["11/20/21","Kev & Flo","Marjo & Aurel","Antoine"],
	["11/27/21","Antoine & Aurel","Kev & Flo","Marjo"],
	["12/4/21","Kev & Flo","Antoine & Marjo","Aurel"],
	["12/11/21","Antoine & Marjo","Kev & Aurel","Flo"],
	["12/18/21","Aurel & Flo","Marjo & Antoine","Kev"],
	["12/25/21","Noel","Noel","Noel"],
	["01/1/22","New","Year","!!!"],
	["01/8/22","Marjo & Kev","Aurel & Flo","Antoine"],
	["01/15/22","Aurel & Flo","Antoine & Kev","Marjo"],
	["01/22/22","Antoine & Flo","Marjo & Kev","Aurel"],
	["01/29/22","Kev & Aurel","Marjo & Antoine","Flo"],
	["02/5/22","Marjo & Antoine","Aurel & Flo","Kev"],
	["02/12/22","Aurel & Flo","Marjo & Kev","Antoine"],
	["02/19/22","Antoine & Kev","Aurel & Flo","Marjo"],
	["2/26/22","Marjo & Flo","Antoine & Kev","Aurel"],
	["3/5/22","Antoine & Kev","Marjo & Aurel","Flo"],
	["3/12/22","Marjo & Aurel","Antoine & Flo","Kev"],
	["3/19/22","Kev & Flo","Marjo & Aurel","Antoine"],
	["3/26/22","Antoine & Aurel","Kev & Flo","Marjo"],
	["4/2/22","Kev & Flo","Antoine & Marjo","Aurel"],
	["4/9/22","Antoine & Marjo","Kev & Aurel","Flo"],
	["4/16/22","Script à","completer","Sheh !"]
];

var i = 0;
var today = new Date();
var ecartMax = new Date();
var ecartMin = new Date();
var vDate = new Date();

ecartMax.setDate(today.getDate()+3);
ecartMin.setDate(today.getDate()-4);

for (i; i < numeric.length; i++) {
	
	vDate = new Date(numeric[i][0]);
	
	if (vDate < ecartMax && vDate > ecartMin){
		document.getElementById('date').innerHTML = new Date(numeric[i][0]).toLocaleDateString();
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

