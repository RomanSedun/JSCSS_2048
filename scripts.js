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

isgameOver = () => {
	for (r = 0; r < 4; r++) {
		for (c = 0; c < 4; c++) {
			if (gameMain.myData[r][c] == 0) {
				return false;
			}
			if (c < 3) {
				if (gameMain.myData[r][c] == gameMain.myData[r][c + 1]) {
					return false;
				}
			}
			if (r < 3) {
				if (gameMain.myData[r][c] == gameMain.myData[r + 1][c]) {
					return false;
				}
			}
		}
	}
	return true;
}

moveLeft = () => {
	let before = String(gameMain.myData);
	for (r = 0; r < 4; r++) {
		moveLeftInRow(r);
	}
	let after = String(gameMain.myData);
	if (before != after) {
		randomNum();
		if (isgameOver()) {
			gameMain.status = gameMain.gameOver;
		}
		dataChange();
	}
}

moveLeftInRow = (r) => {
	for (c = 0; c < 3; c++) {
		let next = getNEXTinRow(r, c);
		if (next != -1) {
			if (gameMain.myData[r][c] == 0) {
				gameMain.myData[r][c] = gameMain.myData[r][next];
				gameMain.myData[r][next] = 0;
				c--;
			}
			else if (gameMain.myData[r][c] == gameMain.myData[r][next]) {
				gameMain.myData[r][c] *= 2;
				gameMain.myData[r][next] = 0;
				gameMain.score += gameMain.myData[r][c];
			}
		}
		else {
			break;
		}
	}
}

getNEXTinRow = (r, c) => {
	for (i = c + 1; i < 4; i++) {
		if (gameMain.myData[r][i] != 0) {
			return i;
		}
	}
	return -1;
}

moveRight = () => {
	let before = String(gameMain.myData);
	for (r = 0; r < 4; r++) {
		moveRightInRow(r);
	}
	let after = String(gameMain.myData);
	if (before != after) {
		randomNum();
		if (isgameOver()) {
			gameMain.status = gameMain.gameOver;
		}
		dataChange();
	}
}

moveRightInRow = (r) => {
	for (c = 3; c > 0; c--) {
		let next = RightgetNEXTinRow(r, c);
		if (next != -1) {
			if (gameMain.myData[r][c] == 0) {
				gameMain.myData[r][c] = gameMain.myData[r][next];
				gameMain.myData[r][next] = 0;
				c++;
			}
			else if (gameMain.myData[r][c] == gameMain.myData[r][next]) {
				gameMain.myData[r][c] *= 2;
				gameMain.myData[r][next] = 0;
				gameMain.score += gameMain.myData[r][c];
			}
		}
		else {
			break;
		}
	}
}

RightgetNEXTinRow = (r, c) => {
	for (i = c - 1; i >= 0; i--) {
		if (gameMain.myData[r][i] != 0) {
			return i;
		}
	}
	return -1;
}

moveTop = () => {
	let before = String(gameMain.myData);
	for (r = 0; r < 4; r++) {
		moveTopInRow(r);
	}
	let after = String(gameMain.myData);
	if (before != after) {
		randomNum();
		if (isgameOver()) {
			gameMain.status = gameMain.gameOver;
		}
		dataChange();
	}
}

moveTopInRow = (r) => {
	for (c = 0; c < 3; c++) {
		let next = TopgetNEXTinRow(r, c);
		if (next != -1) {
			if (gameMain.myData[c][r] == 0) {
				gameMain.myData[c][r] = gameMain.myData[next][r];
				gameMain.myData[next][r] = 0;
				c++;
			}
			else if (gameMain.myData[c][r] == gameMain.myData[next][r]) {
				gameMain.myData[c][r] *= 2;
				gameMain.myData[next][r] = 0;
				gameMain.score += gameMain.myData[c][r];
			}
		}
		else {
			break;
		}
	}
}

TopgetNEXTinRow = (r, c) => {
	for (i = c + 1; i < 4; i++) {
		if (gameMain.myData[i][r] != 0) {
			return i;
		}
	}
	return -1;
}

moveBottom = () => {
	let before = String(gameMain.myData);
	for (r = 0; r < 4; r++) {
		moveBottomInRow(r);
	}
	let after = String(gameMain.myData);
	if (before != after) {
		randomNum();
		if (isgameOver()) {
			gameMain.status = gameMain.gameOver;
		}
		dataChange();
	}
}

moveBottomInRow = (r) => {
	for (c = 3; c > 0; c--) {
		let next = BottomgetNEXTinRow(r, c);
		if (next != -1) {
			if (gameMain.myData[c][r] == 0) {
				gameMain.myData[c][r] = gameMain.myData[next][r];
				gameMain.myData[next][r] = 0;
				c++;
			}
			else if (gameMain.myData[c][r] == gameMain.myData[next][r]) {
				gameMain.myData[c][r] *= 2;
				gameMain.myData[next][r] = 0;
				gameMain.score += gameMain.myData[c][r];
			}
		}
		else {
			break;
		}
	}
}

BottomgetNEXTinRow = (r, c) => {
	for (i = c - 1; i >= 0; i--) {
		if (gameMain.myData[i][r] != 0) {
			return i;
		}
	}
	return -1;
}

document.onkeydown = function (event) {
	var event = event || e || arguments[0];
	if (event.keyCode == 37) {
		moveLeft();
	}
	else if (event.keyCode == 38) {
		moveTop();
	}
	else if (event.keyCode == 39) {
		moveRight();
	}
	else if (event.keyCode == 40) {
		moveBottom();
	}
}
