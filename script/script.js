let author = document.querySelector("#reveal-author");
let btnCapt = document.getElementsByClassName('footer-box');

btnCapt.innerText = "Reveal Author";

function revealAuthor() {
    if (author.style.display === "none") {
        author.style.display = "flex";
        btnCapt.innerText = "Reveal Author";
    } else {
        author.style.display = "none";
        btnCapt.innerText = "Hidden Author";
    }
}