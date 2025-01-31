function loadHTML(elementId, htmlFile, basePath) {
   const templates = {
      "headerHTML": "/template/header.html",
      "projectHeaderHTML": "/template/project_header.html",
      "footerHTML": "/template/footer.html"
   };
   fetch(templates[htmlFile] || htmlFile)
      .then(response => response.text())
      .then(html => {
         const tempDiv = document.createElement("div");
         tempDiv.innerHTML = html;
         tempDiv.querySelectorAll("img, link, script").forEach(el => {
            const attr = el.tagName === "LINK" ? "href" : "src";
            const path = el.getAttribute(attr);
            if (path && !path.startsWith("http") && !path.startsWith('/')) {
               el.setAttribute(attr, basePath + path);
            }
         });
         document.getElementById(elementId).innerHTML = tempDiv.innerHTML;
         tempDiv.querySelectorAll("script").forEach(oldScript => {
            const newScript = document.createElement("script");
            if (oldScript.src) newScript.src = oldScript.src;
            else newScript.textContent = oldScript.textContent;
            document.body.appendChild(newScript);
            oldScript.remove();
         });
         const targetElement = document.getElementById(elementId);
         targetElement.innerHTML = tempDiv.innerHTML;
         const hiddenElements = targetElement.querySelectorAll('.hidden');
         hiddenElements.forEach(el => showElementObserver.observe(el));
      })
      .catch(error => console.error('Error loading HTML:', error));
}