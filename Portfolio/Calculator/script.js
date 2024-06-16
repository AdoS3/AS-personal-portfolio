let screen = document.querySelector(".screen")
let toDisplayBtn = document.querySelectorAll(".toDisplay")
let toDisplayTimesBtn = document.querySelector(".toDisplayTimes")
let calculateBtn = document.querySelector(".calculate")
let removeBtn = document.querySelector(".remove")

function appendToDisplay(){
    toDisplayBtn.forEach(button => {
        button.addEventListener("click", event => {
            screen.value += event.target.textContent
        })
    })
}
appendToDisplay()

function appendToDisplayTimes(){
    toDisplayTimesBtn.addEventListener("click", event =>{
        screen.value += "*"
    })
}

appendToDisplayTimes()

function calculate(){
    calculateBtn.addEventListener("click",() =>{
        try{
            screen.value = Number(eval(screen.value).toFixed(2))
        }
        catch(error){
            alert("Try again")
            screen.value = ""
        }
    })
}

calculate()

function remove(){
    removeBtn.addEventListener("click",() =>{
        screen.value = ""
    })
}
remove()