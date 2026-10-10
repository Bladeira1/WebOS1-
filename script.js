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
//my advanced app 
var adventureContentData={
    fencing:{
        title:"fencing🤺",
        bannerText:"Two passions. New challenges. One journey",
        goals:[
            {name:"Improving footwork speed", progress:53},
            {name:"Improving explosiveness",progress:27},
            {name:"Competing internationaly",progress: 0},
            {name:"Mental focus and tactical anticipation",progress:64},
        ],
        aboutPosts:[
            {title:"How it started", text:"I discovered fencing 2 years ago because I love sports and wanted to do more so I taught to myself why not choose a unique sport. I am glad I chose fencing cause I fell in love whit it."},
            {title:"The Discipline",text:"Fencing taught me that every small movement counts and it requires dedication, obiously I won't master fencing techniques in one day, it's whit time that I will be able to do it."}
        ],
        wheelResults:"<h3>Your Next Move: Fencing🤺</h3><p>Be ready to expirience the thrill of a fencing dueland learn more about it.Let's expand fencing knowledge.</p>"
    }, 
    climbing:{
        title:"Climbing🧗‍♀️",
        bannerText:"Two passions. New challenges. One journey.",
        goals:[
            {name:"Completing my first V5 boulder route",progress:70},
            {name:"Enhacing,develop finger strenght",progress:40},
            {name:"Overcomming the fear of dynamic commits",progress:35},
            {name:"Gain more core and strenght endurance",progress:68}
        ],
        aboutPosts:[
            {title:"Pure Focus", text:"When I am climbing I fell like I am in my own space. It's just me, the wall and the end of the boulder while trying to solve the puzzle of how to make the next move."},
            {title:"Challenging", text:"Climbing pushed me out of my comfort zone. It taught me to trust my body and my capycity to adapt."}
        ],
    }
};
var currentSelectedSport="fencing";
var currentPostIndex=0;
//buttons
var adventureAppWindow=document.querySelector("#adventureApp");
var adventureCloseBtn=document.querySelector("#adventureclose");
if (adventureCloseBtn){
    adventureCloseBtn.addEventListener("click",function(){
        if(adventureAppWindow) adventureAppWindow.style.display="none";
    });
}
function handleAdventureIconTap(element){
    if(element.classList.contains("selected")){
        deselectIcon(element);
        if(adventureAppWindow){
            openWindow(adventureAppWindow);
            showAdventureWelcomePage();
        }
    }else{
        if(selectedIcon) deselectIcon(selectedIcon);
        selectIcon(element);
    }
}
function showAdventureWelcomePage(){
    var contentArea=document.querySelector("#adventureContent");
    if(!contentArea)return;
    var sidebar=document.querySelector("#adventureSidebar");
    if(sidebar) sidebar.style.display="none";
    contentArea.innerHTML= `
        <!--topbanner-->
        <div style="background:rgba(30,41,59,0.5);padding:12px;border-radius:12px;margin-bottom:12px;border:1px solid rgba(255,255,255,0.05);">
            <span style="font-size:10px;text-transform:uppercase;color:#38bdf8;font-weight:bold;letter-spacing:1px;">Welcome to my world</span>
            <h1 style="margin:2px 0;font-size:18px;font-weight:bold;color:#fff;">Every journey starts somewhere.</h1>
            <p style="margin:0 0 10px 0;color:#94a3b8; font-size:11px;">Two passions. New challenges. One journey.</p>
            <button onclick="exploreMyWorldIntro()" style="background:#0284c7;color:white;border:none;padding:6px 12px;border-radius:4px;font-weight:bold;cursor:pointer;font-size:11px;display:flex;align-items:center;gap:6px;">Explore my world</button>
        </div>
        <!--chose between the fencing or climbing buttom-->
        <h3 style="margin-bottom:8px;fint-size:12px; font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;">Choose your path</h3>
        <div style="display:flex;gap:12px;margin-bottom:12px;">
            <!--fencing-->
            <div onclick="openSportSelection('fencing')" style="flex:1;background:rgba(30,41,59,0.3);border-radius:12px;overflow:hidden;cursor:pointer;border:1px solid rgba(255,255,255,0.05);transition:transform 0.2s;">
                <img src="./images/fencing.webp" style="width:100%;height:120px;object-fit:cover;object-position:center;display:block;onerror="this.src='./images/myfoto.PNG'">
                <div style="padding:8px;background:rgba(15,23,42,0.6);font-size:11px;font-weight:bold;">01 / Fencing</div>
            </div>
            <!--climbing-->
            <div onclick="openSportSelection('climbing')" style="flex:1;background:rgba(30,41,59,0.3);border-radius:12px;overflow:hidden;cursor:pointer;border: 1px solid rgba(255,255,255,0.05);transition:transform 0.2s;">
                <img src="./images/climbing.jpg" style="width:100%;height:160px;object-fit:cover;display:block;onerror="this.src='./images/myfoto.PNG'">
                <div style="padding:12px;background:rgba(15,23,42,0.6);font-size:11px;font-weight:bold;">02 / Climbing</div>
            </div>
        </div>
        <div onclick="openGlobalWheelSection()" style="background: linear-gradient(135deg, rgba(250,128,114,0.15), rgba(0,255,150,0.08)); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; transition: transform 0.2s; box-shadow: 0 4px 15px rgba(0,0,0,0.15); margin-bottom:10px; box-sizing:border-box;">
            <div>
                <h4 style="margin: 0; color: #fff; font-size: 14px; font-weight: bold;">🎡 Still Indecisive? Try The Lucky Wheel!</h4>
            </div>
            <div style="font-size: 18px; background: rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 8px; color: #38bdf8; font-weight:bold; font-size:11px;">PLAY ➔</div>
        </div>

    `;    
}
function openSportSelection(sportKey){
    currentSelectedSport=sportKey;
    currentPostIndex=0;
    var sidebar=document.querySelector("#adventureSidebar");
    var contentArea=document.querySelector("#adventureContent");
    if(!sidebar || !contentArea) return;
    sidebar.style.display="flex";
    contentArea.innerHTML="";
    sidebar.innerHTML=`
        <div style="font-size:11px;text-transform:uppercase;color:#94a3b8;font-weight:bold;margin-bottom:5px;padding-left:5px;">Path Selected</div>
        <div style="font-size:14px;font-weight:bold;color:salmon;margin-bottom:15px;padding-left:5px;">${adventureContentData[sportKey].title}</div>
        <div onclick="loadSubSelection('goals')" class="sidebar-tab" id="tab-goals" style="padding:10px;margin-bottom:6px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;color:#fff;">📊Goals and Progress</div>
        <div onclick="loadSubSelection('about')" class="sidebar-tab" id ="tab-about" style="padding:10px; margin-bottom:6px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;color:#fff;">About Me</div>
        <hr style="border:0;border-top:1px solid rgba(255,255,255,0.1);margin:10px 0;">
        <div onclick="showAdventureWelcomePage()" style="padding:8px;text-align:center;background:rgba(255,255,255,0.05);border-radius:6px;cursor:pointer;font-size:11px;font-weight:bold;color:#38bdf8;">⬅Back to Menu</div>
    `;
    loadSubSelection("goals");
}
function loadSubSelection(selectionKey){
    var contentArea=document.querySelector("#adventureContent");
    var sportData=adventureContentData[currentSelectedSport];
    if(!contentArea || !sportData)return;
    var allTabs=document.querySelectorAll("#adventureSidebar .sidebar-tab");
    allTabs.forEach(function(tab){
        if(tab.id==="tab-" + selectionKey){
            tab.classList.add("active-tab");
        }else{
            tab.classList.remove("active-tab");
        }
    });
    if(selectionKey==="intro"){
        contentArea.innerHTML=`
            <h2 style="margin-top:0;color:salmon;font-size:20px;">Welcome to ${sportData.title}</h2>
            <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:16px;border-radius:12px;margin-top:15px;">
                <p style="font-size:14px;line-height:1.6;color:#e2e8f0;margin-top:0;">
                    ${sportData.bannerText}. This is my space, dedicated to showcase my love for climbing and fencing but also somewhere where I show my evolution.
                </p>
                <p style="font-size:13px;line-height:1.6;color:#94a3b8;margin-bottom:0;">
                    After choosing a sport and clicking on it use the lateral bar to nevigate threw my goals, my treining specificitys and a little wheel game.
                </p>
            </div>
        `;
    }
    if(selectionKey==="goals"){
        var goalsHTML=`
            <h2 style="margin-top:0;color:salmon;font-size:20px;">📊${sportData.title} - Goals & Progress</h2>
            <p style="color:#94a3b8;font-size:13px;margin-bottom:20px;">Following my technique progress,mental focus and goals in fencing.</p>
            <div style="display:flex;flex-direction:column;gap:16px;">
        `;
        sportData.goals.forEach(function(goal){
            goalsHTML +=`
                <div style="backgrond:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:12px;border-radius:8px;">
                    <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:bold;margin-bottom:6px;">
                        <span>🎯${goal.name}</span>
                        <span style="color:#00ff96;">${goal.progress}%</span>
                    </div>
                    <div class="progress-bg" style="background:rgba(255,255,255,0.1);border-radius:10px;width:100%;height:8px;overflow:hidden;margin-top:4px;">
                        <div class="progress-fill" style="width: ${goal.progress}%;background:linear-gradient(90deg,salmon,#00ff96);height:100%;border-radius:10px;"></div>
                    </div>
                </div> 
            `;      
        });
        goalsHTML +=`</div>`;
        contentArea.innerHTML=goalsHTML;
    }else if (selectionKey==="about"){
        var currentPost=sportData.aboutPosts[currentPostIndex];
        contentArea.innerHTML=`
            <h2 style="margin-top:0;color:salmon;font-size:20px;">About Me - ${sportData.title}</h2>
            <div style="background:rgba(255,255,255,0.05);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;min-height:180px;display:dlex;flex-direction:column;justify-content:space-between;box-shadow:0 8px 32px rgba(0,0,0,0.3);position:relative;margin-bottom:20px;">
                <div>
                    <span style="font-size:11px;color:salmon;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Post ${currentPostIndex +1} of ${sportData.aboutPosts.length}</span>
                    <h3 style="margin:8px 0;font-size:18px;color:#fff;">${currentPost.title}</h3>
                    <p style="margin:0;color:#cbd5e1;font-size:13px;line-height:1.6;">${currentPost.text}</p>
                </div>
                <div style="margin-top:15px;border-radius:8px;overflow:hidden;border:1px solid rgba(255,255,255,0.05);">
                    <img src="./images/${currentSelectedSport}.jpg" style="width: 100%; height: 140px; object-fit: cover;" onerror="this.src='./images/myfoto.PNG'">
                </div>
            </div>
            <div style="display: flex; gap: 12px; justify-content: flex-end;">
                <button onclick="rotatePost(-1)" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); color: white; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 12px;">◀ Prev Poster</button>
                <button onclick="rotatePost(1)" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); color: white; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 12px;">Next Poster ▶</button>
            </div>
        `;
    }else if (selectionKey==="wheel"){
        contentArea.innerHTML=`
            <h2 style="margin-top:0;color:salmon;font-size:20px;">🎡Find Your Adventure</h2>
            <p style="coloe:#94a3b8;">(Ready to spin the Wheel)</p>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; position: relative; margin-top: 5px;">
                <div style="position: relative; width: 200px; height: 210px;">
                    <div class="wheel-pointer"></div>
                    <div id="luckyWheel" class="wheel-container">
                        <span style="position: absolute; top: 40%; left: 10%; font-weight: bold; font-size: 12px; color: #1e293b; transform: rotate(-90deg);">FENCING</span>
                        <span style="position: absolute; top: 40%; right: 10%; font-weight: bold; font-size: 12px; color: #1e293b; transform: rotate(90deg);">CLIMBING</span>
                    </div>
                    <button onclick="spinTheWheel()" class="wheel-center-btn">SPIN</button>
                </div>
                <div id="wheelResultCard" style="display: none; background: rgba(255, 255, 255, 0.04); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 16px; width: 100%; box-sizing: border-box; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.2); transition: all 0.3s;">
                    <div id="wheelTextSlot" style="font-size: 13px; color: #cbd5e1; line-height: 1.5; margin-bottom: 12px;"></div>
                    <button id="findAdventureBtn" style="background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 12px; transition: 0.2s;">
                        Find your adventure ↗
                    </button>
                </div>
            </div>
        `;
    }
}
function rotatePost(direction){
    var sportData= adventureContentData[currentSelectedSport];
    if(!sportData)return;
    currentPostIndex+= direction;
    if(currentPostIndex>= sportData.aboutPosts.length){
        currentPostIndex=0;
    }
    if(currentPostIndex<0){
        currentPostIndex=sportData.aboutPosts.length -1;
    }
    loadSubSelection("about");
}
dragElement(document.getElementById("adventureApp"));
function exploreMyWorldIntro(){
    var sidebar=document.querySelector("#adventureSidebar");
    var contentArea=document.querySelector("#adventureContent");
    if(!sidebar || !contentArea) return;
    sidebar.style.display="none";
    contentArea.innerHTML=`
        <h2 style="margin-top:0;color:salmon;font-size:20px;">Welcome to My Active World</h2>
        <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.05);padding:18px;border-radius:12px;margin-top:15px;">
            <p style="font-size:14px;line-height:1.6;color:#e2e8f0;margin-top:0;">
                Beyond my fascination whit technology and robotics, I find balance and inner peace in my life trought sports.Fencing and climbing shape my discipline,agility, and resilience every day but especially it brings joy to my every day routine.
            </p>
            <p style="font-size:13px;line-height:1.6;color:#94a3b8;">
                This is my small world in motion while fencing teaches me focus, climbing challenges me to overcome my fears.
            </p>
            <hr style="border:0;border-top:1px solid rgba(255,255,255,0.1);margin:15px 0;">
            <button onclick="showAdventureWelcomePage()" style="background:rgba(255,255,255,0.2);color:#38bdf8;border:1px solid rgba(255,255,255,0.1);padding:6px 12px;border-radius:4px;font-weight:bold;cursor:pointer;font-size:11px;">
                ⬅ Back to Menu
            </button>
        </div>
    `;
}
var currentWheelRotation=0;
function spinTheWheel(){
    var wheel=document.getElementById("luckyWheel");
    var resultCard=document.getElementById("wheelResultCard");
    var textSlot=document.getElementById("wheelTextSlot");
    var actionBtn=document.getElementById("findAdventureBtn");
    if (!wheel || !resultCard || !textSlot || !actionBtn) return;
    resultCard.style.display="none";
    var extraDegrees=Math.floor(Math.random()*360);
    currentWheelRotation+=1800+extraDegrees;
    wheel.style.transform=`rotate(${currentWheelRotation}deg)`;
    var normalizeAngle=(currentWheelRotation%360);
    var winningSport="fencing";
    if(normalizeAngle>=90 && normalizeAngle<270){
        winningSport="climbing";
    }else{
        winningSport="fencing";
    }
    setTimeout(function(){
        resultCard.style.display="block";
        textSlot.innerHTML`<p style="margin:0;font-weight:bold;color:#00ff96;">The wheel stoped!! Your sport is waiting for you...</p>`;
        actionBtn.onclick=function(){
            var selectedData=adventureContentData[winningSport];
            textSlot.innerHTML=selectedData.wheelResults || selectedData.wheelResults;
        };
    },3000);
}
function openGloalWheelSelection(){
    var sidebar=document.querySelector("#adventureDidebar");
    var contentArea=document.querySelector("#adventureContent");
    if(!contentArea)return;
    if(sidebar)sidebar.style.display="none";
    contentArea.innerHTML= `
        <h2 style="margin-top:0; color:salmon; font-size:20px;">🎡 Find Your Adventure</h2>
        <p style="color:#94a3b8; font-size:13px; margin-bottom:20px;">Undecided about what sport you want to look at first, try clickingthe bottom below to see what may be you future sport. </p>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; position: relative; margin-top: 10px;">
            <div style="position: relative; width: 260px; height: 270px;">
                <div class="wheel-pointer"></div>
                <div id="luckyWheel" class="wheel-container">
                    <span style="position: absolute; top: 44%; left: 8%; font-weight: bold; font-size: 13px; color: #1e293b; transform: rotate(-90deg); letter-spacing: 1px;">CLIMBING</span>
                    <span style="position: absolute; top: 44%; right: 8%; font-weight: bold; font-size: 13px; color: #1e293b; transform: rotate(90deg); letter-spacing: 1px;">FENCING</span>
                </div>
                <button onclick="spinTheWheel()" class="wheel-center-btn">SPIN</button>
            </div>
            <div id="wheelResultCard" style="display: none; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px; width: 100%; box-sizing: border-box; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                <div id="wheelTextSlot" style="font-size: 13px; color: #cbd5e1; line-height: 1.5; margin-bottom: 12px;"></div>
                <button id="findAdventureBtn" style="background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 12px;">
                    Find your adventure ↗
                </button>
            </div>
            <button onclick="showAdventureWelcomePage()" style="background: rgba(255,255,255,0.08); color: #38bdf8; border: 1px solid rgba(255,255,255,0.05); padding: 6px 12px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 11px; margin-top: 5px;">
                ⬅ Back to Menu
            </button>
        </div>
    </div>
    `;
}
