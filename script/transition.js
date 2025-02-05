function project_transition(idx,index,link){
   const project = document.querySelectorAll(".project")[idx].querySelectorAll('.project li')[index];
   const width = project.offsetWidth;
   const height = project.offsetHeight;
   project.style.width = `${width}px`;
   project.style.height = `${height}px`;
   project.style.opacity = '1';
   project.style.zIndex = "200"
   project.style.cursor = "default";
   project.innerHTML = "";
   project.style.animation = "project_trans 2s";
   window.setTimeout(function(){window.location.href = '../project/'+link+'.html';}, 700);
}
function home_transition(link, event){
   if (event) event.preventDefault();
   const animation = document.querySelector(".show-up-animation");
   animation.style.borderRadius = "0";
   animation.style.zIndex = '200';
   animation.style.animation = "none";
   animation.style.position = "fixed"
   animation.style.transform = "translateY(-800px)";
   animation.style.animation = "project_trans 3s";
   window.setTimeout(function(){window.location.href = link;},700);
}