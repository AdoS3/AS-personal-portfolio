let galleries = document.querySelectorAll(".gallery")
let nextBtns = document.querySelectorAll("#icon-right")
let backBtns = document.querySelectorAll("#icon-left")

galleries.forEach((gallery) => {
    gallery.addEventListener("wheel", event =>{
        event.preventDefault()
        gallery.scrollLeft += event.deltaY
        gallery.style.scrollBehavior = "auto"
    })
})


nextBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let gallery = galleries[index]
        gallery.style.scrollBehavior = "smooth"
        gallery.scrollLeft += 1080
    })
})

backBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let gallery = galleries[index]
        gallery.style.scrollBehavior = "smooth"
        gallery.scrollLeft -= 1080
    })
})