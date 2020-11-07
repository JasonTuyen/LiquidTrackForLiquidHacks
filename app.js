var glasses = 0;
var lastClickTime = 0;

function resetButton(){
    glasses = 0;
    document.getElementById("glasses").innerHTML = glasses;
};

function subButton(){
    if(glasses >= 1){
        glasses = glasses - 1;
        document.getElementById("glasses").innerHTML = glasses;
    }
};

function addButton(){
    glasses = glasses + 1;
    document.getElementById("glasses").innerHTML = glasses;
    if (new Date() - lastClickTime < 150){
        alert("Liquids are good for you, but drinking too fast isn't.");
    }
    lastClickTime =  new Date();
};