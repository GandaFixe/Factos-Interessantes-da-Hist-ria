let default_btn= document.querySelector(".default_btn")
let grey_btn=document.querySelector(".grey_btn")
let blue_btn=document.querySelector(".blue_btn")
let red_btn=document.querySelector(".red_btn")
let yellow_btn=document.querySelector(".yellow_btn")


default_btn.addEventListener( 'click', (e)=>{
  e.preventDefault();
  document.querySelector("body").style.background= "white";
})
grey_btn.addEventListener( 'click', (e)=>{
  e.preventDefault();
  document.querySelector("body").style.background= "grey";
})
blue_btn.addEventListener( 'click', (e)=>{
  e.preventDefault();
  document.querySelector("body").style.background= "blue";
})
red_btn.addEventListener( 'click', (e)=>{
  e.preventDefault();
  document.querySelector("body").style.background= "red";
})
yellow_btn.addEventListener( 'click', (e)=>{
  e.preventDefault();
  document.querySelector("body").style.background= "yellow";
})




let ul= document.querySelector(".items");

let submit = document.querySelector(".curiosidades button[type=submit]");

submit.addEventListener("click", submitFn);

function submitFn(e){
  e.preventDefault();
  
  let li= document.createElement("li");
  let curiosidade= document.querySelector(".curiosidades input[type=text]").value;
  let delBtn= document.createElement("button");

  delBtn.className="del_btn";
  delBtn.appendChild(document.createTextNode("Delete"));

  li.appendChild(document.createTextNode(curiosidade));
  li.appendChild(delBtn);
  ul.appendChild(li);

  

}

ul.addEventListener("click", deleteBtn);

function deleteBtn(e){
  console.log(e.target);
  if(e.target.classList.contains("del_btn")){
    let li=e.target.parentElement;
    ul.removeChild(li);
  }
}

let screen= document.querySelector(".customColor");

screen.addEventListener("mousemove", rgbSelector);

function rgbSelector(e){
  console.log("over");
  document.querySelector("body").style.background="rgb("+e.offsetX+", "+e.offsetY+", 20)";
}

let coords= document.querySelector(".coords");

let body= document.querySelector("body");

body.addEventListener("mousemove", coordinates)

function coordinates(e){
  //coords.appendChild(document.createTextNode("Mouse X: "+e.clientX+" Mouse Y: "+e.clientY));
  let mouseX= document.querySelector("#mouseX");
  let mouseY= document.querySelector("#mouseY");

  mouseX.innerHTML="MouseX: "+ e.clientX;
  mouseY.innerHTML="MouseY: "+ e.clientY;
}
