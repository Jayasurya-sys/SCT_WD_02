const number=document.getElementById("number");
let timer=null;
let starttime=0;
let eltime=0;
let isrun=false;
var lapnum=document.getElementById("lapcontainer");

function begin(){
    if(!isrun){
        starttime=Date.now()-eltime;
        timer=setInterval(update,10)
        isrun=true;
    }
}
function end(){
    if(isrun){
        clearInterval(timer);
        isrun=false;
    }
}
function reset(){
    clearInterval(timer);
starttime=0;
eltime=0;
isrun=false;
number.textContent="00:00:00:00"
lapnum.textContent=" ";
}
function update(){
    const currrenttime=Date.now();
    eltime=currrenttime-starttime;
    let hr=Math.floor(eltime/(1000*60*60));
    let min=Math.floor(eltime/(1000*60)%60);
    let sec=Math.floor(eltime/(1000)%60);
    let misec=Math.floor(eltime%1000/10);
    hr=String(hr).padStart(2,"0");
    min=String(min).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    misec=String(misec).padStart(2,"0");
    number.textContent=`${hr}:${min}:${sec}:${misec}`;
}
function lap(){
    var lapnum=document.getElementById("lapcontainer");
    var lapnumber=number.textContent;
    var lapline=document.createElement("div");
    lapline.textContent=lapnumber;
    lapline.style.fontSize="2rem";
   lapnum.append(lapline);
}