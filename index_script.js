var numeric = [
	["4/2/22","Antoine & Kev","MrjLaine & Flo","MrjRie"], //same
	["4/9/22","Antoine & MrjRie","Kev & Flo","MrjLaine"],
	["4/16/22","Kev & MrjLaine","MrjRie & Antoine","Flo"],
	["4/23/22","MrjRie & Antoine","MrjLaine & Flo","Kev"],
	["4/30/22","MrjLaine & Flo","MrjRie & Kev","Antoine"],
	["5/7/22","Antoine & Kev","MrjLaine & Flo","MrjRie"],
	["5/14/22","MrjRie & Flo","Antoine & Kev","MrjLaine"],
	["5/21/22","Antoine & Kev","MrjRie & MrjLaine","Flo"],
	["5/28/22","MrjRie & MrjLaine","Antoine & Flo","Kev"],
	["6/4/22","Kev & Flo","MrjRie & MrjLaine","Antoine"],
	["6/11/22","Antoine & MrjLaine","Kev & Flo","MrjRie"],
	["6/18/22","Kev & Flo","Antoine & MrjRie","MrjLaine"],
	["6/25/22","Antoine & MrjRie","Kev & MrjLaine","Flo"],
	["7/2/22","MrjLaine & Flo","Antoine & MrjRie","Kev"],
	["7/9/22","MrjRie & Kev","MrjLaine & Flo","Antoine"],
	["7/16/22","MrjLaine & Flo","Antoine & Kev","MrjRie"],
	["7/23/22","Antoine & Kev","MrjRie & Flo","MrjLaine"],
	["7/30/22","MrjRie & MrjLaine","Antoine & Kev","Flo"],
	["8/6/22","Antoine & Flo","MrjRie & MrjLaine","Kev"],
	["8/13/22","MrjRie & MrjLaine","Kev & Flo","Antoine"],
	["8/20/22","Kev & Flo","Antoine & MrjLaine","MrjRie"], 
	["8/27/22","Antoine & MrjRie","Kev & Flo","MrjLaine"],
	["9/3/22","Kev & MrjLaine","Antoine & MrjRie","Flo"],
	["9/10/22","Antoine & MrjRie","MrjLaine & Flo","Kev"],
	["9/17/22","MrjLaine & Flo","MrjRie & Kev","Antoine"],
	["9/24/22","Antoine & Kev","MrjLaine & Flo","MrjRie"], //same
	["10/1/22","MrjRie & Flo","Antoine & Kev","MrjLaine"],
	["10/15/22","Antoine & Kev","MrjRie & MrjLaine","Flo"],
	["10/22/22","MrjRie & MrjLaine","Antoine & Flo","Kev"],
	["10/29/22","Kev & Flo","MrjRie & MrjLaine","Antoine"],
	["8/20/22","Antoine & MrjLaine","Kev & Flo","MrjRie"], 
	["11/12/22","Script à","completer","Sheh !"],
	["12/24/22","Script à","completer","Sheh !"]
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
