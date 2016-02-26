var desc = "      Sláinte plays a wide variety of songs. While the heart of our set is traditional Irish, we also feature contemporary Irish music, some country, and a little classic rock. Below is a sample of what you might hear on a given night:";

var songs = [
	"Auld Triangle",
	"Bad Moon Rising",
	"Ballydesmond Polka (trad instrumental)",
	"Black and Tans",
	"Black Velvet Band",
	"Boston Rose",
	"Boy Named Sue",
	"Boys of the Old Brigade",
	"Brown Eyed Girl",
	"Charlie and the MTA",
	"Chicken Fried",
	"Country Roads",
	"Dingle",
	"Dirty Old Town",
	"Dirty Water",
	"Drunken Sailor",
	"Drunken Lullabies",
	"If I Ever leave this world",
	"Foggy Dew",
	"Fields of Athenry",
	"Finnegans Wake",
	"Friends in low places",
	"Galway Girl",
	"Harvest Home",
	"House of the Rising Sun",
	"If I should fall from grace with god",
	"Irish Rover",
	"Johnny B Goode",
	"Kesh Jig",
	"Leroy Brown",
	"Leaving of Liverpool",
	"Margaritaville",
	"Molly Malone",
	"Moonshiner",
	"Nation once again",
	"Rattlin Bog",
	"Ring of Fire/Folsom Prison Blues",
	"Rose Tattoo",
	"Sally Bangs",
	"Saw Her Standing There",
	"Seven Drunken Nights",
	"Shipping",
	"Spancil Hill",
	"Star of County Down",
	"Streams of Whiskey",
	"Sweet Caroline",
	"Take it Easy",
	"Tell me Ma",
	"Twist and Shout",
	"Wagon Wheel",
	"The Weight",
	"Whiskey in the Jar",
	"Wild Colonial Boy",
	"Wild Rover",
	"Wild Thing"
]
function createList(){
	var body 	= document.getElementById('body');
	var p 		= document.createElement('p');
	var bq 		= document.createElement('blockquote');
	var ul		= document.createElement('ul');
	p.innerHTML = desc;
	p.className = "jumbotron";

	for (song in songs){
		var li = document.createElement('li');
		li.innerHTML = songs[song];
		ul.appendChild(li);
	}
	bq.appendChild(ul);

	body.appendChild(p);
	body.appendChild(bq);
}

createList();