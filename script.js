//script here 

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleicon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

function imageSetup(mode){
    image1.src = `svg/undraw_Coding_re_iv62_${mode}.svg`;
    image2.src = `svg/undraw_Landscape_mode_re_r964_${mode}.svg`;
    image3.src = `svg/undraw_Loading_re_5axr_${mode}.svg`;
}

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleicon.children[0].textContent = "Dark Mode";
    toggleicon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageSetup('light');
    
};

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleicon.children[0].textContent = "Light Mode";
    toggleicon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageSetup('dark');
}

function switchToDarkMode(input){
    if (input.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    }else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }

}

toggleSwitch.addEventListener('change', switchToDarkMode);