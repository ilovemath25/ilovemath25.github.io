function show_more(){
   data = [
      ['XOXO (2023)','xoxo']
   ]
   var project = document.querySelectorAll(".project")[1];
   var showmore = document.querySelector(".show-more").style.display = "none";
   for(var i = 0; i < data.length; i++){
      var li = document.createElement("li");
      var a = document.createElement("a");
      var img = document.createElement("img");
      var p = document.createElement("p");
      li.style="animation: 1s ease "+(0.2*i)+"s 1 normal forwards running fade;"
      a.className = "view-project";
      a.setAttribute("onclick", "project_transition("+(i+6)+",'"+data[i][1]+"')");
      a.textContent = "View";
      img.src = "./image/project/"+data[i][1]+".jpg";
      img.height = "100";
      p.textContent = data[i][0];
      li.appendChild(a);
      li.appendChild(img);
      li.appendChild(p);
      project.appendChild(li);
   }
}