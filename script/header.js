function undisplay_left_menu(){
   document.querySelector(".left-menu-space").style.display = "none";
   document.querySelector(".left-menu-nav").style.animation = "hidemenu 0.5s";
   document.querySelector(".left-menu-nav").addEventListener('animationend',() => {
      document.querySelector(".left-menu").style.display = "none";
   })
   document.querySelector("*").style.overflow = "";
}
function display_left_menu(){
   document.querySelector(".left-menu").style.display = "block";
   document.querySelector(".left-menu-space").style.display = "block";
   document.querySelector(".left-menu-nav").style.animation = "showmenu 0.5s";
   document.querySelector(".left-menu-nav").addEventListener('animationend',() => {
      document.querySelector(".left-menu").style.display = "block";
   })
   document.querySelector("*").style.overflow = "hidden";
}
window.addEventListener('pageshow', function(event) {
   if (event.persisted) window.location.reload();
});