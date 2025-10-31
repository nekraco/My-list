let m = document.getElementById("main");

class Field {
	constructor(parent, addClassField, numButs, composite, autoColor) {
		this.classWraperField = "cWrapField";
		this.createUniversalField(parent, addClassField, numButs, composite);
		this.cssStylesField = getComputedStyle(this.back);
		//this.splitFrontBack();
		this.frontsFormatAll();
		if (autoColor) {
			this.frontFormatColor();
		}

		this.buts = Array.from(this.back.children);
		for (let i = 0; i < this.buts.length; i++) {
			this.buttonFormat(this.buts[i], numButs);
		}

	}

	splitFrontBack() {
		let ww = parseInt(this.cssStylesField.width) - 500;   // Наглядное разделение back и front
		this.front.style.width = ww + "px";
		this.front.style.border = "solid 2px red";
	}

	createElement(parent, addClass, type) {
		let el = document.createElement(type);
		parent.appendChild(el);
		el.classList.add(addClass);
		return el;
	}

	frontsFormatAll() {
		let wrapsField = document.getElementsByClassName(this.classWraperField);
		for (let i = 0; i < wrapsField.length; i++) {
			let front = wrapsField[i].children[0];
			let back = wrapsField[i].children[1];
			frontFormatCoords(front, back);
		}

		function frontFormatCoords(front, back) {
			front.style.left = back.offsetLeft + "px";
			front.style.top = back.offsetTop + "px";
		}
	}

	frontFormatColor() {
		let [col1, col2] = formatColors();
		this.front.style.color = col1;
		this.front.style.background = col2;
	}


	specialFormat() {
		this.front.style.position = "absolute";
		this.front.style.zIndex = "1";
		this.front.style.pointerEvents = "none";
		this.back.style.display = "flex";
		this.textarea.style.position = "absolute";
		this.textarea.style.zIndex = "2";
		this.textarea.style.top = "0px";
		this.textarea.style.left = "0px";

	}

	buttonFormat(button, numButtons) {
		let widthButton = parseInt(this.cssStylesField.width) / numButtons;
		button.style.width = widthButton + "px";
		button.style.height = this.cssStylesField.height;
	}

	switchDisplayTextarea(statusValue) {
		this.textarea.style.display = statusValue;
	}

	//composite === true, значит является составным элементом, в том смысле, что в него будут
	// вставляться другие
	createUniversalField(parent, addClassField, numButs, compositeField) {
		let parentField;
		if (compositeField) {
			parentField = this.createElement(parent, "cWrap", "div");
		} else {
			parentField = parent;
		}
		this.wrapField = this.createElement(parentField, this.classWraperField, "div");
		this.front = this.createElement(this.wrapField, addClassField, "div");
		this.back = this.createElement(this.wrapField, addClassField, "div");
		this.front.classList.add("cF");
		this.back.classList.add("cB");

		this.textarea = this.createElement(this.wrapField, "cTextarea", "textarea");
		this.specialFormat();
		this.switchDisplayTextarea("none");


		for (let i = 0; i < numButs; i++) {
			this.createElement(this.back, "cBut", "div");

		}
	}

	getBrothers(el) {
		let parent = el.parentElement;
		let allChildren = Array.from(parent.children);
		let siblings = allChildren.filter(child => child !== el);
	}
}

function formatColors() {
	let arRes = [];
	let st1 = "#";
	let st2 = "#";
	for (let i = 0; i < 3; i++) {
		let ar = getTwo(8);   // !!!!!!!!! менять цвета
		st1 += ar[0];
		st2 += ar[1];
	}
	arRes[0] = st1;
	arRes[1] = st2;
	return arRes;


	function getTwo(n) {
		let max = 15;
		let arRes = [];
		let ran = random(max);
		let ran2;
		if (ran + n <= max) {
			ran2 = ran + n;
		} else {
			ran2 = ran + n - max;
		}
		arRes[0] = convertDecInHex(ran);
		arRes[1] = convertDecInHex(ran2);
		return arRes;
	}

	function random(max) {
		return Math.floor(Math.random() * (max - 1));
	}
}


function convertDecInHex(num) {
	let objConvert = {"a": 10, "b": 11, "c": 12,  "d": 13,  "e": 14,  "f": 15};

	if (num < 10) {
		return num;
	} else {
		for (let key in objConvert) {
			if (num === objConvert[key]) {
				return key;
			}
		}
	}
}
