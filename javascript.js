const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
 

dark.addEventListener("click", ()=>{
    sidebar.style.backgroundColor= "#111827";
    sidebar.style.color= "#f3f4f6"; 
     
})

night.addEventListener("click", ()=>{
    sidebar.style.backgroundColor= "#312e81";
    sidebar.style.color= "#f3f4f6"; 
     
})

light.addEventListener("click", ()=>{
    sidebar.style.backgroundColor= "#f3f4f6";
    sidebar.style.color= "#111827";  
})

 