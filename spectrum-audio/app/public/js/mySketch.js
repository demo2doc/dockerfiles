/*

This is an Audio Visualiser, feel free to use it and remix it, just give credit.

All the music comes from IncredFx, check him out:
https://soundcloud.com/incredfx

*/
let first_play=false
let first_download=false
var recorder;
let backgroundImages=[]
var startPlayTime;
var soundDuration=345010
var startRecord=false;
function setup() {
	// console.log("cookie is "+document.cookie)
	createCanvas(windowWidth, windowHeight);
	// bg =loadImage('test-1.jpg');
	loadBackgroundImages("static/images/background/bg")
	strokeWeight(10)
	noFill();
	colorMode(HSB);
	strokeCap(ROUND); //PROJECT for rectangles, ROUND for circles and rounded rectangles
	
	sound = 1; // Used by load to check if sound has been properly loaded or not

	//Load the first song
	song = 1
	preload(song) // This function just loads in a song by number
	
	radius = height*1/4; // Radius of the circle made

	number = 80; // Number of points making up the circle
	
	baseAngle = 0;
	angle = baseAngle; // Used to draw the circle of points
	
	frameRate(60);
	translate(width/2, height/2);
	
	fft = new p5.FFT(); // This allows us to then generate a waveform and spectrum
	
	amplitude = new p5.Amplitude();
	amplitude.setInput(sound);
	// soundDuration=sound.duration()*1000;
	console.log("this sound duration is "+soundDuration)
	
	rec = 0; // This only needs to be non-zero if using strokeCap(Project), since it means they will be properly rotated
	
	canvas = document.getElementById('defaultCanvas0');
    recorder = RecordRTC(canvas, {
        type: 'canvas',
        frameInterval: 120,
        canvas: {
	        width: 1920,
	        height: 1080
	    }
    });
    startPlayTime=Date.now();
    // recorder.startRecording();
}

function loadBackgroundImages(name){
	backgroundImageSize=document.cookie.replace(/(?:(?:^|.*;\s*)background-image-size\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	console.log("backgroundImageSize is "+backgroundImageSize)
	for(i=0;i<backgroundImageSize;i++){
		bg=loadImage(name+'-'+i+'.jpg');
		// if(bg == undefined){
		// 	console.log("index is "+i)
		// 	break
		// }
		backgroundImages.push(bg);
		
	}
}

function stopRecording(){
	console.log("song is end,will download")
	first_download=true
	recorder.stopRecording(function() {
        var blob = recorder.getBlob();
        invokeSaveAsDialog(blob);
    });
}
function startRecording(){
	if(startRecord == false){
		startRecord=true;
		recorder.startRecording();
	}
}
function setCurrentBackgroundImage(){
	if(first_play == true){
			consumeTime=Date.now()-startPlayTime;
			size=backgroundImages.length
			step=soundDuration/size
			bgIndex=consumeTime*size/soundDuration
			bgIndex=Math.floor(bgIndex)
			if(bgIndex>=size){
				bgIndex=size-1;
			}
			if(bgIndex <0){
				bgIndex=0;
			}
			bg=backgroundImages[bgIndex]
			// console.log("bg index is "+bgIndex+",size is "+size);
			background(bg);
		}else{
			bg=backgroundImages[0]
			background(bg);
		}

}

function draw() {
	setCurrentBackgroundImage()
	// textSize(16);
	// fill(250);
	// strokeWeight(1)
	// text('Free Audio Library', width/2, height/2);
	// textSize(16);
	// text('By 8D Music Studio', width/2+width/16, height/2+height/10);
	// text('8D Music Studio', width/2+width/3+width/8, height/2+height/3+height/7);
	if(first_play == true && startRecord == true  && sound.isPlaying() == false && first_download == false){
		stopRecording();
	}

	magnitude = radius/10
	angle = baseAngle;
	
	var spectrum = fft.analyze(); // This is what gives us the shape
	var waveform = fft.waveform(); // I am not using waveform but it's here if you want it
	////////
	
	beginShape();
	translate(width/2, height/2);
	for(var i = 0; i < number; i++){
		
		spec = spectrum[i*2]; // Most of the 1024 parts of the spectrum are unused, we only need 1-200ish really (does depend on the song)
		
		size = sq(map(spec, 0, 255, 0, 1)); // Squaring the map() just means there is a bigger difference between the highs and the lows
		
		level = amplitude.getLevel(); // Get the current volume
		
		x1 = sin(angle)*radius; // Get the inner coords of the point on the circle using trig
		y1 = cos(angle)*radius;

		modifier = (1 + size/2)*(1+level/2) + rec; // This basically calculates the length of each line, play around with the values!
		
		x2 = x1 * modifier; // Get the second set of coords for the end of the line
		y2 = y1 * modifier;

		strokeWeight((level+1)*6); // Change line width based on volume
		
		stroke(i*(360/number), 360, 360); // Rainbow colours
		line(x1, y1, x2, y2);
		angle += TWO_PI/number;
	}
	endShape();	
	//////
}

function keyPressed() {
	if(keyCode == RIGHT_ARROW){next()} // Next track (loops back to start if at end)
	if(keyCode == LEFT_ARROW){prev()} // Previous track (loops back to end if at start)
	if(keyCode == DOWN_ARROW){noLoop(); sound.pause()} // noLoop() is used to make sure the wave freezes
	if(keyCode == UP_ARROW){loop(); sound.play();first_play=true; startRecording();}
	if(key == 'R'){strokeCap(ROUND); rec = 0;
  		stopRecording();
	} // Circles
	if(key == 'P'){strokeCap(SQUARE); rec = 0.001} // Squares
}
function preload(num) {
	// if(sound != 1){sound.stop();} // Stop current sound from playing, unless its the very first time loading
	sound = loadSound('static/audio/background.mp3')
}