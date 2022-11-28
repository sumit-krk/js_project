let flag=0;
slider_image(flag);

function slider_image(flag){
    let slider=document.getElementsByClassName('Image_slider')
    for(let x of slider){
        x.style.display="none";  
    }
    slider[flag].style.display="block";
}

function previous_image(x){
    flag=flag-1;
    slider_image(flag)
}

function next_image(y){
    flag=flag+1;
    slider_image(flag)
}