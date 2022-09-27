var start= document.getElementById("start")
var reset= document.getElementById("reset")
var stop=document.getElementById("stop")
var h=document.getElementById("hour")
var m=document.getElementById("minutes")
var s=document.getElementById("seconds")
var audio=new Audio('https://strangershow.com/wp-content/uploads/2020/10/Small-Bell.mp3')
// setting the value of start timer initially as null
starttimer=null

function Timer(){
    if( h.value==0 && m.value==0 && s.value==0)
    {
        audio.play()
        resettimer() 
    }
    else if(s.value!=0)
        s.value--;
    else if(m.value!=0 && s.value==0)
        {
            s.value=59
            m.value--;
        }
    else if(h.value!=0 && m.value==0 && s.value==0)
        {
            s.value=59
            m.value=59;
            h.value--;
            
        }
    
}
function resettimer(){
    clearInterval(starttimer)
    document.getElementById("stop").style.display="none";
    document.getElementById("start").style.display="inline";
    document.getElementById("reset").style.display="inline";
}
function startinterval(){
    starttimer=setInterval(
    function()
    {
    Timer();
    }
    ,1000);
    // or starttimer= setInterval(Timer,1000);  value will be changed every 1000 milliseconds
}
stop.addEventListener("click",function()
{
    resettimer() 
})
start.addEventListener("click", function() //syntax
{
// initialize the variable
    startinterval()
    document.getElementById("start").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("stop").style.display="inline";
    
} )
reset.addEventListener("click", function()
{
    h.value=0
    m.value=0
    s.value=0
    resettimer()
} )
