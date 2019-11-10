class Obstacle
{
		constructor()
		{
			this.r=50;
			this.x=width;
			this.y=(height-(this.r*parseInt(random(3))*1.75+50));
			this.y= constrain(this.y, 0, height-this.r-25);
			this.notPaused= true;
			this.item=parseInt(random(images.length));
			if(this.item==4)
				if(random(1)>0.35)
					this.item=parseInt(random(3));
			this.sprite=images[this.item];
			this.speed=globalSpeed;
			this.hasNoEffect= this.item>=4;

		}
		move()
		{
			if(this.notPaused)
				this.x-=this.speed;
		}
		show()
		{
			fill(255,204,0);
			image(this.sprite, this.x, this.y);
		}
		pause()
		{
			this.notPaused=!this.notPaused;
		}
		incrementSpeed(num)
		{
			this.speed=globalSpeed+num;
		}


}