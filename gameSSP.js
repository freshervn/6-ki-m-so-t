
var stopTiming;
//mo ta 
// setup tạo ảnh kéo búa giấy, ảnh đếm giờ,thêm chức năng cho button start
// timming để chạy bộ đếm giờ
// choice sử lý kết quả game
// replaySSP khởi động lại game
//thiếu dừng game khi người choi đã chọn;

// bug ? không xóa được ảnh showcomputerchoice and human choice do tạo thừa ảnh
// không repay được :))

// trình tự code
//  SetupGame()
//  click vào nút thì bắt đầy chạy timing,hidebutton
//  timing thì tính giờ oke.
//  hidebutton thì xóa bớt các cái có trên màn hình đi, và hiển thị lựa chọn
//  hiện thị ra 3 ảnh
//  1.không ấn chạy bth
//  2.click chạy hỏng.
//   choice chay oke roi
// lap lai nut oke nua thoi

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

    // nut ket qua oke
    var buttonOk = document.createElement("button");
    document.getElementById("KeoBuaBao").appendChild(buttonOk);
    buttonOk.setAttribute("id", "buttonOkeSSP");
    buttonOk.innerHTML = "Oke";
    buttonOk.addEventListener("click", replaySSP);

    //tinh thoi gian  oke                            
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

    //tạo ảnh lựa chọn "búa kéo bảo"
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

    // thêm iệu ứng hover và khi click thì sử lý lua chon cua nguoi choi
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

    // đưa các lựa chọn về bth trước khi được click
    for (let i = 0; i < document.querySelectorAll(".playerChoice").length; i++) {
        // neu dung style "" thi gia tri tra ve mac dinh ban dau
        document.querySelectorAll(".playerChoice")[i].setAttribute("style", "");
    }
    // đổi nút start thành tiếp tục
    document.getElementById("startGameSSP").innerHTML = "Tiếp tục";
    //ẩn nút "tiếp tục" đi
    document.getElementById("startGameSSP").style.display = "block";
    // ẩn mấy cái lựa chọn 
    document.getElementById("Choice").setAttribute("style", "display:none");

    //hiển thị lại tên game
    document.getElementById("h1KeoBuaBao").style.display = "";

    // ẩn nút "oke" 
    document.getElementById("buttonOkeSSP").setAttribute("style", "display:none");

    // xóa nốt 2 cái ảnh kết quả
    document.getElementById("showComputerChoice").remove();
    document.getElementById("showHumanChoice").remove();
    document.getElementById("humanh2").remove();
    document.getElementById("computerh2").remove();
    document.getElementById("result").remove();
}

// in kết quả game
function displayHumanAndComputerChoice(human, computer,result) {

    //tạo thêm 2 cái tiêu đề nhìn cho rõ

    hh = document.createElement("h2");
    document.getElementById("KeoBuaBao").appendChild(hh);
    hh.setAttribute("id", "humanh2");
    hh.innerHTML = "NGƯỜI CHỌN";

    hc = document.createElement("h2");
    document.getElementById("KeoBuaBao").appendChild(hc);
    hc.setAttribute("id", "computerh2");
    hc.innerHTML = "MÁY CHỌN";

    kq = document.createElement("h2");
    document.getElementById("KeoBuaBao").appendChild(kq);
    kq.setAttribute("id", "result");
    kq.innerHTML = result;

    j = document.createElement("img");
    document.getElementById("KeoBuaBao").appendChild(j);
    j.setAttribute("id", "showHumanChoice");

    switch (human) {
        case 1: j.setAttribute("src", "img/article/scissors.jpg");
            break;
        case 2: j.setAttribute("src", "img/article/stone.jpg");
            break;
        case 3: j.setAttribute("src", "img/article/paper.jpg");
            break;
    }

    l = document.createElement("img");

    document.getElementById("KeoBuaBao").appendChild(l);

    l.setAttribute("id", "showComputerChoice");

    switch (computer) {
        case 1: l.setAttribute("src", "img/article/scissors.jpg");
            break;
        case 2: l.setAttribute("src", "img/article/stone.jpg");
            break;
        case 3: l.setAttribute("src", "img/article/paper.jpg");
            break;
    }
    document.getElementById("buttonOkeSSP").style.display = "block";
    document.getElementById("Choice").setAttribute("style", "display:none");
}

// sử lý kết quả game khi người bấm

function choice(idimg) {
    //may chon random
    var computerChoice = (Math.floor(Math.random() * (4 - 1)) + 1);
    var humanChoice;
    var result;

    switch (idimg) {
        case "ScissorsChoice": humanChoice = 1; break;
        case "StoneChoice": humanChoice = 2; break;
        case "PaperChoice": humanChoice = 3; break;
    }

    //đang lỗi ở đây
    switch (humanChoice) {
        // kéo 
        case 1:
            switch (computerChoice) {
                case 1: result = "HÒA";
                    displayHumanAndComputerChoice(1, 1,result);
                    break;
                case 2: result = "THUA";
                    displayHumanAndComputerChoice(1, 2,result);
                    break;
                case 3: result = "THẮNG";
                    displayHumanAndComputerChoice(1, 3,result);
                    break;
            } break;
        // đá    
        case 2:
            switch (computerChoice) {
                case 1:
                    result = "THẮNG";
                    displayHumanAndComputerChoice(2, 1,result);
                    break;
                case 2: result = "HÒA";
                    displayHumanAndComputerChoice(2, 2,result);
                    break;
                case 3:
                    result = "THUA";
                    displayHumanAndComputerChoice(2, 3,result);
                    break;
            }break;
        // giấy    
        case 3:
            switch (computerChoice) {
                case 1:
                    result = "THUA"; 
                    displayHumanAndComputerChoice(3, 1,result);
                    break;
                case 2: result = "THẮNG";
                    displayHumanAndComputerChoice(3, 2,result);
                    break;
                case 3: result = "HÒA";
                    displayHumanAndComputerChoice(3, 3,result);
                    break;
            }break;
    }
    // dừng timming
    //đang bug chỗ này 1 ít
    clearTimeout(stopTiming3);
    clearTimeout(stopTiming2);
    clearTimeout(stopTiming1);
    clearTimeout(stopTiming0);
}