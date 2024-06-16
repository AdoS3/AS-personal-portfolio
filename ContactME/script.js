let myForm = document.getElementById("contact-form")
let sendingMessage = document.querySelector(".sending-message")



function sendEmail(event){
    event.preventDefault()
    
    // service ID - templateID - #form - publickey
    emailjs.sendForm(`service_75a5gmd`,`template_so7hw7s`,`#contact-form`,`XjSVGo8DrWEqT04Ei`)
    .then(() => {
        //show send message
        sendingMessage.textContent = "-Message succesfully send-"
        //remove message after 7 seconds
        setTimeout(() => {
            sendingMessage.textContent = ""
        }, 7000)
        myForm.reset()
    }, () => {
        //show error message
        sendingMessage.textContent = "Message not send(service error)"
    })
}


myForm.addEventListener("submit", sendEmail)
