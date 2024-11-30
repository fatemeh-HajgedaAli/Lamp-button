let  lampImage=document.querySelector('.lampImage')
let clickBtn=document.querySelector('.clickBtn')
let lampFlag=false

function turnOnOff(){
if(lampFlag){
    clickBtn.innerHTML="turn on"
    clickBtn.style.padding='15px'
    lampImage.setAttribute('src','pictures/offLamp.png')
    lampFlag=false
}else{
    clickBtn.innerHTML="turn off"
    lampImage.setAttribute('src','pictures/onLamp.png')
    lampFlag=true
}

}