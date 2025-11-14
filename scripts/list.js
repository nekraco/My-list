let m = document.getElementById("main");
 let arrData = [
	 "aaaaaaaaaaaaaa",
	 "bbbbbbbbbbbbbb",
	 "cccccccccccccc",
	 "dddddddddddddd",
	 "eeeeeeeeeeeeeeeeeeeee"
 ]

let creatorOfNameFields = new Field(m, "cCreator", 2, "f", "f");
for (let i = 0; i < arrData.length; i++) {
	let nameField = new Field(m, "cName", 4, "t", "t");
	nameField.front.innerHTML = arrData[i];
	bind1(nameField)
}

creatorOfNameFields.buts[0].addEventListener("dblclick", function () {
	//let counterNoneBlock = 0;
	let nameField = new Field(m, "cName", 4, "t", "t");

	bind1(nameField);
	

	nameField.buts[1].addEventListener("dblclick", function () {

	})
})

let counterNoneBlock = 0;

function bind1(nameField) {
	nameField.buts[0].addEventListener("dblclick", function () {
		counterNoneBlock++;
		//let item = nameField.getItemOnButton(this);
		if (counterNoneBlock % 2 === 1) {
			nameField.displayAllExceptOne(nameField.wrap, "none");
			//nameField.buts[1].addEventListener("dblclick", createTextField);
		} else {
			nameField.displayAllExceptOne(nameField.wrap, "block");
		}
	})
}


//
// creatorOfNameFields.addTextToField("Create an item");

//***************

// fCreate.buts[0].addEventListener("dblclick", () => {
// 	let fName = new Field(m, "cfName", 3, true, true);
//
// 	fName.buts[0].addEventListener("dblclick", () => {
// 		let fText = new Field(fName.wrapField, "cfText", 3, false, true);
// 		fText.buts[1].addEventListener("dblclick", () => {
// 			fText.switchDisplayElement("textarea", "block");
// 			fText.textarea.focus();
// 		})
// 		fText.textarea.addEventListener("dblclick", () => {
// 			fText.switchDisplayElement("textarea", "none");
// 			fText.addTextToField(fText.textarea.value);
//
// 		})
// 	})
//
// 	//**************
//
// 	fName.buts[1].addEventListener("dblclick", () => {
// 		fName.switchDisplayElement("textarea", "block");
// 	})
// 	fName.textarea.addEventListener("dblclick", () => {
// 		fName.switchDisplayElement("textarea", "none");
// 		fName.front.innerHTML = fName.textarea.value;
// 	})
//
// })

