var winner;
var stopTiming;
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

    //tao an chon
    for (let i = 0; i < 3; i++) {
        let j = document.createElement("img");
        document.getElementById("Choice").appendChild(j);                 
        j.setAttribute("class", "playerChoice");
    }
    imgGameChoice = document.getElementsByClassName("playerChoice");
    imgGameChoice[0].setAttribute("src", "img/article/scissors.jpg");
    imgGameChoice[0].setAttribute("id", "ScissorsChoice");
    imgGameChoice[0].setAttribute("class", "playerChoice");

    imgGameChoice[1].setAttribute("src", "img/article/stone.jpg");
    imgGameChoice[1].setAttribute("id", "StoneChoice");
    imgGameChoice[1].setAttribute("class", "playerChoice");

    imgGameChoice[2].setAttribute("src", "img/article/paper.jpg");
    imgGameChoice[2].setAttribute("id", "PaperChoice");
    imgGameChoice[2].setAttribute("class", "playerChoice");

    // tao but tuong tac
    document.getElementById("ScissorsChoice").addEventListener("click", function () { this.setAttribute("style","opacity:1;transform: scale(1.2,1.2);border:2px solid yellow ") ;choice(this.id)  });
    document.getElementById("StoneChoice").addEventListener("click", function () { this.setAttribute("style","opacity:1;transform: scale(1.2,1.2);border:2px solid yellow");choice(this.id) });
    document.getElementById("PaperChoice").addEventListener("click", function () { this.setAttribute("style","opacity:1;transform: scale(1.2,1.2);border:2px solid yellow");choice(this.id) });
}
SetupGame();

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
        stopTiming=setTimeout(displayTime, (imgTiming.length - i - 1) * 1000, i);
    }
}
//them tuong tac voi start button
document.getElementById("startGameSSP").addEventListener("click", Timing);
document.getElementById("startGameSSP").addEventListener("click", hidebutton);
function hidebutton() {
    document.getElementById("h1KeoBuaBao").style.display = "none";
    document.getElementById("startGameSSP").style.display = "none";
    document.getElementById("Choice").style.display = "flex";
    setTimeout(function(){ if(winner==null) {alert("ban chua chon")} else{ alert(winner);replaySSP()}},3000);
}

function replaySSP(){   
    winner=null;
    for(let i=0;i<document.querySelectorAll(".playerChoice").length;i++){
        // neu dung style "" thi gia tri tra ve mac dinh ban dau
        document.querySelectorAll(".playerChoice")[i].setAttribute("style","");
    }    
    document.getElementById("startGameSSP").style.display = "block";
    
}

function choice(c) {
    //may chon    
    var computerChoice = (Math.floor(Math.random() * (4 - 1)) + 1);
    var humanChoice;

    switch (c) {
        case "ScissorsChoice": humanChoice = 1;break;
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
        case 0: winner ="Tớ Thích Cậu";
        break;
        case 1: winner = "Cậu Biết Là Cậu rất rất rất... đáng yêu chứ";
        break;
        case 2: winner = " Cậu có thích làm chuyện ấy trong những chỗ kín náo nhiệt không ^^ ";
        break;
        case -2: winner = " Nếu mà trên thế giới chỉ có 2 đứa thì bọn mình nhân giống loài người nhá ><";
        break;
        case -1: winner =" Tớ biến thái thật,nhưng tình cảm nghiêm túc ^^ chân thành thích cậu";
        break;
    }
}


// cac anh van la none sau khi set up  



 // an nut play khi timming va hie nut chon;