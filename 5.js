const clickEl= document.getElementById("nb");
const btnEl = document.getElementById("btn");
const resetEl = document.getElementById("reset");
let a=0;
clickEl.innerText = a;
btnEl.addEventListener("click", ()=>{
  a++;
  clickEl.innerText = a;
}
)
resetEl.addEventListener("click", ()=>{
  a=0;
  clickEl.innerText = 0;
}
)