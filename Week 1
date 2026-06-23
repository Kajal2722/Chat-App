let inputmsg = document.querySelector(".msgarea input")
console.log(inputmsg);
inputmsg.addEventListener("keydown", function(event){
    console.log(event.key);
});

const sendBtn = document.querySelector(".msgarea button")
console.log(sendBtn);

sendBtn.onclick = function(){
    let newElement = document.createElement("div");
    console.log(inputmsg.value)
    newElement.innerText= inputmsg.value;
    newElement.classList.add("sent");
    let time = new Date().toLocaleTimeString();
    newElement.innerText = inputmsg.value + "\n " + time;
    document.getElementById("messages").appendChild(newElement);
    messages.scrollTop = messages.scrollHeight;
    inputmsg.value =  ""
    
}
