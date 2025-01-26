function loadHTML(file, elementId) {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', file, true);
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
         const tempDiv = document.createElement('div');
         tempDiv.innerHTML = xhr.responseText;
         const basePath = file.includes('../') ? '../' : './';
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
            const newScript = document.createElement('script');
            newScript.src = script.getAttribute('src');
            document.body.appendChild(newScript);
         });
         document.getElementById(elementId).appendChild(tempDiv);
       }
   };
   xhr.send();
}