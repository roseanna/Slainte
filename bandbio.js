
var personArray = [
	{name: "Brady Conley",
	img: "Images/brady_bio.jpg",
	position: "Singer/Bass",
	drink: "Narragansett Lager",
	song: "The Galway Girl",
	desc: "The band's frontman, Brady is from Providence, RI. He was recruited in the fall of 2013 when the founding members decided they wanted to make a serious go of the band. To play for more than a couple dozen drunk college kids in a dorm, the band needed a real singer. Enter Brady Conley. Brady comes from a blues background, also fronting the Providence-based band Black and Bruised."},
	{name: "Mike Perillo",
	img: "Images/mike_bio.jpg",
	position: "Guitar, Backup Vocals",
	drink: "Black Velvet",
	song: "Charlie and the MTA",
	desc: "Hailing from the far away land of Long Island, Mike is the only non-Irish and only Yankee fan in the band - though you wouldn't know it when he dons his alter ego (Mick O'Perillo) and sings Sweet Caroline. Mike has been playing guitar since he was a wee lad and is the rhythmic backbone and constant source of energy for the band."},
	{name: "Jon Harrington",
	img: "Images/jon_bio.jpg",
	position: "Fiddle",
	drink: "Murphy's Stout",
	song: "Streams of Whiskey",
	desc: "Older and wiser brother to James, Jon learned the fiddle through Boston College's Irish Music Program, studying under Tina Lech and Seamus Connolly. Jon spent a semester studying abroad in Cork, and when he's not playing with Slainte he can be found playing at trad sessions around town."},
	{name: "Pat O'Donovan",
	img: "Images/pat_bio.png",
	position: "Accordion, Mandolin, Tenor Banjo",
	drink: "Guinness",
	song: "Paddy's Green Shamrock Shore",
	desc: "\"Patches\" O'Donovan was born in Donegal, and grew up in Quincy, MA. He originally started as only an accordion player, but soon picked up the mando and banjo, and will probably learn about 5 more intsruments in the next few years.. "},
	{name: "James Harrington",
	img: "Images/james_bio.jpg",
	position: "Tin Whistle, Harmonica, Rabblerouser",
	drink: "Jameson & Diet Coke",
	song: "Whiskey in the Jar",
	desc: "James is from Winchendon, MA, and grew up listening to his grandfather's Irish band, The Jug O' Punch. James learned the tin whistle while at BC, studying under Jimmy Noonan for four years. As chief rabblerouser, his duties include getting the crowd involved and making sure his bandmates are well hydrated."
	}
];

function createBios(){
	var count = 1;
	var x = document.getElementById("hello");
	// $('#hello').text("made it");
	for (i = 0; i < personArray.length; i++){

		var div 	= document.createElement('div');
		var div2	= document.createElement('div');
		var img 	= document.createElement('img');
		var bq 		= document.createElement('blockquote');
		var p 		= document.createElement('p');
		var desc	= document.createElement('p');
		var sm 		= document.createElement('small');
		var sm2		= document.createElement('small');
		var sm3		= document.createElement('small');
		var cite 	= document.createElement('cite');

		if(personArray[i].name.length > 1){
			div.className 	= "col-sm-3 col-md-2";
			div2.className	= "col-sm-3 col-md-4";
			img.src 		= personArray[i].img;
			img.className 	= "img-rounded img-responsive";
			p.innerHTML 	= personArray[i].name;	
			cite.innerHTML	= personArray[i].position;
			sm2.innerHTML	= "Favorite Drink: " + personArray[i].drink;
			sm3.innerHTML	= "Favorite Irish Song: " + personArray[i].song;
			desc.innerHTML	= personArray[i].desc;
		}

		sm.appendChild(cite);
		div.appendChild(img);
		div2.appendChild(bq);
		bq.appendChild(p);
		bq.appendChild(sm);
		bq.appendChild(sm2);
		bq.appendChild(sm3);
		div2.appendChild(desc);
		if (count %2 == 0){
			var rowDiv = document.createElement('div');
			rowDiv.className = "row";
			rowDiv.appendChild(div);
			rowDiv.appendChild(div2);
			x.appendChild(rowDiv);
		}
		else{
			x.appendChild(div);
			x.appendChild(div2);
		}
		count++;
	}
}

createBios();