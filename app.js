var glasses = 0;
var lastClickTime = 0;
var quotes = [
    '\"Even the heaviest door can be open.\" -Braum',
    '\"Fear is the first of many foes.\" -Garen',
    '\"If you hit a wall, hit it HARD!\" -Vi',
    '\"Stay Positive!\" -Lux',
    '\"The climb may be long, but the view is worth it.\" -Taric',
    '\"Even the smallest stone can start an avalanche.\" -Taliyah',
    '\"Every step is one step closer.\" -Poppy',
    '\"It\'s ok to be sad sometimes, that\'s how you know when you\'ll be happy!\" -Nunu',
    '\"Always trust in your spirit.\" -Karma',
    '\"It\'s not about how much time you have, it\'s how you use it.\" -Ekko',
    '\"All life is precious, yes... even yours.\" -Ivern',
    '\"No one said this would be easy.\" -Senna'
]

function getQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quotes").innerHTML = quotes[randomNumber];
};

function resetButton(){
    if(glasses != 0){
        getQuote();
    }
    glasses = 0;
    document.getElementById("glasses").innerHTML = glasses;
};

function subButton(){
    if(glasses >= 1){
        glasses = glasses - 1;
        document.getElementById("glasses").innerHTML = glasses;
        getQuote();
    }
};

function addButton(){
    glasses = glasses + 1;
    document.getElementById("glasses").innerHTML = glasses;
    if (new Date() - lastClickTime < 150){
        alert("Liquids are good for you, but drinking too fast isn't.");
    }
    lastClickTime =  new Date();
    getQuote();
};

function reminderDrink(){
    alert("Remember to take a sip of water.");
}

setInterval(reminderDrink, 600000)