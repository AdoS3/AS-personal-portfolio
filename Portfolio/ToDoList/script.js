const inputText = document.querySelector("#input-text")
const btn = document.querySelector(".btn")
const toDoList = document.querySelector(".to-do-list")

btn.addEventListener("click", () => {
    if(inputText.value === ""){
        alert("You must write something")
    } else {
        let newLI = document.createElement("li")
        newLI.innerHTML = inputText.value
        toDoList.appendChild(newLI)
        let newSpan = document.createElement("span")
        newSpan.classList.add("delete")
        newLI.appendChild(newSpan)
    }
    inputText.value = ""
    saveList()
})

toDoList.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked")
        saveList()
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove()
        saveList()
    }
}, false)

function saveList() {
    localStorage.setItem("data", toDoList.innerHTML)
}

function getList() {
    toDoList.innerHTML = localStorage.getItem("data")
}

getList()