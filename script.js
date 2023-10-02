let MenuIcon=document.querySelector(".menu-icon")
let SideBar=document.querySelector(".sidebar")
let Container=document.querySelector(".container")

MenuIcon.addEventListener("click",function(){
 SideBar.classList.toggle("small-sidebar");
 Container.classList.toggle("large-container")
});
   

