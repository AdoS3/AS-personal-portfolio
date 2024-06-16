let rangeHTML = document.querySelector("#range-html")
let rangeCSS = document.querySelector("#range-css")
let rangeJS = document.querySelector("#range-js")

let spanHTML = document.querySelector(".span-html")
let spanCSS = document.querySelector(".span-css")
let spanJS = document.querySelector(".span-js")


let intervalHTML = null
intervalHTML = setInterval(animateHTML, 80)

function animateHTML(){
    rangeHTML.value ++
    spanHTML.textContent = rangeHTML.value + "%"
    if(rangeHTML.value === "80"){
        clearInterval(intervalHTML)
    }
    rangeHTML.disabled = "true"
}

let intervalCSS = null
intervalCSS = setInterval(animateCSS, 100)

function animateCSS(){
    rangeCSS.value ++
    spanCSS.textContent = rangeCSS.value + "%"
    if(rangeCSS.value === "60"){
        clearInterval(intervalCSS)
    }
    rangeCSS.disabled = "true"
}

let intervalJS = null
intervalJS = setInterval(animateJS, 120)

function animateJS(){
    rangeJS.value ++
    spanJS.textContent = rangeJS.value + "%"
    if(rangeJS.value === "50"){
        clearInterval(intervalJS)
    }
    rangeJS.disabled = "true"
}



