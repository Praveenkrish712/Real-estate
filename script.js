const menulogo=document.querySelector(".menu-logo");
const Xmark=document.querySelector(".x-mark");
const mobile=document.querySelector(".header-mobile");


menulogo.addEventListener("click",()=>{
  mobile.style.display="block";
  menulogo.style.display="none"
})

Xmark.addEventListener("click",()=>{
  mobile.style.display="none";
  menulogo.style.display="block";
})

function closemenu() {
  mobile.style.display="none";
  menulogo.style.display="block";
}
