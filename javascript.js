
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTop").style.display = "block";
  } else {
    document.getElementById("btnTop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var popupShown = false;
window.onscroll = function() {
scrollFunction();
if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
if (!popupShown) {
var popup = document.getElementById("popup");
popup.style.display = "block";
popup.style.animation = "slidein 0.5s";
popupShown = true;
}
}
}

function closePopup() {
var popup = document.getElementById("popup");
popup.style.animation = "slideout 0.5s";
setTimeout(function(){
popup.style.display = "none";
}, 500);
}