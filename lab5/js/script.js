//Task 1
let headerLabel = document.getElementById("header__label").innerHTML;
let footerLabel = document.getElementById("footer__label").innerHTML;
document.getElementById("header__label").innerHTML = footerLabel;
document.getElementById("footer__label").innerHTML = headerLabel;

//Task 2
let a = 12;
let b = 16;
document.getElementById("rectangle__square").innerHTML =
    'The square of rectangle is ' + a * b + ', where a = ' + a + ' and b = ' + b;

ConfirmReload();
SetBoldness();
SetTables();

//Task 3
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
function ConfirmReload(){
    if (GetCookies('MinMax')!== undefined && GetCookies('MinMax')!== ""){
        if (confirm("Min and max number: " + GetCookies('MinMax') + "\nSave cookie? ") === true){
            confirm("There are cookies. Reload the page, please.")
        }
        else{
            document.cookie = "MinMax=; path=/; expires=-1";
            location.reload();
        }
    }
}

//Task 4
function MakeBold() {
    if (document.getElementById('normal__boldness').checked){
        document.getElementById('bold__text').style.fontWeight = 'normal';
    }
    else if (document.getElementById('bold__boldness').checked){
        document.getElementById('bold__text').style.fontWeight = 'bold';
    }
}
function SaveBoldness(){
    let boldness = document.getElementById('bold__text').style.fontWeight;
    localStorage.setItem("Boldness", boldness);
}
function SetBoldness(){
    if (localStorage.getItem('Boldness')){
        document.getElementById('bold__text').style.fontWeight = localStorage.getItem('Boldness');
    }
}

//Task 5
function AddTableRow(blockName){
    let row = document.createElement('tr');
    row.innerHTML = 'Another row of ' + blockName;
    row.className = blockName + "__row";
    document.getElementById(blockName).insertAdjacentElement("afterend", row);
}
function SaveTable(blockName){
    let rows = document.getElementsByClassName(blockName+'__row');
    let rows__string = "";
    for (let rowsKey of rows) {
        rows__string += new XMLSerializer().serializeToString(rowsKey);
    }
    localStorage.setItem(blockName, rows__string);
}
function SetTables(){
    let content = [];
    for (let i=0; i<localStorage.length; i++){
        if (localStorage.key(i).startsWith("table__")){
            content.push(localStorage.key(i));
        }
    }
    for (const contentKey of content) {
        document.getElementById(contentKey).innerHTML = localStorage.getItem(contentKey);
            // insertAdjacentElement("afterend", new DOMParser().parseFromString(localStorage.getItem(contentKey), 'text/html').getElementById(contentKey));
    }
}


function GetCookies(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

