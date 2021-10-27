document.getElementById('grayButton').onclick=switchGray;
document.getElementById('whiteButton').onclick=switchWhite;
document.getElementById('blueButton').onclick=switchBlue;
document.getElementById('yellowButton').onclick=switchYellow;
document.getElementById('purpleButton').onclick=switchPurple;
document.getElementById('skyButton').onclick=switchSky;
document.getElementById('greenButton').onclick=switchGreen;

function switchGray(){
    document.getElementsByTagName('body')[0].style.backgroundColor='gray';
    document.getElementsByTagName('body')[0].style.color='white';

}
function switchWhite(){
    document.getElementsByTagName('body')[0].style.backgroundColor='white';
    document.getElementsByTagName('body')[0].style.color='black';

}
function switchBlue(){
    document.getElementsByTagName('body')[0].style.backgroundColor='Blue';
    document.getElementsByTagName('body')[0].style.color='white';

}
function switchYellow(){
    document.getElementsByTagName('body')[0].style.backgroundColor='yellow';
    document.getElementsByTagName('body')[0].style.color='black';

}
function switchPurple(){
    document.getElementsByTagName('body')[0].style.backgroundColor='purple';
    document.getElementsByTagName('body')[0].style.color='white';

}
function switchSky(){
    document.getElementsByTagName('body')[0].style.backgroundColor='skyblue';
    document.getElementsByTagName('body')[0].style.color='black';

}
function switchGreen(){
    document.getElementsByTagName('body')[0].style.backgroundColor='green';
    document.getElementsByTagName('body')[0].style.color='black';

}
