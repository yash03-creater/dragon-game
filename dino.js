score=0;
cross=true;
ad1=new Audio("rise-and-shine.mp3");
ad2=new Audio("death.mp3");
document.onkeydown=(event)=>{
     d1=document.querySelector(".dino");
    console.log(event.keyCode);
     if(event.keyCode==38){
     d1.classList.add("ani");
    setTimeout(()=>{
        d1.classList.remove("ani");
    },1000);
}
    if(event.keyCode==37)
    {
        let dinox=parseInt(window.getComputedStyle(d1,null).getPropertyValue('left'));
        d1.style.left=dinox-112+"px";
    }
    if(event.keyCode==39)
    {
        let dinox=parseInt(window.getComputedStyle(d1,null).getPropertyValue('left'));
      d1.style.left=dinox+112+"px";
       }
 }
 setInterval(()=>{
dino=document.querySelector(".dino");
obs=document.querySelector(".obstacle");
gmOver=document.querySelector(".gameOver");
heading=document.querySelector("h2");
obs1=document.querySelector(".obs1");
obs2=document.querySelector(".obs2");
obs3=document.querySelector(".obstacle2");
let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left') );
let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'));
let ox=parseInt(window.getComputedStyle(obs,null).getPropertyValue('left'));
let oy=parseInt(window.getComputedStyle(obs,null).getPropertyValue('bottom'));
let o2x=parseInt(window.getComputedStyle(obs3,null).getPropertyValue('left'));
o2y=parseInt(window.getComputedStyle(obs3 ,null).getPropertyValue('bottom'));
offsetx=Math.abs(dx-ox);
offsety=Math.abs(dy-oy);
offsetx2=Math.abs(dx-o2x);
offsety2=Math.abs(dy-o2y);

if( (offsetx<93 && offsety<52) || (offsetx2<93 && offsety2<52))
{
    heading.innerText="GameOver!Try Harder Next Time."
    obs.classList.remove("obs1");
   obs3.classList.remove("obs2");
    ad1.pause();
    ad2.play();
    
} 
else if(offsetx<145 && cross)
{
    score=score+1; 
    document.querySelector("#scorecount").innerHTML="your score is:"+score;
   cross=false;
   setTimeout(()=>{cross=true},1000);

   setTimeout(() => {anidur=parseFloat(window.getComputedStyle(obs1,null).getPropertyValue('animation-duration'));
   if(anidur>2.8){
     newdur=anidur-0.2;
    obs1.style.animationDuration=newdur+"s"}},500);
    ad1.play();
 }
}
 ,100); 

 