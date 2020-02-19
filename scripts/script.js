function showPopup(e) {
	var popupWrapper = document.getElementById("popup-wrapper");
	popupWrapper.style.zIndex = "9";
	popupWrapper.style.opacity = "1";
}

var popupWrapper = document.getElementById("popup-wrapper").addEventListener("click",  function closePopup(event) {
	var popupWrapper = document.getElementById("popup-wrapper");
    var closeBtn = event.target.id;
    if (closeBtn !== "popup-wrapper") {
    return;
    }
    else {
    	popupWrapper.style.zIndex = "-9999";
		popupWrapper.style.opacity = "0"
    }
});




