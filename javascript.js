function myFunction(x){
	x.classList.toggle("change")
	var y= document.getElementsByClassName("sidenav")[0].style.width;
  if(y=="70%"){
  	document.getElementById("Sidenav").style.width = "0%";
	document.getElementById("divone").style.backgroundColor = "#FFF0F3";
	document.getElementById('menuc').innerHTML="MENU";
	document.getElementById("divimg").style.backgroundImage="url(img/bg-style-1.jpg)";
    }else{
    document.getElementById("Sidenav").style.width = "70%";
	document.getElementById("divone").style.backgroundColor = "white";
	document.getElementById("divimg").style.backgroundImage="none";
	document.getElementById('menuc').innerHTML="CLOSE";
}
}


