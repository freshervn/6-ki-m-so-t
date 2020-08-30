SetupGame()
var winner;
document.getElementById("startGameSSP").addEventListener("click", Timing);
document.getElementById("startGameSSP").addEventListener("click", hidebutton);
function hidebutton() {
    document.getElementById("h1KeoBuaBao").style.display = "none";
    document.getElementById("startGameSSP").style.display = "none";
    document.getElementById("Choice").style.display = "flex";
    setTimeout(function(){ if(winner==null) {alert("ban chua chon")} else alert(winner)},3000);
}

function choice(c) {
    //may chon
    var computerChoice = (Math.floor(Math.random() * (4 - 1)) + 1);
    var humanChoice;

    switch (c) {
        case "ScissorsChoice": humanChoice = 1; break;
        case "StoneChoice": humanChoice = 2; break;
        case "PaperChoice": humanChoice = 3; break;
    }
    

    // bua thang keo 2-1=1;
    // bua thua giay 2-3=-1;

    // giay thang bua 3-2=1;
    // giay thua keo 3-1=2;

    // keo thang giay 1-3=-2;
    // keo thua bua  1-2=-1;
    // hoa=0;
    
    switch (humanChoice-computerChoice) {
        case 0: winner ="Hòa";
        break;
        case 1: winner = "người thắng";
        break;
        case 2: winner = "máy thắng";
        break;
        case -2: winner = "người thắng";
        break;
        case -1: winner ="máy thắng";
        break;
    }
}

function SetupGame() {
    //tinh thoi gian                      
    // tạo ảnh có sẵn                      
    for (let i = 0; i < 4; i++) {
        let j = document.createElement("img");
        document.getElementById("KeoBuaBao").appendChild(j);
        // tao anh co san voi kich thuoc lon                    
        j.setAttribute("class", "timing");
    }
    imgTiming = document.getElementsByClassName("timing");
    imgTiming[0].setAttribute("src", "img/article/0.png");
    imgTiming[1].setAttribute("src", "img/article/1.jpg");
    imgTiming[2].setAttribute("src", "img/article/2.jpg");
    imgTiming[3].setAttribute("src", "img/article/3.jpg");
    // tao but tuong tac

    document.getElementById("ScissorsChoice").addEventListener("click", function () { choice(this.id) });
    document.getElementById("StoneChoice").addEventListener("click", function () { choice(this.id) });
    document.getElementById("PaperChoice").addEventListener("click", function () { choice(this.id) });
}
// cac anh van la none sau khi set up  


function bienmat(j) {
    imgTiming[j].style.display = "none";
}

function displayTime(j) {
    imgTiming[j].style.display = "block";
    setTimeout(bienmat, 1000, j);
}
function Timing() {
    for (let i = imgTiming.length - 1; i >= 0; i--) {
        //chieu het cac anh
        setTimeout(displayTime, (imgTiming.length - i - 1) * 1000, i);
    }
}

 // an nut play khi timming va hie nut chon;