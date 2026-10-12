
function createPost() {
    let content = document.getElementById("postContent").value.trim();

    if (content === "") {
        alert("Please write something before posting!");
        return;
    }

    let post = document.createElement("article");
    post.className = "post";

    let heading = document.createElement("h3");
    heading.textContent = "You";

    let paragraph = document.createElement("p");
    paragraph.textContent = content;

    let buttons = document.createElement("div");
    buttons.className = "buttons";

    let likeButton = document.createElement("button");
    likeButton.type = "button";
    likeButton.textContent = "👍 Like";
    likeButton.onclick = function () {
        likePost(likeButton);
    };

    let commentButton = document.createElement("button");
    commentButton.type = "button";
    commentButton.textContent = "💬 Comment";
    commentButton.onclick = commentPost;

    let shareButton = document.createElement("button");
    shareButton.type = "button";
    shareButton.textContent = "🔗 Share";
    shareButton.onclick = sharePost;

    buttons.appendChild(likeButton);
    buttons.appendChild(commentButton);
    buttons.appendChild(shareButton);

    post.appendChild(heading);
    post.appendChild(paragraph);
    post.appendChild(buttons);

    document.querySelector(".feed").prepend(post);

    document.getElementById("postContent").value = "";
}

function likePost(button) {
    if (button.textContent === "👍 Like") {
        button.textContent = "❤️ Liked";
    } else {
        button.textContent = "👍 Like";
    }
}

function commentPost() {
    let comment = prompt("Enter your comment:");

    if (comment && comment.trim() !== "") {
        alert("Comment added: " + comment);
    }
}

function sharePost() {
    alert("Post shared successfully!");
}
