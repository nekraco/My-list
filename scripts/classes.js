let m = document.getElementById("main");

class Field {
	constructor(parent, addClassField, numButs) {    // autoColor = true/false
		this.createUniversalField(parent, addClassField, numButs);
		this.cssStylesField = getComputedStyle(this.back);

		//let ww = parseInt(this.cssStylesField.width) - 500;   // Наглядное разделение back и front
		//this.front.style.width = ww + "px";
		//this.front.style.border = "solid 2px red";

		let allF = document.getElementsByClassName("cF");  // Долго искал решение
		let allB = document.getElementsByClassName("cB");
		for (let i = 0; i < allF.length; i++) {
			this.frontFormatCoords(allB[i], allF[i]);
		}

		this.buts = Array.from(this.back.children);

		for (let i = 0; i < this.buts.length; i++) {
			this.buttonFormat(this.buts[i], numButs);
		}

	}

	createElement(parent, addClass, type) {
		let el = document.createElement(type);
		parent.appendChild(el);
		el.classList.add(addClass);
		return el;
	}

	frontFormatCoords(back, front) {
		this.x = back.offsetLeft + "px";
		this.y = back.offsetTop + "px";
		front.style.left = this.x;
		front.style.top = this.y;
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

	createUniversalField(parent, addClassField, numButs) {
		this.wrap = this.createElement(parent, "cWrap", "div");
		this.front = this.createElement(this.wrap, addClassField, "div");
		this.back = this.createElement(this.wrap, addClassField, "div");
		this.front.classList.add("cF");
		this.back.classList.add("cB");

		this.textarea = this.createElement(this.wrap, "cTextarea", "textarea");
		this.specialFormat();
		this.frontFormatCoords(this.back, this.front);
		this.switchDisplayTextarea("none");


		for (let i = 0; i < numButs; i++) {
			this.createElement(this.back, "cBut", "div");

		}
	}
}

//UUUUUUUUUUUUUUUU

let fCreate = new Field(m, "cfCreate", 5);
fCreate.front.innerHTML = "Create an item";

//***************

fCreate.buts[0].addEventListener("dblclick", () => {
	let fName = new Field(m, "cfName", 3);

	fName.buts[0].addEventListener("dblclick", () => {
		let fText = new Field(fName.wrap, "cfText", 3);

	})

	//**************

	fName.buts[1].addEventListener("dblclick", () => {
		fName.switchDisplayTextarea("block");
	})
	fName.textarea.addEventListener("dblclick", () => {
		fName.switchDisplayTextarea("none");
		fName.front.innerHTML = fName.textarea.value;
	})

})

