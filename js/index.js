const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach((e) => {
    e.addEventListener("click", (event) => {
        // console.log("foo");
        event.preventDefault();
    });
});
