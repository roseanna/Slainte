// Will add stuff here

var shows = ["2/6/16 - McBride's Pub, Providence, RI, 8 PM", 
"3/12/16 - Universal Life Church, Petersham, MA 7-8 PM", 
"3/15/16 - The Wingate Residences (Private event) 1PM", 
"3/17/16 - Briarwood Nursing Home (Private event) 9AM", 
"3/17/16 - Mick Morgan's Pub, Newton, MA 12-2 PM", 
"3/17/16 - Mick Morgan's Pub, Newton, MA 7-11 PM", 
"3/18/16 - Tommy Doyle's Pub, Newton, MA 9-close", 
"3/19/16 - The Green Dragon, Boston, MA, 12-4 PM", 
"3/19/16 - Private Party 5:30 PM", 
"3/20/16 - Waxy O'Connor's, Woburn, MA, 5:30-9 PM"];

var description = "Sláinte (slahn-chuh): Irishspeak for cheers <br> Sláinte is a 5-man Irish band, based out of Boston. Formed in a dorm room at Boston College, the boys from The Heights have been playing pubs and parties in the Boston area since 2013. With upbeat sets featuring a wide range of tunes from Irish classics to Dropkick Murphys covers, and everything in between, Sláinte always brings the craic! Check out the video reel tab for recent gig highlights, or the audio tab to listen to our demo!";

function createHome(){
	var up = document.getElementById("upcoming");
	up.innerHTML = "UPCOMING SHOWS<br>";
	console.log(shows);
	for (show in shows){
		console.log(show);
		up.innerHTML += shows[show];
		up.innerHTML += "<br>";
	}

	var desc = document.getElementById('description');
	var p = document.createElement('p');
	p.innerHTML = description;
	desc.appendChild(p);
}
createHome();