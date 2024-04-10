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
function link_load(){
   if(localStorage.getItem("link")){
      var link = localStorage.getItem("link");
   }
   const about = document.getElementById("about-me");
   const project = document.getElementById("project");
   const contact = document.getElementById("contact");
   if(link=="#about-me"){
      about.scrollIntoView({behavior: "smooth"});
   }
   else if(link=="#project"){
      project.scrollIntoView({behavior: "smooth"});
   }
   else if(link=="#contact"){
      contact.scrollIntoView({behavior: "smooth"});
   }
   localStorage.clear();
}
function clear_local(){
   localStorage.clear();
}