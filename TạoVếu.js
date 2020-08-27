//tạo theo kiểu insertBefore phai dung lấy vị trí cho before .dung o ngoai hoac trong ()

function Tạo() {

    i = document.getElementsByClassName("Tạo vếu")[0];  
    ar = document.createElement("article");
    ar.setAttribute("class", "Tạo vếu");
    i.parentElement.insertBefore(ar, i);  
}

// tao kieu insertadjacent tuong tu nhu insertbefore nhung chinh duoc vi tri cu the hon
// có tác dụng để dịch chuyển nữa

function TạoAdjacentElement() {
    i = document.getElementsByClassName("Tạo vếu")[0];  
    ar = document.createElement("article");
    ar.setAttribute("class", "Tạo vếu");
    i.insertAdjacentElement("beforebegin",ar);  
}

// tạo kiểu AdjacentHTML , cách này phải viết code chay khá dài....
function TạoAdjacentHTML() {
    i = document.getElementsByClassName("Tạo vếu")[0];  
    i.insertAdjacentHTML("beforebegin",'<article class="Tạo vếu"></article>');
}

// kiểu insertAdjacentText không su dụng được. kiểu này in thằng có "" luôn
function TạoAdjacentText() {
    i = document.getElementsByClassName("Tạo vếu")[0];  
    ar = document.createElement("article");
    ar.setAttribute("class", "Tạo vếu");
    i.insertAdjacentText("beforebegin",'<article class="Tạo vếu"></article>');  
}
//tạo theo kiểu append
//append  luôn xuất hiện ở cuối
function Tappend(){
    
    ar= document.createElement("article");
    ar.setAttribute("class","Tạo Vếu");
    document.body.appendChild(ar);
    window.alert("hello");    
}

//tạo kiểu write// không chơi kiểu này được.nó sẽ xóa hết và viết lại cả trang web
function Tw()
{    
    document.write('<article class="Tạo vếu"></article>');
    window.alert("hello");    
}
