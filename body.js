// 2 nut hien thi aside
function visible() {
  document.getElementById("sourceCode").style.width = "400px";
  document.getElementById("sourceCode").style.height = "400px";
  document.getElementById("coding").style.width = "400px";
  document.getElementById("coding").style.height = "400px";

  document.getElementById("done").style.width = "250px";
  document.getElementById("ViewCode").style.width = document.getElementById("ViewCode").offsetWidth -250+"px";
  document.getElementById("visiblebar").style.display = "none";
  document.getElementById("invisiblebar").style.display = "block";
}
function invisible() {
  document.getElementById("sourceCode").style.width = "";
  document.getElementById("coding").style.width = "";
  document.getElementById("sourceCode").style.height = "";
  document.getElementById("coding").style.height = "";

  document.getElementById("done").style.width = "0px";  
  document.getElementById("ViewCode").style.width = " 100% ";
  document.getElementById("visiblebar").style.display = "block";
  document.getElementById("invisiblebar").style.display = "none";
}

//phóng to cac article in to big windonw
listArtitcle = document.getElementsByTagName("article");
for (let i = 0; i < listArtitcle.length; i++) {
  listArtitcle[i].addEventListener("dblclick", function () { pickarticle(this.id) });
}

function pickarticle(i) {

  // lay id cua cai an
  var ar = document.getElementById(i);

  //lay toa do cua cua so trinh chieu
  var mainArticle = document.getElementById("coding");

  //lay id cua cai ben trong coding

  //kiem tra xem coding co trong ko
  if (mainArticle.children.length == 0) {
    mainArticle.insertAdjacentElement("beforeend", ar);
    ar.setAttribute("style", "height:100%,width:100%");
  }
  else{
    var arm = mainArticle.children[0];
    //lay toa do cua article 
    var asideArticle = document.getElementById("done");  
    //day cai artil dang co vao demo
    asideArticle.insertAdjacentElement("beforeend", arm);  
    // lay cai aticle tu demo ra
    mainArticle.insertAdjacentElement("beforeend", ar);  
    ar.setAttribute("style", "height:100%,width:100%");
  }
}

// intro
let intro=document.getElementById("dithamquan");
        intro.addEventListener("click",function(){helloPeople()});
function helloPeople() {
  //xoa het cac thu co tren man hinh
  for (let i = 0; i < document.getElementsByTagName("body")[0].children.length; i++) {
      document.getElementsByTagName("body")[0].children[i].style.display = "none";
  }

  // tao div full man hinh
  let hello = document.createElement("div");
  document.body.appendChild(hello);
  hello.setAttribute("style", "position:fixed; background:black;width:100%;height:100%;top:0;left:0; opacity: .8;display:flex; justify-content: space-around;");
  hello.setAttribute("id", "openWeb");

  // tao them cai title hoi
 
  let Stitch = document.createElement("img");
  let StitchHI = document.createElement("p");
  document.getElementById("openWeb").appendChild(Stitch);
  document.getElementById("openWeb").appendChild(StitchHI);
  StitchHI.innerHTML = "Để có trải nhiệm phù hợp vui lòng chọn 'Nhà tuyển dụng' hoặc ' Khách thăm quan' để stitich dẫn đi tham quan nhé";
  StitchHI.setAttribute("Style", "position:absolute; background-color:blue;color:white;width:50%;height:50%;top:20%;opacity:1.0;font-size:150%;text-align:center;padding:5%; box-sizing: border-box;border-radius:20px;border:4px solid white;font-weight:bold;");
  Stitch.setAttribute("style", "width:15%;height:15%;position:absolute;bottom:30%;z-index:1");
  Stitch.src = "img//stitch.png";

  // nut oke :))
  let buttonStitchNext = document.createElement("button");
  buttonStitchNext.innerHTML = "Oke";
  document.getElementById("openWeb").appendChild(buttonStitchNext);
  buttonStitchNext.setAttribute("Style", "position:absolute;bottom:15%;width:6%;height:6%;font-weight:bold; animation-name: NhapNhay;  animation-duration: 0.6s;animation-iteration-count: infinite;");
  buttonStitchNext.setAttribute("id", "buttonStitchNext");
  buttonStitchNext.addEventListener("mouseover", function () { document.getElementById("buttonStitchNext").style.background = "blue"; });
  buttonStitchNext.addEventListener("mouseout", function () { document.getElementById("buttonStitchNext").style.background = ""; });
  buttonStitchNext.addEventListener("click", function () { Stitch.remove(); StitchHI.remove(); buttonStitchNext.remove();Visitschoice(); })

  function Visitschoice() {

      //tao 2 cai khung
      divstudent = document.createElement("div");
      document.getElementById("openWeb").appendChild(divstudent);
      divstudent.setAttribute("id", "divstudent");
      divstudent.setAttribute("Style", "  opacity: .5;background-color: white;position: relative;width:400px;height:600px;align-self:center;display:flex;");
      divstudent.addEventListener("mouseover",function(){divstudent.setAttribute("Style", "  opacity: .5;background-color: white;position: relative;width:400px;height:600px;align-self:center;display:flex; opacity: 1.0;transform: scale(1.1,1.1);transition-duration:1s");});
      divstudent.addEventListener("mouseout",function(){divstudent.setAttribute("Style"," opacity: .5;background-color: white;position: relative;width:400px;height:600px;align-self:center;display:flex; transition-duration:1s")});
      divstudent.addEventListener("click",chuahoanthanh);

      divboss = document.createElement("div");
      document.getElementById("openWeb").appendChild(divboss);
      divboss.setAttribute("id", "divboss");
      divboss.setAttribute("Style", " opacity: .5;background-color: white;position: relative;width:400px;height:600px;align-self:center;display:flex;animation-duration: 0.6s;animation-iteration-count: infinite; ");                
      divboss.addEventListener("mouseover",function(){divboss.setAttribute("Style", "  opacity: .5;background-color: white;position: relative;width:400px;height:600px;align-self:center;display:flex; opacity: 1.0;transform: scale(1.1,1.1);transition-duration:1s");});
      divboss.addEventListener("mouseout",function(){divboss.setAttribute("Style"," opacity: .5;background-color: white;position: relative;width:400px;height:600px;align-self:center;display:flex; transition-duration:1s")});
      divboss.addEventListener("click",chuahoanthanh);
      
      // tạo 2 cái ảnh
      studentStitch = document.createElement("img");
      document.getElementById("divstudent").appendChild(studentStitch);
      studentStitch.src = "img\\stitchTuyenDung.png";
      studentStitch.setAttribute("id", "studentStitch");
      studentStitch.setAttribute("style","width: 100%;align-self: center;") ;

      bossStitch = document.createElement("img");
      document.getElementById("divboss").appendChild(bossStitch);
      bossStitch.src = "img\\StitchBos.png";
      bossStitch.setAttribute("id", "bossStitch");
      bossStitch.setAttribute("style","width: 100%;align-self: center;") ;

      //tao thêm cái title
      let h1TitleStitch=document.createElement("h1");
      document.getElementById("divstudent").appendChild(h1TitleStitch);
      h1TitleStitch.innerHTML="Khách tham Quan";
      h1TitleStitch.setAttribute("style","position:absolute; top: 0px; background-color:green; padding:10px b;border-radius:5px")

      let h2TitleStitch=document.createElement("h1");
      document.getElementById("divboss").appendChild(h2TitleStitch);
      h2TitleStitch.innerHTML="Nhà tuyển dụng";
      h2TitleStitch.setAttribute("style","position:absolute; top: 0px; background-color:green;padding:10px;border-radius:5px")
  }           
}
// chuc nang chua hoan thanh
function chuahoanthanh() {
  let notDoneYet = document.createElement("div");
  for (let i = 0; i < document.getElementsByTagName("body")[0].children.length; i++) {
      document.getElementsByTagName("body")[0].children[i].style.display = "none";
  }
  document.body.appendChild(notDoneYet);
  notDoneYet.setAttribute("style","position: fixed;top:0;left:0; width:100%;height:100%; text-align:center;");                
  notDoneYet.id="notDoneYet";

  let imgNotDoneyet=document.createElement("img");
  imgNotDoneyet.src="img\\404.png";
  document.getElementById("notDoneYet").appendChild(imgNotDoneyet);
  imgNotDoneyet.setAttribute("style","width:50%; position:absolute;left:25%;");
  
  let fuckgoback=document.createElement("button");                
  document.getElementById("notDoneYet").appendChild(fuckgoback);
  fuckgoback.innerHTML= "Mời bạn quay lại";
  fuckgoback.setAttribute("class","buttonGreen");
  fuckgoback.setAttribute("style","position:absolute; left:45%;top:55%; width:10%;")     

  fuckgoback.addEventListener("click",function(){
      notDoneYet.remove();
      for (let i = 0; i < document.getElementsByTagName("body")[0].children.length; i++) {
      document.getElementsByTagName("body")[0].children[i].style.display = "";
      }
  });
}
