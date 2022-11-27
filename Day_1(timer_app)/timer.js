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
    hr=0;
    min=0;
    sec=0;
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

        let Strhr=hr;
        let Strmin=min;
        let Strsec=sec;
 
        if(sec<10){
            Strsec="0"+Strsec
        }
        if(min<10){
            Strmin="0"+Strmin
        }
        if(hr<10){
            Strhr="0"+Strhr  
        }

        showSec.innerHTML=Strsec;
        showMin.innerHTML=Strmin;
        ShowHr.innerHTML=Strhr;
        setTimeout("managetimefunc()",100)
    }

}