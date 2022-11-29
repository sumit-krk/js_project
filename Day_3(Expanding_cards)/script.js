let panels=document.querySelectorAll('.panel')
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActionClasses()
        panel.classList.add('active')
    })
})

function removeActionClasses(){
    panels.forEach((panels)=>{
        panels.classList.remove('active');
    })
}