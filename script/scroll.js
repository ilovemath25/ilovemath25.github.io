const showelement = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting){
         entry.target.classList.add('show');
      }
   });
});
const showskill = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if(entry.isIntersecting){
         var img_arr = entry.target.querySelectorAll('img');
         var name_arr = entry.target.querySelectorAll('.skill-name');
         var bar_arr = entry.target.querySelectorAll('.skill-bar');
         var j = 0.2;
         for (let i = 0; i < img_arr.length; i++) {
            const time = j.toString()+'s'
            const img = img_arr[i];
            const name = name_arr[i];
            const bar = bar_arr[i];
            img.style.animation = 'fade 1s forwards';
            img.style.animationDelay = time;
            name.style.animation = 'loading 3s steps(40) forwards';
            name.style.animationDelay = time;
            bar.style.animation = 'loading 3s forwards';
            bar.style.animationDelay = time;
            j=j+0.2;
         }
      }
   });
},{threshold:0.3});
const showtool = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if(entry.isIntersecting){
         var tool_arr = entry.target.querySelectorAll('.tool');
         var j = 0.2;
         for (let i = 0; i < tool_arr.length; i++) {
            const time = j.toString()+'s'
            const tool = tool_arr[i];
            tool.style.animation = 'fade 1s forwards';
            tool.style.animationDelay = time;
            j=j+0.2;
         }
      }
   });
},{threshold:0.8});
const showproject = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if(entry.isIntersecting){
         var tool_arr = entry.target.querySelectorAll('li');
         var j = 0.2;
         for (let i = 0; i < tool_arr.length; i++) {
            const time = j.toString()+'s'
            const tool = tool_arr[i];
            tool.style.animation = 'fade 1s forwards';
            tool.style.animationDelay = time;
            j=j+0.2;
         }
      }
   });
},{threshold:0.3});
const showcircle = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if(entry.isIntersecting){
         document.querySelector(".circle-menu").style.display = 'none';
         document.querySelector(".circle-menu").style.animation = 'showcircle 0.5s forwards' ;
      }
      else if((!entry.isIntersecting)&&(window.innerWidth>=900)){
         document.querySelector(".circle-menu").style.display = 'block';
         document.querySelector(".circle-menu").style.animation = 'hidecircle 0.5s forwards';
      }
      else{document.querySelector(".circle-menu").style.display = 'none';}
   });
},{threshold:1,rootMargin:"100px"});
const hiddenElements = document.querySelectorAll('.hidden');
if (window.location.href.includes("index")){
   const hiddenskill = document.querySelector(".skill");
   const hiddentool = document.querySelector(".devtool");
   showskill.observe(hiddenskill);
   showtool.observe(hiddentool);
}
const hiddencircle = document.querySelector(".normal");
hiddenElements.forEach((el) => showelement.observe(el));
showcircle.observe(hiddencircle);
const hiddenproject_arr = document.querySelectorAll(".project");
hiddenproject_arr.forEach((hiddenproject) => showproject.observe(hiddenproject));
window.addEventListener('resize',() => {
   showcircle.unobserve(hiddencircle);
   showcircle.observe(hiddencircle);
});
