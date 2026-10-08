//liveClock
setInterval(function(){
    document.querySelector("#timeElement").innerHTML = new Date().toLocaleString();
},1000);
//welcome page window id    
dragElement(document.getElementById("welcome"));
//to make an HTML dragable 
function dragElement(element) {
    var initialX=0;
    var initialY=0;
    var currentX=0;
    var currentY=0;
    //if element as a header the element is draged by it
    if (document.getElementById(element.id+"header")){
        document.getElementById(element.id+"header").onmousedown=startDragging;
    } else {// is not a header just drag by the element
        element.onmousedown=startDragging;}
        //see were mouse is
    function startDragging(e){
        e=e || window.event;
        e.preventDefault();
        initialX=e.clientX;
        initialY=e.clientY;
        //mouse movement and bottom release
        document.onmouseup=stopDragging;
        document.onmousemove=elementDrag;
    }
    //know were we draged the window so were it last position is
    function elementDrag(e){
        e=e || window.event;
        e.preventDefault();
        currentX=initialX-e.clientX;
        currentY=initialY-e.clientY;
        initialX=e.clientX;
        initialY=e.clientY;
        var Top=element.offsetTop-currentY;
        var Left=element.offsetLeft-currentX;
        if(Top<45){
            Top=45;
        }
        var limit=window.innerHeight-100;
        if (Top > limit){
            Top=limit;
        }
        var limitRight=window.innerWidth-100;
        if (Left<-350){Left=-350;}
        if(Left>limitRight){Left=limitRight;}
        element.style.top=Top+"px";
        element.style.left=Left+"px";
    }
    //stop tracking the movement
    function stopDragging(){
        document.onmouseup=null;
        document.onmousemove=null;
    }
}
//closing and oppening welcome page
var welcomeScreen=document.querySelector("#welcome")
function closeWindow(element){
    element.style.display="none"
}
function openWindow(element){
    element.style.display="block"
}
//identify buttoms
var welcomeScreenClose=document.querySelector("#welcomeclose")
var welcomeScreenOpen=document.querySelector("#welcomeopen")
//waits for the action/button to be pressed to run a function that executes the action
welcomeScreenClose.addEventListener("click",
    function(){
        closeWindow(welcomeScreen);
    });
    welcomeScreenOpen.addEventListener("click",
        function(){
            openWindow(welcomeScreen);
        });