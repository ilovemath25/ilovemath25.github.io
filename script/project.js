loadHTML('header', 'subpageHeaderHTML', '../');
loadHTML('footer', 'footerHTML', '../');
window.addEventListener("load", function() {
   document.querySelector("body").style.display = "block";
});

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const project = projects[projectId];

if (!project) {
   document.body.innerHTML = "<h1>Project not found</h1>";
   throw new Error("Invalid project ID");
}

document.getElementById("project-title").textContent = project.title;
document.getElementById("project-description").textContent = project.description;

document.title = `${project.title} - Ilovemath25`;

// description
const metaDesc = document.createElement("meta");
metaDesc.name = "description";
metaDesc.content = project.description;
document.head.appendChild(metaDesc);

// Open Graph helper
function setOG(property, content) {
   const meta = document.createElement("meta");
   meta.setAttribute("property", property);
   meta.content = content;
   document.head.appendChild(meta);
}

setOG("og:title", `${project.title} - Ilovemath25`);
setOG("og:description", project.description);
setOG("og:type", "website");
setOG("og:url", window.location.href);
setOG("og:image", `../media/project/${project.id}/${project.id}.jpg` || "../media/profile.jpg");

const overviewSection = document.getElementById("overview-container");

project.overview.forEach(block => {
   const wrapper = document.createElement("div");
   wrapper.className = block.wrapper;

   const order = block.order || ["mobile", "pc"];

   order.forEach(key => {
      const media = block[key];
      if (!media) return;

      if (media.type === "img") {
         const img = document.createElement("img");
         img.src = media.src;
         img.className = `overview overview-${key} hidden`;
         wrapper.appendChild(img);
      } else {
         const video = document.createElement("video");
         video.src = media.src;
         video.autoplay = true;
         video.muted = true;
         video.loop = true;
         video.className = `overview overview-${key} hidden`;
         wrapper.appendChild(video);
      }
   });
   overviewSection.appendChild(wrapper);
});

document.getElementById("download-link").href = project.download;