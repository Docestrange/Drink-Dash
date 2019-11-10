class Player
{

	constructor()
	{
		this.r=75;
		this.x= this.r;
		this.y= height-this.r-25;
		this.vy=0;
		this.gravity=1;
		this.score=0;
		this.notPaused=true;
		this.BAC= 0.00;
		this.time= second();
		this.isMale=true;
		this.isJumping= false;
		this.isDucking=false;
		this.isRunning=true;
		if(this.isMale)
			this.sprite=playerMImg;
		else
			this.sprite=playerFImg;

	}
	jump()
	{
		if(this.y==height-this.r-25)
		{
			this.vy=-17.5;
		}
		

	}
	move()
	{
		this.y+=this.vy;
		this.vy+=this.gravity;
		this.y= constrain(this.y, 0, height-this.r-25);
		this.BAC=constrain(this.BAC, 0, 0.4);
		this.isJumping= this.y<height-this.r-25;
		if(this.isJumping && this.isDucking)
		{
			this.vy+=2;
		}
	}
	show()
	{
		fill(0);
		if(this.isMale)
		{
			if(this.isJumping)
				this.sprite=jumpMImg;
			else if(this.isDucking)
			{
				this.sprite=duckMImg;
				this.y+=25;
			}
			else
				this.sprite=playerMImg;
		}
		else
		{
			if(this.isJumping)
				this.sprite=jumpFImg;
			else if(this.isDucking)
			{
				this.sprite=duckFImg;
				this.y+=25;
			}
			else
				this.sprite=playerFImg;
		}
		image(this.sprite,this.x,this.y);

		if(this.notPaused && !inExit)
		{
			this.score+=2;
		}
	}
	showScore()
	{

		var BAC= this.BAC; 
		var BACtext= BAC.toFixed(3);
		textAlign(CENTER,CENTER);
		strokeWeight(1);
		textSize(15);
		this.progressMeter(width/2,5,200);
		text("BAC: "+ BACtext, width-100, 15);
	}
	pause()
	{
		this.notPaused=!this.notPaused;
	}
	collidesWith(obstacle)
	{
		if(this.isDucking)
		{
			return collideRectRect(this.x, this.y+25, this.r,this.r,obstacle.x,obstacle.y,obstacle.r,obstacle.r);
		}
		else
			return collideRectRect(this.x, this.y, this.r,this.r,obstacle.x,obstacle.y,obstacle.r,obstacle.r);
	}
	restart()
	{
		this.score=0;
		this.BAC=0;
	}
	progressMeter(x, y, size) 
	{
	    stroke(0);
	    strokeWeight(size/20);
	    line(x-size/2, y+size/4, x+size/2, y+size/4);
	    stroke(0, 255, 0);
	    strokeWeight(size/30);
	    line(x-size/2, y+size/4, x-size/2+(this.score/10000)*size, y+size/4);
	    fill(255, 0, 0);
	    noStroke();
	    triangle(x-size/2+(this.score/10000)*size, y+size/4-size/20+sq((this.score%40-20))/20-20, x-size/2+size/20+(this.score/10000)*size, y+size/4-size/8+sq((this.score%40-20))/20-20, x-size/2-size/20+(this.score/10000)*size, y+size/4-size/8+sq((this.score%40-20))/20-20);
	}



}