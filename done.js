let i2=document.getElementById("bubble").children[0]; 
function setupBubbleHead(){
    i2.className="rightrotate";
}                      
function lac_lac(){                
    if (i2.className=="leftrotate"){
        i2.className="rightrotate"
    }
    else i2.className="leftrotate";
}
// push
function testPlush(a) {
    document.getElementById("daysang").style.width = a.offsetWidth * 30 / 100 + "px";
    document.getElementById("caigiday").style.width = "70%";
}