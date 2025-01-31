function show_more_3(){
   data = []
   show_more(2, data, ".show-more-3");
}

loadHTML('header', 'headerHTML', './');
loadHTML('footer', 'footerHTML', './');

window.addEventListener("load", function() {
   document.querySelector("body").style.display = "block";
});