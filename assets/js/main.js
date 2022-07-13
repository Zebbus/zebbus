window.addEventListener('load', function() {

var font;
var site = document.getElementsByTagName('body')[0];
var dark = document.getElementById('darkmode');

function pickFont(){
    fonts = ['Aladin','Georgia','Amatic SC','Bebas Neue', 'Creepster','Limelight','Press Start 2P', 'Rubik Glitch', 'Special Elite']
    const random = Math.floor(Math.random() * fonts.length);
    return fonts[random];
};

function pickTitle(){
    titles = ['whole','some','cinema','club']
    const random = Math.floor(Math.random() * titles.length);
    return titles[random];
};

function changeFont(){
    document.getElementById(pickTitle()).style.fontFamily = font;
};

function setAll(){
    font = pickFont();
    console.log(font)
    for (let e of document.getElementsByClassName("logo")) { e.style.fontFamily = font; }
};

function darkMode(){
    console.log('why')
    if(site.classList.contains('darkmode')){
        site.classList.remove("darkmode");
        dark.innerHTML = 'dark_mode'; 
    }
    else {
        site.classList.add("darkmode");
        dark.innerHTML = 'light_mode';
    }
};

dark.onclick = function(){
    darkMode();
};

(function switchUpAll(){
    rand = Math.round(Math.random()*(5000-1000))+1000;
    setTimeout(function() {
        setAll();
        switchUpAll();  
    }, rand);
}());


  });