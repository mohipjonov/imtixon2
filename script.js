const box = document.querySelector(".box");
const i = document.querySelector(".box i");

box.onmousemove = (e) => {
    console.log(e);
    i.style =`top:${e.offsetY}px; left:${e.offsetX}px;`
}
 
const search = document.querySelector("#search");
const box2 = document.querySelector(".box2")
search.onclick = ()=> {
    box2.classList.toggle("input")
}