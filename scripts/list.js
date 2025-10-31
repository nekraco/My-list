
let m = document.getElementById("main");


let fCreate = new Field(m, "cfCreate", 5, false, false);
fCreate.front.innerHTML = "Create an item";

//***************

fCreate.buts[0].addEventListener("dblclick", () => {
	let fName = new Field(m, "cfName", 3, true, true);

	fName.buts[0].addEventListener("dblclick", () => {
		let fText = new Field(fName.wrapField, "cfText", 3, false, true);
		fText.buts[1].addEventListener("dblclick", () => {
			fText.switchDisplayElement("textarea", "block");
			fText.textarea.focus();
		})
		fText.textarea.addEventListener("dblclick", () => {
			fText.switchDisplayElement("textarea", "none");
			fText.front.innerHTML = fText.textarea.value;
			
		})
	})

	//**************

	fName.buts[1].addEventListener("dblclick", () => {
		fName.switchDisplayElement("textarea", "block");
	})
	fName.textarea.addEventListener("dblclick", () => {
		fName.switchDisplayElement("textarea", "none");
		fName.front.innerHTML = fName.textarea.value;
	})

})

