const scoreDisplay = document.querySelector("#score");
const container = document.querySelector("#container");
const buttons = document.querySelectorAll(".button");
const resetBtn =  document.querySelector("#reset");
const time = document.querySelector("#timer")
let score = 0;
let seconds = 60;


const reset = ()=>{
    window.location.reload()
}
const timer = ()=>{
    if (seconds === 0){
        alert(`Your score is ${score} on 60 seconds`)
        reset();
    }else{
        seconds--
        setTimeout(timer, 1000);
    }
time.innerHTML = seconds;
}

const checkMe = (id) => {
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {        
            if (id === index){
                console.log("win");
                score++
                scoreDisplay.innerHTML = score;
            }
            id =  undefined;
        })
    })
}


const displayImg = () => {
    const img = document.createElement("img");
    img.setAttribute("src", "images/clickMe.jpg");
    img.classList.add("img")
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * buttons.length);
        let btn = buttons[randomNumber]
        btn.appendChild(img)
        checkMe(randomNumber)
        randomNumber = undefined;
    }, 800)
    timer()

}
displayImg()
resetBtn.addEventListener("click",reset);
