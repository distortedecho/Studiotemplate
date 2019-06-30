var myIndex=0;
carousel();
function carousel(){
   console.log("working");
	var i;
	var x= document.getElementsByClassName("newdivtwo");
	
	for (i = 0; i < x.length; i++)
	{
		x[i].style.display="none";
	}
	myIndex++;
	if (myIndex > x.length)
	{
		myIndex = 1
	}
      x[myIndex-1].style.display= "block";
    setTimeout(carousel, 3000);
}
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
function newFunction(x){
	x.classList.toggle('change2')
}
//adding jquery
$('.addon3').on('click',function(){
	$('html,body').animate({                         /*offset gives the coordinates of the selected elements*/ 
     'scrollTop':$('.newdiv').offset().top        /*ie top and left*/
	},1000);
});
$(document).ready(function(){
$('.projectcontainer').on('click',function(){
	$('html,body').animate({                         /*offset gives the coordinates of the selected elements*/ 
     'scrollTop':$('.contentmain').offset().top        /*ie top and left*/
	},1000);
});
});
