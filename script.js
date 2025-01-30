document.getElementById("siBtn").addEventListener("click", function() {
    window.location.href = "te-amo.html";
});

document.getElementById("noBtn").addEventListener("click", function() {
    const noBtn = document.getElementById("noBtn");
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});