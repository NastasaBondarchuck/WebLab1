document.getElementById('work__css').style.display = 'none';
document.getElementById('work__canvas').style.display = 'none';
var canvas = document.getElementById('canvas');
var rect = canvas.getContext('2d');
var x, y, offset, side, interval;

//Canvas Animation
function StartCanvas(){
    localStorage.clear();
    document.getElementById('left__block__content').style.display = 'none';
    document.getElementById('work__canvas').style.display = 'grid';
    document.getElementById('canvas__stop').style.display = 'none';
    document.getElementById('canvas__reload').style.display = 'none';
    document.getElementById('canvas').height = document.querySelector('.canvas__anim').clientHeight;
    document.getElementById('canvas').width = document.querySelector('.canvas__anim').clientWidth;
    rect.fillStyle = '#000080';
    x = canvas.width/2 - 5;
    y = canvas.height/2 - 5;
    side = 'right';
    offset = 1;
    rect.fillRect(x,  y, 10, 10);
    AddToStorage('Canvas', '(Canvas) Work was opened at ');

}
function StartCanvasAnim(){
    document.getElementById('canvas__start').style.display = 'none';
    document.getElementById('canvas__stop').style.display = 'block';
    interval = setInterval(CanvasMove, 100);
    AddToStorage('Canvas', '(Canvas) Animation was started at ');
}

function CanvasMove(){
    rect.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    rect.fillStyle = "#000080";
    rect.fillRect(x,y,10,10);
    if (side === 'right'){
        x += offset;
        side = 'down';
    }
    else if (side === 'down'){
        y += offset;
        side = 'left';
    }
    else if (side === 'left'){
        x -= offset;
        side = 'up';
    }
    else if (side === 'up'){
        y -= offset;
        side = 'right';
    }
    offset++;
    if (x === 0 || (x + 10) === canvas.clientWidth || y === 0 || (y + 10) === canvas.clientHeight){
        document.getElementById('canvas__stop').style.display = 'none';
        document.getElementById('canvas__reload').style.display = 'block';
        AddToStorage('Canvas', '(Canvas) Square taught the canvas at ');
    }
    if ((x+10) <= 0 || x === canvas.clientWidth || (y+10) <= 0 || y === canvas.clientHeight){
        clearInterval(interval);
        document.getElementById('canvas__stop').style.display = 'none';
        document.getElementById('canvas__reload').style.display = 'block';
        AddToStorage('Canvas', '(Canvas) Square was out of the canvas at ');
    }
}
function StopCanvasAnim(){
    document.getElementById('canvas__stop').style.display = 'none';
    document.getElementById('canvas__start').style.display = 'block';
    clearInterval(interval);
    AddToStorage('Canvas', '(Canvas) Animation was stopped at ');
}
function ReloadCanvas(){
    document.getElementById('canvas__reload').style.display = 'none';
    document.getElementById('canvas__start').style.display = 'block';
    clearInterval(interval);
    x = canvas.width/2 - 5;
    y = canvas.height/2 - 5;
    offset = 1;
    side = 'right';
    rect.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    rect.fillStyle = "#000080";
    rect.fillRect(x,y,10,10);
    AddToStorage('Canvas', '(Canvas) Animation was reloaded at ');
}
function CloseCanvas(){
    document.getElementById('work__canvas').style.display = 'none';
    document.getElementById('left__block__content').style.display = 'block';
    AddToStorage('Canvas', '(Canvas) Work was closed at ');
    document.getElementById('result').innerHTML += localStorage.getItem('Canvas')
}
function AddToStorage(key, value){
    let today = new Date();
    let now = today.toLocaleTimeString('en-US');
    let current;
    if (localStorage.getItem(key) !== null){
        current = localStorage.getItem(key);
        current += value + now + '<br>';
    }
    else{
        current = value + now + '<br>';
    }
    localStorage.setItem(key,current);
    if (key === 'Canvas'){
        document.getElementById('canvas__message').innerHTML = value + now;
    }
    else if (key === 'CSS'){
        document.getElementById('css__message').innerHTML = value + now;
    }

}

//CSS Animation
function StartCss(){
    localStorage.clear();
    document.getElementById('left__block__content').style.display = 'none';
    document.getElementById('work__css').style.display = 'grid';
    document.getElementById('css__stop').style.display = 'none';
    document.getElementById('css__reload').style.display = 'none';
    x = document.getElementById('css__anim').clientWidth / 2 - 5;
    y = document.getElementById('css__anim').clientHeight / 2 - 5;
    side = 'right';
    offset = 1;
    document.getElementById('square').style.left = x + 'px';
    document.getElementById('square').style.top = y + 'px';
    AddToStorage('CSS', '(CSS) Work was opened at ');
}
function StartCssAnim(){
    document.getElementById('css__start').style.display = 'none';
    document.getElementById('css__stop').style.display = 'block';
    interval = setInterval(CssMove, 100);
    AddToStorage('CSS', '(CSS) Animation was started at ');
}
function CssMove(){
    document.getElementById('square').style.left = x + 'px';
    document.getElementById('square').style.top = y + 'px';
    if (side === 'right'){
        x += offset;
        side = 'down';
    }
    else if (side === 'down'){
        y += offset;
        side = 'left';
    }
    else if (side === 'left'){
        x -= offset;
        side = 'up';
    }
    else if (side === 'up'){
        y -= offset;
        side = 'right';
    }
    offset++;
    if (x === 0 || (x + 10) === document.getElementById('css__anim').clientWidth
        || y === 0 || (y + 10) === document.getElementById('css__anim').clientHeight){
        document.getElementById('css__stop').style.display = 'none';
        document.getElementById('canvas__reload').style.display = 'block';
        AddToStorage('CSS', '(CSS) Square taught the canvas at ');
    }
    if ((x+10) <= 0 || x === document.getElementById('css__anim').clientWidth
        || (y+10) <= 0 || y === document.getElementById('css__anim').clientHeight){
        clearInterval(interval);
        document.getElementById('css__stop').style.display = 'none';
        document.getElementById('css__reload').style.display = 'block';
        AddToStorage('CSS', '(CSS) Square was out of the canvas at ');
    }
}
function StopCssAnim(){
    document.getElementById('css__stop').style.display = 'none';
    document.getElementById('css__start').style.display = 'block';
    clearInterval(interval);
    AddToStorage('CSS', '(CSS) Animation was stopped at ');
}
function ReloadCss(){
    document.getElementById('css__reload').style.display = 'none';
    document.getElementById('css__start').style.display = 'block';
    clearInterval(interval);
    x = document.getElementById('css__anim').clientWidth / 2 - 5;
    y = document.getElementById('css__anim').clientHeight / 2 - 5;
    side = 'right';
    offset = 1;
    document.getElementById('square').style.left = x + 'px';
    document.getElementById('square').style.top = y + 'px';
    AddToStorage('CSS', '(CSS) Animation was reloaded at ');
}
function CloseCss(){
    document.getElementById('work__css').style.display = 'none';
    document.getElementById('left__block__content').style.display = 'block';
    AddToStorage('CSS', '(CSS) Work was closed at ');
    document.getElementById('result').innerHTML += localStorage.getItem('CSS')
}
