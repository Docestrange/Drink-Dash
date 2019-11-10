class Floor
{
	constructor()
	{
		this.x=width;
		this.y=0;
		this.speed=10;
	}
	show()
	{
		image(floorImg,this.x,this.y);
	}
	move()
	{
		if(notPaused)
		{
			
			this.x-=this.speed;
		}
	}




}