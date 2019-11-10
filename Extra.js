class Extra
{
	constructor()
	{
		this.imgID= Math.round(random(extraImgs.length-1));
		this.sprite = extraImgs[this.imgID];
		this.x=width;
		this.y=height-295;
	}
	show()
	{
		image(this.sprite,this.x,this.y);
	}
	move(score)
	{
		if(notPaused)
			this.x-=(sqrt(score)/5);
	}




}