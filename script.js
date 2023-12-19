const battleMenu = document.querySelectorAll("#battle-menu ul li")
const enemy = document.querySelector(".enemy img")
const scene = document.getElementById("scene-description")
const enemyHP = document.getElementById("enemy-hp")
const playerHP = document.getElementById("player-hp")

let priest = {
    hitPoints: 10,
    attack: {
        recite: 1,
        condemn: false,
        douse: 2,
    },
}
let demon = {
    hitPoints: 10,
    attackPoints: 1,
    condemned: false,
}

for (i=0; i<battleMenu.length; i++) {
    battleMenu[i].addEventListener("mouseenter", (e) => {
        e.target.style.color = "red";
        e.target.style.fontWeight = "bold";
        e.target.style.listStyleType = "disc"
    })
    battleMenu[i].addEventListener("mouseleave", (e) => {
        e.target.style.color = "black";
        e.target.style.fontWeight = "normal";
        e.target.style.listStyleType = "none";
    })
    battleMenu[i].addEventListener("click", (e) => {
        if (e.target.getAttribute("id") === "heal") {
            priest.hitPoints = 10;
            scene.innerHTML = "The priest recovers strength."
        } else if (e.target.getAttribute("id") === "condemn") {
            demon.condemned = demon.hitPoints <= 0 ? true : false;
            enemy.style.transform = demon.condemned ? "rotate(90deg)" : "0";
            scene.innerHTML = demon.condemned ? "The demon has been comdemned to hell" : "The Demon remains strong against condemnation";
        } else {
            demon.hitPoints -= priest.attack[e.target.getAttribute("id")];
            enemyHP.setAttribute("value", String(demon.hitPoints));
            scene.innerHTML = "The demon is strongly affected.";
        }
    })
}
