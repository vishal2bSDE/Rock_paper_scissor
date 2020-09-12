function rpsGame(yourChoice) {
    // console.log(yourChoice.id);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());
    console.log(botChoice);
    var results = decideWinner(humanChoice, botChoice);
    var msg = finalMsg(results); console.log(msg);
    rpsFrontEnd(yourChoice.id, botChoice, msg);
}
function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}
function decideWinner(yourChoice, botChoice) {
    var rpsDatabase = {
        "rock": {
            "scissors": 1, "rock": .5, "paper": 0
        },
        "paper": {
            "scissors": 0, "rock": 1, "paper": 0.5
        },
        "scissors": {
            "scissors": .5, "rock": 0, "paper": 1
        }
    }
    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];
    console.log(yourScore, botScore);
    return [yourScore, botScore];
}
function finalMsg([yourScore, botScore]) {
    if (yourScore === 0) {
        return { "msg": "You lost!", "color": "red" };
    } else if (yourScore === .5) {
        return { "msg": "Both Tied!", "color": "orange" };
    } else {
        return { "msg": "You Won!", "color": "green" };
    }
}
function rpsFrontEnd(yourChoice, botChoice, msg) {
    var imgDb = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var msgDiv = document.createElement("div");

    humanDiv.innerHTML = "<h3>you</h3><img src='" + imgDb[yourChoice] + " 'style='box-shadow: 0px 10px 50px rgba(37, 50, 233 ,1);'>";
    botDiv.innerHTML = "<img src='" + imgDb[botChoice] + " 'style='box-shadow: 0px 10px 50px rgba(243, 38, 24 ,1);'><h3>bot</h3>";
    msgDiv.innerHTML = "<h1 style='color: " + msg['color'] + "; font-size:60px; padding: 30px; '>" + msg['msg'] + "</h1>";


    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(msgDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}
