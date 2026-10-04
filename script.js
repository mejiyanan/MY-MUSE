document.querySelectorAll(".heart").forEach(btn=>{
  btn.addEventListener("click",e=>{
    e.preventDefault();
    e.stopPropagation();
    btn.textContent=btn.textContent.trim()==="♡"?"♥":"♡";
  });
});
document.querySelectorAll(".tags button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".tags button").forEach(x=>x.classList.remove("selected"));
    btn.classList.add("selected");
  });
});
