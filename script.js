var css=document.querySelector('h3');
var clr1=document.querySelector('.color1');
var clr2=document.querySelector('.color2');
var body=document.getElementById('gradient');
var btn=document.getElementById('random');

function defaultClr (){
	body.style.background='linear-gradient(to right, #00ff00 , #ff0000)';
	css.textContent=body.style.background;
}

defaultClr();

function clrControl(){
	body.style.background="linear-gradient(to right,"+clr1.value+","+clr2.value+")";
	css.textContent = body.style.background+";";
}

function randomClr (){
	var rightclr="#"+Math.floor(Math.random()*16777215).toString(16);
	var leftclr="#"+Math.floor(Math.random()*16777215).toString(16);
	body.style.background="linear-gradient(to right , "+rightclr+" , "+leftclr+")";
	css.textContent=body.style.background+";";
}

btn.addEventListener('click', randomClr);
clr1.addEventListener('input',clrControl);
clr2.addEventListener('input',clrControl);