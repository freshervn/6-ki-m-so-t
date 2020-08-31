
var stopTiming;
//mo ta 
// setup tạo ảnh kéo búa giấy, ảnh đếm giờ,thêm chức năng cho button start
// timming để chạy bộ đếm giờ
// choice sử lý kết quả game
// replaySSP khởi động lại game

//thiếu dừng game khi người choi đã chọn;

function SetupGame() {
    //them tuong tac voi start button
    document.getElementById("startGameSSP").addEventListener("click", Timing);
    document.getElementById("startGameSSP").addEventListener("click", hidebutton);

    //sau khi bam nut thi tinh thoi gian va an bot nhung thu ko can thiet
    function hidebutton() {
        //xoa bot cac thành phan ko can thiet di
        document.getElementById("h1KeoBuaBao").style.display = "none";
        document.getElementById("startGameSSP").style.display = "none";

        //hiển thị lựa chọn
        document.getElementById("Choice").style.display = "flex";
    }

    // nut ket qua
    var buttonOk=document.createElement("button");    
    document.getElementById("KeoBuaBao").appendChild(buttonOk);
    buttonOk.setAttribute("id","buttonOkeSSP");    
    buttonOk.innerHTML= "Oke";
    buttonOk.addEventListener("click",replaySSP);
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
    document.getElementById("ScissorsChoice").addEventListener("click", function () { this.setAttribute("style", "opacity:1;transform: scale(1.2,1.2);border: 2px solid yellow;"); choice(this.id) });
    document.getElementById("StoneChoice").addEventListener("click", function () { this.setAttribute("style", "opacity:1;transform: scale(1.2,1.2);border: 2px solid yellow;"); choice(this.id) });
    document.getElementById("PaperChoice").addEventListener("click", function () { this.setAttribute("style", "opacity:1;transform: scale(1.2,1.2);border: 2px solid yellow;"); choice(this.id) });
}
SetupGame();

//phụ trợ timing . xóa ảnh
function bienmat(j) {
    imgTiming[j].style.display = "none";
}
//hiển thị ảnh trong 1s
function displayTime(j) {
    imgTiming[j].style.display = "block";
    setTimeout(bienmat, 1000, j);
}

//chạy hết các ảnh,mỗi ảnh cho suất hiện sau 1s
function Timing() {
    stopTiming3 = setTimeout(displayTime, 0, 3);
    stopTiming2 = setTimeout(displayTime, 1000, 2);
    stopTiming1 = setTimeout(displayTime, 2000, 1);
    //in ra ket qua neu sau 3s khong  bam
    stopTiming0 = setTimeout(function () { alert("ban da khong chon"); replaySSP() }, 3000, 0);
}

// khởi động lại ảnh sau khi timming
function replaySSP() {
    for (let i = 0; i < document.querySelectorAll(".playerChoice").length; i++) {
        // neu dung style "" thi gia tri tra ve mac dinh ban dau
        document.querySelectorAll(".playerChoice")[i].setAttribute("style", "");
    }
    document.getElementById("startGameSSP").innerHTML = "Tiếp tục";
    document.getElementById("startGameSSP").style.display = "block";
    document.getElementById("Choice").style.display = "none";
    document.getElementById("h1KeoBuaBao").style.display = "";

    document.getElementById("buttonOkeSSP").remove();
    document.getElementById("showComputerChoice").remove();
}
function displayHumanAndComputerChoice(i,k) {

    let j = document.createElement("img");
    document.getElementById("KeoBuaBao").appendChild(j);
    j.setAttribute("id", "showComputerChoice");
    switch (i) {
        case 1: j.setAttribute("src", "img/article/scissors.jpg");
            break;
        case 2: j.setAttribute("src", "img/article/stone.jpg");
            break;
        case 3: j.setAttribute("src", "img/article/paper.jpg");
            break;            
    }

    l = document.createElement("img");
    document.getElementById("KeoBuaBao").appendChild(l);
    l.setAttribute("id", "showHumanChoice");
    switch (k) {
        case 1: l.setAttribute("src", "img/article/scissors.jpg");
            break;
        case 2: l.setAttribute("src", "img/article/stone.jpg");
            break;
        case 3: l.setAttribute("src", "img/article/paper.jpg");
            break;
    }
    document.getElementById("buttonOkeSSP").setAttribute("style","display:block");
}
// sử lý kết quả game khi người bấm
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
    //code nay tam de day    
    // switch (humanChoice-computerChoice) {
    //     case -2: winner ="Chúc mừng bạn thắng rồi" // " Nếu mà trên thế giới chỉ có 2 đứa thì bọn mình nhân giống loài người nhá ><";
    //     break;
    //     case 0: winner="Hòa nhé";
    //         //  switch (Math.floor(Math.random() * (4 - 1)) + 1){
    //         //     case 1:winner ="Tớ Thích Cậu";
    //         //     break;
    //         //     case 2:winner ="Cũng Thích Cậu, nhưng nhiều hơn";
    //         //     break;
    //         //     case 3:winner ="<3";
    //         //     break;
    //         //  }

    //     break;
    //     case 1: winner ="Chúc mừng bạn thắng rồi"// "Cậu Biết Là Cậu rất rất rất... đáng yêu chứ";
    //     break;
    //     case 2: winner ="Máy đã Thắng bạn"// " Cậu có thích làm chuyện ấy trong những chỗ kín náo nhiệt không ^^ ";
    //     break;
    //     case -1: winner ="Máy đã Thắng bạn"//" Tớ biến thái thật,nhưng tình cảm nghiêm túc ^^ chân thành thích cậu";
    //     break;
    //}
    
    
    switch (humanChoice) {
        // kéo 
        case 1:
            switch (computerChoice) {
                case 1: displayHumanAndComputerChoice(1,1);                                
                    break;
                case 2: displayHumanAndComputerChoice(1,2);  
                    break;
                case 3: displayHumanAndComputerChoice(1,3);  
                    break;
            }
        // đá    
        case 2:
            switch (computerChoice) {
                case 1: displayHumanAndComputerChoice(2,1);  
                    break;
                case 2: displayHumanAndComputerChoice(2,2);  
                    break;
                case 3: displayHumanAndComputerChoice(2,3);  
                    break;
            }
        // giấy    
        case 3:
            switch (computerChoice) {
                case 1: displayHumanAndComputerChoice(3,1);  
                    break;
                case 2: displayHumanAndComputerChoice(3,2);  
                    break;
                case 3: displayHumanAndComputerChoice(3,3);  
                    break;
            }
    break;
    }
    // dừng timming
    clearTimeout(stopTiming3);
    clearTimeout(stopTiming2);
    clearTimeout(stopTiming1);
    clearTimeout(stopTiming0);
}