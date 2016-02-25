
var personArray = [
	{name: "Brady Conley",
	position: "Singer/Bass",
	drink: "Narragansett Lager",
	song: "The Galway Girl"},
	{name: "Mike Perillo",
	position: "Guitar, Backup Vocals",
	drink: "Black Velvet",
	song: "Charlie and the MTA"}
];

function createBios(){
	//var x = document.getElementById('hello');
	$('#hello').text("made it");
	for (i = 0; i < personArray.length; i++){
		console.log(personArray[i]);
		var bq 	= document.createElement('blockquote');
		var p 	= document.createElement('p');
		p.innerHTML = personArray[i].name;	
		console.log(personArray[i].name);
		bq.appendChild(p);
		x.appendChild(bq);
	}
}

createBios();