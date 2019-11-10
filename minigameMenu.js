function mainMenu()
{
	image(miniIntroImg,0,0);
	if (mouseX > 610 && mouseX < 755 && mouseY > 375 && mouseY < 435 && mouseIsPressed)
	{
		currentMenu = "cuppong";
		meterX = 0;
		meterSpeed = 0;
		minigameState = 0;
		keyPressTimer = 0;
		ballSize = 75;
		ballX = 500;
		ballY = 250;
		ballYSpeed = 6;
		ballTargetX = 0;
		ballTargetY = 0;
	}
	if (mouseX > 785 && mouseX < 930 && mouseY > 375 && mouseY < 435 && mouseIsPressed)
	{
		currentMenu = "play";
	}
}