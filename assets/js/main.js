window.addEventListener('load', function() {

var font;

function pickFont(){
    fonts = ["'Amatic SC', cursive","'Bebas Neue', cursive","'Dorsa', sans-serif","'Six Caps', sans-serif", "'Stint Ultra Condensed', cursive", "'Teko', sans-serif","'Wire One', sans-serif"]
    const random = Math.floor(Math.random() * fonts.length);
    return fonts[random];
};

function pickTitle(){
    titles = ['whole','some','cinema','club']
    const random = Math.floor(Math.random() * titles.length);
    return titles[random];
};

function changeFont(){
    document.getElementById(pickTitle()).style.fontFamily = pickFont();
};

function setAll(){
    font = pickFont();
    for (let e of document.getElementsByClassName("logo")) { e.style.fontFamily = font; }
};

function blinkyBill(){
    var blink = document.getElementById(pickTitle())
    blink.style.opacity = '0';
    setInterval(blink.style.opacity = '1', 1000)
    setInterval(blink.style.opacity = '0', 2000)
    setInterval(blink.style.opacity = '1', 3000)

}
allChanges = setInterval(setAll, 2000);

fontChanges = setInterval(changeFont, 5000);




  });