//Variables
let obstacles = []; 
let player;
let notPaused=true;
let background;
let playerMImg;
let playerMImg2;
let playerFImg;
let playerFImg2;
let jumpMImg;
let jumpFImg;
let duckMImg;
let duckFImg;
let images= [];
let globalSpeed;
let currentMenu= "main";
let blur = 100;
let blurSpeed = 5;
let extraImgs= [];
let extras= [];
let meterX = 0;
let meterSpeed = 0;
let minigameState = 0;
let keyPressTimer = 0;
let ballSize = 75;
let ballX = 500;
let ballY = 250;
let ballYSpeed = 6;
let ballTargetX = 0;
let ballTargetY = 0;
let keys = [];
let n=0;
let xtraSpace=0;
let exitImg;
let inExit = false;
let ppImg;
let ppMessages= [];
let slide =0;
let floorImg;
let dangerImg;
let endSlide1;
let endSlide2;
let exitTimer=0;
let coverCup;
let winImg;
let triggerOnce=true;
let floorX1 = 0;
let soundCount = 0;
let audio;
let ppMessages1;
//Functions
function setup() 
{
  // put setup code here
  createCanvas(1000,450);
  player= new Player();
  globalSpeed=10;
  exit = new Exit();
  ppMessages =["Come on, everyone is doing it!",
		"It's only one more!",
		"Don’t be a lightweight!",
		"Don’t make me drink alone!",
		"You’re so boring!",
		"You never do anything with us!",
		"Don't be a baby!",
		"CHUG, CHUG, CHUG!"];
	ppMessages1= ["Hey, baby. I got you a drink.",
                              "Aw, don't be shy!",
                              "Let's have some fun, babe!",
                              "Down another, it can't hurt ya!",
                              "Wow, they were right. You're lame.",
                              "Won't be having any fun with you.",
                              "HAHA! MORE! GIVE HER MORE!",
                              "Wanna sleep it off in my room?"];
}
function preload()
{
	extraImgs.push(loadImage('https://i.ibb.co/yYpF1Bg/fratflag.png'));
	extraImgs.push(loadImage('https://i.ibb.co/nMd3jW8/people1.png'));
	extraImgs.push(loadImage('https://i.ibb.co/ZhqtQbt/people2.png'));
	extraImgs.push(loadImage('https://i.ibb.co/VtStBB7/table.png'));
	extraImgs.push(loadImage('https://i.ibb.co/cXcp3qB/dj.png'));
	extraImgs.push(loadImage('https://i.ibb.co/gy0DXw3/couch.png'));
	extraImgs.push(loadImage('https://i.ibb.co/PWQxcFd/chairs.png'));
	exitImg= loadImage('https://i.ibb.co/CW0TFcb/exit.png');
	ppImg= loadImage('https://i.ibb.co/BnYNHc7/peerpressure.png');
	ppImg1=loadImage('https://i.ibb.co/j6ybbVP/kylepp.png');
    intro1 = loadImage('https://i.ibb.co/X2cMGGj/how-to-play.png');
    intro2 = loadImage('https://i.ibb.co/F3gZS8d/slide3.png');
    intro3 = loadImage('https://i.ibb.co/88cP5s1/play.png');
    genderImg = loadImage('https://i.ibb.co/D1mGkM5/gender.png');
	bImg = loadImage('https://i.ibb.co/Jy185WL/backgroundbasic.png');
	cuppongImg = loadImage('https://i.ibb.co/DKyTyw3/pingpongbackground.png');
	miniIntroImg = loadImage('https://i.ibb.co/16vdF88/pongmenu.png');
	playerMImg= loadImage('https://i.ibb.co/ZJ6kQKt/manspriterun.png');
	playerFImg=loadImage('https://i.ibb.co/5Tptfb1/womanrun.png');
	jumpMImg = loadImage('https://i.ibb.co/WDPL7Bq/manjump2.png');
	jumpFImg= loadImage('https://i.ibb.co/XxzhGkY/womanjump.png');
	duckMImg= loadImage('https://i.ibb.co/j6NrZhT/manduck2.png');
	duckFImg= loadImage('https://i.ibb.co/02H1gTT/womanduck.png');   
    mainImg = loadImage('https://i.ibb.co/CWF8JVB/slide1.png');
    floorImg= loadImage('https://i.ibb.co/98C0Jpv/floor.png');
    dangerImg= loadImage('https://i.ibb.co/MMHSB4p/DANGER.png');
    endSlide1=loadImage('https://i.ibb.co/HgfSgg9/endslide.png');
    endSlide2=loadImage('https://i.ibb.co/smSdHJ6/finalBAC.png');
    coverCup=loadImage('https://i.ibb.co/3dJXgPN/cupcover.png');
	winImg=loadImage('https://i.ibb.co/WBtN6hT/youmadeit.png');
	playerMImg2=loadImage('https://i.ibb.co/T4f10Yr/manrun2.png');
	playerFImg2=loadImage('https://i.ibb.co/J7V2mKP/womanrun2.png');
	images.push(loadImage('https://i.ibb.co/QDCjtJq/beer.png'));
	images.push(loadImage('https://i.ibb.co/Gc14WjV/shot.png'));
	images.push(loadImage('https://i.ibb.co/2NsmNRH/wine.png'));
	images.push(loadImage('https://i.ibb.co/ZBTNh36/Jungle-Juice.png'));
	images.push(loadImage('https://i.ibb.co/xjYjfgs/beerPong.png'));
	images.push(loadImage('https://i.ibb.co/pd33sbv/water.png'));
	images.push(loadImage('https://i.ibb.co/BGzvfsn/pizza.png'));
	images.push(loadImage('https://i.ibb.co/n097XhM/clock.png'));
	/*
		0= beer
		1=shot
		2=wine
		3=jungle-juice
		4=beerpong
		5=water
		6=pizza
		7=clock
	*/
}
function keyPressed()
{
	keys[keyCode] = true;
	if (currentMenu==="play")
	{
		if(key== ' ' || keyCode === UP_ARROW)
		{
			if(player.BAC>0.2)
			{
				if(random(3)>0.5)
					player.jump();
			}
			else
			{
				player.jump();
			}
			
		}
		else if(key=='p' || key == 'P')
		{
			for(let o of obstacles)
			{
				o.pause();
			}
			player.pause();		
			notPaused=!notPaused;
		}
		else if(key=='r' || key == 'R')
		{
			restart();
		}
		player.isDucking= keyCode === DOWN_ARROW;
	}
}
function keyReleased()
{
	keys[keyCode] = false;
	keyPressTimer = 0;
	if (currentMenu === "play")
	{
		if(keyCode=== DOWN_ARROW)
			player.isDucking=false;
	}
}
function mouseClicked()
{
   if (currentMenu == "main" || currentMenu==="danger" || currentMenu==="exit") 
   {
   	if (slide < 4 && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height)
   	{
   		slide ++;
   	}
    if (slide === 4)
    {
    	if (mouseX > 380 && mouseX < 465 && mouseY > 200 && mouseY < 350)
    	{
    		player.isMale = true;
    		slide = 0;
    		currentMenu = "play";
    	}
    	if (mouseX > 540 && mouseX < 620 && mouseY > 200 && mouseY < 350)
    	{
    		player.isMale = false;
    		slide = 0;
    		currentMenu = "play";
    		restart();
    	}
    }
   }
}
//Set the path of the ball           
function ballControl(targetX, targetY)
{
    if (keyPressTimer < 2) {
        ballYSpeed = 6.5+((200-targetY)/500);
    }
    if (ballX > targetX) {
        ballX -= (200-targetX)/((6.5+((200-targetY)/500))/0.05);
    }
    if (ballX < targetX) {
        ballX += 0.9;
    }
    ballY -= ballYSpeed;
    ballYSpeed -= 0.1;
    ballSize -= 0.3;
    if (ballY > 250) {
        ballY = 250;
        ballX = 200;
        ballSize = 75;
        ballYSpeed = 0;
        meterX = 0;
        currentMenu = "play";
    }
}
//Create the meter for Cup Pong
function cupPongMeter(x, y, meterSize)
{
    noStroke();
    fill(0, 255, 0);
    rect(x-meterSize/16, y-meterSize/10, meterSize/8, meterSize/5);
    fill(255);
    triangle(x-meterSize/2+meterX*meterSize/300, y-meterSize/30, x-meterSize*29/60+meterX*meterSize/300, y-meterSize/10, x-meterSize*31/60+meterX*meterSize/300, y-meterSize/10);
    triangle(x-meterSize/2+meterX*meterSize/300, y+meterSize/30, x-meterSize*29/60+meterX*meterSize/300, y+meterSize/10, x-meterSize*31/60+meterX*meterSize/300, y+meterSize/10);
    stroke(0);
    strokeWeight(meterSize/40);
    noFill();
    rect(x-meterSize/2, y-meterSize/10, meterSize, meterSize/5, meterSize/60);    
}
//Control the motion of the meter
function meterControl()
{
    if (minigameState === 0) {
        meterX += meterSpeed;
        if (meterX >= 290) {
            meterSpeed = -5;
        }
        if (meterX <= 10) {
            meterSpeed = 5;
        }
        if (keys[32] && keyPressTimer > 15) {
            minigameState = 1;
        }
    } else {
        if (meterX > 131 && meterX < 169) {
                ballControl(width/2, height/2);
            } else {
                ballControl(width/8, height/2);
            }
    }
}
//Reset the game
function restart()
  {
  	player.restart();
  	obstacles= [];
  	inExit= false;
  	exit= new Exit();
  	exitTimer = 0; 
  }
//Creates the BAC Meter- made by Josh Mateer
function bacMeter(x, y, bacWidth) 
{
    noStroke();
    if (player.BAC < 0.2) {
        fill(player.BAC*1275, 255, 0);
    } else {
        fill(255, 255-(player.BAC*1275-255), 0);
    }
    quad(x-bacWidth/4, y+bacWidth/2, x+bacWidth/4, y+bacWidth/2, x+bacWidth/4+player.BAC*bacWidth*0.625, y+bacWidth/2-player.BAC*bacWidth*2.5, x-bacWidth/4-player.BAC*bacWidth*0.625, y+bacWidth/2-player.BAC*bacWidth*2.5);
    noFill();
    stroke(0);
    strokeWeight(bacWidth/18);
    quad(x-bacWidth/4, y+bacWidth/2, x+bacWidth/4, y+bacWidth/2, x+bacWidth/2, y-bacWidth/2, x-bacWidth/2, y-bacWidth/2);
    for (var i = 1; i < 10; i ++) {
        stroke(0);
        strokeWeight(bacWidth/40);
        line(x+bacWidth*0.225+bacWidth/40*i, y+bacWidth/2-bacWidth/10*i, x+bacWidth*0.15+bacWidth/40*i, y+bacWidth/2-bacWidth/10*i);
        fill(0);
        textSize(bacWidth/12);
        textAlign(RIGHT, CENTER);
        strokeWeight(1);
        text(round((i/25)*100)/100, x+bacWidth*(0.11)+bacWidth/40*i, y+bacWidth/2-bacWidth/10*i);
    }
}
//Show the peer pressure dialog
function showPP(index)
{
	if(player.isMale)
		image(ppImg,0,0);
	else
		image(ppImg1,0,0);
	textSize(12);
	strokeWeight(1);
	fill(0);
	textAlign(CENTER, CENTER);
	if(player.isMale)
		text(ppMessages[index],100,30);
	else
		text(ppMessages1[index],110,40);
}
//Create the moving floor
function scrollFloor(score)
{
	if(notPaused && !inExit)
	{
		image(floorImg, floorX1, 0);
		floorX1 -= (sqrt(score)/5);
		if (floorX1 < -width)
		{
			floorX1 = 0;
		}
	}
}
//Create the informational slides at beginning
function introSlides()
{
   if (slide === 0)
   {
    	image(mainImg,0,0);
   } else if (slide === 1)
   {
        image(intro1,0,0)
   } else if (slide === 2)
   {
        image(intro2,0,0)
   } else if (slide === 3)
   {
        image(intro3,0,0)
   } else
   {
   		image(genderImg,0,0);
   }
}

//Main animation loop
function draw() 
{
  	//Main menu
    if (currentMenu === "main")
    {
        introSlides();
    }
    //Main game
  	if (currentMenu === "play")
  	{
  		//Draw the background and floor
		image(bImg,0,0);
		scrollFloor(player.score);
		//Create obstacles
		for(let e of extras)
		{
		  	e.move(player.score);	
		 	e.show();
		}
		//Show exit
	  	if(player.score>9900)
		{
			exit.show();
			exit.move();
			if(exit.x==0) //if the exit is at the end of the screen
			{
				obstacles=[];
				extras=[];
				inExit= true;
				exit.speed=0;
			}
				
		}
		//Show player
		player.show();
		player.move();
		player.showScore();
		//Show the BAC meter
		bacMeter(width-100, 80, 100);
		//Check if the player has collided with an item
	  	for(var i=0; i<obstacles.length; i++)
	  	{
		  	obstacles[i].move();
		  	obstacles[i].show();
		  	if(player.collidesWith(obstacles[i]))
		  	{
		  		//Check if the obstacle has a special effect
		  		if(!obstacles[i].hasNoEffect)
		  		{
			  		if(player.isMale)
			  			player.BAC+=0.025;
			  		else
			  			player.BAC+=0.038;
		  		}
		  		else if(obstacles[i].item==7) //if item collected is clock
		  			player.BAC-=0.025;
		  		else if(obstacles[i].item==4) //if item collected is cup pong
		  		{
		  			currentMenu="minigameintro";

		  		}
		  		//Delete the item if picked up
		  		obstacles.splice(i,1);
		  		i++;
		  	}
		  	else
		  	{
		  		if(notPaused)
		  			obstacles[i].incrementSpeed(sqrt(player.score)/5);//Move obstacles progressively faster

		  	}
	  	}
		//Create blur effect if above 0.3 BAC
		if(player.BAC > 0.3 && !inExit)
		{
			fill(0, 0, 0, blur);
		  	noStroke();
		  	rect(0, 0, width, height);
		}
		//Check if player has reached the exit
		if(inExit)
		{
		  	exitTimer++;
		  	if(exitTimer>210)
		  	{
		  		currentMenu="exit";
		  	}
		}
		//Game over if BAC > 0.4
	  	if(player.BAC>0.4)
	  	{
	  		currentMenu="danger";
	   	}
	  	if(notPaused)
	  	{
		  	n++;
			if(random(1)<0.025)
			{
				if(n>5 && !inExit)
				{
			  		obstacles.push(new Obstacle());
			  		n=0;
				}
			}
			if(player.BAC>0.3)
			{
				textSize(15);
				fill(0);
				text("BEWARE: Your vision has begun to blur!",width-75, height/2-75);
			}
			else if(player.BAC>0.2)
			{
				textSize(15);
				fill(0);
				text("BEWARE: Your reaction time has begun to slow down!",width-75, height/2-75);
			}
			else if(player.BAC>0.1)
			{

			}

			//Space out background sprites
			xtraSpace++;
			if(random(1)<0.05)
			{
				if(xtraSpace>50 && !inExit)
				{
					extras.push(new Extra());
					xtraSpace=0;
				}
				
			}
			//Show a peer pressure dialog
			if(player.score%1000 <500 && player.score<8000)
			{
				showPP(Math.round(player.score/1000));
			}
			//Create the blur motion
			blur += blurSpeed;
			if (blur <= 50 || blur >= 170)
			{
				blurSpeed *= -1;
			}
	  	}
	  	else
	  	{
	  		//Create the pause screen
			fill(255,255,255,100);
		  	rect(0,0,width,height);
		  	textSize(50);
		  	fill(0);
		  	textAlign(CENTER,CENTER);	
		  	text("PAUSED",width/2,height/2);
		  	textSize(15);
	  	}
	}
	//Ask if the player wants to play Cup Pong
	if (currentMenu === "minigameintro")
	{
		mainMenu();
	}
	//Cup Ping minigame
	if (currentMenu === "cuppong")
	{
		//Create the Cup Pong menu
		image(cuppongImg,0,0);
		keyPressTimer ++;
	    fill(255);
	    stroke(0);
	    strokeWeight(1);
	    ellipse(ballX, ballY, ballSize, ballSize);
	    //Create overlay image to make the ball 'go in' the cup
	    if(ballSize < 45)
	    {
	    	image(coverCup, -23 , -38);
	    }
	    meterControl();
	    cupPongMeter(width/2, height-50, 400);
	    fill(255);
	    textAlign(CENTER, CENTER);
	    textSize(25);
	    strokeWeight(1);
	    text("Press SPACE to throw the ball!", 500, 50);
	}
	//Game over screen
	if(currentMenu === "danger")
	{
		
		if(slide===0)
		{
			image(dangerImg,0,0);
		}
		else if(slide===1)
		{
			image(endSlide1,0,0);
		}
		else if(slide===2)
		{
			image(endSlide2,0,0);
			textSize(65);
			BACtext = player.BAC;
			BACtext= BACtext.toFixed(3);
			textAlign(CENTER, CENTER);
			if (player.BAC < 0.2) {
		        fill(player.BAC*1275, 255, 0);
		    } else {
		        fill(255, 255-(player.BAC*1275-255), 0);
		    }
			text(BACtext,width/2+105,85);
		}
		else
		{
			currentMenu="main";
			restart();
		}
	}
	//Win screen
	if(currentMenu=== "exit")
	{
		if(slide===0)
		{
			image(winImg,0,0);
		}
		else if(slide===1)
		{
			image(endSlide2,0,0);
			textSize(65);
			BACtext = player.BAC;
			BACtext= BACtext.toFixed(3);
			textAlign(CENTER, CENTER);
			if (player.BAC < 0.2) {
		        fill(player.BAC*1275, 255, 0);
		    } else {
		        fill(255, 255-(player.BAC*1275-255), 0);
		    }
			text(BACtext,width/2+105,85);
		}
		else
		{
			currentMenu="main";
			restart();
		}
	}
}
