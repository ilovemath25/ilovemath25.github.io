// index
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

// project
function show_more(sectionIndex, data, buttonClass){
   var project = document.querySelectorAll(".project")[sectionIndex];
   document.querySelector(buttonClass).style.display = "none";
   
   for(var i = 0; i < data.length; i++) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      var img = document.createElement("img");
      var p = document.createElement("p");
      li.style = "animation: 1s ease " + (0.2 * i) + "s 1 normal forwards running fade;";
      a.className = "view-project";
      a.setAttribute("onclick", "project_transition("+sectionIndex+","+(i+3)+",'"+data[i][1]+"')");
      a.textContent = "View";
      img.src = "./image/project/" + data[i][1] + ".jpg";
      img.height = "100";
      p.textContent = data[i][0];
      li.appendChild(a);
      li.appendChild(img);
      li.appendChild(p);
      project.appendChild(li);
   }
}

function show_more_1(){
   data = [
      ['Hotel Booking (2023)', 'hotel_booking'],
      ['Movie Recommender (2023)', 'movie_recommender'],
   ]
   show_more(0, data, ".show-more-1");
}

function show_more_2(){
   data = [
      ['Snake (2023)', 'snake'],
      ['XOXO (2022)', 'xoxo'],
   ]
   show_more(1, data, ".show-more-2");
}

function show_more_3(){
   data = []
   show_more(2, data, ".show-more-3");
}

document.addEventListener("DOMContentLoaded", ()=>{
   loadHTML('./template/header.html', 'header');
   loadHTML('./template/footer.html', 'footer');
});