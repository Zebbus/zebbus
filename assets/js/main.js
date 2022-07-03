window.addEventListener('load', function() {

var font;

function pickFont(){
    fonts = ["Georgia, serif","'Amatic SC', cursive","'Bebas Neue', cursive","'Dorsa', sans-serif","'Six Caps', sans-serif", "'Stint Ultra Condensed', cursive", "'Teko', sans-serif","'Wire One', sans-serif"]
    const random = Math.floor(Math.random() * fonts.length);
    return fonts[random];
};

function pickTitle(){
    titles = ['whole','some','cinema','club']
    const random = Math.floor(Math.random() * titles.length);
    return titles[random];
};

function changeFont(){
    font = pickFont();
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
    rand = Math.round(Math.random()*(10000-1000))+1000;
    setTimeout(function() {
        changeFont();
        switchUpFont();  
    }, rand);
}());

  });