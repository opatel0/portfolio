const menuOptions = document.querySelectorAll("#battle-menu ul li")
const battleMenu = document.querySelector("#battle-menu ul")
const enemy = document.querySelector(".enemy img")
const player = document.querySelector(".player img")
const enemyHP = document.getElementById("enemy-hp")
const playerHP = document.getElementById("player-hp")
const scene = document.getElementById("scene-description")
const nextBtn = document.getElementById("next-button")
const restartBtn = document.getElementById("restart")

let priest = {
    hitPoints: 10,
    possessed: false,
    attack: {
        recite: 1,
        condemn: false,
        douse: 2,
    },
}
let demon = {
    hitPoints: 10,
    condemned: false,
    attack: [
        {throwObject: [1, "<br>The demon throws an object!"]},
        {throwEnemy: [4, "<br>The demon throws the Priest against the wall!"]},
        {drawPower: [3, "<br>The demon draws power from Hell!"]},
        {possess: [0, "<br>The Demon attempted to possess the Priest. He failed."]},
    ]
}
let gameOver = false;

restartBtn.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") === "restart") {
        gameOver = false;
        priest.hitPoints = 10;
        playerHP.setAttribute("value", String(priest.hitPoints))
        priest.possessed = false;
        demon.hitPoints = 10;
        enemyHP.setAttribute("value", String(demon.hitPoints))
        demon.condemned = false;
        enemy.style.transform = "none";
        player.style.transform = "none";
        restartBtn.style.display = "none";
        for (i=0; i<(menuOptions.length-1); i++) {
            menuOptions[i].style.display = "list-item";
        }
        scene.innerHTML = "The Priest arrives and prepares to exorcise the Demon. <br>Select the Priest's action in the battle menu."
    }
})
for (i=0; i<(menuOptions.length-1); i++) {
    menuOptions[i].addEventListener("mouseenter", (e) => {
        e.target.style.color = "red";
        e.target.style.fontWeight = "bold";
        e.target.style.listStyleType = "disc";
    })
    menuOptions[i].addEventListener("mouseleave", (e) => {
        e.target.style.color = "var(--text-color)";
        e.target.style.fontWeight = "normal";
        e.target.style.listStyleType = "none";
    })
    menuOptions[i].addEventListener("click", (e) => {
        if (e.target.getAttribute("id") === "heal") {
            priest.hitPoints = 10;
            playerHP.setAttribute("value", String(priest.hitPoints))
            scene.innerHTML = "The priest recovers strength."
        } else if (e.target.getAttribute("id") === "condemn") {
            demon.condemned = demon.hitPoints <= 0 ? true : false;
            gameOver = demon.condemned ? true : false;
            enemy.style.transform = demon.condemned ? "rotate(90deg)" : "0";
            scene.innerHTML = demon.condemned ? "The demon has been comdemned to hell" : "The Demon remains strong against condemnation";
        } else {
            demon.hitPoints -= priest.attack[e.target.getAttribute("id")];
            enemyHP.setAttribute("value", String(demon.hitPoints));
            scene.innerHTML = "The demon is strongly affected.";
        }
        
        // nextBtn.style.display = "inline-block"; // logic will be implemented later
        let demonAttack = Object.entries(demon.attack[Math.floor(Math.random() * 4)]);
        if (demonAttack[0][0] === "drawPower" && !gameOver) {
            demon.hitPoints += demonAttack[0][1][0];
            demon.hitPoints = demon.hitPoints > 10 ? 10 : demon.hitPoints;
            enemyHP.setAttribute("value", String(demon.hitPoints));
        } else if (demonAttack[0][0] === "possess" && priest.hitPoints <= 3 && !gameOver) {
            demonAttack[0][1][1] = "<br>The priest has been possessed.<br>All hope is lost.";
            gameOver = true;
            player.style.transform = "rotate(270deg)";
        } else if (demonAttack[0][0].includes("throw") && !gameOver) {
            priest.hitPoints -= demonAttack[0][1][0];
            playerHP.setAttribute("value", String(priest.hitPoints));
        }
        scene.innerHTML += !demon.condemned ? demonAttack[0][1][1] : "";

        if (gameOver) {
            for (i=0; i<(menuOptions.length-1); i++) {
                menuOptions[i].style.display = "none";
            }
            restartBtn.style.display = "list-item";
        }
    })
}