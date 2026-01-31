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
   img.src = `../media/project/${project.id}/${project.id}.jpg`;
   img.alt = `${project.title} (${project.year})`;
   img.loading = "lazy";

   const p = document.createElement("p");
   p.textContent = `${project.title} (${project.year})`;

   li.append(a, img, p);
   return li;
}

document.addEventListener("DOMContentLoaded", () => {
   const main = document.getElementById("project-sections");
   const projectList = Object.values(projects);
   const groupedProjects = projectList.reduce((acc, p) => {
      acc[p.type] ??= [];
      acc[p.type].push(p);
      return acc;
   }, {});

   Object.values(groupedProjects).forEach(list =>
      list.sort((a, b) => b.year - a.year)
   );

   Object.entries(groupedProjects).forEach(([type, list], sectionIndex) => {
      // TITLE
      const label = document.createElement("label");
      label.className = "title-and-line";
      label.innerHTML = `
         <div class="title-line" style="background-image: linear-gradient(to right,#00000000,#de4040);"></div>
         <div class="title-title">${type.toUpperCase()} Project</div>
         <div class="title-line" style="background-image: linear-gradient(to right,#de4040,#00000000);"></div>
      `;
      main.appendChild(label);

      // ARTICLE
      const article = document.createElement("article");
      const ul = document.createElement("ul");
      ul.className = `project ${type}-project`;

      const firstThree = list.slice(0, 3);
      const rest = list.slice(3);

      firstThree.forEach((project, i) => {
         ul.appendChild(createProjectItem(project, sectionIndex, i));
      });

      article.appendChild(ul);

      // SHOW MORE
      if (list.length > 3) {
         const showMore = document.createElement("div");
         showMore.className = "show-more";
         showMore.innerHTML = `<hr><div>Show More</div><hr>`;

         showMore.addEventListener("click", () => {
         rest.forEach((project, i) => {
            ul.appendChild(createProjectItem(project, sectionIndex, i + 3));
         });
         showMore.remove();
         });

         article.appendChild(showMore);
      }

      main.appendChild(article);
   });
});

loadHTML('header', 'subpageHeaderHTML', '../');
loadHTML('footer', 'footerHTML', '../');
window.addEventListener("load", function() {
   document.querySelector("body").style.display = "block";
});