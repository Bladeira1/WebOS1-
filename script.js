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
        document.onmousemove=dragElement;
    }
    //know were we draged the window so were it last position is
    function dragElement(e){
        e=e || window.event;
        e.preventDefault();
        currentX=initialX-e.clientX;
        currentY=initialY-e.clientY;
        initialX=e.clientX;
        initialY=e.clientY;
        element.style.top=(element.offsetTop-currentY) + "px";
        element.style.left=(element.offsetLeft-currentX) + "px";
    }
    //stop tracking the movement
    function stopDragging(){
        document.onmouseup=null;
        document.onmousemove=null;
    }
}
