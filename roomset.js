const startBtn = document.querySelector(".start_trigger");
const overlay = document.querySelector(".overlay");

startBtn.addEventListener("click" ,(e)=>{
    e.preventDefault();

    overlay.classList.add("active");

    setInterval(()=>{
        window.location.href = "mission.html";
    } ,2000)
})