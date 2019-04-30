var total = 0;
var input=document.getElementById("input")

function click1(){
    document.getElementById("click1").style.background="black";
    total += 1;
    document.getElementById("click5").innerHTML=(String.fromCharCode(total));
    
}
function click2(){
    document.getElementById("click2").style.background="black";
    total += 2;
    document.getElementById("click5").innerHTML=(String.fromCharCode(total));
    
}
function click3(){
    document.getElementById("click3").style.background="black";
    total += 4;
    document.getElementById("click5").innerHTML=(String.fromCharCode(total));
    
}
function click4(){
    document.getElementById("click4").style.background="black";
    total += 128;
    document.getElementById("click5").innerHTML=(String.fromCharCode(total));
    
}
function click5(){
    document.getElementById("click1").style.background="beige";
    document.getElementById("click2").style.background="beige";
    document.getElementById("click3").style.background="beige";
    document.getElementById("click4").style.background="beige";
    document.getElementById("click6").style.background="beige";
    document.getElementById("click7").style.background="beige";
    document.getElementById("click8").style.background="beige";
    document.getElementById("click9").style.background="beige";
    total = 0;
   document.getElementById("click5").innerHTML=(String.fromCharCode(total));
 
  

}
function click6(){
    document.getElementById("click6").style.background="black";
    total += 8;
    document.getElementById("click5").innerHTML=(String.fromCharCode(total));
    
}
function click7(){
    document.getElementById("click7").style.background="black";
    total += 64;
    document.getElementById("click5").innerHTML=(String.fromCharCode(total));
    
}
function click8(){
    document.getElementById("click8").style.background="black";
    total += 32;
    document.getElementById("click5").innerHTML=(String.fromCharCode(total));
   
}
function click9(){
    document.getElementById("click9").style.background="black";
    total += 16;
    document.getElementById("click5").innerHTML=(String.fromCharCode(total));
    
}
function inputfunction(){
    var x =input.charCodeAt(0);
  
}
