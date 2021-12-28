const gameMain = {
	myData: [],
	score: 0,
	gameOver: 0,
	gameRunning: 1,
	status: 1,
}

start = () => {
	gameMain.status = gameMain.gameRunning;
	gameMain.score = 0;
	gameMain.myData = [];
	for (i = 0; i < 4; i++) {
		gameMain.myData[i] = [];
		for (f = 0; f < 4; f++) {
			gameMain.myData[i][f] = 0;
		}
	}
	randomNum();
	randomNum();
	dataChange();
}
window.onload = start;

randomNum = () => {
	for (;;) {
		let r = Math.floor(Math.random() * 4);
		let c = Math.floor(Math.random() * 4);
		if (gameMain.myData[r][c] == 0) {
			let num = Math.random() > 2 ? 2 : 2;
			gameMain.myData[r][c] = num;
			break;
		}
	}
}

dataChange = () => {
	for (r = 0; r < 4; r++) {
		for (c = 0; c < 4; c++) {
			let div = document.getElementById("c" + r + c);
			if (gameMain.myData[r][c] == 0) {
				div.innerHTML = "";
				div.className = "main-content-elem";
			}
			else {
				div.innerHTML = gameMain.myData[r][c];
				div.className = 'main-content-elem n' + gameMain.myData[r][c];
			}
		}
	}
	document.getElementById('score01').innerHTML = gameMain.score;
	if (gameMain.status == gameMain.gameOver) {
		document.getElementById('score02').innerHTML = gameMain.score;
		document.getElementById('gameover').style.display = 'block';
	}
	else {
		document.getElementById('gameover').style.display = 'none';
	}
}
