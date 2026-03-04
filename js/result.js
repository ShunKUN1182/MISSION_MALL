const modal = document.querySelector(".modal");
const btns = document.querySelectorAll(".data_wrap");
const codeName = document.querySelector("#codeName");
const rankName = document.querySelector("#rankName");
const getPoint = document.querySelector("#getPoint");

codeName.textContent = localStorage.getItem("codeName");

btns.forEach((e) => {
    e.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

console.log(btns);
