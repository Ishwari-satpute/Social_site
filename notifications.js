document.getElementById("markReadButton").addEventListener("click", function () {
    let notes = document.getElementsByClassName("note");
    for (let i = 0; i < notes.length; i++) {
        notes[i].className = "note";
    }
});

let requestButtons = document.getElementsByClassName("buttons");
for (let i = 0; i < requestButtons.length; i++) {
    let buttons = requestButtons[i].getElementsByTagName("button");
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].onclick = answerRequest;
    }
}

function answerRequest() {
    let request = this.parentElement.parentElement.parentElement;
    let message = request.getElementsByTagName("p")[0];

    if (this.textContent === "Accept") {
        message.textContent = "You accepted Neha Kulkarni's friend request.";
    } else {
        message.textContent = "You declined Neha Kulkarni's friend request.";
    }

    request.getElementsByClassName("buttons")[0].style.display = "none";
    request.className = "note";
}
