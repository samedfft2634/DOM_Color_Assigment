const clickBtn = document.querySelector(".btn-click"); // onclick verilecek
const overBtn = document.querySelector(".btn-over"); // mouseover verilecek
const colorInput = document.querySelector("#colorInput"); // color inputu buraya renk yansitilacak
const colorText = document.querySelector("#colorText"); // color inputu buraya renk yansitilacak
const container = document.querySelector(".bgDiv");
const copyBtn = document.querySelector("#copy");

window.addEventListener("load", changeColor);
clickBtn.addEventListener("click", changeColor);
overBtn.addEventListener("mouseover", changeColor);
colorInput.addEventListener("input", () => {
	container.style.backgroundColor = colorInput.value;
});
document.querySelector("body").addEventListener("keyup", (e) => {
	e.key === "Enter" && changeColor();
});
copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(colorInput.value);
});

function changeColor() {
	let r = Math.floor(Math.random() * 256).toString(16);
	r.length == 1 ? (r = "0" + r) : r;
	let g = Math.floor(Math.random() * 256).toString(16);
	g.length == 1 ? (g = "0" + g) : g;
	let b = Math.floor(Math.random() * 256).toString(16);
	b.length == 1 ? (b = "0" + b) : b;
	let renk = `#${r}${g}${b}`;
	container.style.backgroundColor = renk;
	colorText.textContent = renk; // innerHTML yerine textContent kullanmak daha güvenlidir
	colorText.style.color = renk;
	colorInput.value = renk;
}

/* ====================== on click ====================== */
// clickBtn.addEventListener("click", () => {
// 	body.style.backgroundColor = changeColor();
// 	console.log(body.style.backgroundColor.valueOf()); // true
// 	colorText.innerText = body.style.backgroundColor.valueOf();
// 	colorText.style.color = body.style.backgroundColor.valueOf();
// });

/* ===================== mouse over ===================== */
// overBtn.addEventListener("mouseover", () => {
// 	body.style.backgroundColor = changeColor();
// 	colorText.innerText = body.style.backgroundColor.valueOf();
// 	colorText.style.color = body.style.backgroundColor.valueOf();
// });

/* ======================== input ======================= */
//  colorInput.addEventListener("input", () => {
// 	container.style.backgroundColor = colorInput.value;

//  });

/* ======================== enter ======================= */
// body.addEventListener("keyup", (event) => {
// 	if (event.key === "Enter") {
// 		body.style.backgroundColor = changeColor();
// 		colorText.innerText = body.style.backgroundColor.valueOf();
// 		colorText.style.color = body.style.backgroundColor.valueOf();
// 	}
// });
