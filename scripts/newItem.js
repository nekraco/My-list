let b = document.querySelector("body");


let [fr, ba, bu1, bu2] = createUniversalField(b, "back0", 2);
fr.innerHTML = "Creates a new item";
fr.style.background = "red";

bu1.addEventListener("click", function () {
	let wrap = crEl(b, "wrap");
	let [fr, ba, but0] = createUniversalField(b, "classBackItem", 2);
	wrap.appendChild(fr);
	wrap.appendChild(ba);
	//bindInputs("textarea");

	but0.addEventListener("click", function () {

		createUniversalField(wrap, "classBackText", 2);
		balancingSizesFrontBack();
		bindInputs("textarea");
		//console.log(FrontsAr)
		//console.log(BacksAr)
	})

})


function bindInputs(typeInput) {
	for (let i = 0; i < FrontsAr.length; i++) {
		console.log(456)
		BacksAr[i].addEventListener("dblclick", function (e) {
			e.stopPropagation();
			// let existingTextarea = FrontsAr[i].querySelector('textarea');
			// if (existingTextarea) {
			// 	// Если есть, фокусируемся на ней и выходим (или удали, если хочешь)
			// 	existingTextarea.focus();
			// 	return;
			// }

			let box = FrontsAr[i].innerHTML;
			console.log(box)
				//FrontsAr[i].innerHTML = '';
			let inp = createInput(FrontsAr[i], typeInput);
			//inp.value = box;
			//inp.addEventListener("dblclick", function () {
				//FrontsAr[i].innerHTML = inp.value;
				//console.log(inp.value)
				//this.remove();
			//})
		})
	}
}


function balancingSizesFrontBack() {
	for (let i = 0; i < BacksAr.length; i++) {
		frontFormatSizes(BacksAr[i], FrontsAr[i]);
	}
}


// let hi = document.querySelector("#hi");
// hi.addEventListener("click", function() {
//
// })
// hi.addEventListener("dblclick", function() {
// 	console.log(hi.value)
// })

//hi.style.background = "green"

// function ff(hi, xxxx) {
// 	   hi[xxxx] = 11;
// }

//ff(hi, 'innerHTML')


