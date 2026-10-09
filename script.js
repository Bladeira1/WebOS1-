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

//app 
var selectedIcon=undefined
function selectIcon(element){
    element.classList.add("selected");
    selectedIcon=element
}
function deselectIcon(element){
    element.classList.remove("selected");
    selectedIcon=undefined
}
function handleIconTap(element){
    if(element.classList.contains("selected")){
        deselectIcon(element);
        var windowrobotics=document.getElementById("robotics");
        if(windowrobotics){
            openWindow(windowrobotics)
        }
    }else{
        selectIcon(element)
    }
}
//drag app
dragElement(document.querySelector("#robotics"))
//close app
var roboticsScreen=document.querySelector("#robotics")
var roboticsScreenClose=document.querySelector("#roboticsclose")
roboticsScreenClose.addEventListener("click",function(){
    closeWindow(roboticsScreen);
});
//make the app window pop in form of the welcome window
var biggestIndex=1;
function addWindowTapHandling(element){
    element.addEventListener("mousedown", function(){
        handleWindowTap(element)
    })
}
addWindowTapHandling(document.querySelector("#welcome"));
addWindowTapHandling(document.querySelector("#robotics"));
var topBar=document.querySelector("#top");
function openWindow(element){
    element.style.display="block";
    biggestIndex++;
    element.style.zIndex=biggestIndex;
    topBar.style.zIndex=biggestIndex+1;
}
function handleWindowTap(element){
    biggestIndex++;
    element.style.zIndex=biggestIndex;
    topBar.style.zIndex=biggestIndex+1;
    deselectIcon(selectedIcon)
}
var roboticsContentData=[
    {
        title:"Welcome",
        date:"09/10/2026",
        content:`
            <p style="margin-top:0;">🏠Welcome to <strong>Bruna's Tech Lab</strong></p>
            <p>This is my journal, where I document and talk about my dream projects</p>
            <p style="font-size:12px;color:rgba(255,255,255,0.6);">Last updated 09/10/2026</p>
        `
    },
    {
        title:"Project 1",
        date:"Thinking about doing it soon",
        content:`
            <p style="margin:0;font-weight:bold;color:salmon;font-size:18px;">✈️Controlable airplane</p>
            <p><strong>The concept:</strong>An airplane relies on balancing aerodynamics, structure, and electronics so the aircraft can generate lift, manage stability, and respond to pilot commands from the ground.</p>
            <p><strong>Goal:</strong>The goal of this project is to design, build a scratch-made controllable that can take off, perform stable maneuvers, and land safely, as well as the construction part which I find it really interesting.So I want to successfully fly a custom controlled aircraft cause I always loved building things and combining that whit my passion for airplanes will be awesome.</p>
        `
    },
    {
        title:"Project 2",
        date:"Future goal project",
        content:`
            <p style="margin-top:0;font-weight:bold;color:salmon;font-size:18px;">🚀Rocket</p>
            <p><strong>The concept:</strong>Building a controllable rocket relies on managing aerodynamics, propulsion and stability to pierce the atmosphere vertically and safely make it return to earth completly intact</p>
            <p><strong>Goal:</strong>The goal of this project is to design, simulate, and lauch a high-performance rocket that achives a predictable vertical trajectory and safe recovery. I also want to challenge myself whit this project because od the advanced flight-tracking vehicle capable of collecting and analyzing live atmopheric data that I have to build.</p>
        `
    },
    {
        title:"Project 3",
        date:"DREAM Future end goal project (The most challenging and dificult)",
        content:`
            <p style="margin-top:0;font-weight:bold;color:salmon;font-size:18px;">🤖Personal walking Robot (Mini assistent)</p>
            <p><strong>The concept:</strong>Building a personal walking robot but that combines legged locomotion kinematics, spacial computer vison, and conversional Artificial Intelligence to create a highly adaptable, likelife homeassistant.</p>
            <p><strong>Goal:</strong>The goal of this project is to build my dream robot using advanced engineering, complex dynamic balanceto create a robot that walks naturaly on legs, allowing it to nevigate my home but also whit a fluid human interaction and physical household utility. And also most of all to build a talking robotic friend.</p>
        `   
    }
];
function setRoboticsContent(index){
    var contentContainer=document.querySelector("#roboticsContent");
    if (contentContainer){
        contentContainer.innerHTML=roboticsContentData[index].content;
    }
}
function handleIconTap(element){
    if (element.classList.contains("selected")){
        deselectIcon(element);
        var windowrobotics=document.getElementById("robotics");
        if(windowrobotics){
            setRoboticsContent(0);
            openWindow(windowrobotics);
        }
    }else{
        if(selectedIcon) deselectIcon(selectedIcon);
        selectIcon(element);
    }
}
//functional lateral sidebar
function addToSiBar(index){
    var sidebar=document.querySelector("#roboticsSidebar");
    var robotics=roboticsContentData[index];
    if(!sidebar)return;
    var newDiv=document.createElement("div");
    newDiv.innerHTML=`
        <p style="margin:0px;font-weight:bold;">${robotics.title}</p>
        <p style="font-size:12px;margin:0px;color:rgba(255,255,255,0.6);">${robotics.date}</p>
        `;
    newDiv.addEventListener("click",function(){
        setRoboticsContent(index);
    });
    sidebar.appendChild(newDiv);
}
for (let i=0;i<roboticsContentData.length;i++){
    addToSiBar(i); 
}