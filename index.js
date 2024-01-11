function myMenuFuncation(){
    var menu = document.querySelector('.nav-menu-list');
    var toggleButton = document.querySelector('.nav-menu-btn')

    toggleButton.addEventListener('click',()=>{
        menu.classList.toggle('active')
    })
}

const typingEffect = new Typed('.typedText',{
  strings:['Designer','Youtuber','Developer'],
  loop:true,
  typeSpeed:100,
  backSpeed:80,
  backdelay:2000
})

const sr = scrollReveal({
    origin:'top',
    distance:'200px',
    duration:2000,
    reset:true
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social-icons',{delay:200})
sr.reveal('.featured-image',{delay:200})

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const darkCircle = document.querySelector('.dark-circle');
    const isDarkMode = body.classList.contains('dark-mode');
    darkCircle.style.left = isDarkMode ? '0' : '5px'
    localStorage.setItem('darkMode', isDarkMode);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const darkCircle = document.querySelector('.dark-circle');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        darkCircle.style.right = '0';
    }
});
