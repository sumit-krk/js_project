let hr=0;
let min=0;
let sec=0;
let manageTime=false;
let ShowHr=document.getElementById("hour");
let showMin=document.getElementById("minut");
let showSec=document.getElementById("second");
function Start(){
    manageTime=true;
    managetimefunc();
}

function Stop(){
    manageTime=false; 
}

function Reset(){
    manageTime=false;
    showSec.innerHTML='00';
    showMin.innerHTML='00';
    ShowHr.innerHTML='00'; 
}

function managetimefunc(){
    if(manageTime==true){
        sec=sec+1;
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }

        
        if(sec<10){
            sec="0"+sec
        }

        showSec.innerHTML=sec;
        showMin.innerHTML=min;
        ShowHr.innerHTML=hr;
        setTimeout("managetimefunc()",100)
    }

}