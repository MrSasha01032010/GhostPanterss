// Остальной код игры
let player = {
    health: 100,
    gold: 0,
    isAlive: true,
    respawn() {
        this.health = 100;
        this.isAlive = true;
    }
};

let enemy = {
    health: 100,
    isAlive: true,
    attack() {
        player.health -= 10;
        if (player.health <= 0) {
            player.isAlive = false;
            console.log("Game Over! You lost.");
        }
    }
};

// Вызываем функцию startGame при загрузке страницы
window.onload = function() {
    startGame();
};

function startGame() {
    console.log("Game started!");
    // Симулируем атаку врага
    setInterval(() => {
        enemy.attack();
    }, 1000);
}

function buySword() {
    if (player.gold >= 10) {
        player.gold -= 10;
        console.log("You bought a sword!");
    } else {
        console.log("Not enough gold to buy a sword!");
    }
}

function collectGold() {
    player.gold += 5;
    console.log("Collected 5 gold!");
}

function respawnPlayer() {
    if (!player.isAlive) {
        player.respawn();
        console.log("Player respawned!");
    } else {
        console.log("Player is already alive!");
    }
}
