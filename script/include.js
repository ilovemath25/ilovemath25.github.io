function loadHTML(file, elementId) {
   const basePath = file.includes('../') ? '../' : './';
   fetch(file)
      .then(response => {
         if (!response.ok) throw new Error(`Failed to fetch ${file}`);
         return response.text();
      })
      .then(data => {
         const tempDiv = document.createElement('div');
         tempDiv.innerHTML = data;
         ['img[src]', 'link[href]', 'script[src]'].forEach(selector => {
            tempDiv.querySelectorAll(selector).forEach(el => {
               const attr = selector.includes('img') ? 'src' : 'href';
               const path = el.getAttribute(attr);
               if (path && !path.startsWith('http') && !path.startsWith('/')) {
                  el.setAttribute(attr, basePath + path);
               }
            });
         });
         tempDiv.querySelectorAll('script[src]').forEach(script => {
            const scriptPath = script.getAttribute('src');
            if (scriptPath) {
               const newScript = document.createElement('script');
               newScript.src = scriptPath.startsWith('http') || scriptPath.startsWith('/')
                    ? scriptPath
                    : basePath + scriptPath;
               document.body.appendChild(newScript);
            }
         });
         document.getElementById(elementId).appendChild(tempDiv);
      })
      .catch(error => console.error(error));
}