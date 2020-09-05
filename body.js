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