let headerLabel = document.getElementById("header__label").innerHTML;
let footerLabel = document.getElementById("footer__label").innerHTML;
document.getElementById("header__label").innerHTML = footerLabel;
document.getElementById("footer__label").innerHTML = headerLabel;

let a = 12;
let b = 16;
document.getElementById("rectangle__square").innerHTML =
    'The square of rectangle is ' + a * b + ', where a = ' + a + ' and b = ' + b;

ConfirmReload();

function MinMaxFind(array){
    let MinMax = [Number(array[0]), Number(array[0])];
    for (let i = 0; i < array.length; i++) {
        if(MinMax[0] > Number(array[i])){
            MinMax[0] = Number(array[i]);
        }
        else if(MinMax[1] < Number(array[i])){
            MinMax[1] = Number(array[i]);
        }
    }
    return MinMax;
}
function Calculating(){
    const array = document.getElementById("values__input").value.split(' ');
    let result = MinMaxFind(array);
    alert('Min number is ' + result[0] + ', Max number is ' + result[1])
    document.cookie = "MinMax=" + result + ";path=/";
}

function GetCookies(name){
    let cookies = document.cookie.split(';')
    for (const cookie in cookies) {
        if (cookie[0] === name){
            return cookie[1];
        }
    }
}
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function ConfirmReload(){
    if (getCookie('MinMax')!== undefined && getCookie('MinMax')!== ""){
        if (confirm("Min and max number: " + getCookie('MinMax') + "\nSave cookie? ") === true){
            confirm("There are cookies. Reload the page, please.")
        }
        else{
            document.cookie = "MinMax=; path=/; expires=-1";
            location.reload();
        }
    }
}




