function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fade_in()
{
	for (x = 0; x < 100; x++)
	{
		document.getElementById("h1").style.opacity = x/100;
		await sleep(10);
	}
}

async function translate_loop() 
{
	for (;;) 
	{
		var i;
		var x;
		for (i = 0; i < 5; i++) 
		{ 
		  switch(i) 
		  {
		  case 0:
		    fade_in();
			document.getElementById("h1").innerHTML = "Üdvözöllek!";
			break;
		  case 1:
			fade_in();
		    document.getElementById("h1").innerHTML = "Hi there!";
			break;
		  case 2:
			fade_in();
			document.getElementById("h1").innerHTML = "Guten Tag!";
			break;
		  case 3:
		    fade_in();
			document.getElementById("h1").innerHTML = "Hola!";
			break;
		  case 4:
		    fade_in();
			document.getElementById("h1").innerHTML = "こんにちは!";
			break;
		  }
		  await sleep(2000);
		}
	}
}

translate_loop();