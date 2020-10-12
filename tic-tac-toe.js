//document.addEventListener('DOMContentLoaded', function()
window.onload= function()
{	
	var board = document.querySelectorAll('#board div');
	

	board.forEach(box => {
		box.className ='square';
		box.addEventListener("click", function() { clickHandler(box);}); 
		box.addEventListener("mouseenter", function() { mouseEnter(box);});
		box.addEventListener("mouseout", function() { mouseOut(box);});

	});

	//NewGame() clears the boxes r resets game
	let ngBtn = document.querySelector('.btn');
	ngBtn.addEventListener('click', () => 
	{
		board.forEach(box => box.innerHTML = ' ');
	});
}

let playerTurn = true;

function clickHandler(v) 
{
	if(playerTurn)
	{
		v.innerHTML = "X"
		v.classList.add("X");
		playerTurn = !playerTurn;
	}
	else
	{
		v.innerHTML = "O"
		v.classList.add("O");
		playerTurn = !playerTurn;
	}
}

function mouseEnter(u) 
{
	u.classList.add('hover');
}

function mouseOut(u) 
{
	u.classList.remove('hover');
}


