
function showModal(imageId) {
let modalText = document.getElementById("modalText");
if (imageId === 'image1') {
    modalText.textContent = "Ce projet est effectué dans l'année de BTS portant sur la création d'un site de restauration.";
} else if (imageId === 'image2') {
    modalText.textContent = "Ce projet est un portfolio créé en HTML/CSS/JS ";
}
document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
document.getElementById("myModal").style.display = "none";
}

// Fermer la modale en cliquant en dehors
window.onclick = function(event) {
let modal = document.getElementById("myModal");
if (event.target == modal) {
    modal.style.display = "none";
}
}
