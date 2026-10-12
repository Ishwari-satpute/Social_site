let chats = [
    {
        name: "Rahul Sharma",
        group: false,
        messages: [
            { text: "Are you free this weekend?", sent: false },
            { text: "Yes, let's meet for chai.", sent: true },
            { text: "See you soon!", sent: false }
        ]
    },
    {
        name: "Priya Patil",
        group: false,
        messages: [
            { text: "Would you like to join our study group?", sent: false },
            { text: "That sounds great!", sent: true }
        ]
    },
    {
        name: "Mumbai Friends",
        group: true,
        messages: [
            { text: "Ananya: Let's meet at the park.", sent: false },
            { text: "Arjun: See you there!", sent: false }
        ]
    }
];

let currentChat = 0;

function showChat(number) {
    currentChat = number;
    document.getElementById("chatTitle").textContent = chats[number].name;

    if (chats[number].group) {
        document.getElementById("chatDescription").textContent = "Group conversation";
    } else {
        document.getElementById("chatDescription").textContent = "Chat with your friend";
    }

    let list = document.getElementById("messageList");
    list.textContent = "";

    for (let i = 0; i < chats[number].messages.length; i++) {
        let bubble = document.createElement("div");
        bubble.className = "message";
        bubble.textContent = chats[number].messages[i].text;

        if (chats[number].messages[i].sent) {
            bubble.className = "message sent";
        }

        list.appendChild(bubble);
    }

    let people = document.getElementsByClassName("person");
    for (let i = 0; i < people.length; i++) {
        people[i].className = "person";
    }
    people[number].className = "person active";
}

document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let input = document.getElementById("messageInput");
    let text = input.value.trim();

    if (text !== "") {
        chats[currentChat].messages.push({ text: "You: " + text, sent: true });
        input.value = "";
        showChat(currentChat);
    }
});

document.getElementById("newGroupButton").addEventListener("click", function () {
    let name = prompt("Enter a name for your group chat:");

    if (name && name.trim() !== "") {
        let newChat = {
            name: name.trim(),
            group: true,
            messages: []
        };
        chats.push(newChat);

        let button = document.createElement("button");
        button.className = "person";
        button.type = "button";
        button.textContent = name.trim() + " (Group)";
        button.onclick = function () {
            showChat(chats.length - 1);
        };
        document.getElementById("conversationList").appendChild(button);
        showChat(chats.length - 1);
    }
});

showChat(0);
