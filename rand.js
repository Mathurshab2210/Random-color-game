document.getElementById("bt").onclick=function(){

    let x=Math.round(Math.random()*256)
  let y=Math.round(Math.random()*256)
   let z=Math.round(Math.random()*256)
   var color;
   color='rgb(' + x +' , '+ y +', ' + z +')';
   document.getElementById("random").style.backgroundColor=color;
   document.getElementById("random").innerHTML='<p>'+ color +'</p>';

}
document.getElementById("bt2").onclick=function(){

    let x=Math.round(Math.random()*256)
  let y=Math.round(Math.random()*256)
   let z=Math.round(Math.random()*256)
   var col;
   col='rgb(' + x +' , '+ y +', ' + z +')';
   document.getElementById("cl1").style.color=col;
   document.getElementById("bt").style.color=col;
   document.getElementById("bt1").style.color=col;

}
document.getElementById("bt1").onclick=function(){

    document.getElementById("random").style.backgroundColor='lightgoldenrodyellow';
    document.getElementById("random").innerHTML='<p id="cl1"> color will appear here</p>';

}

