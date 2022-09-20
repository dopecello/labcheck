cardEl = document.querySelector(".info-tiles");

cardEl.addEventListener("click", (event) => {
 category = event.target.innerText;
 console.log(category)
})