let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor ="#FFFFFF";
tg.MainButton.color="#2cab37";

let item ="";

let btn1 = document.getElementById("btn1");
let btn1 = document.getElementById("btn2");
let btn1 = document.getElementById("btn3");
let btn1 = document.getElementById("btn4");
let btn1 = document.getElementById("btn5");
let btn1 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали канал 1!");
		item ="1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали канал 2!");
		item ="2";
		tg.MainButton.show();
	}
});
	
btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали канал 3!");
		item ="3";
		tg.MainButton.show();
	}
});
	
btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали канал 4!");
		item ="4";
		tg.MainButton.show();
	}
});
	
btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали канал 5!");
		item ="5";
		tg.MainButton.show();
	}
});
	
btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else{
		tg.MainButton.setText("Вы выбрали канал 6!");
		item ="6";
		tg.MainButton.show();
	}
});
	

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.inerText = `${tg.initDataUnsafe.user.first_name}
	${tg.initDataUnsafe.user.last_name}`;
	
usercard.appendChild(p);
