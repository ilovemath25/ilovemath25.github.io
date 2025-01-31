var headerHTML = `
<link rel="stylesheet" href="./style/header.css">
<header>
   <nav class="left-menu">
      <aside class="left-menu-space" onclick="undisplay_left_menu()"></aside>
      <div class="left-menu-nav">
         <img src="./image/logo.png" height="30">
         <hr style="margin: 15px;">
         <a class="nav-button-left" onclick="home_transition('index.html')">
            <i class="fa fa-home nav-icon-left"></i><p class="nav-detail-left">Home</p>
         </a>
         <a class="nav-button-left" onclick="home_transition('content/about.html')">
            <i class="fa fa-user nav-icon-left"></i><p class="nav-detail-left">About</p>
         </a>
         <a href="#project" class="nav-button-left" onclick="undisplay_left_menu()">
            <i class="fa fas fa-file-alt nav-icon-left"></i><p class="nav-detail-left">Project</p>
         </a>
         <a href="#contact" class="nav-button-left" onclick="undisplay_left_menu()">
            <i class="fa fa-user-circle nav-icon-left"></i><p class="nav-detail-left">Contact</p>
         </a>
      </div>
   </nav>
   <nav class="normal">
      <label class="logo">
         <a class="logo-button"><img src="./image/logo.png" height="30"></a>
         <hr class="logo-button" style="height:20px;">
         <i class="fa-solid fa-bars logo-button" onclick="display_left_menu()"></i>
      </label>
      <div class="nav-bar">
         <a class="nav-button" style="animation-delay: 0.1s;" onclick="home_transition('index.html')">
            <i class="fa fa-home nav-icon"></i><p class="nav-detail">Home</p>
         </a>
         <a class="nav-button" style="animation-delay: 0.6s;" onclick="home_transition('content/about.html')">
            <i class="fa fa-user nav-icon"></i><p class="nav-detail">About</p>
         </a>
         <a href="#project" class="nav-button" style="animation-delay: 1.1s;">
            <i class="fa fas fa-file-alt nav-icon"></i><p class="nav-detail">Project</p>
         </a>
         <a href="#contact" class="nav-button" style="animation-delay: 1.6s;">
            <i class="fa fa-user-circle nav-icon"></i><p class="nav-detail">Contact</p>
         </a>
      </div>
   </nav>
   <nav class="mobile">
      <div class="nav-bar">
         <a class="nav-button" onclick="home_transition('index.html')">
            <i class="fa fa-home nav-icon"></i><p class="nav-detail">Home</p>
         </a>
         <a class="nav-button" onclick="home_transition('content/about.html')">
            <i class="fa fa-user nav-icon"></i><p class="nav-detail">About</p>
         </a>
         <a href="#project" class="nav-button" onclick="undisplay_left_menu()">
            <i class="fa fas fa-file-alt nav-icon"></i><p class="nav-detail">Project</p>
         </a>
         <a href="#contact" class="nav-button" onclick="undisplay_left_menu()">
            <i class="fa fa-user-circle nav-icon"></i><p class="nav-detail">Contact</p>
         </a>
      </div>
   </nav>
</header>
<script src="./script/header.js"></script>
`;
var projectHeaderHTML = `
<link rel="stylesheet" href="./style/header.css">
<header>
   <nav class="left-menu">
      <aside class="left-menu-space" onclick="undisplay_left_menu()"></aside>
      <div class="left-menu-nav">
         <img src="../image/logo.png" height="30">
         <hr style="margin: 15px;">
         <a class="nav-button-left" onclick="home_transition('../index.html')">
            <i class="fa fa-home nav-icon-left"></i><p class="nav-detail-left">Home</p>
         </a>
         <a class="nav-button-left" onclick="home_transition('content/about.html')">
            <i class="fa fa-user nav-icon-left"></i><p class="nav-detail-left">About</p>
         </a>
         <a class="nav-button-left" onclick="home_transition('#project')">
            <i class="fa fas fa-file-alt nav-icon-left"></i><p class="nav-detail-left">Project</p>
         </a>
         <a class="nav-button-left" onclick="home_transition('#contact')">
            <i class="fa fa-user-circle nav-icon-left"></i><p class="nav-detail-left">Contact</p>
         </a>
      </div>
   </nav>
   <nav class="normal">
      <label class="logo">
         <a href="/index.html" class="logo-button" onclick="clear_local()"><img src="../image/logo.png" height="30"></a>
         <hr class="logo-button" style="height:20px;">
         <i class="fa-solid fa-bars logo-button" onclick="display_left_menu()"></i>
      </label>
      <div class="nav-bar">
         <a class="nav-button" style="animation-delay: 0.1s;" onclick="home_transition('../index.html')">
            <i class="fa fa-home nav-icon"></i><p class="nav-detail">Home</p>
         </a>
         <a class="nav-button" style="animation-delay: 0.6s;" onclick="home_transition('content/about.html')">
            <i class="fa fa-user nav-icon"></i><p class="nav-detail">About</p>
         </a>
         <a class="nav-button" onclick="home_transition('#project')" style="animation-delay: 1.1s;">
            <i class="fa fas fa-file-alt nav-icon"></i><p class="nav-detail">Project</p>
         </a>
         <a class="nav-button" onclick="home_transition('#contact')" style="animation-delay: 1.6s;">
            <i class="fa fa-user-circle nav-icon"></i><p class="nav-detail">Contact</p>
         </a>
      </div>
   </nav>
   <nav class="mobile">
      <div class="nav-bar">
         <a class="nav-button" onclick="home_transition('../index.html')">
            <i class="fa fa-home nav-icon"></i><p class="nav-detail">Home</p>
         </a>
         <a class="nav-button" onclick="home_transition('content/about.html')">
            <i class="fa fa-user nav-icon"></i><p class="nav-detail">About</p>
         </a>
         <a class="nav-button" onclick="home_transition('#project')">
            <i class="fa fas fa-file-alt nav-icon"></i><p class="nav-detail">Project</p>
         </a>
         <a class="nav-button" onclick="home_transition('#contact')">
            <i class="fa fa-user-circle nav-icon"></i><p class="nav-detail">Contact</p>
         </a>
      </ul>
   </nav>
</header>
<script src="../script/header.js"></script>
`;
var footerHTML = `
<link rel="stylesheet" href="./style/footer.css">
<footer>
   <div class="footer-line" id="contact"></div>
   <section>
      <div class="sosmed">
         <a href="https://www.facebook.com/wesley.yansen.3/"><i class="fa-brands fa-facebook"></i></a>
         <a href="https://www.instagram.com/ilovemath2503/"><i class="fa-brands fa-instagram"></i></a>
         <a href="https://github.com/ilovemath25/"><i class="fa-brands fa-github"></i></a>
         <a href="mailto:ilovemath250@gmail.com"><i class="fa-regular fa-envelope"></i></a>
      </div>
      <p class="hidden">Made by Me</p>
      <p class="hidden">Wesley</p>
      <p>&copy; 2024 Ilovemath</p>
   </section>
   <img src="./image/signature.png" class="signature">
</footer>
`;
function loadHTML(elementId, HTML, basePath) {
   const tempDiv = document.createElement("div");
   tempDiv.innerHTML = window[HTML];
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
}