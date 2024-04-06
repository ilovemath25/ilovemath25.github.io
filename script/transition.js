function project_transition(index,link){
   const html = document.querySelector('html');
   const project = document.querySelectorAll('.project li')[index];
   html.style.overflow = 'hidden';
   var children = project.children;
   for(var i=0;i<children.length;i++){
      children[i].style.display='none';
   }
   project.style.animation = "project_trans 1s";
   window.setTimeout(function(){
      for(var i=0;i<children.length;i++){
         children[i].style.display='block';
      }
      html.style.overflow = 'visible';
      window.location.href = 'project/'+link+'.html';
   },600);
}
function home_transition(menu,index,link){
   const html = document.querySelector('html');
   if(menu==1){var nav = document.querySelectorAll('.nav-button')[index-1];}
   else if(menu==2){var nav = document.querySelectorAll('.nav-button-left')[index-1];}
   else if(menu==3){var nav = document.querySelectorAll('.circle-menu .nav-button')[index-1];}
   else if(menu==4){var nav = document.querySelectorAll('.mobile .nav-button')[index-1];}
   else if(menu==5){var nav = document.querySelectorAll('.back-button')[index-1];}
   console.log(nav);
   html.style.overflow = 'hidden';
   nav.style.zIndex = '200';
   nav.style.animation = "project_trans 1s";
   nav.style.cursor = "default";
   nav.innerHTML = "";
   window.setTimeout(function(){window.history.back();},300);
}
