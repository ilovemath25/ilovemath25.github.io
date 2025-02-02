function show_more(sectionIndex, data){
   var project = document.querySelectorAll(".project")[sectionIndex];
   for(var i = 0; i < data.length; i++) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      var img = document.createElement("img");
      var p = document.createElement("p");
      li.style = "animation: 1s ease " + (0.2 * i) + "s 1 normal forwards running fade;";
      a.className = "view-project";
      a.setAttribute("onclick", "project_transition("+sectionIndex+","+(i+3)+",'"+data[i][1]+"')");
      a.textContent = "View";
      img.src = "../image/project/" + data[i][1] + ".jpg";
      p.textContent = data[i][0];
      li.appendChild(a);
      li.appendChild(img);
      li.appendChild(p);
      project.appendChild(li);
   }
}

var htmlData = [], pygameData = [], otherData = [];
loadHTML('header', 'subpageHeaderHTML', '../');
loadHTML('footer', 'footerHTML', '../');

document.addEventListener("DOMContentLoaded", function() {
   var htmlProject = document.querySelector(".html-project");
   var pygameProject = document.querySelector(".pygame-project");
   var otherProject = document.querySelector(".other-project");
   [htmlProject, pygameProject, otherProject].forEach((container, index) => {
      if (index == 0) var data = htmlProjects.reverse();
      else if (index == 1) var data = pygameProjects.reverse();
      else var data = otherProjects.reverse();

      var lastThree = data.slice(0, 3);
      var rest = data.slice(3);

      if (index == 0) htmlData = rest;
      else if (index == 1) pygameData = rest;
      else otherData = rest;
      lastThree.forEach((project, i) => {
         var li = document.createElement("li");
         var a = document.createElement("a");
         var img = document.createElement("img");
         var p = document.createElement("p");
         li.style = "animation: 1s ease " + (0.2 * i) + "s 1 normal forwards running fade;";
         a.className = "view-project";
         a.setAttribute("onclick", "project_transition("+index+","+(i+3)+",'"+project[1]+"')");
         a.textContent = "View";
         img.src = "../image/project/" + project[1] + ".jpg";
         p.textContent = project[0];
         li.appendChild(a);
         li.appendChild(img);
         li.appendChild(p);
         container.appendChild(li);
      });
   });
   
   document.querySelectorAll(".show-more").forEach((button, index) => {
      button.addEventListener("click", function() {
         if (index == 0) show_more(0, htmlData);
         else if (index == 1) show_more(1, pygameData);
         else show_more(2, otherData);
         button.style.display = "none";
      });
   });
});

window.addEventListener("load", function() {
   document.querySelector("body").style.display = "block";
});