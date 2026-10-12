const editButton = document.getElementById("editButton");
const editForm = document.getElementById("editForm");

editButton.addEventListener("click", function () {
    if (editForm.hidden) {
        document.getElementById("nameInput").value = document.getElementById("username").textContent;
        document.getElementById("bioInput").value = document.getElementById("bio").textContent;
        document.getElementById("profilePhotoInput").value = document.getElementById("profilePhoto").src;
        document.getElementById("coverPhotoInput").value = document.getElementById("coverPhoto").src;
        document.getElementById("privacyInput").value = document.getElementById("privacyStatus").textContent;
    }

    editForm.hidden = !editForm.hidden;
});

editForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const bio = document.getElementById("bioInput").value.trim();
    const profilePhoto = document.getElementById("profilePhotoInput").value.trim();
    const coverPhoto = document.getElementById("coverPhotoInput").value.trim();
    const privacy = document.getElementById("privacyInput").value;

    if (name !== "") {
        document.getElementById("username").textContent = name;
        document.getElementById("profilePhoto").alt = name + "'s profile";
    }

    document.getElementById("bio").textContent = bio;
    document.getElementById("privacyStatus").textContent = privacy;

    if (profilePhoto !== "") {
        document.getElementById("profilePhoto").src = profilePhoto;
    }

    if (coverPhoto !== "") {
        document.getElementById("coverPhoto").src = coverPhoto;
    }

    editForm.hidden = true;
});
