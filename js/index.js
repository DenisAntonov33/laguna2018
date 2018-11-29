var btn 	   = document.querySelector(".header-main button"),
 	popup 	   = document.querySelector(".modal-window"),
 	close 	   = document.querySelector("#close"),
	overlay    = document.querySelector(".modal-overlay"),
  	bottomLink = document.querySelector("#bottom-link");

btn.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("open");
	overlay.classList.add("open");
});

bottomLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("open");
	overlay.classList.add("open");
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("open");
	overlay.classList.remove("open");
});

