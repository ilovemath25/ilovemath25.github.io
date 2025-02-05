loadHTML('header', 'headerHTML', './');
loadHTML('footer', 'footerHTML', './');

document.addEventListener("DOMContentLoaded", function() {
   const recentProjects = [htmlProjects[htmlProjects.length - 1], pygameProjects[pygameProjects.length - 1], otherProjects[otherProjects.length - 1]];
   const projectList = document.querySelector('.project');
   recentProjects.forEach((project, index) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'view-project';
      a.textContent = 'View';
      a.setAttribute('onclick', `project_transition(0,${index},'${project[1]}', event)`);
      a.href = `./project/${project[1]}.html`;
      const img = document.createElement('img');
      img.src = `./image/project/${project[1]}.jpg`;
      img.alt = project[0];
      img.loading = "lazy";
      const p = document.createElement('p');
      p.textContent = project[0];
      li.appendChild(a);
      li.appendChild(img);
      li.appendChild(p);
      projectList.appendChild(li);
   });
});

window.addEventListener("load", function() {
   document.querySelector("body").style.display = "block";
});