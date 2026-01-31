loadHTML('header', 'subpageHeaderHTML', '../');
loadHTML('footer', 'footerHTML', '../');

document.addEventListener("DOMContentLoaded", function() {
   const skillList = document.querySelector('.skill-and-devtool .skill');
   const toolList = document.querySelectorAll('.skill-and-devtool .devtool li')[1];
   for (const skill in skills) {
      const skillItem = document.createElement('li');
      skillItem.className = 'skill-item';
      skillItem.innerHTML = `
         <img src="../media/skill/${skill.toLowerCase()}.png" height="45" class="skill-icon" alt="${skill}">
         <data>
            <p class="skill-name">${skill}</p>
            <div class="skill-bar-background" style="background-color: #343434;">
               <div class="skill-bar" style="max-width: ${skills[skill]};">
                  <mark>${skills[skill]}</mark>
               </div>
            </div>
         </data>`;
      skillList.appendChild(skillItem);
   }
   for (const tool of tools) {
      const toolItem = document.createElement('div');
      toolItem.className = 'devtool-item';
      toolItem.innerHTML = `
         <div class="tool">
            <div class="tool-item">
               <img src="../media/tool/${tool[1]}.png" height="45" class="tool-image" alt="${tool[0]}">
               <p class="tool-name">${tool[0]}</p>
            </div>
         </div>`;
      toolList.appendChild(toolItem);
   }
});

window.addEventListener("load", function() {
   document.querySelector("body").style.display = "block";
});