const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initial page load animations
window.addEventListener('load', () => {
    // Header animations
    gsap.from('.rounded-full', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('h3', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('h1', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });

    gsap.from('p', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.9,
        ease: 'power3.out'
    });

    gsap.from('.flex-col.sm\\:flex-row a', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        delay: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
    });
});

// Scroll animations
gsap.utils.toArray('.feminine-border').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Project cards animation
gsap.utils.toArray('#projects .group').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 50
                },
                ease: 'power3.inOut'
            });
        }
    });
});

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
    }
})

// -------- light mode and dark mode -----------

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }