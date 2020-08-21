// nút che ngực
function che(c){
    if (c=="che"){
        document.getElementById("che").style.display="block";
    }
    if (c=="khong"){
        document.getElementById("che").style.display="none";
    }
}

// zoom zú
function magnify(imgID, zoom) {

    var img, glass, w, h, bw;


    img = document.getElementById(imgID);
    
    /*tạo cái soi div với clas img magnifier*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    /*đưa cái soi vào*/
    img.parentElement.insertBefore(glass, img);

    /*tạo 1 cái với kich cỡ * zoom*/
    glass.style.backgroundImage = "url('" + img.src + "')";

    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";

    // cai này thì chưa biết co tác dụng gì
    bw = 3;

    // đăt chuột vào tâm của zoom
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }

    // lay toa vị trí zoom
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      // lấy ví trí hiện tại hoặc di chuyển con trỏ
      e = e || window.event;

      // lấy tọa độ ảnh
      a = img.getBoundingClientRect();

      // tính toán tọa độ zoom
      x = e.pageX - a.left;
      y = e.pageY - a.top;

      // nếu cửa sổ bị dịch chuyển
      //pageXOffset tính độ rời so với vị trí ban đầu
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;

      return {x : x, y : y};
    }
  }