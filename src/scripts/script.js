let opacityControl1 = 0;
let opacityControl2 = 0;
let itemNumber = "";

let menuHeightControl = 50;

function teammate1info(){
		let Interval1 = setInterval(function tick1() {
			 if(document.querySelector("#teammate-1-info").style.opacity == 1){clearInterval(Interval1);}
	        else{
	          document.querySelector("#teammate-1-info").style.opacity = opacityControl1;
	          opacityControl1 += 0.1;
	        }
		},100);
		//
}

function teammate2info(){
		let Interval2 = setInterval(function tick2() {
			 if(document.querySelector("#teammate-2-info").style.opacity == 1){clearInterval(Interval2);}
	        else{
	          document.querySelector("#teammate-2-info").style.opacity = opacityControl2;
	          opacityControl2 += 0.1;
	        }
		},100);
		//
}

function menuButton1(){
	menuListHeightControl();
	menuToDefault();

	document.querySelector("#menu-button-1").style.background = "white";
	document.querySelector("#menu-button-1").style.color = "black";
	document.querySelector("#menu-button-1").style.width = "650px";

	document.querySelector(".menu").style.width = "950px";

	setTimeout(() => {document.querySelector(".training").style.display = "flex";}, 750); 
}

function menuButton2(){
	menuListHeightControl();
	menuToDefault();

	document.querySelector("#menu-button-2").style.background = "white";
	document.querySelector("#menu-button-2").style.color = "black";
	document.querySelector("#menu-button-2").style.width = "650px";

	document.querySelector(".menu").style.width = "950px";

	setTimeout(() => {document.querySelector(".item-list").style.display = "flex";}, 750); 
}

function menuToDefault(){
	document.querySelector("#menu-button-1").style.background = "black";
	document.querySelector("#menu-button-1").style.color = "white";
	document.querySelector("#menu-button-1").style.width = "200px";

	document.querySelector("#menu-button-2").style.background = "black";
	document.querySelector("#menu-button-2").style.color = "white";
	document.querySelector("#menu-button-2").style.width = "200px";

	document.querySelector(".menu").style.width = "500px";

	document.querySelector(".training").style.display = "none";
	document.querySelector(".item-list").style.display = "none";
}

function buttonEvent1(){
	let event1 = "КЕРАМІКА | ";
	for(let i = 1;i<=5;i++){
		event1 += document.querySelector("#training-block-1").children[i].value + " | ";
	}
	console.log(event1);
}

function buttonEvent2(){
	let event2 = "ГЛИНА | ";
	for(let i = 1;i<=5;i++){
		event2 += document.querySelector("#training-block-2").children[i].value + " | ";
	}
	console.log(event2);
}

function buttonEvent3(){
	let event3 = "ДЕКОРУВАННЯ | ";
	for(let i = 1;i<=5;i++){
		event3 += document.querySelector("#training-block-3").children[i].value + " | ";
	}
	console.log(event3);
}

function menuListHeightControl(){
	let MenuInterval = setInterval(function menuIntervalFunc() {
			if(document.querySelector(".menu-list").style.height == "600px"){clearInterval(MenuInterval);}
	        else{
	          document.querySelector(".menu-list").style.height = menuHeightControl + "px";
	          menuHeightControl += 50;
	          console.log(menuHeightControl)
	        }
		},20);
	menuHeightControl = 50;
}

function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}

function zakaz(el){
	document.querySelector("#item-list-line-1").style.display="none";
	document.querySelector("#item-list-line-2").style.display="none";
	document.querySelector(".zakaz").style.display="flex";
	itemNumber = el.id;
	document.querySelector("#itemNumberId").value = "#" + el.id;
}

function done(){
	if(document.querySelector("#nameZakaz").value != "" && document.querySelector("#phoneZakaz").value != ""){
		console.log(document.querySelector("#itemNumberId").value + " | " + document.querySelector("#nameZakaz").value + " | " + document.querySelector("#phoneZakaz").value);

		document.querySelector("#item-list-line-1").style.display="flex";
		document.querySelector("#item-list-line-2").style.display="flex";
		document.querySelector(".zakaz").style.display="none";

		document.querySelector("#nameZakaz").style.border = "0px"
		document.querySelector("#phoneZakaz").style.border = "0px"

		document.querySelector("#nameZakaz").value = "";
		document.querySelector("#phoneZakaz").value = "";
	}
	else{
		document.querySelector("#nameZakaz").style.border = "5px solid red"
		document.querySelector("#phoneZakaz").style.border = "5px solid red"
	}
}

function canceled(){
		document.querySelector("#item-list-line-1").style.display="flex";
		document.querySelector("#item-list-line-2").style.display="flex";
		document.querySelector(".zakaz").style.display="none";
}