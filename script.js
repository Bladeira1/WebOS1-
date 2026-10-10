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
            openWindow(windowrobotics);
            setTimeout(function(){
                setRoboticsContent(0);
            },10);
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
            <p>This is my journal, where I document and talk about my dream projects. You can nevigate them threw the sidebar.</p>
            <p style="font-size:12px;color:rgba(255,255,255,0.6);">Last updated 10/10/2026</p>
        `
    },
    {
        title:"Project 1",
        date:"Thinking about doing it soon",
        content:`
            <h2 style="margin:0;color:salmon;font-size:20px;">✈️Controlable airplane</h2>
            <div class="project-card">
                <strong style="color:salmon">💡The concept:</strong><br>An airplane relies on balancing aerodynamics, structure, and electronics so the aircraft can generate lift, manage stability, and respond to pilot commands from the ground.
            </div>
            <div class="goal-card">
                <strong style="color:#00ff96">🎯Goal:</strong><br>The goal of this project is to design, build a scratch-made controllable that can take off, perform stable maneuvers, and land safely, as well as the construction part which I find it really interesting.So I want to successfully fly a custom controlled aircraft cause I always loved building things and combining that whit my passion for airplanes will be awesome.
            </div>
            <p style="margin-top:15px;">Something like this:</p>
            <img src="./images/project1.jpg" alt="Airplane design" style="width:100%;max-width:400px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);margin-top:5px;">
        `
    },
    {
        title:"Project 2",
        date:"Future goal project",
        content:`
            <h2 style="margin-top:0;color:salmon;font-size:20px;">🚀Rocket</h2>
            <div class="project-card">
                <strong style="color:salmon;">💡The concept:</strong><br>Building a controllable rocket relies on managing aerodynamics, propulsion and stability to pierce the atmosphere vertically and safely make it return to earth completly intact.
            </div>
            <div class="goal-card">
                <strong style="color:#00ff96;">🎯Goal:</strong><br>The goal of this project is to design, simulate, and lauch a high-performance rocket that achives a predictable vertical trajectory and safe recovery. I also want to challenge myself whit this project because od the advanced flight-tracking vehicle capable of collecting and analyzing live atmopheric data that I have to build.
            </div>
            <p style="margin-top:15px">Something like this:</p>
            <img src="./images/project2.jpg" alt="Rocket design" style="width:100%;max-width:400px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);margin-top:5px;">
        `
    },
    {
        title:"Project 3",
        date:"DREAM Future end goal project (The most challenging and dificult)",
        content:`
            <h2 style="margin-top:0;color:salmon;font-size:20px;">🤖Personal walking Robot (Mini assistent)</h2>
            <div class="project-card">
                <strong style="color:salmon">💡The concept:</strong><br>Building a personal walking robot but that combines legged locomotion kinematics, spacial computer vison, and conversional Artificial Intelligence to create a highly adaptable, likelife homeassistant.
            </div>
            <div class="goal-card">
                <strong style="color:#00ff96;">🎯Goal:</strong><br>The goal of this project is to build my dream robot using advanced engineering, complex dynamic balanceto create a robot that walks naturaly on legs, allowing it to nevigate my home but also whit a fluid human interaction and physical household utility. And also most of all to build a talking robotic friend.
            </div>
            <p style="margin-top:15px;">Something like this:"</p> 
            <img src="./images/project3.avif" alt="Robot design" style="width:100%;max-width:400px;border:1px solid rgba(255,255,255,0.1);margin-top:5px;">
            <img src="./images/project3part2.jpeg" alt="More robot designs ideas" style="width:100%;max-width:400px;border:1px solid rgba(255,255,255,0.1);margin-top:5px;">
        `   
    }
];
function setRoboticsContent(index){
    var contentContainer=document.querySelector("#roboticsContent");
    if (contentContainer){
        contentContainer.innerHTML=roboticsContentData[index].content;
    }

    var allTabs=document.querySelectorAll(".sidebar-tab");
    allTabs.forEach(function(tab,i){
        if (i===index){
            tab.classList.add("active-tab");
        }else{
            tab.classList.remove("active-tab")
        }
    });
}

//functional lateral sidebar
function addToSiBar(index){
    var sidebar=document.querySelector("#roboticsSidebar");
    var robotics=roboticsContentData[index];
    if(!sidebar)return;
    var newDiv=document.createElement("div");
    newDiv.classList.add("sidebar-tab");
    newDiv.innerHTML=`
        <p style="margin:0px;font-weight:bold;">${robotics.title}</p>
        <p style="font-size:12px;margin:0px;color:rgba(255,255,255,0.6);">${robotics.date}</p>
        `;
    newDiv.addEventListener("click",function(){
        setRoboticsContent(index);
    });
    sidebar.appendChild(newDiv);
}
var sidebarContainer=document.querySelector("#roboticsSidebar");
if (sidebarContainer){
    sidebarContainer.innerHTML="";
    for (let i=0;i<roboticsContentData.length;i++){
        addToSiBar(i);
    } 
}