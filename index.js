// var Gallery = {
// 	height: document.body.clientHeight,
// 	width: document.body.clientWidth,
// 	content: document.getElementById("Gallery"),
// 	imgs: document.getElementsByClassName("img-cell"),
// 	placeCenter: function (i) {
// 			imgs[i].style.top = (height/2-150)+"px";
// 			imgs[i].style.left = (width/2-190)+"px";
// 			imgs[i].style.transform = "rotate(0deg)";
// 		}
// }

var height = document.body.clientHeight;
var width = document.body.clientWidth;

console.log(height);
var gallery = document.getElementById("gallery");

arrageImg();
placeCenter(2);

//setInterval(posUpdate, 1500);

function placeCenter(i) {
	var imgs = document.getElementsByClassName("img-cell");
	imgs[i].style.top = (height/2 - 150)+"px";
	imgs[i].style.left = (width/2 - 190)+"px";
	imgs[i].style.transform = "rotate(0deg)";
}
function arrageImg(){
	for(var i=0, len=imgData.length; i<len; i++){
		var imgcell = document.createElement("div");
		imgcell.setAttribute("class", "img-cell");
		var img = document.createElement("img");
		img.src="images/"+imgData[i].src+".jpg";
		var h3 = document.createElement("h3");
		h3.textContent = imgData[i].title;
		imgcell.appendChild(img);
		imgcell.appendChild(h3);
		imgcell.style.top = (Math.random()*height-130)+"px";
		imgcell.style.left = (Math.random()*width/2-380)+"px";
		imgcell.style.transform = "rotate("+(Math.random()>0.5?"":"-")+Math.random()*45+"deg)";
		gallery.appendChild(imgcell);
	}
}

function posUpdate(){
	var imgcell = document.getElementsByClassName("img-cell");
	for(var i=0, len = imgcell.length; i<len; i++){
		imgcell[i].style.top = (Math.random()*height-130)+"px";
		imgcell[i].style.left = (Math.random()*width-160)+"px";
		imgcell[i].style.transform = "rotate("+(Math.random()>0.5?"":"-")+Math.random()*45+"deg)";
	}
}