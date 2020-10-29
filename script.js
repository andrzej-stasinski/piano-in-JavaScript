
var pressed = 0;
var ended = 0;

function tabText(text)  {
	document.getElementById('symbol').textContent = text;
	document.title = text;
}

function soundOb(nute) {
	this.nute = nute;
	this.run = function() {
		var bleep = new Audio();
		bleep.src = "sound/"+this.nute+".wav";
		bleep.play();
		tabText(unescape('Play %u25B6 '));
		bleep.addEventListener('ended', function() {
			ended++;
			if(pressed == ended)
				tabText(unescape('Play stop'));
		}, false);
	}
}

var klawisz = document.querySelectorAll('#wrapper div');

for(var i=0; i<klawisz.length; i++) {
	klawisz[i].onclick = function() {
		tabText(unescape('%u25B6 Piano playing'));
		pressed++;
		var nute = this.id;
		var sound = new soundOb(nute);
		sound.run();		
	}
}

// swap pianio
const stylepage = document.getElementById('stylepage');
const switchPiano = document.getElementById('switchPiano');
const pianoImg = document.getElementById('pianoImg');
let mode = 'second';

function swap() {
	if(mode === 'default') {
		stylepage.setAttribute('href', 'style_1.css');
		pianoImg.src = 'img/pianino1.jpg';
		mode = 'second';
	} else {
		stylepage.setAttribute('href', 'style_2.css');
		mode = 'default';
		pianoImg.src = 'img/pianino2.jpg';
	}
}

window.addEventListener('load', function() {
	switchPiano.addEventListener('click', function() {
		swap();
	}, false)
}, false);
