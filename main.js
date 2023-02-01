noseX=""
noseY=""
function preload() 
{
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

	mario_jump= loadSound("jump.wav")
	mario_kick= loadSound("kick.wav")
	
	mario_coin= loadSound("coin.wav")
	mario_die=  loadSound("mariodie.wav")
	
	mario_gameover= loadSound("gameover.wav")
}

function setup() 
{
	canvas = createCanvas(1240,336);
	canvas.parent("canvas_div")
	
	video= createCapture(VIDEO)
	video.size(950,450)
	video.parent("game_vid")
	
	instializeInSetup(mario);
	posenet= ml5.poseNet(video,modalLoaded)
	posenet.on("pose",gotposes)
}

function draw() 
{
	game()
}

function modalLoaded()
{
	console.log("Model has loaded")
}

function gotposes(result)
{
	if(result.length>0)
	{
		console.log(result)
		noseX= result[0].pose.nose.x
		noseY= result[0].pose.nose.y
	}
}