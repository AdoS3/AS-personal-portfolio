let display = document.querySelector(".display")
let roundContent = document.querySelector(".round-content")

let timer = null
let seconds = 0
let minutes = 0
let hours = 0
let index = 0

function stopTime(){
    seconds++
    if(seconds === 60){
        seconds = 0
        minutes++
        if(minutes === 60){
            minutes = 0
            hours++
        }
    }
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds

    display.innerHTML = h +":"+ m +":"+ s
}

function playTimer() {
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopTime, 1000)
    
}

function timerStop() {
    clearInterval(timer)
}

function timerAgain() {
    clearInterval(timer)
    seconds = 0
    minutes = 0
    hours = 0
    display.innerHTML = "00:00:00"
    roundContent.innerHTML = ""
    index = 0
}

function round() {
    index ++
    let paragraph = document.createElement("p")
    paragraph.classList.add("round")
    paragraph.innerHTML = `${index}. round: ${display.innerHTML}`
    roundContent.appendChild(paragraph)
}