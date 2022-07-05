window.addEventListener('load', function() {

var font;

function pickFont(){
    fonts = ['Aladin','Georgia','Amatic SC','Bebas Neue','Monoton','Press Start 2P', 'Rubik Glitch', 'Stint Ultra Condensed', 'Teko', 'Wire One','Special Elite']
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

(function switchUpAll(){
    rand = Math.round(Math.random()*(5000-1000))+1000;
    setTimeout(function() {
        setAll();
        switchUpAll();  
    }, rand);
}());

(function switchUpFont(){
    rand = Math.round(Math.random()*(10000-2000))+2000;
    setTimeout(function() {
        changeFont();
        switchUpFont();  
    }, rand);
}());

  });