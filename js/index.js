var btn = document.querySelector("#to-book");
var popup = document.querySelector(".modal-window");
var close = document.querySelector("#close");
var body = document.querySelector("body");
var overlay = document.querySelector(".modal-overlay");

btn.addEventListener("click", function (evt) {
	evt.preventDefault();
	overlay.style.display = "block";
	popup.style.display = "block";
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("close");
	popup.style.display = "none";
	overlay.style.display = "none";
})