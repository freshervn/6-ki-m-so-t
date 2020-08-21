function doimau(n) {
    switch (n) {
        case "Lục":
            //khi dùng tag name nho the [] đằng sau.
            document.getElementsByTagName("body")[0].style.background = "green";
            break;
        case "Xanh":
            document.getElementsByTagName("body")[0].style.background = "blue";
            break;
        case "Đỏ":
            document.getElementsByTagName("body")[0].style.background = "red";
            break;
        case "Vàng":
            document.getElementsByTagName("body")[0].style.background = "yellow";
            break;
        case "Cam":
            document.getElementsByTagName("body")[0].style.background = "orange";
            break;
        case "Tím":
            document.getElementsByTagName("body")[0].style.background = "purple";
            break;
        default:
            document.getElementsByTagName("body")[0].style.background = "black";
    }

}