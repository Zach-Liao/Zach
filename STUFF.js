


const startButtons = document.getElementsByClassName("startButton");
const fullScreenButtons = document.getElementsByClassName("fullScreen");


for (let i of startButtons){
    i.addEventListener("click", (e) => startGame(e.target));
}

for (let i of fullScreenButtons){
    i.addEventListener("click", (e) => fullScreen(e.target));
}


function startGame(element){
    for ( let i of element.parentNode.children){
        if (i.classList.contains("gameFrame")){
            i.src = i.getAttribute("data-src");
        }

        if (i.classList.contains("gameBg")){
            i.remove();
        }
        
    }
    element.remove();
}


function fullScreen(element){
    console.log(element);
    for ( let i of element.parentNode.children){
        if (i.classList.contains("gameFrame")){
            i.requestFullscreen();
        }
    }
}
