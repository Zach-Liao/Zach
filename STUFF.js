


const gameDirectories = ["Games/FishingGame", "Games/FunThings", "Games/MultiplayerDemo", "Games/EscapeIran"];
const gameNames = ["Fishing Game", "Fun Things", "Multiplayer Test", "Escape Iran"];
const  _gameTemplate = document.querySelector("#gameTemplate");

let newGame
for (let i of gameDirectories){
    newGame = _gameTemplate.content.cloneNode(true);
    newGame.querySelector(".gameFrame").setAttribute("data-src", i + "/index.html");
    newGame.querySelector(".gameBg").setAttribute("style", `background-image: linear-gradient(to bottom, rgba(134, 42, 255, 0.5), rgba(0, 0, 0, 0.5)), url(${i + '/cover.png'})`);
    newGame.querySelector(".gameTitle").textContent = gameNames[gameDirectories.indexOf(i)];
    console.log(newGame.querySelector(".gameTitle"))
    document.querySelector('#games').appendChild(newGame);
    
    
}

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
