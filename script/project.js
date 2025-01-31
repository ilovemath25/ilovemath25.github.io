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
      ['Animaldoku (2024)', 'animaldoku'],
      ['Snake (2023)', 'snake'],
      ['XOXO (2022)', 'xoxo'],
   ]
   show_more(1, data, ".show-more-2");
}