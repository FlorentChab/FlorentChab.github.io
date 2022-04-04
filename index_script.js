var numeric = [
	["4/2/22","Antoine & Kev","Aurel & Flo","Marjo"]
	["4/9/22","Antoine & Marjo","Kev & Flo","Aurel"]
	["4/16/22","Kev & Aurel","Marjo & Antoine","Flo"]
	["4/23/22","Marjo & Antoine","Aurel & Flo","Kev"]
	["4/30/22","Aurel & Flo","Marjo & Kev","Antoine"]
	["5/7/22","Antoine & Kev","Aurel & Flo","Marjo"]
	["5/14/22","Marjo & Flo","Antoine & Kev","Aurel"]
	["5/21/22","Antoine & Kev","Marjo & Aurel","Flo"]
	["5/28/22","Marjo & Aurel","Antoine & Flo","Kev"]
	["6/4/22","Kev & Flo","Marjo & Aurel","Antoine"]
	["6/11/22","Antoine & Aurel","Kev & Flo","Marjo"]
	["6/18/22","Kev & Flo","Antoine & Marjo","Aurel"]
	["6/25/22","Antoine & Marjo","Kev & Aurel","Flo"]
	["7/2/22","Aurel & Flo","Antoine & Marjo","Kev"]
	["7/9/22","Marjo & Kev","Aurel & Flo","Antoine"]
	["7/16/22","Aurel & Flo","Antoine & Kev","Marjo"]
	["7/23/22","Antoine & Kev","Marjo & Flo","Aurel"]
	["7/30/22","Marjo & Aurel","Antoine & Kev","Flo"]
	["8/6/22","Antoine & Flo","Marjo & Aurel","Kev"]
	["8/13/22","Marjo & Aurel","Kev & Flo","Antoine"]
	["8/20/22","Kev & Flo","Antoine & Aurel","Marjo"]
	["8/27/22","Antoine & Marjo","Kev & Flo","Aurel"]
	["9/3/22","Kev & Aurel","Antoine & Marjo","Flo"]
	["9/10/22","Antoine & Marjo","Aurel & Flo","Kev"]
	["9/17/22","Aurel & Flo","Marjo & Kev","Antoine"]
	["9/24/22","Antoine & Kev","Aurel & Flo","Marjo"]
	["10/1/22","Marjo & Flo","Antoine & Kev","Aurel"]
	["10/8/22","Script à","completer","Sheh !"]
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

