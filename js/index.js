var btn 	   = document.querySelector(".header-main button"),
 	popup 	   = document.querySelector(".modal-window"),
 	close 	   = document.querySelector("#close"),
	overlay    = document.querySelector(".modal-overlay"),
	secBotBtn  = document.querySelector("#sec-page-bot-btn"),
  	bottomLink = document.querySelector("#bottom-link");

btn.addEventListener("click", function (evt) {
	evt.preventDefault();
	overlay.style.display = "block";
	popup.style.display = "block";
});

bottomLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	overlay.style.display = "block";
	popup.style.display = "block";
});

secBotBtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	overlay.style.display = "block";
	popup.style.display = "block";
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.style.display = "none";
	overlay.style.display = "none";
});