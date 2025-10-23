function crEl(parentEl, addClass) {
	let el = document.createElement("div");
	parentEl.appendChild(el);
	el.classList.add(addClass);
	return el;

}

function getCoords(el) {
	let arCoords = [];
	arCoords.push(el.offsetLeft + "px");
	arCoords.push(el.offsetTop + "px");
	return arCoords;
}

function getSizes(el) {
	let arSizes = [];
	//console.log(el.offsetWidth)
	arSizes.push(el.offsetWidth + "px");
	arSizes.push(el.offsetHeight + "px");
	return arSizes;
}


function frontFormatSizes(back, front) {
	let arSizes = getSizes(back);
	let arCoords = getCoords(back);
	//console.log(arSizes)
	front.style.width = arSizes[0];
	front.style.height = arSizes[1];
	front.style.left = arCoords[0];
	front.style.top = arCoords[1];
}

function frontFormat(back, front) {
	front.style.position = "absolute";
	front.style.pointerEvents = "none";
	front.style.textAlign = getComputedStyle(back).textAlign;
	frontFormatSizes(back, front)

	if (back.className !== "back0") {
		let [colorBackground, colorText] = formatColors();
		front.style.background = colorBackground;
		front.style.color = colorText;
	}

}

function buttonFormat(back, button, numButtons) {
	back.style.display = "flex";
	let arSizes = getSizes(back);
	let widthButton = parseInt(arSizes[0]) / numButtons;
	button.style.width = widthButton + "px";
	button.style.height = arSizes[1];
}



 let FrontsAr = [];
 let BacksAr = [];

function createUniversalField(parentEl, addClassBack, numButs) {
	let frontEl = crEl(parentEl, "11");
	let backEl = crEl(parentEl, addClassBack);
	FrontsAr.push(frontEl);
	BacksAr.push(backEl);
	frontFormat(backEl, frontEl);

	//frontEl.innerHTML = 555555;
	//frontEl.style.color = "white"
	//frontEl.style.background = "#127";

	let arElements = [frontEl, backEl];
	for (let i = 0; i < numButs; i++) {
		let button = crEl(backEl, "22");
		buttonFormat(backEl, button, numButs)
		arElements.push(button);
	}

	return arElements;
}



function createInput(parent, TextEl) {
	//crEl(parent, addClass)
	 //2console.log(123)
	let el = document.createElement(TextEl);
	//el.style.position = "absolute";
	 //el.classList.add("TextElement");
	parent.appendChild(el);
	//el.focus();
	//el.style.pointerEvents = "auto";
	//frontFormatSizes(parent, el)
	// if(TextEl === "input") {
	// 	switchTextEl("value");
	// } else if (TextEl === "textarea") {
	// 	switchTextEl("value", parent);
	// }
	// parent.appendChild(el);
	// frontFormatSizes(parent, el);
	//
	//  function switchTextEl(prop) {
	// 	  el[prop] = parent.innerHTML;
	// 		parent.innerHTML = '';
	//  }

	//  el.addEventListener("dblclick", function() {
	// 	 //el.innerHTML = "XXX"
	// 	 alert(this.innerHTML)
	//  })
	//
	// console.log(this)
	  // return el;
}


// function crFrontBack(parent,addClFront){
//     let frontEl=crEl(parent, addClFront);
//     formatFront(frontEl);
//     let arBB=crBack(parent,frontEl,2);
//
//     arBB.unshift(frontEl);
//     return arBB;
// }
//
// function crWrapFrontBack(parent,addClFront){
//     let wrap=crEl(parent, "wrap");
//     let arBB=crFrontBack(parent,addClFront);
//
//     return arBB;
//
// }
//
// function crBack(parent, front, numButs) {
// 	let backEl = crEl(parent, "back");
// 	formatBack(front, backEl);
//
// 	// let arBackBacks =[backEl];
// 	let firstButton;
// 	for (let i = 0; i < numButs; i++) {
// 		let backBack = crEl(backEl, "backBack" + (1 + i));
// 		formatBackBack(backEl, backBack, numButs);
// 		//arBackBacks.push(backBack);
// 		if (i === 0) {
// 			firstButton = backBack;
// 		}
// 	}
//
// 	return firstButton;
// }
//
// function crItem(parent, addClassFront) {
// 	let wrap = crEl(parent, "wrap");
// 	let frontEl = crEl(wrap, addClassFront);
// 	formatFront(frontEl);
// 	return crBack(wrap, frontEl, 2);
//
// }

/*

function crItem(parentEl,addClassFrontEl, numButs) {
    let frontEl = crEl(parentEl,addClassFrontEl);
    let backEl = crEl(parentEl, "backEl");
    formatBack(frontEl,backEl);
    
    let arBackBacks =[];
    for(let i=0;i<numButs;i++){
        let backBack=crEl(backEl, "backBack"); 
        formatBackBack(backEl, backBack, numButs);       
        arBackBacks.push(backBack);
    }
    //
    return arBackBacks;
}

function empty(){
    
}
function al1(){
    alert(1)
}
function al2(){
    alert(2)
}

function ff(x){
    return x + 1;
}
//alert(ff(4))

*/


//*************


function formatColors() {
	let arRes = []
	let st1 = "#"
	let st2 = "#"
	for (let i = 0; i < 3; i++) {
		let ar = getTwo(5);   // !!!!!!!!! менять цвета
		st1 += ar[0]
		st2 += ar[1]
	}
	arRes[0] = st1
	arRes[1] = st2
	return arRes


	function getTwo(n) {
		let arRes = []
		let ran = random(9);
		let ran2
		if (ran + n <= 9) {
			ran2 = ran + n
		} else {
			ran2 = ran + n - 9
		}
		arRes[0] = ran
		arRes[1] = ran2
		return arRes
	}

	function random(max) {
		return Math.floor(Math.random() * (max - 1));
	}
}

