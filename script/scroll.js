function createObserver(callback, options) {
   return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) callback(entry.target);
      });
   }, options);
}

// Skills
const skillAnimation = (target) => {
   const imgArr = target.querySelectorAll('img');
   const nameArr = target.querySelectorAll('.skill-name');
   const barArr = target.querySelectorAll('.skill-bar');
   let delay = 0.2;

   imgArr.forEach((img, i) => {
      img.style.animation = `fade 1s forwards ${delay}s`;
      nameArr[i].style.animation = `loading 3s steps(40) forwards ${delay}s`;
      barArr[i].style.animation = `loading 3s forwards ${delay}s`;
      delay += 0.2;
   });
};

// Tools and projects
const staggeredAnimation = (elements) => {
   let delay = 0.2;
   elements.forEach((el) => {
      el.style.animation = `fade 1s forwards ${delay}s`;
      delay += 0.2;
   });
};

// Circle menu
const circleAnimation = (isIntersecting, target) => {
   const circleMenu = document.querySelector('.circle-menu');
   if (isIntersecting) {
      circleMenu.style.display = 'none';
      circleMenu.style.animation = 'showcircle 0.5s forwards';
   }
   else if (window.innerWidth >= 900) {
      circleMenu.style.display = 'block';
      circleMenu.style.animation = 'hidecircle 0.5s forwards';
   }
   else {
      circleMenu.style.display = 'none';
   }
};

const showElementObserver = createObserver((target) => target.classList.add('show'));
const showSkillObserver = createObserver(skillAnimation, { threshold: 0.3 });
const showToolObserver = createObserver((target) => staggeredAnimation(target.querySelectorAll('.tool')), { threshold: 0.8 });
const showProjectObserver = createObserver((target) => staggeredAnimation(target.querySelectorAll('li')), { threshold: 0.3 });
const showCircleObserver = createObserver(
   (target) => circleAnimation(true, target),
   { threshold: 1, rootMargin: '100px' }
);

window.addEventListener('load', () => {
   const hiddenElements = document.querySelectorAll('.hidden');
   hiddenElements.forEach((el) => showElementObserver.observe(el));

   if (!window.location.href.includes('project')) {
      showSkillObserver.observe(document.querySelector('.skill'));
      showToolObserver.observe(document.querySelector('.devtool'));
   }

   const hiddenProjects = document.querySelectorAll('.project');
   hiddenProjects.forEach((project) => showProjectObserver.observe(project));

   const hiddenCircle = document.querySelector('.normal');
   showCircleObserver.observe(hiddenCircle);

   window.addEventListener('resize', () => {
      showCircleObserver.unobserve(hiddenCircle);
      showCircleObserver.observe(hiddenCircle);
   });
});
