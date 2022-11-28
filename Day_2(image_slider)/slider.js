var flag=0;
slider_image(flag);
function slider_image(num){
    let slider=document.getElementsByClassName('Image_slider')
    if(num==slider.length){
        flag=0;
        num=0;
    }
    if(num==-1){
        flag=3;
        num=3;
    }
    console.log("slider_flag",flag,"slider length",slider.length)
    for(let x of slider){
        x.style.display="none";  
    }
    slider[num].style.display="block";
}

function previous_image(x){
    flag=flag-1;
    slider_image(flag)
}

function next_image(y){
    flag=flag+1;
    slider_image(flag)
}