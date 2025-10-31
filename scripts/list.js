



let fCreate = new Field(m, "cfCreate", 5, false);
fCreate.front.innerHTML = "Create an item";

//***************

fCreate.buts[0].addEventListener("dblclick", () => {
	let fName = new Field(m, "cfName", 3, true);

	fName.buts[0].addEventListener("dblclick", () => {
		let fText = new Field(fName.wrapField, "cfText", 3, false);

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

