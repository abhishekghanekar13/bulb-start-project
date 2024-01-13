document.getElementById("img").src="bulb off.jpeg";
document.getElementById("span").innerText="off"

function btnOn(){
    document.getElementById("img").src="bulb on.jpeg";
    document.getElementById("span").innerText="on";
    document.getElementById("on").style.backgroundColor="yellow";
    document.getElementById("on").style.color="red";
    document.getElementById("of").style.color="black";
    document.getElementById("of").style.backgroundColor="white"
}

function btnof(){
    document.getElementById("img").src="bulb off.jpeg";
    document.getElementById("span").innerText="off";
    document.getElementById("of").style.backgroundColor="yellow";
    document.getElementById("of").style.color="red";
    document.getElementById("on").style.color="black";
    document.getElementById("on").style.backgroundColor="white"

}