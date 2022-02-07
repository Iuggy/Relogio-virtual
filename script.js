
var msg = document.getElementById("msg")
var img = document.getElementById("foto")
var now = new Date()
var agora = now.getHours()
//agora = 19
function carregar(){
msg.innerHTML = "Agora são:" + agora + "horas"
if (agora >= 0 && agora <  12 ){
    img.src="manha.jpg"
    document.body.style.background = "#FF8C00"
}
    else if (agora >=12 && agora <= 18){ img.src="tarde.jpg"
    document.body.style.background = "#7B68EE"
}
else{   
    img.src="noite.jpg"
    document.body.style.background = "#4F4F4F"
}
}
carregar()

