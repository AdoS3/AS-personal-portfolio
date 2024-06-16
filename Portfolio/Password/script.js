let input = document.querySelector(".input")
let icon = document.querySelector(".icon")

icon.addEventListener("click", event => {
    if(input.type === "password"){
        input.type = "text"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
    } else {
        input.type = "password"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
    }
})