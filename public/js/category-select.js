
cardEl = document.querySelector(".info-tiles");

cardEl.addEventListener("click", (event) => {
 category = event.target.innerText;
 categoryNav = category.split(" ")[0];
 if(categoryNav.includes(".")){
    categoryNav = categoryNav.split(".")[0]
 }
 window.location.href = categoryNav;
})

