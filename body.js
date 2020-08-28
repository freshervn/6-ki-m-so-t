// 2 nut hien thi aside
function visible() {
  document.getElementById("done").style.width = "250px";
  document.getElementById("visiblebar").style.display = "none";
  document.getElementById("invisiblebar").style.display = "block";
}
function invisible() {
  document.getElementById("done").style.width = "0px";
  document.getElementById("visiblebar").style.display = "block";
  document.getElementById("invisiblebar").style.display = "none";
}
//phóng to cac article in to big windonw
function pickarticle(i) {

  // lay id cua cai an
  var ar=document.getElementById(i);
  
  //lay toa do cua cua so nay
  var mainArticle =document.getElementById("coding");

  //lay id cua cai ben trong coding
  var arm=mainArticle.children[0];
  
  //lay toa do cua article 
  var asideArticle =document.getElementById("done");

  //day cai artil vao demo
  asideArticle.insertAdjacentElement("beforeend",arm);

  mainArticle.insertAdjacentElement("beforeend",ar);

  ar.setAttribute("style","height:100%,width:100%");
}