    // di chuyển từ ví trí y đến vị trí kế nó
/* "afterbegin"
"afterend"
"beforebegin"
"beforeend" */

//Element
function dichuyenEllement(){
h = document.getElementsByClassName("menu")[0];
s = document.getElementsByClassName("di chuyển")[0];
h.insertAdjacentElement("beforebegin", s);
}
//HTMl , gõ đúng tên phần tử
function dichuyenHTML(){
    window.alert("hello");
    h = document.getElementsByClassName("di chuyển")[0];
    h.insertAdjacentHTMl("beforebegin", '<article id="ngực">');
}