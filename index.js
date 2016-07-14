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

var gallery = document.getElementById("gallery");
var imgs = document.getElementsByClassName("cell");
var centerpic = Math.floor(Math.random()*imgData.length);
var isback = false;
arrageImg();

addEvent();


function placeCenter(i) {
	imgs[i].style.top = (height/2 - 150)+"px";
	imgs[i].style.left = (width/2 - 190)+"px";
	imgs[i].style.transform = "rotate(0deg)";
	imgs[i].style.zIndex = 100;
}
function placeRandom(i){

}
function arrageImg(){

	for(var i=0, len=imgData.length; i<len; i++){
		var imgcell = document.createElement("div");
		imgcell.setAttribute("class", "cell");
		var front = document.createElement("div");
		front.setAttribute("class", "side front");
		var back = document.createElement("div");
		back.setAttribute("class", "side back");
		var img = document.createElement("img");
		img.src="images/"+imgData[i].src+".jpg";
		var h3 = document.createElement("h3");
		h3.textContent = imgData[i].title;
		var h4 = document.createElement("h4");
		h4.textContent = imgData[i].desc;

		front.appendChild(img);
		front.appendChild(h3);
		back.appendChild(h4);
		imgcell.appendChild(front);
		imgcell.appendChild(back);

		
		imgcell.style.top = (Math.random()*height-130)+"px";
		imgcell.style.left = ((Math.random()>0.5?(width/2+380):0)+(Math.random()*(width/2-380)-190))+"px";
		imgcell.style.transform = "rotate("+(Math.random()>0.5?"":"-")+Math.random()*45+"deg)";
	
		
		gallery.appendChild(imgcell);
	}

	placeCenter(centerpic);
}

function posUpdate(){
	var imgcell = document.getElementsByClassName("cell");
	for(var i=0, len = imgcell.length; i<len; i++){
		if( i===centerpic){
			imgs[i].style.top = (height/2 - 150)+"px";
			imgs[i].style.left = (width/2 - 190)+"px";
			imgs[i].style.transform = "rotate(0deg)";
			imgs[i].style.zIndex = 100;
		}else{
			imgcell[i].style.top = (Math.random()*height-130)+"px";
			imgcell[i].style.left = ((Math.random()>0.5?(width/2+380):0)+(Math.random()*(width/2-380)-190))+"px";
			imgcell[i].style.transform = "rotate("+(Math.random()>0.5?"":"-")+Math.random()*45+"deg)";
		}
		
	}
}

function addEvent(){
	var imgcell = document.getElementsByClassName("cell");
	for(var i=0, len=imgcell.length; i<len; i++){
		imgcell[i].addEventListener("click", function(){
			for(var j=0; j<len; j++){
				if(imgcell[j] ===this){
					if( j===centerpic){
						if(isback){
							this.style.transform = "translate(0,0) rotate(0deg)";
						}else{
							this.style.transform = "translate(40%, 0) rotateY(180deg)";	
						}
						isback = !isback;
					}else{
						centerpic = j;
						posUpdate();
						this.style.transform = "translate(40%, 0) rotateY(180deg)";
						isback = true;
					}
				}
			}
				
		})
	}
}