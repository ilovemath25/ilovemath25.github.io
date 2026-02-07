loadHTML('header', 'headerHTML', './');
loadHTML('footer', 'footerHTML', './');

function createProjectItem(project, sectionIndex, itemIndex) {
   const li = document.createElement("li");
   li.style = `animation: 1s ease ${0.2 * itemIndex}s forwards fade;`;

   const a = document.createElement("a");
   a.className = "view-project";
   a.textContent = "View";
   a.href = `/project/project.html?id=${project.id}`;
   a.setAttribute(
      "onclick",
      `project_transition(${sectionIndex}, ${itemIndex}, '${project.id}', event)`
   );

   const img = document.createElement("img");
   img.src = `./media/project/${project.id}/${project.id}.jpg`;
   img.alt = `${project.title} (${project.year})`;
   img.loading = "lazy";

   const p = document.createElement("p");
   p.textContent = `${project.title} (${project.year})`;

   li.append(a, img, p);
   return li;
}

document.addEventListener("DOMContentLoaded", () => {
   const recentProjects = ["html", "game", "AI"]
      .map(type =>
         Object.values(projects)
         .filter(p => p.type === type)
         .sort((a, b) => b.year - a.year)[0]
      )
      .filter(Boolean);

   const projectList = document.querySelector(".project");

   recentProjects.forEach((project, index) => {
      projectList.appendChild(
         createProjectItem(project, 0, index)
      );
   });
});

window.addEventListener("load", () => {
   document.body.style.display = "block";
});