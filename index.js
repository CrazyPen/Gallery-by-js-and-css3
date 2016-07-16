var height = document.body.clientHeight;
var width = document.body.clientWidth;
var pic_width = 320;
var pic_height = 260;

var centerpic = Math.floor(Math.random()*imgData.length);
var isback = false;
arrageImg();

addEvent();


function placeCenter(i) {
	var imgs = document.getElementsByClassName("cell");
	imgs[i].style.top = (height/2 - 130)+"px";
	imgs[i].style.left = (width/2 - 160)+"px";
	imgs[i].style.transform = "rotate(0deg)";
	imgs[i].style.zIndex = 100;
	document.getElementsByTagName("li")[i].style.transform = "scale(1.5,1.5)";
	document.getElementsByTagName("li")[i].style.backgroundColor = "#626262";
}
function arrageImg(){
	var gallery = document.getElementById("gallery");
	var ul = document.getElementById("gallery").getElementsByTagName("ul")[0];
	for(var i=0, len=imgData.length; i<len; i++){
		var imgcell = document.createElement("div");
		imgcell.setAttribute("class", "cell");
		imgcell.title = i+1;
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

		var li = document.createElement("li");
		li.title = 1+i;

		front.appendChild(img);
		front.appendChild(h3);
		back.appendChild(h4);
		imgcell.appendChild(front);
		imgcell.appendChild(back);

		
		var postion = getRandomResult();
		imgcell.style.top = postion.top+"px";
		imgcell.style.left = postion.left+"px";
		imgcell.style.transform = "rotate("+(Math.random()>0.5?"":"-")+Math.random()*30+"deg)";
	
		
		gallery.appendChild(imgcell);
		ul.appendChild(li);
	}

	placeCenter(centerpic);
}

function posUpdate(){
	var imgcell = document.getElementsByClassName("cell");
	var navs = document.getElementById("gallery").getElementsByTagName("li");
	var pos = getRandomResult();
	for(var i=0, len = imgcell.length; i<len; i++){
		if( i===centerpic){
			placeCenter(i);
		}else{
			pos = getRandomResult();
			imgcell[i].style.top = pos.top+"px";
			imgcell[i].style.left = pos.left+"px";
			imgcell[i].style.transform = "rotate("+(Math.random()>0.5?"":"-")+Math.random()*30+"deg)";
			navs[i].style.transform = "scale(1,1)";
			navs[i].style.backgroundColor = "rgba(0,0,0,0)";
		}
		
	}
}

function getRandomResult(){
	var top = Math.random()*height-pic_height*0.5;
	var left = Math.random()*width-pic_width*0.5;

	var minLeft = width*0.5-pic_width*1.5,
		maxLeft = width*0.5+pic_width*0.5,
		minTop = height*0.5-pic_height*1.5,
		maxTop = height*0.5+pic_width*0.5;

	while( (top>=minTop && top<=maxTop) && (left>=minLeft && left<=maxLeft)){
		top = Math.random()*height-pic_height*0.5;
		left = Math.random()*width-pic_width*0.5;

	}

	return {top:top, left:left};
}
function addEvent(){
	var imgcell = document.getElementsByClassName("cell");
	var navs = document.getElementById("gallery").getElementsByTagName("li");
	for(var i=0, len=imgcell.length; i<len; i++){
		imgcell[i].addEventListener("click", fanzhuan);
		navs[i].addEventListener("click", function(){
			imgcell[this.title-1].click();
		})
	}

	
}

function fanzhuan(){
	var navs = document.getElementById("gallery").getElementsByTagName("li");
	if( this.title-1 === centerpic){
		if(isback){
			this.style.transform = "translate(0,0) rotate(0deg)";
			navs[centerpic].style.transform = "scale(1.5,1.5) rotateY(0deg)";
		}else{
			this.style.transform = "translate(40%, 0) rotateY(180deg)";	
			navs[centerpic].style.transform = "scale(1.5,1.5) rotateY(180deg)";
		}
		isback = !isback;
	}
	else{
		centerpic = this.title-1;
		posUpdate();
		this.style.transform = "translate(40%, 0) rotateY(180deg)";
		navs[centerpic].style.transform = "scale(1.5,1.5) rotateY(180deg)";
		isback = true;
	}
	
}